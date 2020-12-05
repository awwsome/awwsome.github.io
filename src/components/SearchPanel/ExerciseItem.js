import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ExerciseItem({ exercise, handleClick }) {
  return (
    <Wrapper onClick={() => handleClick(exercise)} id={exercise.term}>
      <div className="header">
        <h5>{exercise.displayName}</h5>
        <div>{exercise.engName.toUpperCase()}</div>
      </div>
      <div className="desc">{exercise.desc}</div>
      <FontAwesomeIcon icon={faChevronRight} className="chevron" />
    </Wrapper>
  );
}

export default ExerciseItem;

const Wrapper = styled.div`
  position: relative;
  color: #fff;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  // border-left: 4px solid ${colors.cyan4};
  padding: 12px;
  letter-spacing: -0.025em;
  .header {
    margin-bottom: 6px;
    h5 {
      margin: 0 8px 0 0;
      display: inline-block;
      font-weight: 500;
      margin-bottom: 4px;
    }
    div {
      font-size: 10px;
      letter-spacing: 0.1em;
      color: ${colors.gray6};
    }
  }
  .desc {
    font-size: 12px;
    color: ${colors.gray4};
  }
  .chevron {
    position: absolute;
    height: 10px;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
