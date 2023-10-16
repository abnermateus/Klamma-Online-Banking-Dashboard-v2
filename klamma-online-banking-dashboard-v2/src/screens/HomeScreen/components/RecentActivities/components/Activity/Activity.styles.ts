import styled from "styled-components";

export const ActivityContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  color: var(--secondary-text-color);
`;

export const ActivityNameDescription = styled.div`
  grid-template-rows: auto auto;
  padding: 8px;
  gap: 8px;
`;

export const ActivityDescription = styled.p`
  font-size: 14px;
  font-weight: 200;
`;

export const ActivityValue = styled.p`
  justify-self: end;
  font-size: 16px;
  font-weight: 400;
`;
