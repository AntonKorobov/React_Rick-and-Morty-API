import { createContext, useContext } from 'react';
import { GlobalStateInterface } from 'data/GlobalStateInterface';

export const GlobalStateDefaultValues: GlobalStateInterface = {
  cards: [],
  setCards: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  searchBarInput: '',
  setSearchBarInput: () => {},
  sortingType: '',
  maxPageNumber: 1,
  setMaxPageNumber: () => {},
};

export const GlobalStateContext = createContext<GlobalStateInterface>(GlobalStateDefaultValues);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
