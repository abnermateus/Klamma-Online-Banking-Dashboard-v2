import { CreditCardApi } from "./credit-card.api";
import { CreditCardData } from "../../models/credit-card.model";

export class CreditCardService {
  static async getCreditCards() {
    const { data } = await CreditCardApi.getCreditCards();

    return data.map((creditCardResponse) => new CreditCardData(creditCardResponse));
  }
}
