import React, { Component } from 'react';
import './MainPage.css';
import SearchBar from './SearchBar';

export default class MainPage extends Component {
  state = {
    searchBarInput: '',
  };

  handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount(): void {
    this.setState({ searchBarInput: localStorage.getItem('searchBarInput') || '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchBarInput', this.state.searchBarInput);
  }

  render = () => {
    return (
      <section className="main-page">
        <h1 className="main-page_h1">Main page</h1>
        <SearchBar input={this.state.searchBarInput} handleChange={this.handleChange} />
      </section>
    );
  };
}
