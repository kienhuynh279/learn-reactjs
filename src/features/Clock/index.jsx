import React from "react";
import useClock from "../../hooks/useClock";

function ClockFeature() {
  const { timeString } = useClock();
  return (
    <div>
      <p style={{ fontSize: "42px" }}>{timeString}</p>
    </div>
  );
}

export default ClockFeature;
