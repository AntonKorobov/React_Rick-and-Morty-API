import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  input: string | number;
  handleChange: (event: { target: { name: string; value: string } }) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <form className="search-bar" action="/action_page.php" onSubmit={props.onSubmit}>
      <input
        className="search-bar__input"
        type="search"
        value={props.input}
        placeholder="Search....."
        name="searchBarInput"
        onChange={props.handleChange}
        data-testid="search-bar"
      ></input>
      <button className="search-bar__submit-button" type="submit">
        <img className="search-bar__img" src="magnifying-glass-solid.svg" alt="search button" />
      </button>
    </form>
  );
}
