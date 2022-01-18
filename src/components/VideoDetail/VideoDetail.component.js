import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import {
  DetailWrapper,
  VideoPlayer,
  VideoInfo,
  RelatedVideos,
  SelectedVideo,
  RVTitle,
} from './VideoDetail.styles';
import VideoCard from '../VideoCard/VideoCard.component';
import { useGlobalcontext } from '../../context/GlobalContext';
import FavButton from '../FavButton';

const VideoDetail = () => {
  const { videos, videos_error } = useGlobalcontext();
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  const history = useHistory();
  let selected_video = videos.find((item) => item.id.videoId === id);
  const related = videos.filter(
    (item) => item.id.videoId !== selected_video.id.videoId
  );

  useEffect(() => {
    if (videos_error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [videos_error]);

  if (!selected_video) {
    console.log('here');
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${selected_video.id.videoId}`;

  return (
    <DetailWrapper>
      <SelectedVideo aria-label="Selected video">
        <VideoPlayer src={videoSrc} />
        <VideoInfo>
          <h3 aria-label={selected_video.snippet.title}>
            {selected_video.snippet.title}
          </h3>
          <h3>Channel: {selected_video.snippet.channelTitle}</h3>
          <h3>Description: {selected_video.snippet.description}</h3>
          <h3>{isAuthenticated && <FavButton {...selected_video} />}</h3>
        </VideoInfo>
      </SelectedVideo>

      <RelatedVideos>
        <RVTitle>Related videos</RVTitle>
        {related.map((item) => (
          <VideoCard key={item.id.videoId} {...item} />
        ))}
      </RelatedVideos>
    </DetailWrapper>
  );
};

export default VideoDetail;
