'use client'
import React from 'react';
import Header from '../components/Header';
import { searchCharacters } from '../service/CharacterService';
import { CharacterCard } from '../components/CharacterCard';

interface ISearchParams {
  name?: string;
  profession?: string;
  options?: {
    _limit?: number;
  }
}

interface ISearchProps {
  readonly searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams }: Readonly<ISearchProps>) {
  const { name, profession } = searchParams;

  const characters = await searchCharacters(name, profession);

  if (characters.length === 0) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            No characters found.
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </main>
    </div>
  );
}