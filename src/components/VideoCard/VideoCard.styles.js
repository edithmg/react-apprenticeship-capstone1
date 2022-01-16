import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import FavButton from '../FavButton';

const StyledContent = styled.div`
  width: 300px;
  padding: 25px 12px 18px;
  background: #fff;
  :hover {
    background: #e0eaf8;
    cursor: pointer;
  }
`;

const StyledPhoto = styled.img`
  width: 250px;
  height: 120px;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #111823;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Description = styled.p`
  color: #222529;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
`;
const Action = styled.button`
  margin: 0 auto;
  padding: 8px 14px;
  background: #af2e33;
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
    background: black;
  }
`;
const Card = ({ id, title, date, description, photo_url }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <StyledContent>
      <Link to={`/${id}`}>
        <StyledPhoto src={photo_url} />
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
        {isAuthenticated && (
          <Action>
            <FavButton />
          </Action>
        )}
      </Link>
    </StyledContent>
  );
};

export default Card;
