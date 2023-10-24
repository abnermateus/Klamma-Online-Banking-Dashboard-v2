import { RecentActivitiesResponse } from "../../models/responses/recent-activities.response";
import BaseApi from "../base.api";

export class RecentActivitiesApi {
  static getRecentActivities() {
    return BaseApi.get<RecentActivitiesResponse[]>("/recent-activities");
  }
}