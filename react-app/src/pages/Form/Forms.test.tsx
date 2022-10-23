// import React from 'react';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { Forms } from './Forms';
// import userEvent from '@testing-library/user-event';

// describe('Forms', () => {
//   test('renders Forms component', () => {
//     render(<Forms />);
//     expect(screen.getByText(/Forms page/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/Title.../i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/Author.../i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/Publisher.../i)).toBeInTheDocument();
//     expect(screen.getByAltText(/cover image/i)).toBeInTheDocument();
//   });
//   test('doesnt create card after submit form, if required inputs are empty', () => {
//     render(<Forms />);
//     userEvent.click(screen.getByText('Submit'));
//     expect(screen.queryByTestId('card')).not.toBeInTheDocument();
//   });
//   test('creates card after submit form, if all required inputs filled', () => {
//     const title = 'About Me';
//     const author = 'Me';
//     const publisher = 'Also Me';
//     const publishDate = '2022-10-23';

//     render(<Forms />);
//     userEvent.type(screen.getByLabelText('Title:'), title);
//     userEvent.type(screen.getByLabelText('Author:'), author);
//     userEvent.type(screen.getByLabelText('Publisher:'), publisher);
//     fireEvent.change(screen.getByLabelText('Publish date:'), { target: { value: publishDate } });

//     userEvent.click(screen.getByText('Submit'));

//     const card = screen.getByTestId('card');
//     expect(card).toBeInTheDocument();
//     expect(card).toHaveTextContent(title);
//     expect(card).toHaveTextContent(author);
//   });
// });
