import React, { useState, useEffect } from "react";
import Card from "../../../../components/Card";
import { CardsCarousel, CardsContainer } from "./Cards.styles";
import { CreditCardData } from "../../../../models/credit-card.model";
import { CreditCardService } from "../../../../services/creditcard/credit-card.service";

export const Cards = () => {
  const [cards, setCards] = useState<CreditCardData[]>([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    CreditCardService.getCreditCards()
      .then((cardsList) => setCards(cardsList))
      .catch(() => alert("Erro ao buscar cartão!"));
  };

  return (
    <CardsContainer>
      <CardsCarousel>
        {cards.map((card) => (
          <Card key={card.number} CreditCardData={card} />
        ))}
      </CardsCarousel>
    </CardsContainer>
  );
};
