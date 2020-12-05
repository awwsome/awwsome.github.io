import React, { useState, useEffect } from 'react';

// Firebase & YouTube
import { dbService, firebaseConfig } from 'api/fbase';
import youtube from 'api/youtube';

// 스타일 관련
import styled from 'styled-components';
import colors from 'style/colors';
import 'normalize.css';
import 'style/App.scss';

// 컴포넌트
import VideoList from 'components/VideoList';
import VideoDetail from 'components/VideoDetail';
import SearchPanel from 'components/SearchPanel/SearchPanel';
import Header from 'components/Header';
import OnBoarding from 'components/OnBoarding';
import ExerciseHeading from 'components/ExerciseHeading';

// 데이터
import exVids from 'data/exerciseVideos';
import exerciseNames from 'data/exerciseNames';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  const [bodyParts, setBodyParts] = useState([]);
  const getBodyParts = async () => {
    const bodyParts = await dbService.collection('bodyParts').get();
    bodyParts.forEach((document) => console.log(document.data()));
  };

  useEffect(() => {
    getBodyParts();
  }, []);
  const getVideos = (name) => {
    setVideos(exVids[name]);
    // console.log(exVids);
  };

  const searchVideos = async (term, results) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        maxResults: results,
      },
    });
    console.log(response.data.items);
  };

  // 검색결과 클릭했을 때 모달로 영상 표시

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoVisible(true);
  };

  // 영상 표시 모달 닫기

  const handleVideoClose = () => {
    setVideoVisible(false);
  };

  // 검색 모드 토글

  const handlePanelVisible = () => {
    setPanelVisible(!panelVisible);
  };

  // 운동 이름 선택하고 비디오 검색

  const handleSearch = (exercise) => {
    const name = exercise.name;
    getVideos(name);
    setSelectedExercise(exercise);
    setPanelVisible(false);
  };

  // 되돌리기

  const handleReset = () => {
    setVideos([]);
  };

  return (
    <MainWrapper>
      <Header handleClick={handleReset} className="header" />
      {false ||
        exerciseNames.map((exercise, index) => (
          <button
            key={index}
            onClick={() => {
              searchVideos(exercise.displayName, 12);
            }}
          >
            {exercise.displayName}
          </button>
        ))}
      {videos.length > 0 ? (
        <>
          <div className="exercise-heading">
            <ExerciseHeading
              name={selectedExercise.displayName}
              engName={selectedExercise.engName.toUpperCase()}
              desc={selectedExercise.desc}
            />
          </div>
          <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
        </>
      ) : (
        <OnBoarding className="onboarding" />
      )}
      <SearchPanel
        panelVisible={panelVisible}
        handlePanelVisible={handlePanelVisible}
        handleSearch={handleSearch}
      />
      {selectedVideo && (
        <VideoDetail
          visible={videoVisible}
          video={selectedVideo}
          handleVideoClose={handleVideoClose}
        />
      )}
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: ${colors.gray9};
  .exercise-heading {
    padding: 0 16px;
  }
`;
