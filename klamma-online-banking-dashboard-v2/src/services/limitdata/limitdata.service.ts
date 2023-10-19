import { LimitDataApi } from "./limitdata.api";
import { LimitData } from "../../models/limit.model";

export class LimitDataService {
  static async getLimitData() {
    const { data } = await LimitDataApi.getLimitData();

    return data.map((limitDataResponse) => new LimitData(limitDataResponse));
  }
}
