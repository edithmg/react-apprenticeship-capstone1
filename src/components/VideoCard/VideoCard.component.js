import React from 'react';
import styled from 'styled-components';
import { truncateString } from '../../utils/fns';
import Card from './VideoCard.styles';
import { useGlobalcontext } from '../../context/GlobalContext';

const StyledCardBody = styled.div`
  padding: 50px 12px;
`;
const StyledCardContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #d3d3d4;
`;

const VideoCard = (item) => {
  const { singleVideoSelect } = useGlobalcontext();
  return (
    <StyledCardBody>
      <StyledCardContainer>
        <Card
          id={item.id.videoId}
          title={item.snippet.title}
          date={item.snippet.date}
          description={truncateString(item.snippet.description, 120)}
          photo_url={item.snippet.thumbnails.medium.url}
          onClick={() => singleVideoSelect(item)}
        />
      </StyledCardContainer>
    </StyledCardBody>
  );
};

export default VideoCard;
