import { useEffect, useState } from 'react';
import type { Character, Characters } from '../../types/character';

interface BattleInstanceProps {
  characters: Characters;
}

const rollD10 = (): number => Math.floor(Math.random() * 10);
const rollD100 = (): number => rollD10() * 10 + rollD10();

const calculateInitiative = (character: Character): number => {
  return character.stats.agility + rollD100();
};

const parseDamage = (damage: string): number => {
  const match = damage.match(/(\d+)d(\d+)([+-]?\d+)?/);
  if (!match) return 0;

  const [_, rolls, die, modifier] = match.map(Number);
  let total = 0;

  for (let i = 0; i < rolls; i++) {
    total += Math.floor(Math.random() * die) + 1;
  }

  return total + (modifier || 0);
};

const BattleInstance: React.FC<BattleInstanceProps> = ({ characters }) => {
  const [scenario, setScenario] = useState<string>('');
  const [initiativeOrder, setInitiativeOrder] = useState<Character[]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [round, setRound] = useState<number>(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const SCENARIOS = [
    '/../forest.jpg',
    '/../desert.jpg',
    '/../castle.jpg',
    '/../dungeon.jpg',
  ];
  
  useEffect(() => {
    const randomScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
    setScenario(randomScenario);
  }, []);

  useEffect(() => {
    rollInitiative();
  }, []);

  const rollInitiative = () => {
    const sortedCharacters = [...characters].sort(
      (a, b) => calculateInitiative(b) - calculateInitiative(a)
    );
    setInitiativeOrder(sortedCharacters);
    setCurrentTurn(0);
    setRound((prev) => prev + 1);
    setBattleLog((prev) => [...prev, `🎲 Nova rodada iniciada!`]);
  };

  const calculateHitPoints = (character: Character): number => {
    return character.stats.constitution * 2;  // HP é baseado na constituição
  };

  const rollAttack = (attacker: Character, target: Character, weapon: string): string => {
    const selectedWeapon = attacker.equipment.weapons.find((w) => w.name === weapon);
    if (!selectedWeapon) return `${attacker.name} tentou atacar, mas não encontrou sua arma!`;

    const attackRoll = rollD100();
    const weaponPower = parseDamage(selectedWeapon.damage);
    const attackPower = attackRoll + attacker.stats.strength + weaponPower;
    const defensePower = target.equipment.armor.defense;

    const finalAttackValue = attackPower - defensePower;

    if (finalAttackValue > 100) {
      const damage = finalAttackValue - 100;
      target.stats.constitution -= damage;

      if (target.stats.constitution <= 0) {
        setBattleLog((prev) => [...prev, `${target.name} foi derrotado!`]);
        // Remover personagem da ordem de iniciativa ao morrer
        setInitiativeOrder((prev) => prev.filter((char) => char.character_id !== target.character_id));
        return `${attacker.name} atacou ${target.name} com ${weapon}, causando ${damage} de dano! ${target.name} morreu!`;
      }

      return `${attacker.name} atacou ${target.name} com ${weapon}, causando ${damage} de dano! Constituição restante de ${target.name}: ${target.stats.constitution}`;
    } else {
      return `${attacker.name} tentou atacar ${target.name} com ${weapon}, mas o ataque foi bloqueado ou não foi forte o suficiente!`;
    }
  };

  const handleAction = (attacker: Character, weapon: string, target: Character) => {
    const log = rollAttack(attacker, target, weapon);
    setBattleLog((prev) => [...prev, log]);

    nextTurn();
  };

  const nextTurn = () => {
    // Ignorar turnos de personagens mortos
    let nextTurn = currentTurn + 1;
    while (nextTurn < initiativeOrder.length && initiativeOrder[nextTurn].stats.constitution <= 0) {
      nextTurn++;
    }

    if (nextTurn >= initiativeOrder.length) {
      rollInitiative(); // Se todos os personagens estiverem mortos, reinicia a batalha
    } else {
      setCurrentTurn(nextTurn);
    }
  };

  const currentCharacter = initiativeOrder[currentTurn];

  return (
    <div className="relative top-4 flex h-screen w-screen bg-current" style={{ backgroundImage: `url(${scenario})` }}>
      {/* Layout de combate */}
      <div className="absolute top-4 left-4 max-w-[20vw] rounded-lg bg-gray-900 p-4 shadow-lg h-[90vh] overflow-y-auto">
        <div className="text-white">
          <div className="mb-6 pb-6 border-b border-gray-600">
            <h1 className="text-xl font-bold">Rodada {round}</h1>
            <h2 className="text-lg font-semibold">Turno de {currentCharacter?.name}</h2>

            <div className="mt-4 grid grid-cols-1 gap-4">
              {initiativeOrder.map((char) => (
                <div
                  key={char.character_id}
                  className={`flex items-center space-x-2 rounded-lg p-3 shadow-md w-full ${currentCharacter?.character_id === char.character_id ? 'bg-gray-700' : 'bg-gray-600'} ${char.stats.constitution <= 0 ? 'opacity-50' : ''}`}
                >
                  <img src={char.image_url} alt={char.name} className="h-10 w-10 rounded-full border-4 border-white" />
                  <div>
                    <p className="font-bold text-sm">{char.name}</p>
                    <p className="text-xs">HP: {calculateHitPoints(char)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Log da Batalha</h3>
            <ul className="mt-2 max-h-70 space-y-2 overflow-y-auto text-sm flex flex-col-reverse">
              {battleLog.map((log, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded-lg shadow-md">
                  {log}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Área de Combate Principal */}
      <div className="absolute right-4 top-4 max-w-[75vw] rounded-lg bg-gray-900 p-4 shadow-lg h-[90vh] overflow-hidden">
        <div className="text-white h-full flex flex-col">
          <h1 className="text-xl font-bold mb-4">Campo de Batalha</h1>

          {/* Personagem Atual */}
          {currentCharacter && (
            <div className="text-center flex flex-col items-center">
              <img src={currentCharacter.image_url} alt={currentCharacter.name} className="h-24 w-24 rounded-full mb-4 border-4 border-white" />
              <h2 className="text-lg font-bold">{currentCharacter.name}</h2>
              <p className="text-sm mb-4">HP: {calculateHitPoints(currentCharacter)}</p>

              {/* Ações do Personagem Atual */}
              <div className="mt-6">
                <h3 className="text-md font-semibold mb-2">Escolha sua ação:</h3>
                {currentCharacter.equipment.weapons.map((weapon) => (
                  <div key={weapon.name} className="mb-4">
                    <h4 className="text-sm font-semibold">{weapon.name}</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {initiativeOrder
                        .filter((target) => target.character_id !== currentCharacter.character_id && target.stats.constitution > 0)
                        .map((target) => (
                          <button
                            key={target.character_id}
                            onClick={() => handleAction(currentCharacter, weapon.name, target)}
                            className="rounded bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600"
                          >
                            Atacar {target.name}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botão de Avançar Turno */}
          <div className="mt-6">
            <button onClick={nextTurn} className="w-full rounded bg-red-500 py-2 text-sm font-semibold hover:bg-red-600">
              Passar Turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleInstance;
