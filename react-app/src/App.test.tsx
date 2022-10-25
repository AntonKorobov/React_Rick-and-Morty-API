import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { App } from 'App';
import userEvent from '@testing-library/user-event';

describe('Routing', () => {
  test('renders main page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId(/main-page/i)).toBeInTheDocument();
  });
  test('renders forms-page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/form/i));
    expect(screen.getByText(/forms page/i)).toBeInTheDocument();
  });
  test('renders about-page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/about us/i));
    expect(screen.getByText(/about us page/i)).toBeInTheDocument();
  });
  test('renders 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/unexpected route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Error!/i)).toBeInTheDocument();
  });
});
