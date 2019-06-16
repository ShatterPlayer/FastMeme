import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: absolute;
  top: 30px;
  right: 35px;
  width: 150px;
  padding: 8px 0;
  color: white;
  background-color: #1d84b5;
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid #1d84b5;
  transition: 0.4s;
  outline: none;

  &:hover {
    color: #1d84b5;
    background-color: white;
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
