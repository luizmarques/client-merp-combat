'use client'
import React from 'react';
import Header from '../components/Header';
import { searchCharacters } from '../service/CharacterService';
import { CharacterCard } from '../components/CharacterCard';

interface ISearchParams {
  name?: string;
  _class?: string;
}

interface ISearchProps {
  readonly searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams }: ISearchProps) {
  const { name , _class } = searchParams;
  const characters = await searchCharacters(name, _class);
  if (characters.length === 0) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <h1 className='mb-4 text-2xl font-bold'>
              Search results for: <span className='text-red-500'>{name ?? _class}</span>
            </h1>
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            No characters found.
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for: <span className='text-red-500'>{name ?? _class}</span>
          </h1>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8'>
            {characters.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}