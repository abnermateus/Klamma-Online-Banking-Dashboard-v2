import React from "react";

interface LimitProps {
  title: string;
  value: number;
  limit: number;
}

export const Limit = ({ title, value, limit }: LimitProps) => {
  return (
    <div>
      <img alt="" src="img/credit-limit-chart.png" />
      <h4>{title}</h4>
      <p>
        <strong> {value}</strong> / {limit} USD
      </p>
    </div>
  );
};
