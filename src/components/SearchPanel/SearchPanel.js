import React, { useState, useEffect } from 'react';
import { dbService } from 'api/fbase';

import styled, { keyframes } from 'styled-components';
import colors from 'style/colors';

import BodyPartSelector from 'components/SearchPanel/BodyPartSelector';
import ExerciseList from 'components/SearchPanel/ExerciseList';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

SearchPanel.defaultProps = {
  panelVisible: false,
};

function SearchPanel({
  panelVisible,
  handlePanelVisible,
  handleExerciseSelect,
  exercises,
}) {
  const [bodyParts, setBodyParts] = useState([]);

  const getBodyParts = async () => {
    const bodyParts = await dbService
      .collection('bodyParts')
      .orderBy('order', 'desc')
      .get();
    bodyParts.forEach((document) => {
      const bpObject = {
        ...document.data(),
        id: document.id,
      };
      setBodyParts((prev) => [bpObject, ...prev]);
    });
  };
  useEffect(() => {
    getBodyParts();
    return () => {
      setBodyParts([]);
    };
  }, []);

  const [selectedBodyPart, setSelectedBodyPart] = useState('가슴');

  const handleBodyPartSelect = (bodyPart) => {
    setSelectedBodyPart(bodyPart.name);
  };
  return (
    <SearchPanelWrapper>
      {panelVisible ? (
        <>
          <Overlay onClick={handlePanelVisible} />
          <SearchPanelInner>
            <BodyPartSelector
              bodyParts={bodyParts}
              handleBodyPartSelect={handleBodyPartSelect}
              selectedBodyPart={selectedBodyPart}
            />
            <ExerciseWrapper>
              <ExerciseList
                exercises={exercises}
                selectedBodyPart={selectedBodyPart}
                handleExerciseSelect={handleExerciseSelect}
              />
            </ExerciseWrapper>
          </SearchPanelInner>
        </>
      ) : (
        <SearchBtnScrim>
          <SearchBtn onClick={handlePanelVisible}>
            운동 검색하기
            <FontAwesomeIcon icon={faSearch} />
          </SearchBtn>
        </SearchBtnScrim>
      )}
    </SearchPanelWrapper>
  );
}

// Transition

const slideUp = keyframes`
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0px);
  }
`;

const SearchPanelWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 768px;
  bottom: 0;
  z-index: 100;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SearchPanelInner = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${colors.gray9};
  max-width: 768px;
  width: 100%;
  border-radius: 16px 16px 0 0;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const SearchBtnScrim = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const SearchBtn = styled.button`
  background-color: ${colors.cyan4};
  border-radius: 50px;
  height: 50px;
  border: none;
  padding: 0 24px;
  letter-spacing: -1px;
  font-weight: 700;
  box-shadow: 0 2px 12px #3bc9db78;
  svg {
    margin-left: 8px;
  }
`;

const ExerciseWrapper = styled.div`
  height: 250px;
  overflow: auto;
`;

export default SearchPanel;
