import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Testing NCIT Link link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing NCIT Link/i);
  expect(linkElement).toBeInTheDocument();
});