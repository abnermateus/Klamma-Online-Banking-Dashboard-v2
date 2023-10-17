import styled from "styled-components";

export const RecentActivitiesContainer = styled.div`
  display: grid;
  grid-area: recent-activities;
  gap: 24px;
  padding: 32px;

  @media (max-width: 480px) {
    gap: 16px;
    padding: 24px;
  }
`;

export const RecentActivitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
    }
`;
