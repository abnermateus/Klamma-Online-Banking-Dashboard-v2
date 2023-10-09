import React from "react";
import Limit from "./components/Limit";

export const Limits = () => {
  return (
    <section>
      <Limit title="Credit limit" value={1500} limit={2000} />
      <Limit title="Online limit" value={1324} limit={1500} />
    </section>
  );
};
