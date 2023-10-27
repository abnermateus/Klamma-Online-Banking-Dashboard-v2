import { IntPaymentsData } from "../../../../../../models/int-payments.model";
import {
  Counter,
  PaymentsContainer,
  PaymentsStatus,
  Status,
} from "./Payments.styles";

interface PaymentsProps {
  intPaymentsData: IntPaymentsData;
}

export const Payments = ({ intPaymentsData }: PaymentsProps) => {
  return (
    <PaymentsContainer>
      <PaymentsStatus>
        <Counter>{intPaymentsData.counter}</Counter>
        <Status>{intPaymentsData.status}</Status>
      </PaymentsStatus>
    </PaymentsContainer>
  );
};
