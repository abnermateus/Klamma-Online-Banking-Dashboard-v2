import React from "react";

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
