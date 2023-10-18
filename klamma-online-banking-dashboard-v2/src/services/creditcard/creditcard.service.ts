import { CreditCardApi } from "./creditcard.api";

export class CreditCardService {
  static getCreditCards() {
    return CreditCardApi.getCreditCards();
  }
}