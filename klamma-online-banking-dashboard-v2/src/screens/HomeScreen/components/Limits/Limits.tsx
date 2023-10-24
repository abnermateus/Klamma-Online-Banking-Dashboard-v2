import React, { useState, useEffect } from "react";
import Limit from "./components/Limit";
import { LimitsContainer } from "./Limits.styles";
import { LimitData } from "../../../../models/limit.model";
import { LimitDataService } from "../../../../services/limit/limit-data.service";

export const Limits = () => {
  const [limits, setLimits] = useState<LimitData[]>([]);

  useEffect(() => {
    getLimit();
  }, []);

  const getLimit = () => {
    LimitDataService.getLimitData()
      .then((limitsList) => setLimits(limitsList))
      .catch(() => alert("Erro ao buscar os limites!"));
  };

  return (
    <LimitsContainer>
      {limits.map((limit) => (
        <Limit key={limit.title} LimitData={limit} />
      ))}
    </LimitsContainer>
  );
};
