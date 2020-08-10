import React from "react";
import styled from "styled-components";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import foodImage from "assets/food.webp";
import educationImage from "assets/education.webp";

const portfolioItems = [
  {
    id: "1",
    name: "lorem",
    description: "ipsum",
    image: foodImage,
  },
  {
    id: "1",
    name: "lorem",
    description: "ipsum",
    image: educationImage,
  },
  {
    id: "1",
    name: "lorem",
    description: "ipsum",
    image: educationImage,
  },
  {
    id: "1",
    name: "lorem",
    description: "ipsum",
    image: educationImage,
  },
];

const Portfolio: React.FC = () => {
  return (
    <>
      <Heading>Recent Projects</Heading>
      <Caption>lorem ipsum</Caption>
      <Wrapper>
        {portfolioItems.map((portfolio) => {
          return <PortfolioItem portfolio={portfolio} />;
        })}
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

export default Portfolio;
