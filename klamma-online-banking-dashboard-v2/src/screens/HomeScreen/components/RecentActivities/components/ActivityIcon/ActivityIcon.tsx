import { RecentActivitiesData } from "../../../../../../models/recent-activities.model";

export class ActivityIcon {
  recentActivitiesData: RecentActivitiesData;

  constructor(recentActivitiesData: RecentActivitiesData) {
    this.recentActivitiesData = recentActivitiesData;
  }

  getIconName = () => {
    switch (this.recentActivitiesData.description) {
      case "Sent":
        return "send";
      case "Conversion":
        return "currency_exchange";
      case "Cafe & Restaurants":
        return "wallet";
      case "Opened":
        return "savings";
    }
  };
}
