import React, { useState } from "react";

export default function QuizChoices({ quizSetCurrent } = this.props) {
  const [questions, setQuestions] = useState([
    {
      set: 1,
      question: "What does the fox say?",
      choices: ["Nani", "Moo", "hekhek", "waduHek"],
      correctAnswerCode: "ba5125",
    },
    {
      set: 2,
      question: "What does the cow say?",
      choices: ["ihihi", "nanidesu", "ikimariyo", "tatakae"],
      correctAnswerCode: "85jk9i",
    },
    {
      set: 3,
      question: "What does the eren say?",
      choices: ["tatakae", "nanidesu", "hohoho", "yamete"],
      correctAnswerCode: "j5189a",
    },
  ]);
  return (
    <div>
      {quizSetCurrent < questions.length ? (
        <p>
          <p>Question: {questions[quizSetCurrent].question}</p>
          <p>Choices:</p>
          <ul>
            {questions[quizSetCurrent].choices.map((choice) => (
              <li>{choice}</li>
            ))}
          </ul>
        </p>
      ) : (
        <p>Finished!</p>
      )}
    </div>
  );
}
