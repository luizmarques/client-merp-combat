import Image from 'next/image';
import type { Character } from '../types/character';
import { CharacterInfo } from './CharacterInfo';

export const CharacterCard = ({ character }: { character: Character }) => (
  <div className='group relative rounded md:min-h-[4vw] p-2'>
    <h1 className='text-sm text-white'>{character.name}</h1>
    <Image
      alt={character.name}
      src={character.image_url}
      width={150}
      height={75}
      className='rounded-md object-cover object-top transition'
    />
    <div className='invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:scale-105 group-hover:opacity-100 sm:visible'>
      <Image
        src={character.image_url}
        alt={character.name}
        width={150}
        height={75}
        className='duration h-[10vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
      />
      <CharacterInfo character={character} />
    </div>
  </div>
);