import React, { useEffect } from "react";
import { CreditCardService } from "../../../../services/creditcard/creditcard.service";
import Card from "../../../../components/Card";
import { CardsCarousel, CardsContainer } from "./Cards.styles";

export const Cards = () => {
  useEffect(() => {
    const getCards = async () => {
      const { data } = await CreditCardService.getCreditCards();

      console.log(data);
    };
    getCards();
  }, []);

  return (
    <CardsContainer>
      <CardsCarousel>
        <Card
          currentAmount="1242.42 "
          currency="USD"
          cardNumber="5495 7381 3759 2321"
          cardDate="04 / 24"
        />
        <Card
          currentAmount="249.00 "
          currency="EUR"
          cardNumber="4535 8933 1673 6770"
          cardDate="05 / 25"
        />
        <Card
          currentAmount="249.00 "
          currency="EUR"
          cardNumber="5363 7205 7398 4138"
          cardDate="01 / 25"
        />
      </CardsCarousel>
    </CardsContainer>
  );
};
