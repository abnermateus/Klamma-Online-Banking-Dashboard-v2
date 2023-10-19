import React from "react";
import { CreditCard } from "../../models/credit-card.model";
import {
  CardComponent,
  CardImg,
  CardCurrentAmount,
  CardData,
} from "./Card.styles";

interface CardProps {
  CreditCard: CreditCard;
}

export const Card = ({ CreditCard }: CardProps) => {
  return (
    <CardComponent>
      <CardImg src="img/klamma-icon.png" />
      <CardCurrentAmount>
        {CreditCard.currentAmount}
        <strong> {CreditCard.currency}</strong>
      </CardCurrentAmount>
      <CardData> {CreditCard.cardNumber}</CardData>
      <CardData>{CreditCard.cardDate}</CardData>
    </CardComponent>
  );
};