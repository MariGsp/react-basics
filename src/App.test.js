import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task: Add three Card elements', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task: Add three Card elements/i);
  expect(linkElement).toBeInTheDocument();
});
