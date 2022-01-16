import React from 'react';
import { Homepage, Title } from './Home.styles.js';
import VideoList from '../../components/VideoList';

const HomePage = () => {
  return (
    <Homepage>
      <Title>Welcome to WZL Player!</Title>
      <VideoList />
    </Homepage>
  );
};

export default HomePage;
