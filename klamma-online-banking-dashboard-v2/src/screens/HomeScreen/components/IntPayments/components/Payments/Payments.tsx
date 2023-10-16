import React from "react";
import {
  Counter,
  PaymentsContainer,
  PaymentsStatus,
  Status,
} from "./Payments.styles";

interface PaymentsProps {
  status: string;
  counter: number;
}

export const Payments = ({ status, counter }: PaymentsProps) => {
  return (
    <PaymentsContainer>
      <PaymentsStatus>
        <Counter>{counter}</Counter>
        <Status>{status}</Status>
      </PaymentsStatus>
    </PaymentsContainer>
  );
};
