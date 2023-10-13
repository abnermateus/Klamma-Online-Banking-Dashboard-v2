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
    <aside>
      <SidebarContainer>
        <SidebarHeader>
          <SiderbarLogo src="img/klamma-icon.png"></SiderbarLogo>
          <SidebarTitle>Klamma</SidebarTitle>
        </SidebarHeader>
        <SidebarList>
          <Button text="Overview" icon="home" />
          <Button text="Cards" icon="credit_card" />
          <Button text="Payments" icon="payments" />
          <Button text="Repots" icon="analytics" />
          <Button text="Contacts" icon="contacts" />
        </SidebarList>
        <SidebarList>
          <Button text="Settings" icon="settings" />
          <Button text="Account" icon="person" />
        </SidebarList>
      </SidebarContainer>
    </aside>
  );
};
