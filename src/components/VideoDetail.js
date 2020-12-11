import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import colors from '../style/colors';
import unescapeHtml from '../utility/unescapeHtml';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Advert from 'components/Advert';

VideoDetail.defaultProps = {
  videoVisible: false,
};

VideoDetail.propTypes = {
  videoVisible: PropTypes.bool,
};

function VideoDetail({ visible, handleVideoClose, video, adProduct }) {
  const opts = {
    height: '210',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <VideoDetailWrapper visible={visible}>
      <VideoDetailOverlay onClick={handleVideoClose} visible={visible} />
      <VideoDetailInner visible={visible}>
        <YouTube videoId={video.id.videoId} opts={opts} />
        <TextWrapper>
          <h5 className="title">{unescapeHtml(video.snippet.title)}</h5>
          <div className="creator">{video.snippet.channelTitle}</div>
        </TextWrapper>
        {adProduct && <Advert product={adProduct} />}
        <CloseBtn onClick={handleVideoClose}>
          <FontAwesomeIcon icon={faChevronDown} />
          닫기
        </CloseBtn>
      </VideoDetailInner>
    </VideoDetailWrapper>
  );
}

export default VideoDetail;

const slideUp = keyframes`
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0px);
  }
`;

const VideoDetailWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.gray9};
  z-index: 999;
  color: #fff;
`;

const VideoDetailOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const VideoDetailInner = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  bottom: 0;
  background-color: ${colors.gray9};
  width: 100%;
  max-width: 768px;
  border-radius: 16px 16px 0 0;
  padding: 16px 16px 64px;
  box-sizing: border-box;
  // min-height: 500px;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const TextWrapper = styled.div`
  margin-top: 12px;
  .title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    line-height: 1.4;
    margin: 0;
    margin-bottom: 10px;
    word-break: break-all;
    letter-spacing: -0.05em;
  }
  .creator {
    display: flex;
    align-items: center;
    color: ${colors.gray6};
    font-size: 13px;
    margin-bottom: 24px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${colors.gray6};
  letter-spacing: -1px;
  font-size: 14px;
  font-weight: 500;
  svg {
    margin-right: 8px;
  }
`;
