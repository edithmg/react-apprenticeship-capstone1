import styled from 'styled-components';
import { BiVideo } from 'react-icons/bi';
import { Container } from '../../../GlobalStyles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #af2e33;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 1.6rem;
    margin-bottom: 4px;
    background: white;
  }
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;
export const NavIcon = styled(BiVideo)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;
  color: ${(theme) => theme.buttonBg};
  &:hover {
    transform: scale(2);
  }
`;
export const MenuLink = styled.a`
  cursor: pointer;
  font-size: 2rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  color: ${(theme) => theme.buttonBg};
`;

export const Menu = styled.div`
  display: flex;
  width: 330px;
  margin-left: auto;
  position: relative;
  background-color: #af2e33;
  transition: ${({ theme }) => theme.transitionTime};
  @media (max-width: 768px) {
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin-right: -30px;
    margin-top: -85px;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    height: ${({ isOpen }) => (isOpen ? '150px' : '0px')};
  }
`;
export const Logo = styled.a`
  color: ${(theme) => theme.buttonBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: ${({ theme }) => theme.transitionTime};
  &:hover {
    transform: scale(1.08);
  }
`;
