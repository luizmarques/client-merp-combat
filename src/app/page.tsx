import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { CharacterRow } from './components/CharacterRow';
import Header from './components/Header';
import { getCharactersByClass, getFeaturedCharacter } from './service/CharacterService';

export default async function Home() {
  const featuredCharacter = await getFeaturedCharacter('550e8400-e29b-41d4-a716-446655440000');
  const classes = ['Warrior', 'Sorceress', 'Ranger', 'Archer'];

  const characters = await Promise.all(
    classes.map(async (_class) => {
      const characters = await getCharactersByClass(_class, { _limit: 10 });
      return { sectionTitle: _class, characters };
    }));
    
  return(
      <div className='relative bg-gradient-to-b pb-8'>
        <Suspense>
          <Header />
          <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
          <Banner character={featuredCharacter} />
          {characters.map((character) => (
            <CharacterRow
              characters={character.characters}
              key={character.sectionTitle}
              sectionTitle={character.sectionTitle}
            />
          ))}
          </main>
        </Suspense>
      </div>
  );
}