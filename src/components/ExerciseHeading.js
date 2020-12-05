import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

function ExerciseHeading({ name, engName, desc }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <h5>{engName}</h5>
      <div className="desc">{desc}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 16px;
  border-radius: 10px;
  h3 {
    margin: 0;
    font-size: 16px;
    margin-bottom: 6px;
    color: #fff;
    font-weight: 500;
  }
  h5 {
    font-size: 11px;
    margin: 0;
    margin-bottom: 8px;
    color: ${colors.gray6};
    font-weight: 400;
  }
  .desc {
    font-size: 12px;
    color: ${colors.gray4};
  }
`;

export default ExerciseHeading;
