import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  borderRadius: 20,
  color: '#1D84B5'
};

const Wrapper = styled.div`
  min-width: 245px;
  max-width: 165px;
  display: flex;
  text-align: center;
  font-weight: 900;
  border-radius: ${styles.borderRadius}px;
  margin: 20px 0;
  background-color: white;
`;

const Button = styled.button`
  width: 18%;
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
    background-color: ${styles.color};
    color: white;
  }
`;

const Center = styled.div`
  width: 64%;
  font-size: 15px;
`;

const Input = styled.input`
  text-align: center;
  width: 100%;
  outline: none;
  border: none;
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
