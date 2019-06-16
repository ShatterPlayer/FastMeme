import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  width: '220px',
  height: '120px'
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${styles.width};
  height: ${styles.height};
  margin: 40px 0;
`;

const Textarea = styled.textarea`
  position: relative;
  width: ${styles.width};
  height: ${styles.height};
  resize: none;
  border-radius: 15px;
  outline: none;
  border: none;
  box-shadow: 0 0 5px;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 20px;
`;

const Description = styled.span`
  position: absolute;
  font-weight: 900;
  pointer-events: none;
  transition: 0.4s;
  transform: ${props => (props.focus ? 'translateY(-50px)' : '')};
  font-size: ${props => (props.focus ? '0.8em' : '1em')};
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
