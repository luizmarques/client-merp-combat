'use client'
import React, { Suspense } from 'react';
import Header from '../components/Header';
import { searchCharacters } from '../service/CharacterService';
import { CharacterCard } from '../components/CharacterCard';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SearchResults({ searchParams } : any) {
  const {name, profession } = searchParams;

  const characters = await searchCharacters(name, profession);

  if (characters.length === 0) {
    return (
      <Suspense>
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Header />
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
            <h1 className='mb-4 text-2xl font-bold'>
              Search results for: <span className='text-red-500'>{name}</span>
            </h1>
            <p className='text-xl'>No characters found</p>
          </main>
        </div>
      </div>
      </Suspense>
    );
  }

  return (
    <Suspense>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for: <span className='text-red-500'>{name}</span>
          </h1>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8'>
            {characters.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))}
          </div>
        </main>
      </div>
      </Suspense>
  );
}
