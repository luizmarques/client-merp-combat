import type { Character } from '../types/character';


export const CharacterCard = ({ character }: { character: Character }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] '>
    <h1>{character.name}</h1>
    {/* <Image
      alt={character.name}
      src={character.image_url}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    /> */}

    <div className='invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible'>
      {/* <Image
        src={character.image_url}
        alt={character.name}
        width={600}
        height={400}
        className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
      /> */}
      <h1>{character.name}</h1>
      
      <h1>CharacterInfo</h1>

    </div>
  </div>
);
