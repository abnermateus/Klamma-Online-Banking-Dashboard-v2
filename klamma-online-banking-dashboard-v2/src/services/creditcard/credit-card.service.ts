import { CreditCardApi } from "./credit-card.api";
import { CreditCard } from "../../models/credit-card.model";

export class CreditCardService {
  static async getCreditCards() {
    const { data } = await CreditCardApi.getCreditCards();

    return data.map((creditCardResponse) => new CreditCard(creditCardResponse));
  }
}
