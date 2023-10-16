import React from "react";
import {
  CardComponent,
  CardImg,
  CardCurrentAmount,
  CardData,
} from "./Card.styles";

interface CardProps {
  currentAmount: string;
  country: string;
  cardNumber: string;
  cardDate: string;
}

export const Card = ({
  currentAmount,
  country,
  cardNumber,
  cardDate,
}: CardProps) => {
  return (
    <CardComponent>
      <CardImg src="img/klamma-icon.png" />
      <CardCurrentAmount>
        {currentAmount}
        <strong>{country}</strong>
      </CardCurrentAmount>
      <CardData>{cardNumber}</CardData>
      <CardData>{cardDate}</CardData>
    </CardComponent>
  );
};
