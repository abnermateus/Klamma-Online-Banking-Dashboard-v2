import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-areas: "header header" "cards cards" "limits recent-activities" "payments recent-activities";
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto 148px auto;
  align-items: start;
  overflow-y: auto;
  background-color: var(--primary-bg-color);
`;
