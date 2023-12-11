import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from '../Product';

const mockProduct = {
  _id: '1',
  name: 'Test Product',
  image: 'test.jpg',
  price: 100,
  rating: 4.5,
  numReviews: 12,
};

test('renders product name', () => {
  render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/Test Product/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders product price', () => {
  render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  const priceElement = screen.getByText(/100 €/i);
  expect(priceElement).toBeInTheDocument();
});

test('renders product rating', () => {
  render(
    <BrowserRouter>
      <Product product={mockProduct} />
    </BrowserRouter>
  );

  const ratingElement = screen.getByText(/4.5 from 12 reviews/i);
  expect(ratingElement).toBeInTheDocument();
});