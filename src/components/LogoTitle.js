// src/components/LogoTitle.js
import React from 'react';
import styled from 'styled-components';
import logoTitle from '../assets/logo-title.png'; // Import the logo title image

const StyledLogoTitle = styled.img`
  height: 100px;
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white}; // Add permanent aesthetic
  padding: 5px 10px;
  border-radius: 5px;
`;

const LogoTitle = () => {
  return <StyledLogoTitle src={logoTitle} alt="One Line Academy Logo and Title" />;
};

export default LogoTitle;
