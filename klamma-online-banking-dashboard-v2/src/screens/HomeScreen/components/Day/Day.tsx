import React from "react";
import { DayTitle } from "./Day.styles";

interface DayProps {
  day: string;
}

export const Day = ({ day }: DayProps) => {
  return <DayTitle>{day}</DayTitle>;
};
