import styled from "styled-components";

export const PaymentsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 24px 8px 24px;
    width: 60px;
    border: none;
  }
`;

export const PaymentsStatus = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Counter = styled.span`
  justify-self: center;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Status = styled.span`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
