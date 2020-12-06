import React from 'react';
import styled from 'styled-components';
import ExerciseItem from './ExerciseItem';

function ExerciseList({ exercises, selectedBodyPart, handleExerciseSelect }) {
  return (
    <Container>
      {exercises
        .filter((ex) => ex.bodyPart === selectedBodyPart)
        .map((filteredEx, index) => (
          <ExerciseItem
            key={index}
            exercise={filteredEx}
            handleClick={handleExerciseSelect}
          />
        ))}
    </Container>
  );
}

export default ExerciseList;

const Container = styled.div`
  padding: 16px;
`;
