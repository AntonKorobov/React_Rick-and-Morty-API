import React, { Component } from 'react';
import { Card } from '../../components/Card/Card';
import './MainPage.scss';
import { SearchBar } from '../../components/Search_Bar/Search_Bar';
import { APICharacterInterface, APISingleCharacterInterface } from 'data/API_Interface';
import { Pagination } from 'components/Pagination/Pagination';

interface State {
  searchBarInput: string;
  characters: APISingleCharacterInterface[];
  currentPage: number;
  isLoaded: boolean;
  isLoadingError: boolean;
}

export class MainPage extends Component {
  state: State = {
    searchBarInput: '',
    characters: [],
    currentPage: 1,
    isLoaded: false,
    isLoadingError: false,
  };

  apiGetCharacter = async (name: string, page = 1) => {
    this.setState({ isLoaded: false, isLoadingError: false, characters: [] });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
      );
      if (response.status === 200) {
        const data: APICharacterInterface = await response.json();
        this.setState({ characters: data.results, isLoadingError: false });
        console.log(data);
      } else {
        this.setState({ isLoaded: true, isLoadingError: true });
      }
      setTimeout(() => {
        this.setState({ isLoaded: true });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  nextPage = () => {
    this.setState((prevState: State) => {
      return { currentPage: prevState.currentPage + 1 };
    });
    this.onPageChange(this.state.currentPage + 1);
  };

  prevPage = () => {
    if (this.state.currentPage === 1) this.onPageChange(this.state.currentPage);
    else {
      this.setState((prevState: State) => {
        return { currentPage: prevState.currentPage - 1 };
      });
      this.onPageChange(this.state.currentPage - 1);
    }
  };

  onPageChange = async (pageNumber: number) => {
    this.apiGetCharacter(this.state.searchBarInput, pageNumber);
  };

  handleChangeSearchBar = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  };

  searchBarOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchBarInput', this.state.searchBarInput); //!!!
    this.apiGetCharacter(this.state.searchBarInput);
  };

  async componentDidMount(): Promise<void> {
    this.setState({ searchBarInput: localStorage.getItem('searchBarInput') || '' });
    this.apiGetCharacter(localStorage.getItem('searchBarInput') || '', this.state.currentPage);
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  }

  render = () => {
    return (
      <section className="main-page" data-testid="main-page">
        <h1 className="main-page_h1 h1">Main page</h1>
        <div className="search-bar-wrapper">
          <SearchBar
            onSubmit={this.searchBarOnSubmit}
            input={this.state.searchBarInput}
            handleChange={this.handleChangeSearchBar}
          />
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
        />
        <div className="cards-wrapper">
          {!this.state.isLoaded ? (
            <div className="loading-message">{'Loading...'}</div>
          ) : (
            this.cardGenerator(this.state.characters)
          )}
          {this.state.isLoadingError && (
            <div className="sorry-message">{`Sorry, we couldn't find any results :(`}</div>
          )}
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          prevPage={this.prevPage}
          nextPage={this.nextPage}
        />
      </section>
    );
  };
}
