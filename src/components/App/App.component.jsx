import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { GlobalProvider } from '../../context/GlobalContext';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import DetailPage from '../../pages/Detail';
import GlobalStyles from '../../GlobalStyles';
import Navbar from '../Layout/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH_DOMAIN}
          clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
          redirectUri={window.location.origin}
          cacheLocation="localstorage"
        >
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={DetailPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Auth0Provider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
