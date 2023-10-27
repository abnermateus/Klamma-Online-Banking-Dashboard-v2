import React, { useState, useEffect } from "react";
import Day from "../Day";
import Activity from "./components/Activity";
import Button from "../../../../components/Button";
import { RecentActivitiesService } from "../../../../services/recentactivities/recent-activities.service";
import {
  RecentActivitiesContainer,
  RecentActivitiesHeader,
} from "./RecentActivities.styles";
import { RecentActivitiesData } from "../../../../models/recent-activities.model";

export const RecentActivities = () => {
  const [recentActivities, setRecentActivities] = useState({
    todayActivities: [] as RecentActivitiesData[],
    yesterdayActivities: [] as RecentActivitiesData[],
  });

  useEffect(() => {
    getRecentActivities();
  }, []);

  const getRecentActivities = () => {
    RecentActivitiesService.getRecentActivities()
      .then((recentActivitiesList) => setRecentActivities(recentActivitiesList))
      .catch(() => alert("Erro ao buscar as atividades recentes!"));
  };

  return (
    <RecentActivitiesContainer>
      <RecentActivitiesHeader>
        <h2>Recent Activities</h2>
        <Button text="View a report" variant="contained"></Button>
      </RecentActivitiesHeader>

      <div>
        <div>
          <Day day="Today" />
        </div>
        {recentActivities.todayActivities.map((recentActivity) => (
          <Activity
            key={recentActivity.title}
            recentActivitiesData={recentActivity}
          />
        ))}
      </div>

      <div>
        <div>
          <Day day="Yesterday" />
        </div>
        {recentActivities.yesterdayActivities.map((recentActivity) => (
          <Activity
            key={recentActivity.title}
            recentActivitiesData={recentActivity}
          />
        ))}
      </div>
    </RecentActivitiesContainer>
  );
};
