import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  grid-area: header;
  gap: 8px;
  padding: 32px 16px 16px 32px;

  @media (max-width: 480px) {
    padding: 16px 24px 16px 24px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeaderImg = styled.img`
  justify-self: end;
  mix-blend-mode: var(--mix-blend-mode);
  width: 48px;

  @media (max-width: 480px) {
    justify-self: start;
    margin: 0px 0px 0px 48px;
    width: 36px;
  }
`;
