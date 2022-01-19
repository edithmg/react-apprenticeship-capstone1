import React from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import {
  DetailWrapper,
  VideoPlayer,
  VideoInfo,
  RelatedVideos,
  SelectedVideo,
  RVTitle,
} from '../FavDetail/FavDetail.styles';
import FavCard from '../FavCard';
import FavButton from '../FavButton';

const FavDetail = () => {
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  let favorites,
    selected_video,
    related = [];

  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites.find((i) => i.videoId === id)) {
      selected_video = favorites.find((i) => i.videoId === id);
      related = favorites.filter(
        (item) => item.videoId !== selected_video.videoId
      );
    }
  }

  console.log(selected_video.info.snippet.title);

  if (!selected_video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${selected_video.videoId}`;

  return (
    <DetailWrapper>
      <SelectedVideo aria-label="Selected video">
        <VideoPlayer src={videoSrc} />
        <VideoInfo>
          <h3 aria-label={selected_video.info.snippet.title}>
            {selected_video.info.snippet.title}
          </h3>
          <h3>Channel: {selected_video.info.snippet.channelTitle}</h3>
          <h3>Description: {selected_video.info.snippet.description}</h3>
          <h3>{isAuthenticated && <FavButton {...selected_video} />}</h3>
        </VideoInfo>
      </SelectedVideo>

      <RelatedVideos>
        <RVTitle>Favorites playlist</RVTitle>
        {related.map((item) => (
          <FavCard key={item.videoId} {...item.info} />
        ))}
      </RelatedVideos>
    </DetailWrapper>
  );
};

export default FavDetail;
