import { IntPaymentsData } from "../../../../../../models/int-payments.model";
import {
  Counter,
  PaymentsContainer,
  PaymentsStatus,
  Status,
} from "./Payments.styles";

interface PaymentsProps {
  IntPaymentsData: IntPaymentsData;
}

export const Payments = ({ IntPaymentsData }: PaymentsProps) => {
  return (
    <PaymentsContainer>
      <PaymentsStatus>
        <Counter>{IntPaymentsData.counter}</Counter>
        <Status>{IntPaymentsData.status}</Status>
      </PaymentsStatus>
    </PaymentsContainer>
  );
};
