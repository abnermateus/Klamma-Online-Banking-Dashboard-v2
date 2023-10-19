import { CreditCardResponse } from "../../models/responses/credit-card.response";
import BaseApi from "../base.api";

export class CreditCardApi {
  static getCreditCards() {
    return BaseApi.get<CreditCardResponse[]>("/cards");
  }
}
