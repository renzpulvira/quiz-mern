import { findByDisplayValue } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default function Quiz() {
  const [isFinished, setIsFinished] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    let myTimer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setIsFinished(true);
          clearInterval(myTimer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(3);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myTimer);
    };
  });

  return (
    <div>
      <p>Timer Status: {isFinished ? "Ended" : "In Progress"}</p>
      <p>{minutes}</p>
      <p>{seconds}</p>
    </div>
  );
}
