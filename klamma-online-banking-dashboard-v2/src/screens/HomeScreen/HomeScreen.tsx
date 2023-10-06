import React from "react";
import Button from "../../components/Button";

export const HomeScreen = () => {
  return (
    <div>
      <aside id="sidebar">
        <div id="sidebar-logo">
          <img alt="" src="img/klamma-icon.png" id="klamma" />
          <h1>Klamma</h1>
        </div>
        <div className="list">
          <Button text="Overview" icon="home" />
          <Button text="Cards" icon="credit_card" />
          <Button text="Payments" icon="payments" />
          <Button text="Repots" icon="analytics" />
          <Button text="Contacts" icon="contacts" />
        </div>
        <div className="list">
          <Button text="Settings" icon="settings" />
          <Button text="Account" icon="person" />
        </div>
      </aside>

      <main>
        <header id="header">
          <h1>Your Cards</h1>
          <button className="button">New card&nbsp;&nbsp;&nbsp;&nbsp;+</button>
          <img alt="" src="img/bell-notification.png" />
        </header>

        <section id="cards">
          <div id="cards-carousel">
            <div className="card">
              <img alt="" src="img/klamma-icon.png" />
              <span className="current-amount">
                1242.42 <strong>USD</strong>
              </span>
              <span className="card-number">5495 7381 3759 2321</span>
              <span className="card-date">04&nbsp;/&nbsp;24</span>
            </div>
            <div className="card">
              <img alt="" src="img/klamma-icon.png" />
              <span className="current-amount">
                249.00 <strong>EUR</strong>
              </span>
              <span className="card-number">4535 8933 1673 6770</span>
              <span className="card-date">05&nbsp;/&nbsp;25</span>
            </div>
            <div className="card">
              <img alt="" src="img/klamma-icon.png" />
              <span className="current-amount">
                249.00 <strong>EUR</strong>
              </span>
              <span className="card-number">5363 7205 7398 4138</span>
              <span className="card-date">01&nbsp;/&nbsp;25</span>
            </div>
          </div>
        </section>

        <section id="limits">
          <div className="limit">
            <img alt="" src="img/credit-limit-chart.png" />
            <h4>Credit limit</h4>
            <p>
              <strong> 1500</strong> / 2000 USD
            </p>
          </div>
          <div className="limit">
            <img alt="" src="img/online-limit-chart.png" />
            <h4>Online limit</h4>
            <p>
              <strong> 1324</strong> / 1500 USD
            </p>
          </div>
        </section>

        <section id="int-payments">
          <div className="title-section">
            <h2>Int. Payments</h2>
            <h6 className="day">the last 30 days</h6>
          </div>
          <div className="summary">
            <div className="payment-status">
              <span className="counter">8</span>
              <span className="status">Awaiting</span>
            </div>
            <div className="payment-status">
              <span className="counter">5</span>
              <span className="status">In progress</span>
            </div>
            <div className="payment-status">
              <span className="counter">12</span>
              <span className="status">Completed</span>
            </div>
            <div className="payment-status">
              <span className="counter">4</span>
              <span className="status">Cancelled</span>
            </div>
          </div>
        </section>

        <section id="recent-activities">
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
      </main>
    </div>
  );
};
