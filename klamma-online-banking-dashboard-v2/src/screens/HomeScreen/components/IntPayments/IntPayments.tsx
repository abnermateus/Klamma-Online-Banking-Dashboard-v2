import React from "react";
import Payments from "./components/Payments";
import Day from "../Day";
import { IntPaymentsContainer, IntPaymentsHeader, IntPaymentsSummary } from "./IntPayments.styles";

export const IntPayments = () => {
  return (
    <IntPaymentsContainer>
      <IntPaymentsHeader>
        <h2>Int. Payments</h2>
        <Day day="the last 30 days"></Day>
      </IntPaymentsHeader>

      <IntPaymentsSummary>
        <Payments status="Awaiting" counter={8} />
        <Payments status="In progress" counter={5} />
        <Payments status="Completed" counter={12} />
        <Payments status="Cancelled" counter={4} />
      </IntPaymentsSummary>
    </IntPaymentsContainer>
  );
};
