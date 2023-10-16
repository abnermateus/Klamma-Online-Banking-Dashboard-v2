import React from "react";
import {
  LimitContainer,
  LimitImg,
  LimitText,
  LimitTitle,
} from "./Limit.styles";

interface LimitProps {
  img: string;
  title: string;
  value: number;
  limit: number;
}

export const Limit = ({ img, title, value, limit }: LimitProps) => {
  return (
    <LimitContainer>
      <LimitImg src={`img/${img}.png`} />
      <LimitTitle>{title}</LimitTitle>
      <LimitText>
        <strong> {value}</strong> / {limit} USD
      </LimitText>
    </LimitContainer>
  );
};
