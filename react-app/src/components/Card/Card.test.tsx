import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { APICharacterInterface } from 'data/API_Interface';

const testCharacter: APICharacterInterface = {
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: null,
  },
  results: [
    {
      id: 0,
      name: 'Test-name',
      status: 'Test-status',
      species: 'Test-species',
      type: 'Test-type',
      gender: 'Test-gender',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: ['', ''],
      url: '',
      created: '',
    },
  ],
};

function myFetch() {
  return Promise.resolve({
    json: () => Promise.resolve(testCharacter),
  });
}

global.fetch = myFetch as jest.Mock;

describe('renders one card', () => {
  test('renders cards', async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=0`);
    const data: APICharacterInterface = await response.json();

    render(<Card info={data.results[0]} />);
    const cardId = screen.getByTestId('card');
    expect(cardId).toBeInTheDocument();
  });
  test('cards should have a name', async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=0`);
    const data: APICharacterInterface = await response.json();

    render(<Card info={data.results[0]} />);
    const cardTitle = screen.getByText(data.results[0].name);
    expect(cardTitle).toBeDefined();
  });
  test('cards should have src and alt attributes', async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=0`);
    const data: APICharacterInterface = await response.json();

    render(<Card info={data.results[0]} />);
    const cardImg = screen.getByRole('img');
    expect(cardImg).toHaveAttribute('src');
    expect(cardImg).toHaveAttribute('alt');
  });
});
