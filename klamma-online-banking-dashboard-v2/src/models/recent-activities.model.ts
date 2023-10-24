import { RecentActivitiesResponse } from "./responses/recent-activities.response";
import moment from "moment";

export class RecentActivitiesData {
  date: string;
  nameDescription: string;
  description: string;
  value: string;
  currency: string;

  constructor(recentActivitiesResponse: RecentActivitiesResponse) {
    this.date = moment(recentActivitiesResponse.date).format("DD/MM/YYYY");
    this.nameDescription = recentActivitiesResponse.nameDescription;
    this.description = recentActivitiesResponse.description;
    this.value = recentActivitiesResponse.value.toFixed(2);
    this.currency = recentActivitiesResponse.currency;
  }
}
