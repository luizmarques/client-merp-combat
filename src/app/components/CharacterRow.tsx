import { Characters } from '../types/character';
import { CharacterCard } from './CharacterCard';

export type CharacterRowProps = Readonly<{
  sectionTitle: string;
  characters: Characters;
}>;

export function CharacterRow({ sectionTitle, characters}: CharacterRowProps) {
  return (
    <div className='mb-4'>
    <h2 className='text-xl font-bold lg:text-2xl'>{sectionTitle}</h2>
    <div className='grid grid-cols-10 gap-2 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 lg:gap-2 xl:grid-cols-10 xl:gap-2'>
      {characters.map((character) => (
        <CharacterCard 
        key={character.character_id}
        character={character}
        />
      ))}
    </div>
  </div>
  );
}
