import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import man from '../assets/muscle-man.png';

function OnBoarding({ className }) {
  return (
    <Wrapper className={className}>
      <Text>
        <div>오늘은</div>
        <div>어디를</div>
        <div>조져볼까</div>
      </Text>
    </Wrapper>
  );
}
export default OnBoarding;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  background-color: ${colors.gray9};
  background-image: url(${man});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  background-blend-mode: screen;
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
`;

const Text = styled.div`
  div {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 6px;
    letter-spacing: -0.05em;
  }
`;
