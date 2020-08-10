import React from "react";
import styled from "styled-components";

const Heading: React.FC = (props) => {
  const { children } = props;
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.span`
  font-size: 2rem;
  color: #111;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default Heading;
