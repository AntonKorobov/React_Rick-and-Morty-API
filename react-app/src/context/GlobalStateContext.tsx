import { createContext, useContext } from 'react';
import { GlobalStateInterface } from 'data/GlobalStateInterface';

export const GlobalStateDefaultValues: GlobalStateInterface = {
  cards: [],
  setCards: () => {},
  characters: [],
  setCharacters: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  cardsOnPage: 0,
  setCardsOnPage: () => {},
  searchBarInput: '',
  setSearchBarInput: () => {},
  sortingType: '',
  maxPageNumber: 0,
  setMaxPageNumber: () => {},
  filters: {
    status: '',
    gender: '',
  },
  setFilters: () => {},
};

export const GlobalStateContext = createContext<GlobalStateInterface>(GlobalStateDefaultValues);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
