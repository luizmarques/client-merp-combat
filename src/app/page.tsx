import { Banner } from './components/Banner';
import { CharacterRow } from './components/CharacterRow';
import Header from './components/Header';
import { getCharactersByProfession, getFeaturedCharacter } from './service/CharacterService';

export default async function Home() {
  const featuredCharacter = await getFeaturedCharacter('550e8400-e29b-41d4-a716-446655440000');
  const professions = ['Warrior', 'Sorceress', 'Ranger', 'Archer'];

  const characters = await Promise.all(
    professions.map(async (profession) => {
      const characters = await getCharactersByProfession(profession, { _limit: 8 });
      return { sectionTitle: profession, characters };
    })
  );
  return(
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner character={featuredCharacter} />
        {characters.map((character) => (
          <CharacterRow
            key={character.sectionTitle}
            characters={character.characters}
            sectionTitle={character.sectionTitle}
          />
        ))}
        </main>
      </div>
  );
}