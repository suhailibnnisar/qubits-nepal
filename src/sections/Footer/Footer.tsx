import React from "react";
import styled from "styled-components";

import facebookIcon from "assets/icons/facebook.png";
import instagramIcon from "assets/icons/instagram.png";
import twitterIcon from "assets/icons/twitter.png";

const Footer: React.FC = () => {
  return (
    <Container>
      <CopyrightText>
        © {new Date().getFullYear()} Qubits Incorporation Pvt. Ltd. All rights
        reserved.
      </CopyrightText>
      <SocialMedia>
        <Icon src={facebookIcon} />
        <Icon src={instagramIcon} />
        <Icon src={twitterIcon} />
      </SocialMedia>
    </Container>
  );
};

const Container = styled.div`
  background-color: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyrightText = styled.span`
  color: white;
`;

const SocialMedia = styled.div``;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

export default Footer;
