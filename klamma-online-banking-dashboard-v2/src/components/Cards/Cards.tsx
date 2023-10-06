import React from "react";

interface CardsProps {
  currentAmount: string;
  country: string;
  cardNumber: string;
  cardDate: string;
}

export const Cards = ({
  currentAmount,
  country,
  cardNumber,
  cardDate,
}: CardsProps) => {
  return (
    <div className="card">
      <img alt="" src="img/klamma-icon.png" />
      <span className="current-amount">
        {currentAmount}
        <strong>{country}</strong>
      </span>
      <span className="card-number">{cardNumber}</span>
      <span className="card-date">{cardDate}</span>
    </div>
  );
};
