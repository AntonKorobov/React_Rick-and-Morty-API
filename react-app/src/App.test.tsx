import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import { createMemoryHistory } from 'history';

describe('ButtonLogin', () => {
  test('should pass', () => {
    const history = createMemoryHistory({ initialEntries: ['/home'] });
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(history.location.pathname).toBe('/home');
    fireEvent.click(getByText('Iniciar sesión'));
    expect(history.location.pathname).toBe('/login');
  });
});
