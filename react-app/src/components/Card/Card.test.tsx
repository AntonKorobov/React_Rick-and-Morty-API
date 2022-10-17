import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import CardData from '../../data/CardData.json';

describe('render one card', () => {
  test('renders cards', () => {
    render(<Card info={CardData[0]} />);
    const cardId = screen.getByTestId('card');
    expect(cardId).toBeInTheDocument();
  });
  test('cards should have a title', () => {
    render(<Card info={CardData[0]} />);
    const cardTitle = screen.getByText(CardData[0].title);
    expect(cardTitle).toBeDefined();
  });
  test('cards should have src and alt attributes', () => {
    render(<Card info={CardData[0]} />);
    const cardImg = screen.getByRole('img');
    expect(cardImg).toHaveAttribute('src');
    expect(cardImg).toHaveAttribute('alt');
  });
});
