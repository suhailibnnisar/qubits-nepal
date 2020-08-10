import React from "react";
import styled from "styled-components";

import logo from "assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} />
      <MenuItems>
        <MenuItem>Home</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Testimonials</MenuItem>
        <MenuItem>Clients</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 5%;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.a`
  margin: 0 1rem;
  font-weight: bold;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export default Header;
