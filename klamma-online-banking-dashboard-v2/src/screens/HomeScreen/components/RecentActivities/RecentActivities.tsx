import React from "react";

export const RecentActivities = () => {
  return (
    <section>
      <div className="title-section">
        <h2>Recent Activities</h2>
        <button className="button">View a report</button>
      </div>
      <div>
        <h6 className="day">Today</h6>
        <div>
          <div className="activity">
            <span className="material-symbols-outlined">send </span>
            <div className="name-description">
              <h4>To Martin Mitchel</h4>
              <p className="description">Sent</p>
            </div>
            <p className="activity-value">
              - 3,004.52 <strong>USD</strong>
            </p>
          </div>

          <div className="activity">
            <span className="material-symbols-outlined"> send </span>
            <div className="name-description">
              <h4>To Jane Klamberberg</h4>
              <p className="description">Sent</p>
            </div>
            <p className="activity-value">
              - 1,023.19 <strong>USD</strong>
            </p>
          </div>

          <div className="activity">
            <span className="material-symbols-outlined">
              {" "}
              currency_exchange{" "}
            </span>
            <div className="name-description">
              <h4>EUR to USD</h4>
              <p className="description">Conversion</p>
            </div>
            <p className="activity-value">
              + 1,456.00 <strong>USD</strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h6 className="day">Yesterday</h6>
        <div>
          <div className="activity">
            <span className="material-symbols-outlined"> wallet </span>
            <div className="name-description">
              <h4>Starbucks</h4>
              <p className="description">Cafe & Resturants</p>
            </div>
            <p className="activity-value">
              - 5.99 <strong>USD</strong>
            </p>
          </div>

          <div className="activity">
            <span className="material-symbols-outlined"> savings </span>
            <div className="name-description">
              <h4>Deposit to your USD balance</h4>
              <p className="description">Opened</p>
            </div>
            <p className="activity-value">
              - 4,000.00 <strong>USD</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
