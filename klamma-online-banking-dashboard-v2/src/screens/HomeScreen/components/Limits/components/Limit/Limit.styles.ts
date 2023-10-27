import styled from "styled-components";

export const LimitContainer = styled.div`
  display: grid;
  grid-template-areas: "img title" "img text";
  grid-template-columns: auto 1fr;
  align-items: center;
  align-content: center;
  gap: 8px;

  @media (max-width: 480px) {
    grid-template-areas: "img img" "title titlet" "text text";
    align-items: center;
    align-content: center;
    gap: 8px;
  }
`;

export const LimitImg = styled.img`
  grid-area: img;
  mix-blend-mode: var(--mix-blend-mode);

  @media (max-width: 480px) {
    width: 40px;
  }
`;

export const LimitTitle = styled.h4`
  grid-area: title;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const LimitText = styled.p`
  grid-area: text;
  color: var(--primary-text-color);
  font-size: 10px;

  strong {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;

    strong {
      font-size: 14px;
    }
  }
`;
