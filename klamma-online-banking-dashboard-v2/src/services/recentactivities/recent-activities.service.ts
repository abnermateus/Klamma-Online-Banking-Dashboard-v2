import { RecentActivitiesApi } from "./recent-activities.api";
import { RecentActivitiesData } from "../../models/recent-activities.model";
import { DateUtils } from "../../utils/date.utils";

export class RecentActivitiesService {
  static async getRecentActivities() {
    const { data } = await RecentActivitiesApi.getRecentActivities();

    const activities = data.map(
      (activityResponse) => new RecentActivitiesData(activityResponse)
    );

    const todayActivities = activities.filter((activity) => {
      return DateUtils.isToday(activity.date);
    });

    const yesterdayActivities = activities.filter((activity) => {
      return DateUtils.isYesterday(activity.date);
    });

    return {
      todayActivities,  
      yesterdayActivities,
    };
  }
}
