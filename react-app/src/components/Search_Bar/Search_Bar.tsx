import { getCharacter } from 'api/API';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState, setSearchBarInput } from 'store';
import './SearchBar.scss';

export function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const searchBarInput = useSelector((state: RootState) => state.searchBarInput);
  const filters = useSelector((state: RootState) => state.filters);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSearchBar = (event: { target: { name?: string; value: string } }) => {
    dispatch(setSearchBarInput(event.target.value));
    searchParams.set('text', event.target.value);
    setSearchParams(searchParams);
  };

  const searchBarOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      getCharacter({
        name: searchBarInput,
        page: 1,
        status: filters.status,
        gender: filters.gender,
        species: filters.species,
      })
    );
  };

  return (
    <form className="search-bar" onSubmit={searchBarOnSubmit}>
      <input
        className="search-bar__input"
        type="search"
        value={searchBarInput}
        placeholder="Search....."
        name="searchBarInput"
        onChange={handleChangeSearchBar}
        data-testid="search-bar"
      />
      <button className="search-bar__submit-button" type="submit">
        <img className="search-bar__img" src="magnifying-glass-solid.svg" alt="search button" />
      </button>
    </form>
  );
}
