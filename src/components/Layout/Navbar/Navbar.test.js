import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '../../../context/GlobalContext';
import Navbar from './Navbar.component';

const renderNavbar = () => {
  render(
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GlobalProvider>
  );
};

describe('Renders navbar', () => {
  it('must display navbar element', () => {
    renderNavbar();
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
});
