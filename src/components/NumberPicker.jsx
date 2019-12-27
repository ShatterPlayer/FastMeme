import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../colors';

const styles = {
  borderRadius: 20
};

const Wrapper = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  text-align: center;
  font-weight: 900;
  border-radius: ${styles.borderRadius}px;
  margin: 20px 0;
  background-color: white;
  box-shadow: 0 0 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 975px) {
    flex: 1;
    border-radius: 0px;
    box-shadow: none;
    margin: 0;
    background-color: ${colors.second};
  }
`;

const Button = styled.button`
  width: 18%;
  height: 100%;
  outline: none;
  background-color: white;
  border: none;
  border-radius: ${({ children }) =>
    children === '+'
      ? `${styles.borderRadius}px 0 0 ${styles.borderRadius}px`
      : `0 ${styles.borderRadius}px ${styles.borderRadius}px 0`};

  transition: 0.4s;
  font-size: 22px;

  &:hover {
    background-color: ${colors.second};
    color: white;
  }

  @media (max-width: 975px) {
    display: none;
  }
`;

const Center = styled.div`
  width: 64%;
  font-size: 13px;

  @media (max-width: 975px) {
    width: 100%;
  }
`;

const Input = styled.input`
  text-align: center;
  width: 100%;
  outline: none;
  border: none;
  background: none;
`;

const NumberPicker = ({ setNumber, number, description }) => {
  let input;

  const setNumberValidate = givenValue => {
    const value = parseInt(givenValue, 10);
    if (Number.isInteger(value) && value >= 1) {
      setNumber(value);
    }
  };

  return (
    <Wrapper>
      <Button type="button" onClick={() => setNumberValidate(number + 1)}>
        +
      </Button>
      <Center>
        {description}
        <Input
          type="text"
          onChange={e => setNumberValidate(e.currentTarget.value)}
          ref={r => {
            input = r;
          }}
          onFocus={() => input.select()}
          value={number}
          min="1"
          data-testid="number_input"
        />
      </Center>
      <Button type="button" onClick={() => setNumberValidate(number - 1)}>
        -
      </Button>
    </Wrapper>
  );
};

NumberPicker.propTypes = {
  description: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired
};

export default NumberPicker;
