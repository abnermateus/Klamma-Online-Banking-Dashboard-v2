import { RecentActivitiesApi } from "./recent-activities.api";
import { RecentActivitiesData } from "../../models/recent-activities.model";
import moment from "moment";

export class RecentActivitiesService {
  static async getRecentActivities() {
    const { data } = await RecentActivitiesApi.getRecentActivities();

    const activities = data.map(
      (activityResponse) => new RecentActivitiesData(activityResponse)
    );

    const todayActivities = activities.filter((activity) => {
      return moment(activity.date, "DD/MM/YYYY").isSame(moment(), "day");
    });

    const yesterdayActivities = activities.filter((activity) => {
      return moment(activity.date, "DD/MM/YYYY").isSame(
        moment().subtract(1, "day"),
        "day"
      );
    });

    return {
      todayActivities,
      yesterdayActivities,
    };
  }
}
