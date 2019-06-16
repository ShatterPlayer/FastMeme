import React from 'react';
import styled from 'styled-components';

import imageSrc from '../img/logo.svg';

const Img = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Logo = () => <Img src={imageSrc} alt="logo" />;

export default Logo;
