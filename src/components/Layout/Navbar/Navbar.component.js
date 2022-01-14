import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BiMenu, BiX, BiAdjust } from 'react-icons/bi';
import { Button } from '../../../GlobalStyles';
import LoginButton from '../../LoginButton';
import LogoutButton from '../../LogoutButton';
import Searchbar from '../../Searchbar';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuLinkBtn,
} from './Navbar.styles';

const Navbar = () => {
  //auth
  const { isAuthenticated } = useAuth0();

  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <header>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            WZL Player
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>
          <Menu onClick={handleClick} click={click}>
            <Searchbar />
            {isAuthenticated && (
              <MenuItem>
                <MenuLink to="/favorites">Favorites</MenuLink>
              </MenuItem>
            )}

            <MenuLinkBtn>
              <Button primary>
                {' '}
                <BiAdjust />
              </Button>
            </MenuLinkBtn>
            <MenuLinkBtn>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </MenuLinkBtn>
          </Menu>
        </NavbarContainer>
      </Nav>
    </header>
  );
};

export default Navbar;
