import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Private({ children, ...rest }) {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  );
}
export default Private;
