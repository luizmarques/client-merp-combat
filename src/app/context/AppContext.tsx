'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Characters } from '../types/character';

interface AppContextType {
  selectedCharacters: Characters;
  setSelectedCharacters: React.Dispatch<React.SetStateAction<Characters>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCharacters, setSelectedCharacters] = useState<Characters>([]);

  return (
    <AppContext.Provider value={{ selectedCharacters, setSelectedCharacters }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
