import React from 'react';
import { truncateString } from '../../utils/fns';
import { Link } from 'react-router-dom';
import {
  StyledContent,
  StyledPhoto,
  Title,
  Date,
  Description,
} from './Card.styles';

const Card = (video) => {
  return (
    <StyledContent>
      <Link to={`/watch/${video.id}`}>
        <StyledPhoto src={video.photo_url} />
        <Title>{video.title}</Title>
        <Date>{video.date}</Date>
        <Description>{truncateString(video.description)}</Description>
      </Link>
    </StyledContent>
  );
};

export default Card;
