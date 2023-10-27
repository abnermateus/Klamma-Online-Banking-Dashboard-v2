import React, { useState, useEffect } from "react";
import Payments from "./components/Payments";
import { IntPaymentsData } from "../../../../models/int-payments.model";
import { IntPaymentsService } from "../../../../services/intpayments/int-payments.service";
import Day from "../Day";
import {
  IntPaymentsContainer,
  IntPaymentsHeader,
  IntPaymentsSummary,
} from "./IntPayments.styles";

export const IntPayments = () => {
  const [intPayments, setIntPayments] = useState<IntPaymentsData[]>([]);

  useEffect(() => {
    getPayment();
  }, []);

  const getPayment = () => {
    IntPaymentsService.getPayment()
      .then((intPaymentsList) => setIntPayments(intPaymentsList))
      .catch(() => alert("Erro ao buscar os pagamentos!"));
  };

  return (
    <IntPaymentsContainer>
      <IntPaymentsHeader>
        <h2>Int. Payments</h2>
        <Day day="the last 30 days"></Day>
      </IntPaymentsHeader>

      <IntPaymentsSummary>
        {intPayments.map((intPayment) => (
          <Payments key={intPayment.status} intPaymentsData={intPayment} />
        ))}
      </IntPaymentsSummary>
    </IntPaymentsContainer>
  );
};
