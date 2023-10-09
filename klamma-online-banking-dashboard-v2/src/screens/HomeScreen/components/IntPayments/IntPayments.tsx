import React from "react";
import Payments from "./components/Payments";

export const IntPayments = () => {
  return (
    <section>
      <div className="title-section">
        <h2>Int. Payments</h2>
        <h6 className="day">the last 30 days</h6>
      </div>
      <div className="summary">
        <Payments status="Awaiting" counter={8} />
        <Payments status="In progress" counter={5} />
        <Payments status="Completed" counter={12} />
        <Payments status="Cancelled" counter={4} />
      </div>
    </section>
  );
};
