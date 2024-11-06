import Link from 'next/link';
import { Character } from '@/app/types/character';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import '@vidstack/react/player/styles/base.css';

type Props = Readonly<{
  character: Character;
}>;

export default async function Player({ character }: Props) {
  return (
    <div className='flex h-screen justify-center align-middle'>
      <div className="sheet-1colrow">
          <div style={{ textAlign: "center" }}>
            <h1>{`export default async function Player ${character}` } </h1>
              <h1><span style={{ fontWeight: "bold" }}><img src="" style={{ float: "none" }} /></span></h1>
          </div>
      </div>
      <hr />
      <input type="radio" name="attr_tab" className="sheet-tab sheet-tab1" value="1" title="PC" defaultChecked />
      <span className="sheet-tab sheet-tab1">PC</span>
      <input type="radio" name="attr_tab" className="sheet-tab sheet-tab2" value="2" title="Notes" />
      <span className="sheet-tab sheet-tab2">Notes</span>

      <input type="radio" name="attr_tab" className="sheet-tab sheet-tab4" value="4" title="NPC" />
      <span className="sheet-tab sheet-tab4">NPC</span>
      <input type="radio" name="attr_tab" className="sheet-tab sheet-tab9" value="9" title="R Tmplts" />
      <span className="sheet-tab sheet-tab9">R Tmplts</span>
      <br />&nbsp;  
      <div className='ring-media-focus aspect-video w-full rounded-md bg-black'>
      
        <Link href='/'>
          <ArrowLeftIcon className='media-playing:opacity-0 invisible absolute left-8 top-8 z-50 h-8 cursor-pointer text-white md:visible' />
        </Link>

        {/* mobile title  */}
        <div className='media-playing:opacity-0 visible absolute left-2 top-8 z-50 transition-opacity duration-500 md:invisible'>
          <div className='flex flex-row items-center gap-4'>
            <Link href='/'>
              <ArrowLeftIcon className='h-6' />
            </Link>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {character.name}
            </h1>
          </div>
        </div>

        <div className='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'>
          <div className='media-playing:opacity-0 invisible absolute left-8 top-96 z-50 transition-opacity duration-500 md:visible'>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {character.name}
            </h1>
            <p className='text-shadow-md mt-4 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
              {character.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
