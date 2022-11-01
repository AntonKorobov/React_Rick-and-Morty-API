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
  status: CharacterStatusType;
  species: string;
  type: CharacterGenderType;
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

export type CharacterStatusType = 'alive' | 'dead' | 'unknown' | '';
export type CharacterGenderType = 'male' | 'female' | 'unknown' | '';

export const CharacterStatus: { [key: string]: CharacterStatusType } = {
  alive: 'alive',
  dead: 'dead',
  unknown: 'unknown',
};

export const CharacterGender: { [key: string]: CharacterGenderType } = {
  male: 'male',
  female: 'female',
  unknown: 'unknown',
};

export interface FiltersInterface {
  status: CharacterStatusType;
  gender: CharacterGenderType;
}
