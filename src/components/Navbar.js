import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoTitle from '../assets/logo-title.png';
import BlogLinks from './BlogLinks'; // Import the BlogLinks component

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
`;

const LogoTitle = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <LogoTitle src={logoTitle} alt="One Line Academy Logo and Title" />
      </LogoLink>
      <NavLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <BlogLinks />
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
