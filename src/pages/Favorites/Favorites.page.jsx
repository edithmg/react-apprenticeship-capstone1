import React from 'react';
import { FavSection, FavTitle } from './Favorites.styles';
import { useGlobalcontext } from '../../context/GlobalContext';

const FavoritesPage = () => {
  const { favs } = useGlobalcontext();
  console.log(favs);
  return (
    <FavSection>
      <FavTitle>Your favorite videos</FavTitle>
    </FavSection>
  );
};

export default FavoritesPage;
