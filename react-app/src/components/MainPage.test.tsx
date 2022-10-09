import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import CardData from '../date/CardData.json';

test('renders learn react link', () => {
  render(<MainPage />);
  const cardName = screen.getByText(CardData[0].title);
  expect(cardName).toBeInTheDocument();
});
