import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { API } from "../../global";
import ".././body/Answer.css";

import Question from "./Question";

export default function Answer() {
  const questionId = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState(null);
  const navigate = useNavigate();
  const answerId = useParams();
  const [newAnswer, setNewAnswer] = useState("");
  

  useEffect(() => {
      async function getAnswers() {
      const res = [];

      let ques = await axios.get(`${API}/question/find/${questionId.id}`);
      setQuestion(ques.data);

      for (let i of ques.data.answers) {

        let response = await axios.get(
          `${API}/question/find/${questionId.id}/answers/${i}`
        );
        res.push(response.data);
      }

      setAnswers([...res]);

    }
    getAnswers();
  }, []);

  const handleNewAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const handleNewAnswerSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`${API}/question/answer/${questionId.id}/`, {
        answers: newAnswer,
      })
      .then((response) => {
        setAnswers([...answers, response.data]);
        setNewAnswer("");
      });

  };


  return (
    <div className="question-view-container ">
      {answers ? (
        <Question
          question={question}
          answers={answers}
          handleNewAnswerSubmit={handleNewAnswerSubmit}
          newAnswer={newAnswer}
          handleNewAnswerChange={handleNewAnswerChange}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
