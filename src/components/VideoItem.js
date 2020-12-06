import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import unescapeHtml from '../utility/unescapeHtml';

function VideoItem({ video, handleVideoSelect }) {
  const thumbnailStyle = {
    backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
  };

  return (
    <Wrapper onClick={() => handleVideoSelect(video)}>
      <div className="thumbnail" style={thumbnailStyle} />
      <TextWrapper>
        <Title>{unescapeHtml(video.snippet.title)}</Title>
        <Creator>
          <span />
          {video.snippet.channelTitle}
        </Creator>
      </TextWrapper>
    </Wrapper>
  );
}

export default VideoItem;

const Wrapper = styled.div`
  display: flex;
  padding: 8px 0;
  margin-bottom: 8px;
  .thumbnail {
    min-width: 40%;
    margin-right: 16px;
    background-size: cover;
    background-position: 50%;
    border-radius: 8px;
    &:after {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }
  }
`;

const TextWrapper = styled.div`
  padding-top: 4px;
  * {
    letter-spacing: -0.05em;
  }
`;

const Title = styled.h5`
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Creator = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray6};
  font-size: 13px;
  span {
    display: inline-block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin-right: 6px;
    background-color: ${colors.cyan4};
  }
`;
