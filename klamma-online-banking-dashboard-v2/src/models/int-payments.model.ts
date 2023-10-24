import { IntPaymentsResponse } from "./responses/int-payments.response";

export class IntPaymentsData {
  status: string;
  counter: number;

  constructor(intPaymentsResponse: IntPaymentsResponse) {
    this.status = intPaymentsResponse.status;
    this.counter = intPaymentsResponse.counter;
  }
}
