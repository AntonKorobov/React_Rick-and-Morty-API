import React, { Component } from 'react';
import Card from '../../components/Card';
import './MainPage.scss';
<<<<<<< HEAD:react-app/src/components/MainPage.tsx
import SearchBar from './SearchBar';
import CardData from '../date/CardData.json';
import { CardInterface } from 'date/CardInterface';
=======
import SearchBar from '../../components/SearchBar';
import CardData from '../../data/CardData.json';
import { CardInterface } from '../../data/CardInterface';
>>>>>>> react_components:react-app/src/pages/MainPage/index.tsx

export default class MainPage extends Component {
  state = {
    searchBarInput: '',
  };

  cardGenerator = (array: CardInterface[]): JSX.Element[] => {
    return array.map((elem, index) => <Card key={elem.id} info={array[index]} />);
  };

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  };

  componentDidMount(): void {
    this.setState({ searchBarInput: localStorage.getItem('searchBarInput') || '' });
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
        <div className="cards-wrapper">{this.cardGenerator(CardData)}</div>
      </section>
    );
  };
}
