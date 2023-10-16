import styled from "styled-components";

export const LimitContainer = styled.div`
  display: grid;
  grid-template-areas: "img title" "img text";
  grid-template-columns: auto 1fr;
  align-items: center;
  align-content: center;
  gap: 8px;
`;

export const LimitImg = styled.img`
  grid-area: img;
  mix-blend-mode: var(--mix-blend-mode);
`;

export const LimitTitle = styled.h4`
  grid-area: title;
`;

export const LimitText = styled.p`
  grid-area: text;
  color: var(--primary-text-color);
  font-size: 10px;

  & strong {
    font-size: 15px;
  }
`;
