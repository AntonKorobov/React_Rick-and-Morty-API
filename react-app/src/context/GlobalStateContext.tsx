import React, { createContext, useContext, useReducer } from 'react';
import { GlobalStateInterface } from 'data/GlobalStateInterface';
import { globalReducer } from '../context/globalReducer';
import { APISingleCharacterInterface, FiltersInterface } from 'data/API_Interface';

import { ActionCommandType } from '../context/globalReducer';

export const GlobalStateDefaultValues: GlobalStateInterface = {
  cards: [],
  setCards: () => {},
  characters: [],
  setCharacters: () => {},
  currentCharacterIndex: 0,
  setCurrentCharacterIndex: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  cardsOnPage: 20,
  setCardsOnPage: () => {},
  searchBarInput: '',
  setSearchBarInput: () => {},
  sortingType: '',
  maxPageNumber: 20,
  setMaxPageNumber: () => {},
  filters: {
    status: '',
    gender: '',
  },
  setFilters: () => {},
  currentPath: '',
  setCurrentPath: () => {},
};

export const GlobalStateContext = createContext<GlobalStateInterface>(GlobalStateDefaultValues);
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export function GlobalStateProvider(props: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(globalReducer, GlobalStateDefaultValues);

  const setSearchBarInput = (value: string) => {
    dispatch({
      type: ActionCommandType.setSearchBarInput,
      payload: value,
    });
  };

  const setCards = (value: APISingleCharacterInterface[]) => {
    dispatch({
      type: ActionCommandType.setCards,
      payload: value,
    });
  };

  const setCharacters = (value: APISingleCharacterInterface[]) => {
    dispatch({
      type: ActionCommandType.setCharacters,
      payload: value,
    });
  };

  const setCurrentCharacterIndex = (value: number) => {
    dispatch({
      type: ActionCommandType.setCurrentCharacterIndex,
      payload: value,
    });
  };

  const setCurrentPage = (value: number) => {
    dispatch({
      type: ActionCommandType.setCurrentPage,
      payload: value,
    });
  };

  const setCardsOnPage = (value: number) => {
    dispatch({
      type: ActionCommandType.setCardsOnPage,
      payload: value,
    });
  };

  const setMaxPageNumber = (value: number) => {
    dispatch({
      type: ActionCommandType.setMaxPageNumber,
      payload: value,
    });
  };

  const setFilters = (value: FiltersInterface) => {
    dispatch({
      type: ActionCommandType.setFilters,
      payload: value,
    });
  };

  const setCurrentPath = (value: string) => {
    dispatch({
      type: ActionCommandType.setCurrentPath,
      payload: value,
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        ...state,
        setSearchBarInput,
        setCards,
        setCharacters,
        setCurrentCharacterIndex,
        setCurrentPage,
        setCardsOnPage,
        setMaxPageNumber,
        setFilters,
        setCurrentPath,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
}
