import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 300px;
  padding: 25px 12px 18px;
  background: ${({ theme }) => theme.background};
  :hover {
    cursor: pointer;
  }
`;

export const StyledPhoto = styled.img`
  width: 250px;
  height: 120px;
  object-fit: cover;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
`;
