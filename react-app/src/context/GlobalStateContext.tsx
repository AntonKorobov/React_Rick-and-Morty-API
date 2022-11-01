import { createContext, useContext } from 'react';
import { GlobalStateInterface } from 'data/GlobalStateInterface';

export const GlobalStateDefaultValues: GlobalStateInterface = {
  cards: [],
  currentPage: 0,
  searchBarInput: '',
  setSearchBarInput: () => {},
  sortingType: '',
  cardsOnPage: 20,
};

export const GlobalStateContext = createContext<GlobalStateInterface>(GlobalStateDefaultValues);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
