import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './index';
import CardData from '../../data/CardData.json';

describe('MainPage', () => {
  test('renders MainPage component', () => {
    render(<MainPage />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/search button/i)).toBeInTheDocument();
  });
});

test('renders cards', () => {
  render(<MainPage />);
  const cardName = screen.getByText(CardData[0].title);
  expect(cardName).toBeInTheDocument();
});
