import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../colors';

const StyledLink = styled(Link)`
  position: absolute;
  top: 30px;
  right: 35px;
  width: 150px;
  padding: 8px 0;
  color: white;
  background-color: ${colors.second};
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid ${colors.second};
  transition: 0.4s;
  outline: none;

  &:hover {
    color: ${colors.second};
    background-color: white;
  }

  @media (max-width: 975px) {
    top: 10px;
    right: 10px;
  }
`;

const Button = ({ location }) => {
  const appPage = !!(location.pathname === '/');
  return (
    <StyledLink to={appPage ? '/about' : '/'}>
      {appPage ? 'About' : 'Go back to app'}
    </StyledLink>
  );
};

Button.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.object
  }).isRequired
};

export default withRouter(Button);
