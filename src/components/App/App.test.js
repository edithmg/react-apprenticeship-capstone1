import React from 'react';
import { render, screen } from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalProvider } from '../../context/GlobalContext';
import GlobalStyles from '../../GlobalStyles';
import Navbar from '../Layout/Navbar';
import App from './App.component';

//mocking authorization
jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  // eslint-disable-next-line
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'foobar' },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

const renderApp = () => {
  render(
    <GlobalProvider>
      <Auth0Provider>
        <GlobalStyles />
        <Navbar></Navbar>
        <App />
      </Auth0Provider>
    </GlobalProvider>
  );
};

test('Renders welcome text in the App component', () => {
  renderApp();
  const appElement = screen.getByText(/Welcome to WZL Player!/i);
  expect(appElement).toBeInTheDocument();
});
