import React from 'react';
import { render, screen } from '@testing-library/react';
import { ValidationMessage } from './Validation_Message';

describe('Validation Message', () => {
  test('renders message', () => {
    render(<ValidationMessage className="test" message="test message" />);
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
  });
});
