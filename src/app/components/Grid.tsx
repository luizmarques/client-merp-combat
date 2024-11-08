import type { Characters } from '../types/character';

export const Grid = ({ characters }: { characters: Characters }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] '>
    {characters.map((character) => (
      <h1 key={character.name}>{character.name}</h1>
    ))}
  </div>
);
