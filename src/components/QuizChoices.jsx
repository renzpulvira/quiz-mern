import React, { useState, useEffect } from "react";

export default function QuizChoices(
  { quizSetCurrent, methodQuizSet } = this.props
) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([
    {
      set: 1,
      question: "What does the fox say?",
      choices: ["Nani", "Moo", "hekhek", "waduHek"],
      correctAnswerCode: 3,
    },
    {
      set: 2,
      question: "What does the cow say?",
      choices: ["ihihi", "nanidesu", "ikimariyo", "tatakae"],
      correctAnswerCode: 1,
    },
    {
      set: 3,
      question: "What does the eren say?",
      choices: ["tatakae", "nanidesu", "hohoho", "yamete"],
      correctAnswerCode: 1,
    },
  ]);

  let ansHolder = [];

  function recordUserAnswers(ans) {
    // If answering the quiz is finished
    // if (quizSetCurrent + 1 >= questions.length) {
    //   console.log("evauating...");
    //   methodQuizSet(quizSetCurrent + 1);
    // } else {
    //   ansHolder.concat(ans);
    //   setUserAnswers(userAnswers.concat(ans));
    //   // setUserAnswers((oldAns) => ansHolder);
    //   methodQuizSet(quizSetCurrent + 1);
    // }
    ansHolder.concat(ans);
    setUserAnswers(userAnswers.concat(ans));
    methodQuizSet(quizSetCurrent + 1);

    if (quizSetCurrent + 1 == questions.length) {
      console.log("evaluating");
      methodQuizSet(quizSetCurrent);
    }
  }

  return (
    <div>
      {quizSetCurrent < questions.length ? (
        <>
          <div className="questions">
            Question: {questions[quizSetCurrent].question}
          </div>
          <ul className="choices">
            {questions[quizSetCurrent].choices.map((choice, key) => (
              <li key={key} onClick={() => recordUserAnswers(key)}>
                {choice}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Finished!</p>
      )}
    </div>
  );
}
