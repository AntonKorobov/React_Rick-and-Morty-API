import './MainPage.scss';
import React, { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import { SortingSelectors } from 'components/Sorting_Selectors/Sorting_Selectors';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, setSearchBarInput, setCurrentPage, AppDispatch } from '../../store';
import { getCharacter } from 'api/API';

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const searchBarInput = useSelector((state: RootState) => state.searchBarInput);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const maxPageNumber = useSelector((state: RootState) => state.maxPageNumber);
  const characters = useSelector((state: RootState) => state.characters);
  const filters = useSelector((state: RootState) => state.filters);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const isLoadingError = useSelector((state: RootState) => state.isLoadingError);

  const cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleChangeSearchBar = (event: { target: { name?: string; value: string } }) => {
    dispatch(setSearchBarInput(event.target.value));
    localStorage.setItem('searchBarInput', searchBarInput);
  };

  const searchBarOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      getCharacter({
        name: searchBarInput,
        page: currentPage,
        status: filters.status,
        gender: filters.gender,
        species: filters.species,
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

  useEffect(() => {
    dispatch(
      getCharacter({
        name: searchBarInput,
        page: currentPage,
        status: filters.status,
        gender: filters.gender,
        species: filters.species,
      })
    );
  }, [currentPage, dispatch, filters.gender, filters.species, filters.status, searchBarInput]);

  return (
    <>
      <h1 className="h1">Main page</h1>
      <SearchBar
        onSubmit={searchBarOnSubmit}
        input={searchBarInput}
        handleChange={handleChangeSearchBar}
      />
      <Pagination
        currentPage={currentPage}
        maxPageNumber={maxPageNumber}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <PageSelector />
      <SortingSelectors />
      <ul className="cards-wrapper">
        {isLoading ? <div className="loading-message">Loading...</div> : cardGenerator(characters)}
        {isLoadingError && (
          <div className="sorry-message">Sorry, we couldn&apos;t find any results :(</div>
        )}
      </ul>
    </>
  );
}
