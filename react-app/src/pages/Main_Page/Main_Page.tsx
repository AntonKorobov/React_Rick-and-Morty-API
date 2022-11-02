import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import './MainPage.scss';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { API } from 'api/API';
import { useGlobalStateContext } from 'context/GlobalStateContext';
import { PageSelector } from 'components/Page_Selector/Page_Selector';
import SortingSelectors from 'components/Sorting_Selectors/Sorting_Selectors';

export function MainPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const { searchBarInput, setSearchBarInput } = useGlobalStateContext();
  const { maxPageNumber, setMaxPageNumber } = useGlobalStateContext();
  const { currentPage, setCurrentPage } = useGlobalStateContext();
  const { filters } = useGlobalStateContext();
  const { cardsOnPage } = useGlobalStateContext();
  const { characters, setCharacters } = useGlobalStateContext();

  const updateCards = async (name: string, page = currentPage) => {
    setIsLoaded(false);
    setIsLoadingError(false);
    setCharacters([]);

    const data = await API.getCharacter(name, page, filters.status, filters.gender);
    if (data) {
      setCharacters(data.results);
      setIsLoadingError(false);
      setMaxPageNumber(data.info.pages);
      console.log(data.results);
    } else {
      setIsLoaded(true);
      setIsLoadingError(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  const cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      if (cardsOnPage === 20) {
        setCurrentPage(currentPage + 1);
        onPageChange(currentPage + 1);
      } else {
        // 1(20), 2(20), 3(20), 4(20) - 4 pages
        // 1(10), 2(10), 3(10), 4(10), 5(10), 6(10), 7(10), 8(10) - 8 pages
      }
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      if (cardsOnPage === 20) {
        setCurrentPage(currentPage - 1);
        onPageChange(currentPage - 1);
      }
    }
  };

  const onPageChange = async (pageNumber: number) => {
    updateCards(searchBarInput, pageNumber);
  };

  const handleChangeSearchBar = (event: { target: { name?: string; value: string } }) => {
    setSearchBarInput(event.target.value);
    localStorage.setItem('searchBarInput', searchBarInput);
  };

  const searchBarOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchBarInput', searchBarInput);
    updateCards(searchBarInput);
  };

  useEffect(() => {
    updateCards(localStorage.getItem('searchBarInput') || '', currentPage); //!!!
    setSearchBarInput(localStorage.getItem('searchBarInput') || '');
  }, [currentPage]); //!!!

  useEffect(() => {
    localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

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
        {!isLoaded ? (
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
