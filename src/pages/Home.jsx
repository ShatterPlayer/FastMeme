import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import { Consumer } from '../components/AppContext';
import MemeCanvas from '../components/MemeCanvas';
import MemeInput from '../components/MemeInput';
import MemeDownload from '../components/MemeDownload';
import Text from '../components/Text';
import NumberPicker from '../components/NumberPicker';

import MemeWrapper from '../wrappers/MemeWrapper';
import TextFieldsWrapper from '../wrappers/TextFieldsWrapper';
import NumberPickersWrapper from '../wrappers/NumberPickersWrapper';

import { title } from '../siteInfo';

const Home = () => {
  ReactGA.pageview('/');

  return (
    <Consumer>
      {value => {
        const {
          topText,
          setTopText,
          bottomText,
          setBottomText,
          fontSize,
          setFontSize,
          verticalOffset,
          setVerticalOffset,
          lineHeight,
          setLineHeight,
          canvasWidth,
          canvas,
          setCanvas,
          image,
          setImage,
          widthOrHeight,
          setWidthOrHeight
        } = value;

        return (
          <>
            <Helmet>
              <title>{title}</title>
              <meta
                name="description"
                content="FastMeme is a small and fast memes creator, that you can use to create classic meme with your picture and text."
              />
              <meta
                name="keywords"
                content="fastmeme, creator, memes, offline, open, source, memecreator"
              />
            </Helmet>
            <MemeWrapper
              canvasWidth={canvasWidth}
              imageExist={!!image}
              widthOrHeight={widthOrHeight}
            >
              <MemeCanvas
                image={image}
                topText={topText}
                bottomText={bottomText}
                verticalOffset={verticalOffset}
                lineHeight={lineHeight}
                setCanvas={setCanvas}
                fontSize={fontSize}
                setFontSize={setFontSize}
                setLineHeight={setLineHeight}
                setVerticalOffset={setVerticalOffset}
                canvasWidth={canvasWidth}
                widthOrHeight={widthOrHeight}
                setWidthOrHeight={setWidthOrHeight}
              />
              <MemeInput setImage={setImage} />
              <MemeDownload canvas={canvas} imageExist={!!image} />
            </MemeWrapper>

            <TextFieldsWrapper>
              <Text
                description="Top Text"
                setText={setTopText}
                text={topText}
              />
              <Text
                description="Bottom Text"
                setText={setBottomText}
                text={bottomText}
              />
            </TextFieldsWrapper>

            <NumberPickersWrapper>
              <NumberPicker
                description="Font Size"
                number={fontSize}
                setNumber={setFontSize}
              />
              <NumberPicker
                description="Text Line Height"
                number={lineHeight}
                setNumber={setLineHeight}
              />
              <NumberPicker
                description="Top and Bottom Gap"
                number={verticalOffset}
                setNumber={setVerticalOffset}
              />
            </NumberPickersWrapper>
          </>
        );
      }}
    </Consumer>
  );
};

export default Home;
