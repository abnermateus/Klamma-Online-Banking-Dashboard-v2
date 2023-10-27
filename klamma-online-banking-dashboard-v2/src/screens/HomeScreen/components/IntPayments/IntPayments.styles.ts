import styled from "styled-components";

export const IntPaymentsContainer = styled.div`
  display: grid;
  grid-area: payments;
  padding: 32px;
  margin: 0px 24px;
  gap: 8px;

  @media (max-width: 480px) {
    padding: 8px;
    margin: 0px 8px;
  }
`;

export const IntPaymentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;

    h6 {
      padding-right: 32px;
    }
  }
`;

export const IntPaymentsSummary = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;
