import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  background-color: var(--secondary-bg-color);
  padding-top: 24px;
`;

export const SidebarTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: var(--primary-text-color);
  padding: 0px 16px 0px 16px;
`;

export const SidebarHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 16px 16px;
`;

export const SiderbarLogo = styled.img`
  width: 36px;
`;

export const SidebarList = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 8px 16px 16px 16px;
`;
