import React from "react";
import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  text: string;
  startIcon?: string;
  endIcon?: string;
  variant?: "basic" | "contained";
}

export const Button = ({ text, startIcon, endIcon, variant = "basic" }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>
      {startIcon && <span className="material-symbols-outlined">{startIcon}</span>}
      <label>{text}</label>
      {endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
    </ButtonContainer>
  );
};
