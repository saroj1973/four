import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shivlal is changing the web contents using cicd pipeline link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shivlal is changing the web contents using cicd pipeline/i);
  expect(linkElement).toBeInTheDocument();
});