import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '../../context/GlobalContext';
import Searchbar from '../Searchbar/Searchbar.component';

const renderSearchbar = () => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Searchbar />
      </BrowserRouter>
    </GlobalProvider>
  );
};

describe('Renders searchbar component', () => {
  it('should display searchbar and its placeholder', () => {
    renderSearchbar();
    const searchElement = screen.getByPlaceholderText('wizeline');
    expect(searchElement).toBeInTheDocument();
  });
});
