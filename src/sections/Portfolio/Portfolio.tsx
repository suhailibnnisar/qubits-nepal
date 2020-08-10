import React from "react";
import styled from "styled-components";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

import foodImage from "assets/projects/food.webp";
import educationImage from "assets/projects/education.webp";
import eCommerceImage from "assets/projects/e-commerce.webp";
import digitalMarketingImage from "assets/projects/digitalmarketing.webp";
import Heading from "components/Heading/Heading";
import Caption from "components/Caption/Caption";

const portfolioItems = [
  {
    id: "1",
    name: "Food Delivery App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lacus, imperdiet id lectus sed, faucibus venenatis erat. Nullam ut tellus a leo finibus ornare placerat eget massa.",
    image: foodImage,
  },
  {
    id: "1",
    name: "Online Learning App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lacus, imperdiet id lectus sed, faucibus venenatis erat. Nullam ut tellus a leo finibus ornare placerat eget massa.",
    image: educationImage,
  },
  {
    id: "1",
    name: "Bits Digital Marketing Bundle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lacus, imperdiet id lectus sed, faucibus venenatis erat. Nullam ut tellus a leo finibus ornare placerat eget massa.",
    image: digitalMarketingImage,
  },
  {
    id: "1",
    name: "Fujinto Shopping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lacus, imperdiet id lectus sed, faucibus venenatis erat. Nullam ut tellus a leo finibus ornare placerat eget massa.",
    image: eCommerceImage,
  },
];

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio">
      <Heading>Recent Projects</Heading>
      <Caption>"We love to move fast"</Caption>
      <Wrapper>
        {portfolioItems.map((portfolio) => {
          return <PortfolioItem portfolio={portfolio} />;
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

export default Portfolio;
