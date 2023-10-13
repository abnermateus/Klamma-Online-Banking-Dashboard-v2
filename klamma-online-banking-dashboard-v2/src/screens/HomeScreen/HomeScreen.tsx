import React from "react";
import { Main } from "./HomeScreen.styles";
import Header from "./components/Header";
import Cards from "./components/Cards";
import IntPayments from "./components/IntPayments";
import Limits from "./components/Limits";
import RecentActivities from "./components/RecentActivities";

export const HomeScreen = () => {
  return (
    <Main>
      <Header />
      <Cards />
      <Limits />
      <IntPayments />
      <RecentActivities />
    </Main>
  );
};
