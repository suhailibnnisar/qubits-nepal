import React from "react";
import styled from "styled-components";

import webImage from "assets/web.png";
import digitalMarketingImage from "assets/social.png";
import designImage from "assets/design.png";
import mobileImage from "assets/mobile.png";
import seoImage from "assets/seo.png";
import ideaImage from "assets/idea.png";
import Service from "./Service/Service";

const services = [
  {
    id: "1",
    name: "Digital Marketing",
    description: "lorem ipsum",
    image: digitalMarketingImage,
  },
  {
    id: "2",
    name: "Idea Generation",
    description: "lorem ipsum",
    image: ideaImage,
  },
  {
    id: "3",
    name: "UI & UX Design",
    description: "lorem ipsum",
    image: designImage,
  },
  {
    id: "4",
    name: "Web/Software Development",
    description: "lorem ipsum",
    image: webImage,
  },
  {
    id: "5",
    name: "Android/Ios Development",
    description: "lorem ipsum",
    image: mobileImage,
  },
  {
    id: "6",
    name: "Content Writing & SEO",
    description: "lorem ipsum",
    image: seoImage,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <Heading>We Offer</Heading>
      <Caption>lorem ipsum dolar </Caption>
      <Wrapper>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Wrapper>
    </>
  );
};

const Heading = styled.span`
  font-size: 2rem;
  color: #111;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

const Caption = styled.span`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Services;
