import './MainPage.scss';
import React, { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import { SortingSelectors } from 'components/Sorting_Selectors/Sorting_Selectors';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { getCharacter } from 'api/API';

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const searchBarInput = useSelector((state: RootState) => state.searchBarInput);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const characters = useSelector((state: RootState) => state.characters);
  const filters = useSelector((state: RootState) => state.filters);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const isLoadingError = useSelector((state: RootState) => state.isLoadingError);

  const cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

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
  }, [dispatch, filters.gender, filters.species, filters.status, searchBarInput, currentPage]);

  return (
    <>
      <h1 className="h1">Main page</h1>
      <SearchBar />
      <Pagination />
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
