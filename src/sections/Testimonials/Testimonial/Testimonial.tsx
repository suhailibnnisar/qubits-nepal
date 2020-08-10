import React from "react";
import styled from "styled-components";

interface Props {
  testimonial: {
    id: string;
    imageUri: string;
    name: string;
    role: string;
    content: string;
  };
}

const Testimonial: React.FC<Props> = (props) => {
  const { testimonial } = props;
  const { name, imageUri, role, content } = testimonial;

  return (
    <Container>
      <UserInfo>
        <Avatar src={imageUri} />
        <TextContent>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </TextContent>
      </UserInfo>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 45%;
  border: 1px solid #f6f6f6;
  padding: 1rem;
  background-color: white;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Role = styled.span`
  color: #555;
`;

const Content = styled.span`
  color: #555;
`;

export default Testimonial;
