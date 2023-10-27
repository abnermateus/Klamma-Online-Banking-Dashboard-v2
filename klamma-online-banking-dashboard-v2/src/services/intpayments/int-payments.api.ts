import { IntPaymentsResponse } from "../../models/responses/int-payments.response";
import BaseApi from "../base.api";

export class IntPaymentsApi {
  static getPayments() {
    return BaseApi.get<IntPaymentsResponse[]>("/int-payments");
  }
}
