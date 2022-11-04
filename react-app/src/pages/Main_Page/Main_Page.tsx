import './MainPage.scss';
import React, { useCallback, useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import SortingSelectors from 'components/Sorting_Selectors/Sorting_Selectors';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, setSearchBarInput, setCurrentPage } from '../../store';
import { getCharacter } from 'api/API';

export function MainPage() {
  const dispatch = useDispatch();
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
    dispatch(setSearchBarInput(localStorage.getItem('searchBarInput') || ''));
    dispatch(
      getCharacter({
        name: localStorage.getItem('searchBarInput') || '',
        page: 1,
        status: '',
        gender: '',
        species: '',
      })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

  useEffect(() => {
    dispatch(
      getCharacter({
        name: localStorage.getItem('searchBarInput') || '',
        page: currentPage,
        status: filters.status,
        gender: filters.gender,
        species: filters.species,
      })
    );
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
