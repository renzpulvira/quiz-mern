import React, { useState, useEffect } from "react";

export default function QuizTimer({ isStarted, isReset } = this.props) {
  const [isFinished, setIsFinished] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(3);

  const callSetFinished = () => {
    setIsFinished(true);
  };

  const callSetMinutesSeconds = (min, sec) => {
    setMinutes(min);
    setSeconds(sec);
  };

  const callSetSeconds = (sec) => {
    setSeconds(sec);
  };

  let myTimer = null;

  useEffect(() => {
    setIsFinished(false);
    callSetMinutesSeconds(1, 3);
  }, [isReset]);

  useEffect(() => {
    if (isStarted) {
      myTimer = setInterval(() => {
        if (seconds > 0) {
          callSetSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            callSetFinished();
            clearInterval(myTimer);
          } else {
            // setMinutes(minutes - 1);
            // setSeconds(3);
            callSetMinutesSeconds(minutes - 1, 3);
          }
        }
      }, 1000);

      return () => {
        clearInterval(myTimer);
      };
    }
    if (!isStarted) {
      clearInterval(myTimer);
      myTimer = null;
    }
  });

  return (
    <div>
      <p>Timer Status: {isFinished ? "Ended" : "In Progress"}</p>
      <p>{minutes}</p>
      <p>{seconds}</p>

      {/* <button onClick={() => setIsStarted(!isStarted)}>TOGGLE ON/OFF</button>
      <p>{isStarted ? "ON" : "OFF"}</p> */}
    </div>
  );
}
