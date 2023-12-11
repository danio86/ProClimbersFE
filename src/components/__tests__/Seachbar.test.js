import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';

test('renders search input', () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  const inputElement = screen.getByPlaceholderText(/Search Products.../i);
  expect(inputElement).toBeInTheDocument();
});

test('updates on change', () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  const inputElement = screen.getByPlaceholderText(/Search Products.../i);
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement.value).toBe('test');
});