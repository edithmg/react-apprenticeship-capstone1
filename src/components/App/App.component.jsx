import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalProvider } from '../../context/GlobalContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../GlobalStyles';
import Navbar from '../Layout/Navbar';
import HomePage from '../../pages/Home';
import DetailPage from '../../pages/Detail';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import NotFound from '../../pages/NotFound';
import useDarkTheme from '../../utils/hooks/useDarkTheme';
import { lightTheme, darkTheme } from '../Themes';
import ThemeToggler from '../Layout/ThemeToggler';
//import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <GlobalProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <ThemeProvider theme={selectedTheme}>
          <BrowserRouter>
            <GlobalStyles />
            <Navbar>
              <ThemeToggler themeToggler={themeToggler} selectedTheme={theme} />
            </Navbar>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/watch/:id">
                <DetailPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Auth0Provider>
    </GlobalProvider>
  );
};

export default App;
