import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 300vw;
  height: 200vh;
  background-color: ${colors.first};
  transform: rotate(20deg);
  top: -150vh;
  z-index: -1;
`;

const GlobalWrapper = ({ children }) => (
  <Wrapper>
    {children}
    <Background />
  </Wrapper>
);

export default GlobalWrapper;
