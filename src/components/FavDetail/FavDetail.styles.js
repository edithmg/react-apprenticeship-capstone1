import styled from 'styled-components';

export const DetailWrapper = styled.section`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-width: 90vw;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SelectedVideo = styled.div`
  width: 70%;
  height: 100%;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const VideoPlayer = styled.iframe`
  height: 500px;
  width: 100%;
`;

export const VideoInfo = styled.div`
  font-weight: 300;
`;

export const RelatedVideos = styled.div`
  margin-top: 2rem;
  width: 30%;
  height: 80vh;
  overflow: scroll;
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const RVTitle = styled.h2`
  margin: 0 auto;
`;
