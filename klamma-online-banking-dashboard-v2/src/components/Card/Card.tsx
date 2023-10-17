import React from "react";
import {
  CardComponent,
  CardImg,
  CardCurrentAmount,
  CardData,
} from "./Card.styles";

interface CardProps {
  currentAmount: string;
  currency: string;
  cardNumber: string;
  cardDate: string;
}

export const Card = ({
  currentAmount,
  currency,
  cardNumber,
  cardDate,
}: CardProps) => {
  return (
    <CardComponent>
      <CardImg src="img/klamma-icon.png" />
      <CardCurrentAmount>
        {currentAmount}
        <strong>{currency}</strong>
      </CardCurrentAmount>
      <CardData>{cardNumber}</CardData>
      <CardData>{cardDate}</CardData>
    </CardComponent>
  );
};
