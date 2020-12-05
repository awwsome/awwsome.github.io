import React from 'react';
import VideoItem from './VideoItem';
import styled from 'styled-components';
import colors from '../style/colors';

function VideoList({ videos, handleVideoSelect }) {
  const renderedVideos = videos.map((video, index) => {
    return (
      <VideoItem
        key={index}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return (
    <Container className="ui relaxed divided list">{renderedVideos}</Container>
  );
}

const Container = styled.div`
  padding: 16px 16px 72px;
  background-color: ${colors.gray9};
`;

export default VideoList;
