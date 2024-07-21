import React from "react";
import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={3000} />;
};

export default ProgressBar;
