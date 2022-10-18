import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '.';
import userEvent from '@testing-library/user-event';

interface LocalStorageInterface {
  [key: string]: string;
}

const localStorageMock = (function () {
  let store: LocalStorageInterface = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('SearchBar', () => {
  test('renders search input', () => {
    render(
      <SearchBar
        input={''}
        handleChange={(event: { target: { name: string; value: string } }) => {
          console.log(event.target.value);
        }}
      />
    );
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/search button/i)).toBeInTheDocument();
  });
  test('renders empty search input if local storage is empty', () => {
    render(
      <SearchBar
        input={''}
        handleChange={(event: { target: { name: string; value: string } }) => {
          console.log(event.target.value);
        }}
      />
    );
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  test('renders search input with value from local storage', () => {
    render(
      <SearchBar
        input={''}
        handleChange={(event: { target: { name: string; value: string } }) => {
          console.log(event.target.value);
        }}
      />
    );
    userEvent.type(screen.getByDisplayValue(''), 'text');
    render(
      <SearchBar
        input={window.localStorage.getItem('searchBarInput') || ''}
        handleChange={(event: { target: { name: string; value: string } }) => {
          console.log(event.target.value);
        }}
      />
    );
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
});
