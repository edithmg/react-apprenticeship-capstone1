import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading';

const Private = ({ children, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/" />)}
    />
  );
};
export default Private;
