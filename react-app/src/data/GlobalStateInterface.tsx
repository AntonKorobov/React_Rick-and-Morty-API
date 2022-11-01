import { APISingleCharacterInterface } from './API_Interface';

export interface GlobalStateInterface {
  cards: APISingleCharacterInterface[];
  setCards: ([]: APISingleCharacterInterface[]) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  searchBarInput: string;
  setSearchBarInput: (value: string) => void;
  sortingType: string;
  maxPageNumber: number;
  setMaxPageNumber: (value: number) => void;
}
