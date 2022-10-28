import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import './MainPage.scss';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';
import { API } from 'api/API';

export function MainPage() {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [characters, setCharacters] = useState<APISingleCharacterInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadingError, setIsLoadingError] = useState(false);

  const startPage = 1;

  const updateCards = async (name: string, page = 1) => {
    setIsLoaded(false);
    setIsLoadingError(false);
    setCharacters([]);

    const data = await API.getCharacter(name, page);
    if (data) {
      setCharacters(data.results);
      setIsLoadingError(false);
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
    setCurrentPage((prevValue) => prevValue + 1);
    onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) onPageChange(currentPage);
    else {
      setCurrentPage((prevValue) => prevValue - 1);
      onPageChange(currentPage - 1);
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
    updateCards(localStorage.getItem('searchBarInput') || '', startPage);
    setSearchBarInput(localStorage.getItem('searchBarInput') || '');
  }, []);

  useEffect(() => {
    localStorage.setItem('searchBarInput', searchBarInput);
  }, [searchBarInput]);

  return (
    <section className="main-page" data-testid="main-page">
      <h1 className="main-page_h1 h1">Main page</h1>
      <div className="search-bar-wrapper">
        <SearchBar
          onSubmit={searchBarOnSubmit}
          input={searchBarInput}
          handleChange={handleChangeSearchBar}
        />
      </div>
      <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
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
      <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
    </section>
  );
}
