import React from "react";
import Button from "../../../../components/Button";

export const Sidebar = () => {
  return (
    <aside>
      <div>
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
  );
};
