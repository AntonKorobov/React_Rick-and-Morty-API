import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import CardData from '../../data/CardData.json';

test('render one card', () => {
  render(<Card info={CardData[0]} />);
  const card = screen.getByTestId('card');
  expect(card).toBeDefined();
});
