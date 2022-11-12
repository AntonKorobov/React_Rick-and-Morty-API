// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Card } from './Card';
// import { APICharacterInterface } from 'data/API_Interface';
// import { getCharacter } from 'api/API';
// import userEvent from '@testing-library/user-event';
// import { useDispatch } from 'react-redux';

// const testCharacter: APICharacterInterface = {
//   info: {
//     count: 0,
//     pages: 0,
//     next: '',
//     prev: null,
//   },
//   results: [
//     {
//       id: 0,
//       name: 'Test-name',
//       status: 'unknown',
//       species: 'Test-species',
//       type: 'unknown',
//       gender: 'Test-gender',
//       origin: {
//         name: '',
//         url: '',
//       },
//       location: {
//         name: '',
//         url: '',
//       },
//       image: 'https://www.example.com/image-600.png',
//       episode: ['', ''],
//       url: '',
//       created: '',
//     },
//   ],
// };

// function myFetch() {
//   return Promise.resolve({
//     status: 200,
//     json: () => Promise.resolve(testCharacter),
//   });
// }

// global.fetch = myFetch as jest.Mock;
// async function RenderCard() {
//   const dispatch = useDispatch();
//   const data = dispatch(getCharacter({ name: '', page: 0, status: '', gender: '', species: '' }));
//   if (data) {
//     return <Card info={data.results[0]} />;
//   }
//   return <></>;
// }

// describe('renders one card', () => {
//   test('renders cards', async () => {
//     render(await RenderCard());
//     const cardId = screen.getByTestId('card');
//     expect(cardId).toBeInTheDocument();
//   });
//   test('cards should have a name', async () => {
//     render(await RenderCard());
//     const cardTitle = screen.getByText(testCharacter.results[0].name);
//     expect(cardTitle).toBeDefined();
//   });
//   test('cards should have src and alt attributes', async () => {
//     render(await RenderCard());
//     const cardImg = screen.getByRole('img');
//     expect(cardImg).toHaveAttribute('src');
//     expect(cardImg).toHaveAttribute('alt');
//   });
//   test('modal window apers when img has clicked', async () => {
//     render(await RenderCard());
//     const cardImg = screen.getByRole('img');
//     expect(screen.queryByTestId('modal-window')).not.toBeInTheDocument();
//     userEvent.click(cardImg);
//     expect(screen.getByTestId('modal-window')).toBeInTheDocument();
//   });
// });
