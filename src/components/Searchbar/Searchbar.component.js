import React, { useState } from 'react';
import { useGlobalcontext } from '../../context/GlobalContext';
import { BiSearch } from 'react-icons/bi';
import {
  MenuSearchForm,
  MenuSearchInput,
  MenuSearchBtn,
} from './Searchbar.styles';

const Searchbar = () => {
  const { fetchVideos } = useGlobalcontext();
  //search
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      alert('Please enter video or term to search');
    } else {
      fetchVideos(searchTerm);
    }
  };

  return (
    <MenuSearchForm onSubmit={handleSearchSubmit}>
      <MenuSearchInput
        type="search"
        value={searchTerm}
        placeholder="wizeline"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MenuSearchBtn>
        <BiSearch />
      </MenuSearchBtn>
    </MenuSearchForm>
  );
};

export default Searchbar;
