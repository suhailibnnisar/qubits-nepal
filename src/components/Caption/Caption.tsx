import React from "react";
import styled from "styled-components";

const Caption: React.FC = (props) => {
  const { children } = props;
  return <StyledCaption>{children}</StyledCaption>;
};

const StyledCaption = styled.span`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Caption;
