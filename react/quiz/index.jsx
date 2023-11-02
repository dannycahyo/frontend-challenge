import React, { useState, useEffect } from "react";

const QUIZ_API_BASE_URL = "https://api.frontendexpert.io/api/fe/quiz";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(QUIZ_API_BASE_URL);
      const data = await response.json();
      setQuestions(data);
    };

    fetchQuestion();
  }, []);

  if (questions === null) return null;

  const updateChosenAnswers = (questionIdx, answerIdx) => {
    const newChosenAnswers = [...chosenAnswers];
    newChosenAnswers[questionIdx] = answerIdx;
    setChosenAnswers(newChosenAnswers);
  };

  const currentQuestion = questions[currentQuestionIdx];
  const isFirstQuestion = currentQuestionIdx === 0;
  const isLastQuestion = currentQuestionIdx === questions?.length - 1;

  return (
    <>
      <h1>{currentQuestion.question}</h1>
      {currentQuestion.answers.map((answer, answerIdx) => {
        const chosenAnswer = chosenAnswers[currentQuestionIdx];
        let className = "answer";

        if (chosenAnswer === answerIdx) {
          className +=
            currentQuestion.correctAnswer === chosenAnswer
              ? " correct"
              : " incorrect";
        }

        return (
          <h2
            key={answer}
            className={className}
            onClick={() => {
              if (chosenAnswer != null) return;
              updateChosenAnswers(currentQuestionIdx, answerIdx);
            }}
          >
            {answer}
          </h2>
        );
      })}
      <button
        disabled={isFirstQuestion}
        onClick={() => {
          setCurrentQuestionIdx(currentQuestionIdx - 1);
        }}
      >
        Back
      </button>
      <button
        disabled={isLastQuestion || chosenAnswers[currentQuestionIdx] == null}
        onClick={() => {
          setCurrentQuestionIdx(currentQuestionIdx + 1);
        }}
      >
        Next
      </button>
    </>
  );
}
