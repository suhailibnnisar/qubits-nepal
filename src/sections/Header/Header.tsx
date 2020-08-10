import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
// @ts-ignore
import Scrollspy from "react-scrollspy";

import logo from "assets/logo.png";
import heroImage from "assets/background.jpg";
import Button from "components/Button/Button";

const sections = [
  "home",
  "services",
  "about-us",
  "portfolio",
  "testimonials",
  "contact",
];

const Header: React.FC = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef<any>();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container id="home">
      <HeaderMenu navBackground={navBackground}>
        <Logo src={logo} />
        <MenuItems navBackground={navBackground}>
          <Scrollspy items={sections} currentClassName="__current">
            <MenuItem href="#home">Home</MenuItem>
            <MenuItem href="#services">Services</MenuItem>
            <MenuItem href="#about-us">Why Us</MenuItem>
            <MenuItem href="#portfolio">Portfolio</MenuItem>
            <MenuItem href="#testimonials">Testimonials</MenuItem>
            <MenuItem href="#contact">Contact</MenuItem>
          </Scrollspy>
        </MenuItems>
      </HeaderMenu>

      <Hero>
        <Heading>Professionalism at Peak</Heading>
        <Caption>We Believe in you idea, so we prefer professionalism.</Caption>
        <CallToAction>
          <Button
            onClick={() => window.location.replace("/#services")}
            icon={<FaEdit />}
            style={{ marginRight: 10 }}
            color="secondary"
            iconPosition="left"
          >
            &nbsp; SERVICES
          </Button>

          <Button
            onClick={() => window.location.replace("/#contact")}
            icon={<FaEdit />}
            iconPosition="left"
          >
            &nbsp; FREE INQUIRY
          </Button>
        </CallToAction>
      </Hero>
    </Container>
  );
};

const Container = styled.div``;

const HeaderMenu = styled.div<{ navBackground: boolean }>`
  padding: 10px 50px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;

  ${({ navBackground }) =>
    navBackground &&
    `
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 20px 0px;
  `}
`;

const Logo = styled.img`
  width: 4%;
`;

const MenuItems = styled.div<{ navBackground: boolean }>`
  display: flex;
  justify-content: space-between;

  ${({ navBackground }) =>
    navBackground &&
    `
    & a {
      color: #333;
    }
  `}
`;

const MenuItem = styled.a`
  margin: 0 1rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #27ae60;
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
