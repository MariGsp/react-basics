import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders Task: Add three Card elements', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task: Add three Card elements/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
