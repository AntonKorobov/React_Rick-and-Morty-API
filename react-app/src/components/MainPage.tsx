import React, { Component } from 'react';
import './MainPage.css';
import SearchBar from './SearchBar';

export default class MainPage extends Component {
  state = {
    searchBarInput: 'Search...',
  };

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render = () => {
    return (
      <section className="main-page">
        <h1 className="main-page_h1">Main page</h1>
        <SearchBar input={this.state.searchBarInput} handleChange={this.handleChange} />
      </section>
    );
  };
}
