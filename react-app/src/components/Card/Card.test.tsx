// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Card } from './Card';
// import { APICharacterInterface } from 'data/API_Interface';
// import fetchMock from 'fetch-mock';
// import { mockAPI } from "./mockAPI";

// const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${0}`);
// const data: APICharacterInterface = await response.json();
// const data: APICharacterInterface = fetchMock.mock(
//   'https://rickandmortyapi.com/api/character/?page=${0}',
//   {
//     info: {
//       count: 0,
//       pages: 0,
//       next: '',
//       prev: null,
//     },
//     results: [
//       {
//         id: 0,
//         name: 'Test-name',
//         status: 'Test-status',
//         species: 'Test-species',
//         type: 'Test-type',
//         gender: 'Test-gender',
//         origin: {
//           name: '',
//           url: '',
//         },
//         location: {
//           name: '',
//           url: '',
//         },
//         image: '',
//         episode: ['', ''],
//         url: '',
//         created: '',
//       },
//     ],
//   }
// );

// describe('render one card', () => {
//   test('renders cards', () => {
//     render(<Card info={data.results[0]} />);
//     const cardId = screen.getByTestId('card');
//     expect(cardId).toBeInTheDocument();
//   });
//   test('cards should have a name', () => {
//     render(<Card info={data.results[0]} />);
//     const cardTitle = screen.getByText(data.results[0].name);
//     expect(cardTitle).toBeDefined();
//   });
//   test('cards should have src and alt attributes', () => {
//     render(<Card info={data.results[0]} />);
//     const cardImg = screen.getByRole('img');
//     expect(cardImg).toHaveAttribute('src');
//     expect(cardImg).toHaveAttribute('alt');
//   });
// });
