import React from 'react';
import { useParams } from 'react-router';
import {
  DetailWrapper,
  VideoPlayer,
  VideoInfo,
  RelatedVideos,
  SelectedVideo,
} from './VideoDetail.styles';
import VideoCard from '../VideoCard/VideoCard.component';
import { useGlobalcontext } from '../../context/GlobalContext';

const VideoDetail = () => {
  const { videos } = useGlobalcontext();
  const { id } = useParams();
  const selected_video = videos.find((item) => item.id.videoId === id);
  const related = videos.filter(
    (item) => item.id.videoId !== selected_video.id.videoId
  );

  console.log(id, selected_video, related);
  if (!videos) return <h2>plop</h2>;

  const videoSrc = `https://www.youtube.com/embed/${selected_video.id.videoId}`;

  return (
    <DetailWrapper>
      <SelectedVideo>
        <VideoPlayer src={videoSrc} />
        <VideoInfo>
          <h3>{selected_video.snippet.title}</h3>
          <h3>Channel: {selected_video.snippet.channelTitle}</h3>
          <h3>Description: {selected_video.snippet.description}</h3>
        </VideoInfo>
      </SelectedVideo>

      <RelatedVideos>
        <h2>Related videos</h2>
        {related.map((item) => (
          <VideoCard key={item.id.videoId} {...item} />
        ))}
      </RelatedVideos>
    </DetailWrapper>
  );
};

export default VideoDetail;
