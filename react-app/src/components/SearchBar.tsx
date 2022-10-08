import React from 'react';

interface SearchBarProps {
  input: string | number;
  handleChange: (event: { target: { name: string; value: string } }) => void;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <form className="search-bar" action="/action_page.php">
      <input
        className="search-bar__input"
        type="search"
        value={props.input}
        placeholder="Search....."
        name="searchBarInput"
        onChange={props.handleChange}
      ></input>
      <button className="search-bar__submit-button" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <h1>{props.input}</h1>
    </form>
  );
}
