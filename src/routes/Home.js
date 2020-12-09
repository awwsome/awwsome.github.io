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
import Advert from 'components/Advert';

// 유틸리티
import getRandom from 'utility/getRandom';

// 더미데이터
import devVideos from 'data/devVideos';

const Home = ({ history }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [videos, setVideos] = useState([]);
  const [adProduct, setAdProduct] = useState([]);

  const [panelVisible, setPanelVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [exercises, setExercises] = useState([]);

  const DEV_MODE = true;

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
    setVideos([]);
    let videos = [];
    if (DEV_MODE) {
      setVideos(devVideos);
      console.log(videos);
    } else {
      videos = await dbService
        .collection('videos')
        .where('term', '==', term)
        .get();
      console.log(videos);
      videos.forEach((document) => {
        const videoObject = {
          ...document.data(),
        };
        setVideos((prev) => [videoObject, ...prev]);
      });
    }
  };

  const getProduct = async (selectedExercise) => {
    let productArray = [];
    const relativeCategory = getRandom(selectedExercise.instruments);
    const products = await dbService
      .collection('products')
      .where('category', '==', relativeCategory)
      .get();
    products.forEach((doc) => {
      const productObject = {
        ...doc.data(),
      };
      productArray.push(productObject);
    });
    setAdProduct(getRandom(productArray));
  };

  useEffect(() => {
    // getExercises();
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      // window.history.pushState(null, document.title, window.location.href);
      console.log('back');
    });
  });

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
    if (!panelVisible && exercises.length === 0) getExercises();
    setPanelVisible(!panelVisible);
  };

  // 운동 이름 선택하고 비디오 검색

  const handleExerciseSelect = async (exercise) => {
    await setSelectedExercise(exercise);
    getVideos(exercise.displayName);
    getProduct(exercise);
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
          <AdWrapper>{adProduct && <Advert product={adProduct} />}</AdWrapper>
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

const AdWrapper = styled.div`
  padding: 0 16px;
`;
