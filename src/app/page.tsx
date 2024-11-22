import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { CharacterRow } from './components/CharacterRow';
import Header from './components/Header';
import {
  getCharactersByClass,
} from './service/CharacterService';

export default async function Home() {
  const classes = ['Warrior', 'Sorceress', 'Ranger'];
  const characters = await Promise.all(
    classes.map(async (_class) => {
      const response = await getCharactersByClass(_class, { _limit: 10 });
      return { sectionTitle: _class, characters: response.items };
    })
  );

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16'>
          <div className='py-8'>
            <h1 className='text-shadow-lg mb-4 text-4xl font-bold text-gray-200 lg:text-7xl'>
              Battle Merp
            </h1>
            {characters.map((character) => (
              <CharacterRow
                characters={character.characters}
                key={character.sectionTitle}
                sectionTitle={character.sectionTitle}
              />
            ))}
            <Banner />
          </div>
        </main>
      </Suspense>
    </div>
  );
}
