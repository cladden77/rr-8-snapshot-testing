import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Chris Ladden link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chris Ladden/i);
  expect(linkElement).toBeInTheDocument();
});
