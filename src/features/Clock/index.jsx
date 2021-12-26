import React, { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) return;

  const house = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${house}:${minutes}:${second}`;
}

function ClockFeature() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newStringTime = formatDate(now);

      setTimeString(newStringTime);
    }, 1000);

    return () => {
      console.log("Clock Cleanup !!!");
      clearInterval(clockInterval);
    };
  }, []);
  return (
    <div>
      <p style={{ fontSize: "42px" }}>{timeString}</p>
    </div>
  );
}

export default ClockFeature;
