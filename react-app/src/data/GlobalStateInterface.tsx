import { APISingleCharacterInterface, FiltersInterface } from './API_Interface';

export interface GlobalStateInterface {
  cards: APISingleCharacterInterface[];
  characters: APISingleCharacterInterface[];
  currentCharacterIndex: number;
  currentPage: number;
  searchBarInput: string;
  maxPageNumber: number;
  filters: FiltersInterface;
  currentPath: string;
}
