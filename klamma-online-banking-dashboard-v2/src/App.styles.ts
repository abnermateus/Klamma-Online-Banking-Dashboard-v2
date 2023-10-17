import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
  width: 100vw;

  @media (max-width: 480px) {
    grid-template-columns: 55px 1fr;
  }
`;
