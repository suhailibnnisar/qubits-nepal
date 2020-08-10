import React from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

import logo from "assets/logo.png";
import heroImage from "assets/background.jpg";
import Button from "components/Button/Button";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderMenu>
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
      </HeaderMenu>
      <Hero>
        <Heading>Professionalism at Peak</Heading>

        <Caption>We Believe in you idea, so we prefer professionalism.</Caption>

        <CallToAction>
          <Button
            icon={<FaEdit />}
            style={{ marginRight: 10 }}
            color="secondary"
            iconPosition="left"
          >
            &nbsp; SERVICES
          </Button>

          <Button icon={<FaEdit />} iconPosition="left">
            &nbsp; FREE INQUIRY
          </Button>
        </CallToAction>
      </Hero>
    </Container>
  );
};

const Container = styled.div``;

const HeaderMenu = styled.div`
  padding: 10px 50px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 4%;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.a`
  margin: 0 1rem;
  font-weight: bold;
  color: white;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const Hero = styled.div`
  background-image: url(${heroImage});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.span`
  font-size: 3.5rem;
  font-weight: bolder;
  color: white;
`;

const Caption = styled.span`
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
`;

const CallToAction = styled.div`
  display: flex;
`;

export default Header;
