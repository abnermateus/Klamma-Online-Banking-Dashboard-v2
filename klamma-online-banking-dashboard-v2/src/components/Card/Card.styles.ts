import styled from "styled-components";

export const CardCurrentAmount = styled.span`
  font-size: 20px;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardData = styled.span`
  color: var(--secondary-text-color);
  font-size: 15px;
  font-weight: 200;

  @media (max-width: 480px) {
    font-size: 12px;
  }
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

  @media (max-width: 480px) {
    width: 260px;
    height: 180px;
  }
`;

export const CardImg = styled.img`
  justify-self: start;
  mix-blend-mode: var(--mix-blend-mode);
  width: 32px;

  @media (max-width: 480px) {
    width: 24px;
  }
`;
