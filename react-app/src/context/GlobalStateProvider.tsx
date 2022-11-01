import { APISingleCharacterInterface } from 'data/API_Interface';
import React, { useState } from 'react';
import { GlobalStateContext, GlobalStateDefaultValues } from './GlobalStateContext';

export default function GlobalStateProvider(props: { children: JSX.Element }) {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [cards, setCards] = useState<APISingleCharacterInterface[]>([]);
  const [maxPageNumber, setMaxPageNumber] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <GlobalStateContext.Provider
      value={{
        ...GlobalStateDefaultValues,
        searchBarInput,
        setSearchBarInput,
        cards,
        setCards,
        currentPage,
        setCurrentPage,
        maxPageNumber,
        setMaxPageNumber,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
}
