import styled from "styled-components";

export const ActivityContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  color: var(--secondary-text-color);

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const ActivityNameDescription = styled.div`
  grid-template-rows: auto auto;
  padding: 8px;
  gap: 8px;

  @media (max-width: 480px) {
    padding: 8px;
    gap: 8px;
    font-size: 14px;
  }
`;

export const ActivityDescription = styled.p`
  font-size: 14px;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ActivityValue = styled.p`
  justify-self: end;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
