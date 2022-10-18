import React, { Component } from 'react';
import Card from '../../components/Card';
import './MainPage.scss';
import SearchBar from '../../components/SearchBar';
import { APICharacterInterface, APISingleCharacterInterface } from 'data/APIInterface';

interface State {
  searchBarInput: string;
  characters: APISingleCharacterInterface[];
}

export default class MainPage extends Component {
  state: State = {
    searchBarInput: '',
    characters: [],
  };

  cardGenerator = (array: APISingleCharacterInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  };

  async componentDidMount(): Promise<void> {
    this.setState({ searchBarInput: localStorage.getItem('searchBarInput') || '' });

    // fetch(`https://rickandmortyapi.com/api/character/2`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const data: APICharacterInterface = await response.json();
      this.setState({ characters: data.results });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  }

  render = () => {
    return (
      <section className="main-page" data-testid="main-page">
        <h1 className="main-page_h1 h1">Main page</h1>
        <div className="search-bar-wrapper">
          <SearchBar input={this.state.searchBarInput} handleChange={this.handleChange} />
        </div>
        <div className="cards-wrapper">{this.cardGenerator(this.state.characters)}</div>
      </section>
    );
  };
}
