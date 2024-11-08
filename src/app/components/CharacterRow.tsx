import { Characters } from '../types/character';
import { CharacterCard } from './CharacterCard';

type CharacterRowProps = Readonly<{
  sectionTitle: string;
  characters: Characters;
}>;

export function CharacterRow({ sectionTitle, characters }: CharacterRowProps) {
  return (
    <div className='flex-col space-y-2'>
      <div className='flex'>
        <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
