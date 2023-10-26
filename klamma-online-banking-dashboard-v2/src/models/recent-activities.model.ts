import { RecentActivitiesResponse } from "./responses/recent-activities.response";
import moment from "moment";

export class RecentActivitiesData {
  date: string;
  title: string;
  type: string;
  value: string;
  currency: string;

  constructor(recentActivitiesResponse: RecentActivitiesResponse) {
    this.date = moment(recentActivitiesResponse.date).format("DD/MM/YYYY");
    this.title = recentActivitiesResponse.title;
    this.type = recentActivitiesResponse.type;
    this.value = recentActivitiesResponse.value.toFixed(2);
    this.currency = recentActivitiesResponse.currency;
  }
}
