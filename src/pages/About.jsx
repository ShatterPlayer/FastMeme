import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { title } from '../siteInfo';

const Wrapper = styled.div`
  width: 70%;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20px #121212;
  box-sizing: border-box;

  & h2 {
    color: #1d84b5;
    margin: 0;
    font-size: 20px;
  }

  & p {
    margin-top: 0;
  }

  & a {
    color: #1d84b5;
    font-weight: bold;
  }

  @media (max-width: 975px) {
    font-size: 13px;
    width: 90%;
    padding: 10px;
  }
`;

const About = () => {
  ReactGA.pageview('/about');
  return (
    <>
      <Helmet>
        <title>About {title}</title>
        <meta
          name="description"
          content="FastMeme about page. You can find here general information about app, contributing and contact."
        />
        <meta
          name="keywords"
          content="fastmeme, creator, memes, offline, open, source, memecreator"
        />
      </Helmet>
      <Wrapper>
        <h2>About FastMeme</h2>
        <p>
          FastMeme is a small and fast open-source web application, that can be
          used to create simple, classic memes. The whole source code of this
          app is available on GitHub. You do not need internet connection - just
          visit FastMeme.netlify.app even if you are offline.
        </p>
        <h2>Contributing</h2>
        <p>
          If you want to contribute to FastMeme, you can share your idea in
          issues section on
          <a
            href="https://github.com/ShatterPlayer/FastMeme"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            FastMeme GitHub Page
          </a>
          . You are always welcome there, regardless of your programming
          experience.
        </p>
        <h2>Contact</h2>
        <p>If you have any questions about FastMeme app, let me know.</p>
        <p>
          <b>My E-mail: ShatterPlayer@gmail.com</b>
        </p>
      </Wrapper>
    </>
  );
};

export default About;
