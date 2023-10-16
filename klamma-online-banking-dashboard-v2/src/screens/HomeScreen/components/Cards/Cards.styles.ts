import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-area: cards;
`;

export const CardsCarousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  gap: 24px;
  padding: 40px;
`;
