import React, { useEffect } from 'react';
import { VideoContainer } from './VideoList.styles';
import VideoCard from '../VideoCard/VideoCard.component';
import { useGlobalcontext } from '../../context/GlobalContext';

const VideoList = () => {
  const { videos, videos_loading, videos_error, fetchVideos } =
    useGlobalcontext();

  useEffect(() => {
    fetchVideos('wizeline');
    // eslint-disable-next-line
    }, []);
  if (!videos) {
    return null;
  }

  if (videos_loading) {
    return <h2>loading...</h2>;
  }

  if (videos_error) {
    return <h2>plop</h2>;
  }

  return (
    <VideoContainer>
      {videos
        //.filter((item) => item.id.kind === 'youtube#video')
        .map((item) => (
          <VideoCard key={item.id.videoId} {...item} />
        ))}
    </VideoContainer>
  );
};

export default VideoList;
