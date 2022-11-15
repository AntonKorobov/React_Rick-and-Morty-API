import { getCharacter } from 'api/API';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState, setSearchBarInput } from 'store';
import './SearchBar.scss';

export function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const searchBarInput = useSelector((state: RootState) => state.searchBarInput);
  const filters = useSelector((state: RootState) => state.filters);

  const [searchParams, setSearchParams] = useSearchParams();
  // const nameQuery = searchParams.get('name') || '';

  const handleChangeSearchBar = (event: { target: { name?: string; value: string } }) => {
    dispatch(setSearchBarInput(event.target.value));
    // localStorage.setItem('searchBarInput', searchBarInput);
    setSearchParams({ text: event.target.value });
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

  useEffect(() => {
    // localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

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
