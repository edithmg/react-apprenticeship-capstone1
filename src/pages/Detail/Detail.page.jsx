import React from 'react';
import { Detail } from './Detail.styles';
import VideoDetail from '../../components/VideoDetail';

const DetailPage = () => {
  return (
    <Detail>
      <VideoDetail video />
    </Detail>
  );
};

export default DetailPage;
