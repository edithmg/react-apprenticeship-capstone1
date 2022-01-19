import React, { useEffect } from 'react';
import { VideoContainer } from './VideoList.styles';
import VideoCard from '../VideoCard';
import { useGlobalcontext } from '../../context/GlobalContext';
import Error from '../Error';
import Loading from '../Loading';

const VideoList = () => {
  const { videos, videos_loading, videos_error, fetchVideos } =
    useGlobalcontext();

  useEffect(() => {
    fetchVideos('wizeline');
    // eslint-disable-next-line
    }, []);
  console.log(videos);
  if (!videos) {
    return null;
  }

  if (videos_loading) {
    return <Loading />;
  }

  if (videos_error) {
    return <Error />;
  }

  return (
    <VideoContainer>
      {videos.map((item) => (
        <VideoCard key={item.id.videoId} {...item} />
      ))}
    </VideoContainer>
  );
};

export default VideoList;
