import { IntPaymentsApi } from "./int-payments.api";
import { IntPaymentsData } from "../../models/int-payments.model";

export class IntPaymentsService {
  static async getPayment() {
    const { data } = await IntPaymentsApi.getPayments();

    return data.map(
      (intPaymentsResponse) => new IntPaymentsData(intPaymentsResponse)
    );
  }
}
