import React from 'react';
import { Star } from './FavButton.styles';
import { BiDislike, BiLike } from 'react-icons/bi';

const FavButton = (item) => {
  let isFavorite = false;
  let favorites = [];
  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }
  if (favorites.find((i) => i.videoId === item.id.videoId)) {
    isFavorite = true;
  }

  const addVideo = () => {
    favorites.push({ videoId: item.id.videoId, info: item });
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const removeVideo = () => {
    favorites = favorites.filter((i) => i.videoId !== item.id.videoId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(localStorage.getItem('favorites'));
  };

  return (
    <>
      {!isFavorite && (
        <Star title="Add to favorites">
          <BiLike onClick={addVideo} />
        </Star>
      )}

      {isFavorite && (
        <Star title="Remove from favorites">
          <BiDislike onClick={removeVideo} />
        </Star>
      )}
    </>
  );
};

export default FavButton;
