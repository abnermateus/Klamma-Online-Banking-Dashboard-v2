import React from "react";
import {
  LimitContainer,
  LimitImg,
  LimitText,
  LimitTitle,
} from "./Limit.styles";
import { LimitData } from "../../../../../../models/limit.model";

interface LimitProps {
  limitData: LimitData;
}

export const Limit = ({ limitData }: LimitProps) => {
  return (
    <LimitContainer>
      <LimitImg src={`img/${limitData.img}.png`} />
      <LimitTitle>{limitData.title}</LimitTitle>
      <LimitText>
        <strong> {limitData.value}</strong> / {limitData.limit} USD
      </LimitText>
    </LimitContainer>
  );
};
