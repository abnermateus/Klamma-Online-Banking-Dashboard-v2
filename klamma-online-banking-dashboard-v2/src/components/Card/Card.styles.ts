import styled from "styled-components";
export const CardCurrentAmount = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

export const CardData = styled.div`
  color: var(--secondary-text-color);
  font-size: 15px;
  font-weight: 200;
`;

export const CardComponent = styled.div`
  display: grid;
  padding: 24px;
  width: 320px;
  height: 200px;
  border: none;
  border-radius: 10px;
  background-color: var(--secondary-bg-color);

  &:active {
    transform: scale(1.1);
    background-image: linear-gradient(
      to bottom left,
      #bd6e7e,
      var(--secondary-bg-color),
      #142fbc,
      #0b0d30
    );

    & ${CardCurrentAmount} {
      color: var(--secondary-bg-color);
    }
  }
`;

export const CardImg = styled.img`
  justify-self: start;
  mix-blend-mode: var(--mix-blend-mode);
  width: 32px;
`;
