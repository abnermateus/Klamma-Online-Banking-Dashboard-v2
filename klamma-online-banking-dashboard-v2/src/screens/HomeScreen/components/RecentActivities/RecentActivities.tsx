import React from "react";
import Day from "../Day";
import Activity from "./components/Activity";
import Button from "../../../../components/Button";

export const RecentActivities = () => {
  return (
    <section>
      <div className="title-section">
        <h2>Recent Activities</h2>
        <Button text="View a report" variant="contained"></Button>
      </div>

      <div>
        <Day day="Today" />
        <div>
          <Activity
            icon="send"
            nameDescription="To Martin Mitchel"
            description="Sent"
            activityValue=" - 3,004.52"
            country="USD"
          />
          <Activity
            icon="send"
            nameDescription="To Jane Klamberberg"
            description="Sent"
            activityValue=" - 1,023.19"
            country="USD"
          />
          <Activity
            icon="currency_exchange"
            nameDescription="EUR to USD"
            description="Conversion"
            activityValue="+ 1,456.00"
            country="USD"
          />
        </div>
      </div>
      <div>
        <Day day="Yesterday" />
        <div>
          <Activity
            icon="wallet"
            nameDescription="Starbucks"
            description="Cafe & Resturants"
            activityValue="- 5.99"
            country="USD"
          />

          <Activity
            icon="savings"
            nameDescription="Deposit to your USD balance"
            description="Opened"
            activityValue="- 4,000.00"
            country="USD"
          />
        </div>
      </div>
    </section>
  );
};
