import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
`;

const MemeInput = ({ setImage }) => {
  const setImageValidate = file => {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      const reader = new FileReader();

      const image = new Image();
      image.addEventListener('load', () => setImage(image));

      reader.addEventListener('load', () => {
        image.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <Input
      type="file"
      accept="image/png, image/jpeg"
      onChange={e => setImageValidate(e.currentTarget.files[0])}
    />
  );
};

MemeInput.propTypes = {
  setImage: PropTypes.func.isRequired
};

export default MemeInput;
