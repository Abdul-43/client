import React, { useEffect } from "react";
import { useState } from "react";
import ".././body/Answer.css";

export default function Question({
  question,
  answers,
  handleNewAnswerSubmit,
  newAnswer,
  handleNewAnswerChange,
}) {
  const [b, setB] = useState([]);

  useEffect(() => {
    setB(answers);
  }, [answers]);

  return (
    <div className="question-view">

      {question && (
        <div>
          <h2>{question.title}</h2>
          <p>{question.body}</p>
        </div>
      )}
      <h3>Answers:</h3>
      {b?.map((answer) => {

        return (
          <div key={answer._id} className="answer">
            <p>{answer.answers}</p>
          </div>
        );
      })}
      <h3>Post Your Answer:</h3>
      <form onSubmit={handleNewAnswerSubmit}>
        <textarea
          value={newAnswer}
          onChange={handleNewAnswerChange}
          placeholder="Type your answer here"
          className="answer-input"
        />
        <button type="submit" className="answer-submit-button">
          Post Your Answer
        </button>
      </form>
    </div>
  );
}
