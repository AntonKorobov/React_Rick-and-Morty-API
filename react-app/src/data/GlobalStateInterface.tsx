import { APISingleCharacterInterface } from './API_Interface';

export interface GlobalStateInterface {
  cards: APISingleCharacterInterface[];
  setCards: ([]: APISingleCharacterInterface[]) => void;
  currentPage: number;
  searchBarInput: string;
  setSearchBarInput: (value: string) => void;
  sortingType: string;
  cardsOnPage: number;
}
