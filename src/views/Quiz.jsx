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
      <div className="quiz-container">
        {/* <QuizTimer isStarted={isStarted} isReset={isResetTimer} />
        <button onClick={() => setIsResetTimer(!isResetTimer)}>
          Reset Timer
        </button> */}
        <QuizChoices quizSetCurrent={quizSet} methodQuizSet={setQuizSet} />
        <button onClick={() => setQuizSet(quizSet + 1)}>Skip</button>
        {quizSet > 2 ? (
          <button onClick={() => setQuizSet(0)}>Reset</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
