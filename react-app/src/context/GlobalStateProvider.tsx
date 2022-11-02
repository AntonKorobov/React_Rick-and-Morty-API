import {
  APISingleCharacterInterface,
  CharacterGenderType,
  CharacterStatusType,
} from 'data/API_Interface';
import React, { useState } from 'react';
import { GlobalStateContext, GlobalStateDefaultValues } from './GlobalStateContext';

export default function GlobalStateProvider(props: { children: JSX.Element }) {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [cards, setCards] = useState<APISingleCharacterInterface[]>([]);
  const [characters, setCharacters] = useState<APISingleCharacterInterface[]>([]);
  const [maxPageNumber, setMaxPageNumber] = useState(20);
  const [cardsOnPage, setCardsOnPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    status: '' as CharacterStatusType,
    gender: '' as CharacterGenderType,
  });

  return (
    <GlobalStateContext.Provider
      value={{
        ...GlobalStateDefaultValues,
        searchBarInput,
        setSearchBarInput,
        cards,
        setCards,
        characters,
        setCharacters,
        currentPage,
        setCurrentPage,
        cardsOnPage,
        setCardsOnPage,
        maxPageNumber,
        setMaxPageNumber,
        filters,
        setFilters,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
}
