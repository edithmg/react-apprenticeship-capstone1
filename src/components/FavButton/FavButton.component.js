import React from 'react';
import { Star } from './FavButton.styles';
import { BiDislike, BiLike } from 'react-icons/bi';

const FavButton = (item) => {
  let favorites = [];
  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
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
      <Star title="Add to favorites">
        <BiLike onClick={addVideo} />
      </Star>
      <Star title="Remove">
        <BiDislike onClick={removeVideo} />
      </Star>
    </>
  );
};

export default FavButton;
