import React from 'react';
import styled from 'styled-components';
import { truncateString } from '../../utils/fns';
import Card from './VideoCard.styles';
//import { useGlobalcontext } from '../../context/GlobalContext';

const StyledCardBody = styled.div`
  padding: 50px 12px;
`;
const StyledCardContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin: auto;
  border-radius: 10px;
`;

const VideoCard = (item) => {
  return (
    <StyledCardBody>
      <StyledCardContainer>
        <Card
          id={item.id.videoId}
          title={item.snippet.title}
          date={item.snippet.date}
          description={truncateString(item.snippet.description, 120)}
          photo_url={item.snippet.thumbnails.medium.url}
        />
      </StyledCardContainer>
    </StyledCardBody>
  );
};

export default VideoCard;
