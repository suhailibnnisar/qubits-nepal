import React from "react";
import styled from "styled-components";

interface Props {
  service: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const Service: React.FC<Props> = (props) => {
  const { service } = props;
  const { name, description, image } = service;

  return (
    <Container>
      <Image src={image} />
      <Heading>{name}</Heading>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: 1px solid #efefef;
  padding: 1rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 20px 0px;
    cursor: pointer;
  }
`;

const Image = styled.div<{ src: string }>`
  width: 40%;
  height: 100px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Heading = styled.span`
  font-size: 1.4rem;
  color: #111;
  font-weight: bolder;
  margin-top: 2rem;
`;

const Description = styled.span``;

export default Service;
