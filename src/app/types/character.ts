export type Character = {
  character_id: string;
  name: string;
  race: string;
  profession: string;
  level: number;
  stats: {
    strength: number;
    agility: number;
    constitution: number;
    intelligence: number;
    intuition: number;
    presence: number;
    appearance: number;
  };
  skills: {
    melee: {
      [key: string]: number;
    };
    ranged: {
      [key: string]: number;
    };
    survival: {
      [key: string]: number;
    };
    lore: {
      [key: string]: number;
    };
    languages: {
      [key: string]: string;
    };
  };
  equipment: {
    weapons: {
      name: string;
      type: string;
      damage: string;
    }[];
    armor: {
      type: string;
      defense: number;
    };
    items: string[];
  };
  background: {
    title: string;
    allies: string[];
    enemies: string[];
  };
  image_url: string;
};

export type Characters = Character[];