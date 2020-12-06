import React, { useState, useEffect } from 'react';

// Firebase & YouTube
import { dbService } from 'api/fbase';
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

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [videos, setVideos] = useState([]);

  const getExercises = async () => {
    const exercises = await dbService
      .collection('exercises')
      .orderBy('id', 'desc')
      .get();
    exercises.forEach((document) => {
      const exObject = {
        ...document.data(),
        id: document.id,
      };
      setExercises((prev) => [exObject, ...prev]);
    });
  };

  const getVideos = async (term) => {
    const videos = await dbService
      .collection('videos')
      .where('term', '==', term)
      .get();
    videos.forEach((document) => {
      const videoObject = {
        ...document.data(),
      };
      setVideos((prev) => [videoObject, ...prev]);
    });
  };

  useEffect(() => {
    getExercises();
    return () => {
      setExercises([]);
      setSelectedExercise('');
    };
  }, []);

  // 검색결과 클릭했을 때 모달로 영상 표시

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video);
    setVideoVisible(true);
  };

  // 영상 표시 모달 닫기

  const handleVideoClose = () => {
    setVideoVisible(false);
    setSelectedVideo('');
  };

  // 검색 모드 토글

  const handlePanelVisible = () => {
    setPanelVisible(!panelVisible);
  };

  // 운동 이름 선택하고 비디오 검색

  const handleExerciseSelect = async (exercise) => {
    await setSelectedExercise(exercise);
    getVideos(exercise.displayName);
    setPanelVisible(false);
  };

  // 되돌리기

  const handleReset = () => {
    setVideos([]);
  };

  return (
    <MainWrapper>
      <Header handleClick={handleReset} className="header" />
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
        handleExerciseSelect={handleExerciseSelect}
        exercises={exercises}
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
