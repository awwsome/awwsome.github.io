import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import man from '../assets/muscle-man.png';

function OnBoarding({ className }) {
  return (
    <Wrapper className={className}>
      <img src={man} alt="man" className="man" />
      <Text>
        <div>오늘은</div>
        <div>어디를</div>
        <div>조질까</div>
      </Text>
    </Wrapper>
  );
}
export default OnBoarding;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray9};
  // background-image: url(${man});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  background-blend-mode: screen;
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  .man {
    position: absolute;
    height: 100vh;
    top: 0;
    right: -50%;
    opacity: 0.5;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  div {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 6px;
    letter-spacing: -0.05em;
    z-index: 100;
  }
`;
