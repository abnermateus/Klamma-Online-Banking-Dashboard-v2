import React from "react";
import {
  ActivityContainer,
  ActivityDescription,
  ActivityNameDescription,
  ActivityValue,
} from "./Activity.styles";

interface ActivityProps {
  icon: string;
  nameDescription: string;
  description: string;
  activityValue: string;
  country: string;
}

export const Activity = ({
  icon,
  nameDescription,
  description,
  activityValue,
  country,
}: ActivityProps) => {
  return (
    <ActivityContainer>
      <span className="material-symbols-outlined">{icon}</span>
      <ActivityNameDescription>
        <h4>{nameDescription}</h4>
        <ActivityDescription>{description}</ActivityDescription>
      </ActivityNameDescription>
      <ActivityValue>
        {activityValue}
        <strong> {country}</strong>
      </ActivityValue>
    </ActivityContainer>
  );
};
