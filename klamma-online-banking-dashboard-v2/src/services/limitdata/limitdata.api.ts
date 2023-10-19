import { LimitResponse } from "../../models/responses/limit.response";
import BaseApi from "../base.api";

export class LimitDataApi {
  static getLimitData() {
    return BaseApi.get<LimitResponse[]>("/limits");
  }
}
