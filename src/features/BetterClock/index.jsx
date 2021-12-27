import React from "react";
import useClock from "../../hooks/useClock";

import "./BetterClock.scss";

function BetterClockFeature() {
  const { timeString } = useClock();
  return (
    <div className="better-clock">
      <p className="better-clock_time">{timeString}</p>
    </div>
  );
}

export default BetterClockFeature;
