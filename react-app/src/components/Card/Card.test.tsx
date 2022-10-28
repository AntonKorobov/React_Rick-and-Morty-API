import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { APICharacterInterface } from 'data/API_Interface';
import { API } from 'api/API';

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
    status: 200,
    json: () => Promise.resolve(testCharacter),
  });
}

global.fetch = myFetch as jest.Mock;

async function renderCard() {
  const data = await API.getCharacter('', 0);
  if (data) {
    return <Card info={data.results[0]} />;
  }
  return <></>;
}

describe('renders one card', () => {
  test('renders cards', async () => {
    render(await renderCard());
    const cardId = screen.getByTestId('card');
    expect(cardId).toBeInTheDocument();
  });
  test('cards should have a name', async () => {
    render(await renderCard());
    const cardTitle = screen.getByText(testCharacter.results[0].name);
    expect(cardTitle).toBeDefined();
  });
  test('cards should have src and alt attributes', async () => {
    render(await renderCard());
    const cardImg = screen.getByRole('img');
    expect(cardImg).toHaveAttribute('src');
    expect(cardImg).toHaveAttribute('alt');
  });
});
