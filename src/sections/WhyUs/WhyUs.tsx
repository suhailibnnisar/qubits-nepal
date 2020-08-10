import React from "react";
import styled from "styled-components";

import whyUsImage from "assets/whyus.jpg";

const WhyUs: React.FC = () => {
  return (
    <Container>
      <DetailSection>
        <Header>Why Us?</Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a erat
          efficitur, feugiat lectus eget, consectetur magna. Quisque at quam
          tincidunt, convallis felis dignissim, iaculis massa. Fusce non est et
          turpis imperdiet mollis vehicula vitae orci. Nulla at nisi egestas
          quam gravida scelerisque. Pellentesque a tellus facilisis risus porta
          blandit. Nullam et urna sodales nisl bibendum facilisis. Etiam
          hendrerit et enim ut posuere..
        </Description>
        <Description>
          In feugiat vel libero sed laoreet. Curabitur gravida vehicula felis.
          Integer tincidunt orci non diam laoreet maximus. Donec molestie elit
          mattis nunc blandit tempor. Vestibulum pretium enim at leo
          condimentum, in euismod ante egestas. Pellentesque luctus facilisis
          vulputate.
        </Description>
        <LearnMoreLink>Learn More</LearnMoreLink>
      </DetailSection>
      <ImageSection></ImageSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 3rem 0;
  background-color: #f7f9fb;
  padding: 2rem;
  padding-left: 5rem;
`;

const DetailSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 4rem;
`;

const Header = styled.span`
  font-size: 3.5rem;
  font-weight: bolder;
`;

const Description = styled.span`
  margin: 1rem 0;
`;

const LearnMoreLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #27ae60;

  &:hover {
    background-color: #27ae60;
    cursor: pointer;
    color: white;
  }
`;

const ImageSection = styled.div`
  background-image: url(${whyUsImage});
  width: 70%;
  height: 60vh;
  background-size: cover;
  border-radius: 4px;
`;

export default WhyUs;
