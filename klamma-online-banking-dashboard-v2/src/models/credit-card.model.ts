import { CreditCardResponse } from "./responses/credit-card.response";
import moment from "moment";

export class CreditCardData {
  currentAmount: string;
  currency: string;
  number: string;
  date: string;

  constructor(creditCardResponse: CreditCardResponse) {
    this.currentAmount = creditCardResponse.currentAmount.toFixed(2);
    this.currency = creditCardResponse.currency;
    this.number = creditCardResponse.number;
    this.date = moment(creditCardResponse.date).format("MM / YY");
  }
}
