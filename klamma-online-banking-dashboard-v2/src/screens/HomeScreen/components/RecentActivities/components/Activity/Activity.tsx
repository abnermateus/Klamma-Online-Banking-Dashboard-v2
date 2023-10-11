import React from "react";

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
    <div className="activity">
      <span className="material-symbols-outlined">{icon}</span>
      <div className="name-description">
        <h4>{nameDescription}</h4>
        <p className="description">{description}</p>
      </div>
      <p className="activity-value">
        {activityValue}
        <strong>{country}</strong>
      </p>
    </div>
  );
};
