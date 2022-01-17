import styled from 'styled-components';

export const Star = styled.button`
  margin-top: 1rem;
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '20px')};
  background-color: black;
  color: white;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '18px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: #af2e33;
    transform: translateY(-0.5rem) scale(1.02);
    color: white;
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? '18px 30px' : '10px 20px')};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? '12px 20px' : '10px 20px')};
    font-size: ${({ bigFont }) => (bigFont ? '16px' : '18px')};
  }
`;
