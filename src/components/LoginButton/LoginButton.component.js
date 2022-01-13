import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../../GlobalStyles';
import { BiUserPlus } from 'react-icons/bi';

const LoginButton = () => {
  //auth
  const { loginWithRedirect } = useAuth0();
  return (
    <Button primary onClick={() => loginWithRedirect()}>
      <BiUserPlus title="Login" />
    </Button>
  );
};

export default LoginButton;
