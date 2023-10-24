import React from "react";
import {
  LimitContainer,
  LimitImg,
  LimitText,
  LimitTitle,
} from "./Limit.styles";
import { LimitData } from "../../../../../../models/limit.model";

interface LimitProps {
  LimitData: LimitData;
}

export const Limit = ({ LimitData }: LimitProps) => {
  return (
    <LimitContainer>
      <LimitImg src={`img/${LimitData.img}.png`} />
      <LimitTitle>{LimitData.title}</LimitTitle>
      <LimitText>
        <strong> {LimitData.value}</strong> / {LimitData.limit} USD
      </LimitText>
    </LimitContainer>
  );
};
