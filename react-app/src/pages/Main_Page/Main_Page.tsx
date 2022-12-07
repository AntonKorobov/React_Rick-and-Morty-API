import './MainPage.scss';
import React, { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import {
  APISingleCharacterInterface,
  CharacterGender,
  CharacterSpecies,
  CharacterStatus,
} from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import { SortingSelectors } from 'components/Sorting_Selectors/Sorting_Selectors';

import { useDispatch } from 'react-redux';
import { AppDispatch, setCurrentPage, setSearchBarInput, setFilters } from '../../store';
import { getCharacter } from 'api/API';
import { LoadingMessage } from 'components/LoadingMessage/LoadingMessage';
import { Header } from 'components/Header/Header';
import { useSearchParams } from 'react-router-dom';
import { useGlobalStateSelector } from 'hooks/useGlobalStateSelector';

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchBarInput, currentPage, characters, filters, isLoading, isLoadingError } =
    useGlobalStateSelector();

  const cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  const [searchParams] = useSearchParams();
  const textQuery = searchParams.get('text') || '';
  const pageQuery = searchParams.get('page') || 1;
  const filterStatusQuery = (searchParams.get('status') || '') as CharacterStatus;
  const filterGenderQuery = (searchParams.get('gender' || '') || '') as CharacterGender;
  const filterSpeciesQuery = (searchParams.get('species' || '') || '') as CharacterSpecies;

  useEffect(() => {
    dispatch(setSearchBarInput(textQuery));
    dispatch(setCurrentPage(Number(pageQuery)));
    dispatch(
      setFilters({
        status: filterStatusQuery,
        gender: filterGenderQuery,
        species: filterSpeciesQuery,
      })
    );
  }, []);

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
      <Header />
      <main className="main-container">
        {/* <h1 className="h1">Main page</h1> */}
        <SearchBar />
        <Pagination />
        <PageSelector />
        <SortingSelectors />
        <ul className="cards-wrapper">
          {isLoading ? <LoadingMessage isLoadingOk={isLoading} /> : cardGenerator(characters)}
          {isLoadingError && <LoadingMessage isLoadingOk={false} />}
        </ul>
      </main>
    </>
  );
}
