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
  status: string; //switcher
  species: string;
  type: string;
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
