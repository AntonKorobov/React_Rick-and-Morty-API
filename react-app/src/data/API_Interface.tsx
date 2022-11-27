export interface APICharacterInterface {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APISingleCharacterInterface[];
}

export interface APISingleCharacterInterface {
  id: number;
  name: string;
  status: CharacterStatus | '';
  species: string;
  type: CharacterGender | '';
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string, string];
  url: string;
  created: string;
}

export enum CharacterStatus {
  alive = 'alive',
  dead = 'dead',
  unknown = 'unknown',
}

export enum CharacterGender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}

export enum CharacterSpecies {
  human = 'Human',
  alien = 'Alien',
}

export interface FiltersInterface {
  status: CharacterStatus | '';
  gender: CharacterGender | '';
  species: CharacterSpecies | '';
}
