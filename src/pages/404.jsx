import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { title } from '../siteInfo';

const MainText = styled.h2`
  font-size: 150px;
  color: #1d84b5;
  text-align: center;
  margin: 0;
`;

const SubText = styled(MainText)`
  font-size: 75px;
`;

const NoMatch = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {title}</title>
      </Helmet>
      <div>
        <MainText>404</MainText>
        <SubText>Page Not Found</SubText>
      </div>
    </>
  );
};

export default NoMatch;
