import styled from "styled-components";

type ButtonContainerProps = {
  variant: "basic" | "contained";
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: grid;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "basic" &&
    `
    grid-template-columns: auto 1fr;
    text-align: left;
    background-color: transparent;
    gap: 16px;
    font-size: 16px;

    &:hover {
      background-color: var(--button-bg-color);
      color: var(--primary-text-color);
      border-radius: 10px;
    }
    `};

  ${({ variant }) =>
    variant === "contained" &&
    `
    background-color: var(--button-bg-color);
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-text-color);
    `};
`;
