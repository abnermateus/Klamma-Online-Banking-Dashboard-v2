import React from "react";

interface DayProps {
  day: string;
}

export const Day = ({ day }: DayProps) => {
  return (
    <div>
      <h6>{day}</h6>
    </div>
  );
};
