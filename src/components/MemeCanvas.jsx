import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Canvas = styled.canvas`
  // If width - 100%, if height - calc(100% - 30px)
  ${({ wORh }) => wORh}: ${({ wORh }) =>
    wORh === 'height' ? 'calc(100% - 30px)' : '100%'};
  z-index: 3;
`;

class MemeCanvas extends Component {
  componentDidMount() {
    const { setCanvas } = this.props;

    this.ctx = this.canvas.getContext('2d');
    setCanvas(this.canvas);
  }

  componentDidUpdate(prevProps) {
    const { image } = this.props;
    if (this.props !== prevProps && image) {
      // Checks if image was changed
      if (prevProps.image !== image) {
        const {
          setFontSize,
          setVerticalOffset,
          setLineHeight,
          setWidthOrHeight
        } = this.props;

        // Changes font size, vertical offset and line height basing on image size
        const base = Math.min(image.height, image.width);
        const divider = 14;
        setFontSize(Math.round(base / divider));
        setVerticalOffset(Math.round(base / divider / 2));
        setLineHeight(Math.round(base / divider));

        // Determine what is bigger - width or height
        if (image.width < image.height) {
          setWidthOrHeight('height');
        } else {
          setWidthOrHeight('width');
        }
      }

      this.refreshImage();

      const {
        topText,
        bottomText,
        verticalOffset,
        lineHeight,
        fontSize
      } = this.props;

      if (topText !== '') {
        // Splits text into lines
        const textLines = this.createTextLines(topText);
        const topOffset = verticalOffset + fontSize / 2;
        // Puts text on image
        this.placeText(textLines, topOffset);
      }

      if (bottomText !== '') {
        const textLines = this.createTextLines(bottomText);
        const topOffset =
          image.height - verticalOffset - lineHeight * (textLines.length - 1);
        this.placeText(textLines, topOffset);
      }
    }
  }

  refreshImage = () => {
    const { image } = this.props;

    // Redraws image
    this.ctx.clearRect(0, 0, image.width, image.height);
    this.ctx.drawImage(image, 0, 0, image.width, image.height);
  };

  createTextLines = text => {
    const { image } = this.props;
    // Calculates maximum line width
    const allowedLineWidth = image.width - 0.2 * image.width;

    // Sets font styles
    this.fontSettings();

    let index = 0;
    let remainingLineWidth = allowedLineWidth;
    const textLines = [];

    const textUppercase = text.toUpperCase();
    // Splits text into words
    const words = textUppercase.split(' ');

    words.forEach(word => {
      const wordWidth = this.ctx.measureText(word).width;
      if (remainingLineWidth < wordWidth && textLines[index]) {
        index += 1;
        remainingLineWidth = allowedLineWidth;
      }

      textLines[index] = textLines[index]
        ? `${textLines[index]} ${word}`
        : word;
      remainingLineWidth -= wordWidth;
    });
    return textLines;
  };

  placeText = (textLines, topOffset) => {
    const {
      lineHeight,
      image: { width }
    } = this.props;

    const x = width / 2;
    let y = topOffset;

    textLines.forEach(line => {
      this.ctx.fillText(line, x, y);
      this.ctx.strokeText(line, x, y);
      y += lineHeight;
    });
  };

  fontSettings = () => {
    const { fontSize } = this.props;
    this.ctx.font = `normal ${fontSize}px Kanit`;
    this.ctx.lineWidth = fontSize / 18;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.strokeStyle = '#000000';
    this.ctx.textAlign = 'center';
  };

  render() {
    const { image, canvasWidth, widthOrHeight } = this.props;
    return (
      <Canvas
        ref={r => {
          this.canvas = r;
        }}
        width={image ? image.width : canvasWidth}
        height={image ? image.height : canvasWidth}
        wORh={widthOrHeight}
      />
    );
  }
}

MemeCanvas.defaultProps = {
  image: null
};

MemeCanvas.propTypes = {
  image: PropTypes.instanceOf(Image),
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  lineHeight: PropTypes.number.isRequired,
  verticalOffset: PropTypes.number.isRequired,
  setCanvas: PropTypes.func.isRequired,
  setVerticalOffset: PropTypes.func.isRequired,
  fontSize: PropTypes.number.isRequired,
  setFontSize: PropTypes.func.isRequired,
  setLineHeight: PropTypes.func.isRequired,

  canvasWidth: PropTypes.number.isRequired,

  widthOrHeight: PropTypes.oneOf(['width', 'height']).isRequired,
  setWidthOrHeight: PropTypes.func.isRequired
};

export default MemeCanvas;
