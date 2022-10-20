import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './Main_Page';

describe('MainPage', () => {
  test('renders MainPage component', () => {
    render(<MainPage />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    expect(screen.getByAltText(/search button/i)).toBeInTheDocument();
  });
});
