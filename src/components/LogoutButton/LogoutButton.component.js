import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../../GlobalStyles';
import { BiUserMinus } from 'react-icons/bi';

const LogoutButton = () => {
  //auth
  const { logout } = useAuth0();
  return (
    <Button primary onClick={() => logout()}>
      <BiUserMinus title="Logout" />
    </Button>
  );
};

export default LogoutButton;
