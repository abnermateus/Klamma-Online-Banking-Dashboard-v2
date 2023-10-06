import React from "react";

interface ButtonProps {
  text: string;
  icon: string;
}

export const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button>
      <span className="material-symbols-outlined">{icon}</span>
      <label>{text}</label>
    </button>
  );
};
