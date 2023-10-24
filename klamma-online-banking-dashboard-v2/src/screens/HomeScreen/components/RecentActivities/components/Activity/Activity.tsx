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
  RecentActivitiesData: RecentActivitiesData;
}

export const Activity = ({ RecentActivitiesData }: ActivityProps) => {
  const activityIcon = new ActivityIcon(RecentActivitiesData); 
  const iconName = activityIcon.getIconName(); 

  return (
    <ActivityContainer>
      <span className="material-symbols-outlined">{iconName}</span>
      <ActivityNameDescription>
        <h4>{RecentActivitiesData.nameDescription}</h4>
        <ActivityDescription>
          {RecentActivitiesData.description}
        </ActivityDescription>
      </ActivityNameDescription>
      <ActivityValue>
        {RecentActivitiesData.value}
        <strong> {RecentActivitiesData.currency}</strong>
      </ActivityValue>
    </ActivityContainer>
  );
};
