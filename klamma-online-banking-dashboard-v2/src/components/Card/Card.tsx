import React from "react";
import { CreditCardData } from "../../models/credit-card.model";
import {
  CardComponent,
  CardImg,
  CardCurrentAmount,
  CardData,
} from "./Card.styles";

interface CardProps {
  CreditCardData: CreditCardData;
}

export const Card = ({ CreditCardData }: CardProps) => {
  return (
    <CardComponent>
      <CardImg src="img/klamma-icon.png" />
      <CardCurrentAmount>
        {CreditCardData.currentAmount}
        <strong> {CreditCardData.currency}</strong>
      </CardCurrentAmount>
      <CardData> {CreditCardData.number}</CardData>
      <CardData>{CreditCardData.date}</CardData>
    </CardComponent>
  );
};
