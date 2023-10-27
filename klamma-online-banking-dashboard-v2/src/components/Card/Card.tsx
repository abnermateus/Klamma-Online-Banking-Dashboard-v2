import React from "react";
import { CreditCardData } from "../../models/credit-card.model";
import {
  CardComponent,
  CardImg,
  CardCurrentAmount,
  CardData,
} from "./Card.styles";

interface CardProps {
  creditCardData: CreditCardData;
}

export const Card = ({ creditCardData }: CardProps) => {
  return (
    <CardComponent>
      <CardImg src="img/klamma-icon.png" />
      <CardCurrentAmount>
        {creditCardData.currentAmount}
        <strong> {creditCardData.currency}</strong>
      </CardCurrentAmount>
      <CardData> {creditCardData.number}</CardData>
      <CardData>{creditCardData.date}</CardData>
    </CardComponent>
  );
};
