import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  grid-area: header;
  gap: 8px;
  padding: 32px 16px 16px 32px;
`;

export const HeaderTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;

export const HeaderImg = styled.img`
  justify-self: end;
  mix-blend-mode: var(--mix-blend-mode);
  width: 48px;
`;

