import React from "react";
import { RecentActivitiesData } from "../../../../../../models/recent-activities.model";
import {
  ActivityContainer,
  ActivityDescription,
  ActivityNameDescription,
  ActivityValue,
} from "./Activity.styles";
import ActivityIcon from "../ActivityIcon";

interface ActivityProps {
  recentActivitiesData: RecentActivitiesData;
}

export const Activity = ({ recentActivitiesData }: ActivityProps) => {
  const activityIcon = new ActivityIcon(recentActivitiesData);
  const iconName = activityIcon.getIconName();

  return (
    <ActivityContainer>
      <span className="material-symbols-outlined">{iconName}</span>
      <ActivityNameDescription>
        <h4>{recentActivitiesData.title}</h4>
        <ActivityDescription>{recentActivitiesData.type}</ActivityDescription>
      </ActivityNameDescription>
      <ActivityValue>
        {recentActivitiesData.value}
        <strong> {recentActivitiesData.currency}</strong>
      </ActivityValue>
    </ActivityContainer>
  );
};
