import React from "react";
import styled from "styled-components";

interface Props {
  portfolio: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

const PortfolioItem: React.FC<Props> = (props) => {
  const { portfolio } = props;
  const { name, description, image } = portfolio;

  return (
    <Container>
      <Image src={image} />
      <ContentInfo>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </ContentInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: 1px solid #efefef;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 20px 0px;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContentInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.4rem;
  color: #111;
  font-weight: bolder;
`;

const Description = styled.span``;

export default PortfolioItem;
