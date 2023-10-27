import React from "react";
import Button from "../Button";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SiderbarLogo,
  SidebarList,
} from "./Sidebar.styles";

export const Sidebar = () => {
  return (
      <SidebarContainer>
        <SidebarHeader>
          <SiderbarLogo src="img/klamma-icon.png" />
          <SidebarTitle>Klamma</SidebarTitle>
        </SidebarHeader>
        <SidebarList>
          <Button text="Overview" startIcon="home" />
          <Button text="Cards" startIcon="credit_card" />
          <Button text="Payments" startIcon="payments" />
          <Button text="Repots" startIcon="analytics" />
          <Button text="Contacts" startIcon="contacts" />
        </SidebarList>
        <SidebarList>
          <Button text="Settings" startIcon="settings" />
          <Button text="Account" startIcon="person" />
        </SidebarList>
      </SidebarContainer>
  );
};
