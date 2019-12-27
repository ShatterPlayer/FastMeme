import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 120px;
  margin: 40px 0;
  padding: 0 5px;
  box-shadow: 0 0 5px;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;

  @media (max-width: 975px) {
    height: 60px;
    margin: 0;
    box-shadow: none;
    border-radius: 0px;
    flex: 1;
    background-color: ${colors.second};
  }
`;

const Textarea = styled.textarea`
  position: relative;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 20px;
  background: none;
  overflow: hidden;

  @media (max-width: 975px) {
    white-space: nowrap;
  }
`;

const Description = styled.span`
  position: absolute;
  font-weight: 900;
  pointer-events: none;
  transition: 0.4s;
  transform: ${props => (props.focus ? 'translateY(-50px)' : '')};
  font-size: ${props => (props.focus ? '0.8em' : '1em')};

  @media (max-width: 975px) {
    transform: ${props => (props.focus ? 'translateY(-20px)' : '')};
  }
`;

function Text({ description, setText, text }) {
  const [isFocused, toggleFocus] = useState(false);

  useEffect(() => {
    if (text) {
      toggleFocus(true);
    }
  }, []);

  const setTextValidate = value => {
    if (value.search(/[\r\n]/g) === -1) setText(value);
  };

  return (
    <Wrapper>
      <Textarea
        data-testid="inputField"
        value={text}
        onChange={e => setTextValidate(e.currentTarget.value)}
        onFocus={() => toggleFocus(true)}
        onBlur={() => {
          if (!text) toggleFocus(false);
        }}
      />
      <Description focus={isFocused}>{description}</Description>
    </Wrapper>
  );
}

Text.propTypes = {
  description: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Text;
