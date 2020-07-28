import React from 'react';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import '../polyfills/canvas-toBlob';

const Button = styled.button`
  outline: none;
  font-size: 18px;
  height: 35px;
  background-color: white;
  color: #121212;
  border: none;
  z-index: 5;
  font-weight: bold;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #1d84b5;
    color: white;
  }
`;

const MemeDownload = ({ canvas, imageExist }) => {
  const saveMeme = e => {
    e.stopPropagation();
    if (canvas && imageExist) {
      canvas.toBlob(blob => {
        FileSaver.saveAs(blob, '*FASTMEME.ML*.JPG');
        ReactGA.event({
          category: 'User',
          action: 'Clicked download button'
        });
      });
    }
  };

  return (
    <Button onClick={e => saveMeme(e)} type="button">
      Save
    </Button>
  );
};

export default MemeDownload;

MemeDownload.defaultProps = {
  canvas: null
};

MemeDownload.propTypes = {
  canvas: PropTypes.instanceOf(HTMLCanvasElement),
  imageExist: PropTypes.bool.isRequired
};
