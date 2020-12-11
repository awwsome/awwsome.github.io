import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

function ExerciseHeading({ exercise, className }) {
  return (
    <Wrapper className={className}>
      <h3>{exercise.displayName}</h3>
      <h5>{exercise.engName.toUpperCase()}</h5>
      <div className="desc">{exercise.desc}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, ${colors.cyan9} 0%, ${colors.gray9} 70%);
  padding: 100px 20px 32px;
  h3 {
    margin: 0;
    font-size: 28px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: 700;
    letter-spacing: -1px;
  }
  h5 {
    font-size: 11px;
    margin: 0;
    margin-bottom: 8px;
    letter-spacing: 1px;
    color: ${colors.gray6};
    font-weight: 400;
  }
  .desc {
    font-size: 12px;
    color: ${colors.gray4};
  }
`;

export default ExerciseHeading;
