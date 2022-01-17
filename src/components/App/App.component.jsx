import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalProvider } from '../../context/GlobalContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../GlobalStyles';
import Navbar from '../Layout/Navbar';
import Routes from '../../utils/routes';
import useDarkTheme from '../../utils/hooks/useDarkTheme';
import { lightTheme, darkTheme } from '../Themes';
import ThemeToggler from '../Layout/ThemeToggler';

const App = () => {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <GlobalProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Navbar>
            <ThemeToggler themeToggler={themeToggler} selectedTheme={theme} />
          </Navbar>
          <Routes />
        </ThemeProvider>
      </Auth0Provider>
    </GlobalProvider>
  );
};

export default App;
