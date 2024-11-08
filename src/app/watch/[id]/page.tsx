import Header from '@/app/components/Header';
import Player from '@/app/components/CharacterSheetDetails';
import React from 'react';
import { getCharacterById } from '../../service/CharacterService';

type IShowCharacterProps = {
  params: {
    id: string;
  };
}

export default async function ShowCharacter({ params }: IShowCharacterProps) {
  const character = await getCharacterById(params.id);
  if (!character) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this character is not available.
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className='flex h-screen justify-center align-middle'>
      <Header />
      <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
        <Player character={character} />
      </main>
    </div>
  );
}
