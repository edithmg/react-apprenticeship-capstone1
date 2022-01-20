import React from 'react';
import { truncateString } from '../../utils/fns';
import { Link, useLocation } from 'react-router-dom';
import {
  StyledContent,
  StyledPhoto,
  Title,
  Date,
  Description,
} from './Card.styles';

const Card = (video) => {
  const location = useLocation();
  let detailPath = '';
  if (location.pathname.includes('favorites')) {
    detailPath = `/favorites/${video.id}`;
  } else {
    detailPath = `/watch/${video.id}`;
  }
  return (
    <StyledContent>
      <Link to={detailPath}>
        <StyledPhoto src={video.photo_url} />
        <Title>{video.title}</Title>
        <Date>{video.date}</Date>
        <Description>{truncateString(video.description)}</Description>
      </Link>
    </StyledContent>
  );
};

export default Card;
