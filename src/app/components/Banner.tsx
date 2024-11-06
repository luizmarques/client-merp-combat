import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/outline';
 
import React from 'react';
import Link from 'next/link';
import type { Character } from '../types/character';

export function Banner({ character }: { character: Character }) {
  return (
    <div className='mb-10 lg:mb-20'>
      <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          {/* <Image
            src={character.image_url}
            alt={character.name}
            fill={true}
            className='object-cover object-top opacity-30 filter lg:hidden'
          /> */}
        </div>
        <h1 className='text-4xl font-bold lg:text-7xl'>{character.name}</h1>
        <p className='text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl'>
          {character.name}
        </p>
      </div>
      <div className='flex space-x-3'>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
          <InformationCircleIcon className='h-6' />
          More Info
        </button>
      </div>
      <div className='flex space-x-3'>
        <Link
          href={`/watch/${character.character_id}`}
          className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'
        >
          <PlayIcon className='h-6' />
          Watch Now
        </Link>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
          <InformationCircleIcon className='h-6' />
          More Info
        </button>
      </div>
    </div>
  );
}