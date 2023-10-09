import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import IntPayments from "./components/IntPayments";
import Limits from "./components/Limits";
import RecentActivities from "./components/RecentActivities";

export const HomeScreen = () => {
  return (
    <body>
      <Sidebar />

      <main>
        <Header />
        <Cards />
        <Limits />
        <IntPayments />
        <RecentActivities />
      </main>
      
    </body>
  );
};
