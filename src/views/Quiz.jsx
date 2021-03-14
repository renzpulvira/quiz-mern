import React, { useState, useEffect } from "react";
import QuizTimer from "../components/QuizTimer";
import QuizChoices from "../components/QuizChoices";

export default function Quiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [theText, setTheText] = useState("");
  const [isResetTimer, setIsResetTimer] = useState(false);
  const [quizSet, setQuizSet] = useState(0);

  function methodSetIsStarted() {
    setIsStarted(!isStarted);
  }

  useEffect(() => {
    methodSetIsStarted();
  }, []);

  return (
    <div>
      <div className="timer-container">
        <QuizTimer isStarted={isStarted} isReset={isResetTimer} />
        {/* <button onClick={() => setIsStarted(!isStarted)}>TOGGLE ON/OFF</button> */}
        <button onClick={() => setIsResetTimer(!isResetTimer)}>
          Reset Timer
        </button>
        <QuizChoices quizSetCurrent={quizSet} />
        <button onClick={() => setQuizSet(quizSet + 1)}>Skip</button>
        {quizSet > 2 ? (
          <button onClick={() => setQuizSet(0)}>Reset</button>
        ) : (
          <p>...</p>
        )}
        {/* <p>Question: </p>
        <ul>
          <li>
            <button>Choice 1</button>
          </li>
          <li>
            <button>Choice 2</button>
          </li>
          <li>
            <button>Choice 3</button>
          </li>
          <li>
            <button>Choice 4</button>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
