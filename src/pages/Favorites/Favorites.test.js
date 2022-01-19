import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritesPage from './Favorites.page';

const renderFavorites = () => {
  render(<FavoritesPage />);
};

test('Renders Favorites section', () => {
  renderFavorites();
  const navElement = screen.getByText('Your favorite videos');
  expect(navElement).toBeInTheDocument();
});
