import '@vidstack/react/player/styles/base.css';
import type { Character } from '../types/character';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type Props = {
  character: Character;
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4 text-left">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="text-sm text-gray-600">{children}</div>
  </div>
);

const Stat: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

const Skill: React.FC<{ label: string; skills: { [key: string]: number } }> = ({ label, skills }) => (
  <p>
    <strong>{label}:</strong> {Object.entries(skills).map(([key, value]) => `${key}: ${value}`).join(', ')}
  </p>
);

const LanguageSkill: React.FC<{ label: string; skills: { [key: string]: string } }> = ({ label, skills }) => (
  <p>
    <strong>{label}:</strong> {Object.entries(skills).map(([key, value]) => `${key}: ${value}`).join(', ')}
  </p>
);

const Equipment: React.FC<{ label: string; items: string[] }> = ({ label, items }) => (
  <p>
    <strong>{label}:</strong> {items.join(', ')}
  </p>
);

const renderStats = (stats: Character['stats']) => {
  return Object.entries(stats).map(([key, value]) => (
    <Stat key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={value} />
  ));
};

const renderSkills = (skills: Character['skills']) => {
  return (
    <>
      {Object.entries(skills).map(([key, value]) => {
        if (typeof value === 'object' && Object.values(value).every(val => typeof val === 'number')) {
          return <Skill key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} skills={value as { [key: string]: number }} />;
        } else if (typeof value === 'object' && Object.values(value).every(val => typeof val === 'string')) {
          return <LanguageSkill key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} skills={value as { [key: string]: string }} />;
        }
        return null;
      })}
    </>
  );
};

const renderEquipment = (equipment: Character['equipment']) => {
  const { weapons, armor, items } = equipment;
  return (
    <>
      {weapons.length > 0 && (
        <p>
          <strong>Weapons:</strong> {weapons.map(weapon => `${weapon.name} (${weapon.type}): ${weapon.damage}`).join(', ')}
        </p>
      )}
      {armor && (
        <p>
          <strong>Armor:</strong> {armor.type} (Defense: {armor.defense})
        </p>
      )}
      {items.length > 0 && <Equipment label="Items" items={items} />}
    </>
  );
};

const renderBackground = (background: Character['background']) => {
  const { title, allies, enemies } = background;
  return (
    <>
      {title && <p><strong>Title:</strong> {title}</p>}
      {allies.length > 0 && <p><strong>Allies:</strong> {allies.join(', ')}</p>}
      {enemies.length > 0 && <p><strong>Enemies:</strong> {enemies.join(', ')}</p>}
    </>
  );
};

const CharacterSheetDetails: React.FC<Props> = ({ character }) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-lg mt-32">
      <div className="flex items-center mb-4">
        <Link href="/">
          <ArrowLeftIcon className="media-playing:opacity-0 invisible absolute left-8 top-8 z-50 h-8 cursor-pointer text-white md:visible" />
        </Link>
        <div className="w-1/12">
          <Image src={character.image_url} alt={character.name} width={100} height={100} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-11/12 pl-4 text-left">
          <h1 className="text-xl font-bold mb-2">{character.name}</h1>
          {character.race && <p className="text-sm"><strong>Race:</strong> {character.race}</p>}
          {character.profession && <p className="text-sm"><strong>Profession:</strong> {character.profession}</p>}
          {character.level && <p className="text-sm"><strong>Level:</strong> {character.level}</p>}
        </div>
      </div>
      <Section title="Stats">
        {renderStats(character.stats)}
      </Section>
      <Section title="Skills">
        {renderSkills(character.skills)}
      </Section>
      <Section title="Equipment">
        {renderEquipment(character.equipment)}
      </Section>
      <Section title="Background">
        {renderBackground(character.background)}
      </Section>
    </div>
  );
};

export default CharacterSheetDetails;