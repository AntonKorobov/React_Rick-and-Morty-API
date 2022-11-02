import { APISingleCharacterInterface, FiltersInterface } from './API_Interface';

export interface GlobalStateInterface {
  cards: APISingleCharacterInterface[];
  setCards: (value: APISingleCharacterInterface[]) => void;
  characters: APISingleCharacterInterface[];
  setCharacters: (value: APISingleCharacterInterface[]) => void;
  currentCharacterIndex: number;
  setCurrentCharacterIndex: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  cardsOnPage: number;
  setCardsOnPage: (value: number) => void;
  searchBarInput: string;
  setSearchBarInput: (value: string) => void;
  sortingType: string;
  maxPageNumber: number;
  setMaxPageNumber: (value: number) => void;
  filters: FiltersInterface;
  setFilters: (value: FiltersInterface) => void;
  currentPath: string;
  setCurrentPath: (value: string) => void;
}
