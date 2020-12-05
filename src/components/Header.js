import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../style/colors';

function Header({ handleClick, className }) {
  return (
    <HeaderWrapper className={className}>
      <Logo onClick={handleClick}>Musclebook</Logo>
      <Link to="/config">config</Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: ${colors.gray9};
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 16px;
  color: ${colors.cyan3};
`;

export default Header;
