import React from "react";
import styled from "styled-components";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary";
  style?: React.CSSProperties;
}

const colorMapping = {
  primary: "#27ae60",
  secondary: "transparent",
};

const Button: React.FC<Props> = (props) => {
  const { children, icon, iconPosition = "right", ...restProps } = props;
  return (
    // @ts-ignore
    <StyledButton {...restProps}>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  ${({ color = "primary" }) =>
    // @ts-ignore
    `background-color: ${colorMapping[color]}`};
  outline: none;
  cursor: pointer;
  border: ${({ color }) =>
    color === "secondary" ? "1px solid white;" : "1px solid transparent"};
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    ${({ color }) =>
      color === "secondary"
        ? `
      background-color: #2980b9;
      border: 1px solid transparent;
    `
        : null}
  }
`;

export default Button;
