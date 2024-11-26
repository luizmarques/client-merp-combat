'use client'
import { CharacterCard } from "../components/CharacterCard";
import Header from "../components/Header";
import { useAppContext } from "../context/AppContext";
import type { Character } from "../types/character";
import BattleInstance from "./components/BattleInstance";


export default async function BattlePage() {
  const { selectedCharacters, setSelectedCharacters } = useAppContext()

  if (selectedCharacters.length === 0) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            No characters found.
          </h1>
        </main>
      </div>
    );
  }

  return (
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='flex justify-center overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
          <div>
            <BattleInstance characters={selectedCharacters}/>
          </div>
        </main>
      </div>
  );
}