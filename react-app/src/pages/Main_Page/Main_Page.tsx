import './MainPage.scss';
import React, { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { API } from 'api/API';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import SortingSelectors from 'components/Sorting_Selectors/Sorting_Selectors';

import { useSelector, useDispatch } from 'react-redux';
import {
  RootState,
  setSearchBarInput,
  setCurrentPage,
  setMaxPageNumber,
  setCharacters,
  setIsLoading,
  setIsLoadingError,
} from '../../store';

export function MainPage() {
  const dispatch = useDispatch();
  const searchBarInput = useSelector((state: RootState) => state.searchBarInput);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const maxPageNumber = useSelector((state: RootState) => state.maxPageNumber);
  const characters = useSelector((state: RootState) => state.characters);
  const filters = useSelector((state: RootState) => state.filters);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const isLoadingError = useSelector((state: RootState) => state.isLoadingError);

  const updateCards = async (name: string, page = currentPage) => {
    dispatch(setIsLoading(true));
    dispatch(setIsLoadingError(false));
    dispatch(setCharacters([]));

    const data = await API.getCharacter(
      name,
      page,
      filters.status,
      filters.gender,
      filters.species
    );
    if (data) {
      dispatch(setCharacters(data.results));
      dispatch(setIsLoadingError(false));
      dispatch(setMaxPageNumber(data.info.pages));
      console.log(data.results);
    } else {
      dispatch(setIsLoading(false));
      dispatch(setIsLoadingError(true));
    }
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);
  };

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
    localStorage.setItem('searchBarInput', searchBarInput);
    updateCards(searchBarInput);
  };

  useEffect(() => {
    dispatch(setSearchBarInput(localStorage.getItem('searchBarInput') || ''));
  }, []);

  useEffect(() => {
    localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

  useEffect(() => {
    updateCards(localStorage.getItem('searchBarInput') || '', currentPage);
  }, [currentPage]);

  return (
    <section className="main-page" data-testid="main-page">
      <h1 className="main-page__h1 h1">Main page</h1>
      <div className="search-bar-wrapper">
        <SearchBar
          onSubmit={searchBarOnSubmit}
          input={searchBarInput}
          handleChange={handleChangeSearchBar}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        maxPageNumber={maxPageNumber}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <PageSelector />
      <SortingSelectors />
      <div className="cards-wrapper">
        {isLoading ? (
          <div className="loading-message">{'Loading...'}</div>
        ) : (
          cardGenerator(characters)
        )}
        {isLoadingError && (
          <div className="sorry-message">{`Sorry, we couldn't find any results :(`}</div>
        )}
      </div>
    </section>
  );
}
