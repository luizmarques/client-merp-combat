import Link from 'next/link';
import type { Character } from '../types/character';
import { CharacterRating } from './CharaterRating';
import { PlusIcon } from '@heroicons/react/24/outline';

export const CharacterInfo = ({ character }: { character: Character }) => (
  <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4 '>
    <div className='flex flex-row items-center justify-between gap-4'>
      <div className='flex flex-row items-center gap-4'>
        <div className='flex cursor-pointer items-center justify-between bg-transparent transition hover:bg-neutral-300 hover:text-black'>
          <Link className='flex  gap-6 flex-row ' href={`/watch/${character.character_id}`}>
            {character.name}
            <PlusIcon className='justify-end flex h-6 w-6 gap-6 bg-transparent transition hover:bg-neutral-300 hover:text-black'/>
          </Link>
        </div>
      </div>
    </div>

    <div className='mt-4 text-sm font-bold text-white lg:text-lg'>
      <div className='flex flex-row items-center gap-2'>
        <p>
          Level: <CharacterRating rating={character.level.toString()} />
        </p>
      </div>
      <p>Class: {character.class}</p>
      <p>Race: {character.race}</p>
    </div>
    <div className='mt-4 mb-4 text-white'>
      <p>Weapons:</p>
      {character.equipment.weapons?.map((weapon) => (
        <p className='font-thin' key={weapon.name}>{weapon.name}</p>
      ))}
    </div>
  </div>
);
