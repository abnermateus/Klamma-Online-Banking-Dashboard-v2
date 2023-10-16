import React from "react";
import Button from "../../../../components/Button";
import { HeaderContainer, HeaderImg, HeaderTitle } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Your Cards</HeaderTitle>
      <Button text="New card" endIcon="add" variant="contained" />
      <HeaderImg src="img/bell-notification.png" />
    </HeaderContainer>
  );
};
