import React from 'react';
import { FavContainer } from '../ShowFavorites/ShowFavorites.styles';
import VideoCard from '../VideoCard';

const ShowFavorites = () => {
  let favorites = [];
  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  return (
    <FavContainer>
      {favorites.map((item) => (
        <VideoCard key={item.videoId} {...item.info} />
      ))}
    </FavContainer>
  );
};

export default ShowFavorites;
