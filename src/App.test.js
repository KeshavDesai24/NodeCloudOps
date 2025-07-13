import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeCloudOps heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/NodeCloudOps/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders GitHub link', () => {
  render(<App />);
  const linkElement = screen.getByText(/View on GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
