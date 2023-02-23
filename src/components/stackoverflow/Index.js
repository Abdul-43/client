import React, { useEffect, useState } from "react";

import "./css/index.css";
import Main from "./Main";
import axios from "axios";
import {API} from "../../global"
function Index() {
  // const [questions, setQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [clickedQuestionId, setClickedQuestionId] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "http://localhost:4000/api/question"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setQuestions(data.items));
  // }, []);
  // console.log(questions.title);
  // const handleQuestionClick = (id) => {
  //   if (id === clickedQuestionId) {
  //     setClickedQuestionId(null);
  //   } else {
  //     setClickedQuestionId(id);
  //   }
  // };


  useEffect(() => {
    async function getQuestion() {
      await axios.get(`${API}/question`).then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)
      });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
