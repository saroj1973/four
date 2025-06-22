import { render, screen } from '@testing-library/react';
import App from './App';

test('renders saroj link', () => {
  render(<App />);
  const linkElement = screen.getByText(/saroj/i);
  expect(linkElement).toBeInTheDocument();
});
