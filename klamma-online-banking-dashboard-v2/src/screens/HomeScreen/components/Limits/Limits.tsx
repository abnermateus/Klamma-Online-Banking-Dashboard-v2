import React from "react";
import Limit from "./components/Limit";
import { LimitsContainer } from "./Limits.styles";

export const Limits = () => {
  return (
    <LimitsContainer>
      <Limit
        img="credit-limit-chart"
        title="Credit limit"
        value={1500}
        limit={2000}
      />
      <Limit
        img="online-limit-chart"
        title="Online limit"
        value={1324}
        limit={1500}
      />
    </LimitsContainer>
  );
};
