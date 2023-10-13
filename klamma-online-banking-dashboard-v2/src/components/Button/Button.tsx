import React from "react";
import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  text: string;
  icon?: string;
  variant?: "basic" | "contained";
}

export const Button = ({ text, icon, variant = "basic" }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <label>{text}</label>
    </ButtonContainer>
  );
};
