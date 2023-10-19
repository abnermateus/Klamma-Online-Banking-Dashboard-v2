import { CreditCardResponse } from "./responses/credit-card.response";
import moment from "moment";

export class CreditCard {
  currentAmount: string;
  currency: string;
  cardNumber: string;
  cardDate: string;

  constructor(creditCardResponse: CreditCardResponse) {
    this.currentAmount = creditCardResponse.currentAmount.toFixed(2);
    this.currency = creditCardResponse.currency;
    this.cardNumber = creditCardResponse.cardNumber;
    this.cardDate = moment(creditCardResponse.cardDate).format("MM / YY");
  }
}
