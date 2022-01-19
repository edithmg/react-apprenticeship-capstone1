import React from 'react';
import Card from '../Card';
import { StyledFavBody, StyledFavContainer } from '../FavCard/FavCard.styles';

const FavCard = (item) => {
  const video = {
    id: item.id.videoId,
    title: item.snippet.title,
    date: item.snippet.date,
    description: item.snippet.description,
    photo_url: item.snippet.thumbnails.medium.url,
  };
  return (
    <StyledFavBody>
      <StyledFavContainer>
        <Card key={video.id} {...video} />
      </StyledFavContainer>
    </StyledFavBody>
  );
};

export default FavCard;
