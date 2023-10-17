import styled from "styled-components";

export const LimitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-area: limits;
  grid-auto-flow: column;
  padding: 32px;
  margin: 8px 16px 8px 32px;

  @media (max-width: 480px) {
    padding: 32px;
    margin: 24px 16px 24px 16px;
    gap: 16px;
    border: none;
  }
`;
