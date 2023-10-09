import React from "react";

interface PaymentsProps {
  status: string;
  counter: number;
}

export const Payments = ({ status, counter }: PaymentsProps) => {
  return (
    <div>
      <span>{counter}</span>
      <span>{status}</span>
    </div>
  );
};
