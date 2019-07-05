import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const StripesAnimation = keyframes`
  0% {
    top: 0px;
  }

  100% {
    top: -213px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ wORh, canvasWidth }) => `${wORh}: ${canvasWidth}px`}
  box-shadow: 0 0 10px;
  border-radius: 10px;
  order: 2;
  overflow: hidden;

  @media (max-width: 975px) {
    bottom: 50px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const Text = styled.span`
  display: block;
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  z-index: 2;

  @media (max-width: 975px) {
    font-size: 24px;
  }
`;

const StripesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  animation: ${StripesAnimation} 5s infinite linear;
`;

const Stripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 70px;
  background-color: #1d84b5;
  opacity: 0.1;
  transform: rotate(45deg);

  &:nth-child(2) {
    transform: rotate(45deg) translateY(150px);
  }

  &:nth-child(3) {
    transform: rotate(45deg) translateY(300px);
  }

  &:nth-child(4) {
    transform: rotate(45deg) translateY(450px);
  }

  &:nth-child(5) {
    transform: rotate(45deg) translateY(600px);
  }

  &:nth-child(6) {
    transform: rotate(45deg) translateY(750px);
  }

  &:nth-child(7) {
    transform: rotate(45deg) translateY(900px);
  }
`;

const MemeWrapper = ({ children, canvasWidth, imageExist, widthOrHeight }) => (
  <Wrapper canvasWidth={canvasWidth} wORh={widthOrHeight}>
    {children}
    {!imageExist && (
      <Background canvasWidth={canvasWidth}>
        <Text>Place your image here</Text>
        <StripesWrapper>
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
        </StripesWrapper>
      </Background>
    )}
  </Wrapper>
);

MemeWrapper.propTypes = {
  canvasWidth: PropTypes.number.isRequired,
  imageExist: PropTypes.bool.isRequired,
  widthOrHeight: PropTypes.oneOf(['width', 'height']).isRequired
};

export default MemeWrapper;
