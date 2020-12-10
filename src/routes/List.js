import React, { useState, useEffect } from 'react';

// Firebase & YouTube
import { dbService } from 'api/fbase';

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

const List = ({ history }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [adProduct, setAdProduct] = useState(null);
  const [adProduct2, setAdProduct2] = useState(null);

  const [panelVisible, setPanelVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [exercises, setExercises] = useState([]);

  const DEV_MODE = true;

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      // history.go(1);
    };
  }, []);

  const getExercises = async () => {
    const exercisesFromDB = await dbService
      .collection('exercises')
      .orderBy('id', 'desc')
      .get();
    exercisesFromDB.forEach((document) => {
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
    setProducts([]);
    const relativeCategory = selectedExercise.instruments
      ? getRandom(selectedExercise.instruments)
      : '';
    const productsFromDB = await dbService
      .collection('products')
      .where('category', '==', relativeCategory)
      .get();
    productsFromDB.forEach((doc) => {
      const productObject = {
        ...doc.data(),
      };
      setProducts((prev) => [productObject, ...prev]);
    });
    setAdProduct(getRandom(products));
  };

  // 검색결과 클릭했을 때 모달로 영상 표시

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoVisible(true);
    setAdProduct2(getRandom(products));
  };

  // 영상 표시 모달 닫기

  const handleVideoClose = () => {
    setVideoVisible(false);
    setSelectedVideo(null);
    setAdProduct2(null);
  };

  // 검색 모드 토글

  const handlePanelVisible = () => {
    if (!panelVisible && exercises.length === 0) getExercises();
    setPanelVisible(!panelVisible);
  };

  // 운동 이름 선택하고 비디오 검색
  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    getVideos(exercise.term);
    getProduct(exercise);
    setPanelVisible(false);
  };

  // 되돌리기

  const handleReset = () => {
    setSelectedExercise(null);
  };

  return (
    <MainWrapper>
      <Header handleClick={handleReset} className="app-header" />
      {selectedExercise ? (
        <div className="container">
          <div className="exercise-heading">
            <ExerciseHeading
              exercise={selectedExercise}
              className="exercise-heading"
            />
          </div>
          <AdWrapper>{adProduct && <Advert product={adProduct} />}</AdWrapper>
          <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
        </div>
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
          adProduct={adProduct2}
        />
      )}
    </MainWrapper>
  );
};

export default List;

const MainWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: ${colors.gray9};
  .app-header {
    position: absolute;
    z-index: 101;
  }
  .onboarding {
    padding-top: 48px;
  }
`;

const AdWrapper = styled.div`
  padding: 0 16px;
`;
