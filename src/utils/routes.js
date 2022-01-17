import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DetailPage from '../pages/Detail';
import FavoritesPage from '../pages/Favorites';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/watch/:id" component={DetailPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
