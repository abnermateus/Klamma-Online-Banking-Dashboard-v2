import styled from "styled-components";

export const IntPaymentsContainer = styled.div`
  display: grid;
  grid-area: payments;
  padding: 32px;
  margin: 0px 24px;
  gap: 8px;
`;

export const IntPaymentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const IntPaymentsSummary = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
