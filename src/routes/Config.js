import React, { useState, useEffect } from 'react';
import { dbService } from 'api/fbase';
import youtube from 'api/youtube';

import exerciseNames from 'data/exerciseNames';
import videos from 'data/exerciseVideos';

const Config = () => {
  const [newExName, setNewExName] = useState('');
  const [newExDisplayName, setNewExDisplayName] = useState('');
  const [newExEngName, setNewExEngName] = useState('');
  const [newExDesc, setNewExDesc] = useState('');
  const [newExBodyPart, setNewExBodyPart] = useState('');

  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('');
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
  const getVideos = async () => {
    const videos = await dbService
      .collection('videos')
      .orderBy('id', 'desc')
      .get();
    videos.forEach((document) => {
      const exObject = {
        ...document.data(),
        id: document.id,
      };
      setVideos((prev) => [exObject, ...prev]);
    });
  };

  useEffect(() => {
    getExercises();
    getVideos();
    return () => {
      setExercises([]);
      setVideos([]);
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('exercises').add({
      name: newExName,
      displayName: newExDisplayName,
      engName: newExEngName,
      desc: newExDesc,
      bodyPart: newExBodyPart,
    });
    setNewExName('');
    setNewExDisplayName('');
    setNewExEngName('');
    setNewExDesc('');
    setNewExBodyPart('');
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    // switch (name) {
    //   case newExName:
    //     setNewExName(value);
    //     break;
    //   case newExDisplayName:
    //     setNewExDisplayName(value);
    //     break;
    //   case newExEngName:
    //     setNewExEngName(value);
    //     break;
    //   case newExDesc:
    //     setNewExDesc(value);
    //     break;
    //   case newExBodyPart:
    //     setNewExBodyPart(value);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const searchVideos = async (term, resultsNum) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        maxResults: resultsNum,
      },
    });
    let searchedVideos = response.data.items;
    searchedVideos = searchedVideos.map((obj) => ({ ...obj, term: term }));
    for (let i = 0; i < searchedVideos.length; i++) {
      await dbService.collection('videos').add({ ...searchedVideos[i] });
    }
  };

  const searchVideosAll = async () => {
    for (let i = 36; i < exercises.length; i++) {
      await searchVideos(exercises[i].displayName, 20);
      console.log(i, exercises[i].displayName);
    }
  };

  // const iterate = async () => {
  //   for (let i = 0; i < exerciseNames.length; i++) {
  //     await dbService.collection('exercises').add({
  //       id: i,
  //       name: exerciseNames[i].name,
  //       displayName: exerciseNames[i].displayName,
  //       engName: exerciseNames[i].engName,
  //       desc: exerciseNames[i].desc,
  //       bodyPart: exerciseNames[i].bodyPart,
  //     });
  //   }
  // };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="newExName">newExName</label>
          <input
            type="text"
            value={newExName}
            onChange={onChange}
            name="newExName"
            id="newExName"
          />
        </div>
        <div>
          <label htmlFor="newExDisplayName">newExDisplayName</label>
          <input
            type="text"
            value={newExDisplayName}
            onChange={onChange}
            name="newExDisplayName"
            id="newExDisplayName"
          />
        </div>
        <div>
          <label htmlFor="newExEngName">newExEngName</label>
          <input
            type="text"
            value={newExEngName}
            onChange={onChange}
            name="newExEngName"
            id="newExEngName"
          />
        </div>
        <div>
          <label htmlFor="newExDesc">newExDesc</label>
          <input
            type="text"
            value={newExDesc}
            onChange={onChange}
            name="newExDesc"
            id="newExDesc"
          />
        </div>
        <div>
          <label htmlFor="newExBodyPart">newExBodyPart</label>
          <input
            type="text"
            value={newExBodyPart}
            onChange={onChange}
            name="newExBodyPart"
            id="newExBodyPart"
          />
        </div>
        <input type="submit" value="save" />
      </form>
      <h2>비디오 업데이트</h2>
      <select
        name={selectedExercise}
        id={selectedExercise}
        onChange={handleChange}
      >
        {exercises.map((exercise, index) => (
          <option value={exercise.displayName} key={index}>
            {exercise.displayName}
          </option>
        ))}
      </select>

      <div>운동 {exercises.length}개</div>
      <div>영상 {videos.length}개</div>
      <button
        onClick={() => {
          searchVideos(selectedExercise, 15);
        }}
      >
        {selectedExercise} 업데이트
      </button>
      <p />
      <button
        onClick={() => {
          searchVideosAll();
        }}
      >
        update all videos
      </button>
      {/* {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => {
            searchVideos(exercise.displayName, 12);
          }}
        >
          {exercise.displayName}
        </button>
      ))} */}
    </>
  );
};

export default Config;
