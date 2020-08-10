import React from "react";
import styled from "styled-components";

import Testimonial from "./Testimonial/Testimonial";

const testimonials = [
  {
    id: "1",
    imageUri:
      "https://www.truehoney.co.nz/wp-content/uploads/2016/05/guy-square-e1474515955904.jpg",
    name: "Nishchal Banskota",
    role: "CEO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a erat efficitur, feugiat lectus eget, consectetur magna. Quisque at quam tincidunt, convallis felis dignissim, iaculis massa. Fusce non est et turpis imperdiet mollis vehicula vitae orci. Nulla at nisi egestas quam gravida scelerisque. Pellentesque a tellus facilisis risus porta blandit. Nullam et urna sodales nisl bibendum facilisis. Etiam hendrerit et enim ut posuere.",
  },
  {
    id: "1",
    imageUri:
      "https://www.truehoney.co.nz/wp-content/uploads/2016/05/guy-square-e1474515955904.jpg",
    name: "Nishchal Banskota",
    role: "CEO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a erat efficitur, feugiat lectus eget, consectetur magna. Quisque at quam tincidunt, convallis felis dignissim, iaculis massa. Fusce non est et turpis imperdiet mollis vehicula vitae orci. Nulla at nisi egestas quam gravida scelerisque. Pellentesque a tellus facilisis risus porta blandit. Nullam et urna sodales nisl bibendum facilisis. Etiam hendrerit et enim ut posuere.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Container>
      <Heading>Client's Saying</Heading>
      <Wrapper>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f9fb;
  padding: 2rem 0;
`;

const Heading = styled.span`
  font-size: 2rem;
  color: #111;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

export default Testimonials;
