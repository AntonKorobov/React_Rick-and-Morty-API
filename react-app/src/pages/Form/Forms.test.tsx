import React from 'react';
import { render, screen } from '@testing-library/react';
import { Forms } from './Forms';
import userEvent from '@testing-library/user-event';

describe('Forms', () => {
  test('renders Forms component', () => {
    render(<Forms />);
    expect(screen.getByText(/Forms page/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Name.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Status.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Species.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/character image/i)).toBeInTheDocument();
  });
  test('doesnt create card after submit form, if required inputs are empty', () => {
    render(<Forms />);
    userEvent.click(screen.getByText('Create character'));
    expect(screen.queryByTestId('card')).not.toBeInTheDocument();
  });
  test('creates card after submit form, if all required inputs filled', () => {
    const name = 'name';
    const status = 'status';
    const species = 'species';
    const type = 'type';

    render(<Forms />);
    userEvent.type(screen.getByLabelText('Name:'), name);
    userEvent.type(screen.getByLabelText('Status:'), status);
    userEvent.type(screen.getByLabelText('Species:'), species);
    userEvent.type(screen.getByLabelText('Type:'), type);

    userEvent.click(screen.getByText('Create character'));

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent(name);
  });
});
