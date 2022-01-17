import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../LoginButton';
import LogoutButton from '../../LogoutButton';
import Searchbar from '../../Searchbar';
import {
  Nav,
  NavContainer,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  NavIcon,
} from './Navbar.styles';

const Navbar = ({ children }) => {
  //auth
  const { isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Nav>
        <NavContainer>
          <Logo href="/">
            <NavIcon />
            WZL Player
          </Logo>
          <Searchbar />
          <Menu isOpen={isOpen}>
            <MenuLink> {children}</MenuLink>

            {isAuthenticated && (
              <MenuLink href="/favorites">Favorites</MenuLink>
            )}
            <MenuLink>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </MenuLink>
          </Menu>

          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Navbar;
