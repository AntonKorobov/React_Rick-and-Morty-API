import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainPage } from 'pages/Main_Page/Main_Page';

interface LocalStorageInterface {
  [key: string]: string;
}

const localStorageMock = (() => {
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
    render(<MainPage />);
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/search button/i)).toBeInTheDocument();
  });
  test('renders empty search input if local storage is empty', () => {
    render(<MainPage />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  test('renders search input with value from local storage', () => {
    render(<MainPage />);
    userEvent.type(screen.getByTestId('search-bar'), 'test');
    render(<MainPage />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
});
