import BaseApi from "../base2.api";

export class CreditCardApi {
  static getCreditCards() {
    return BaseApi.get("/cards");
  }
}
