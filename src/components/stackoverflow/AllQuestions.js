import React, { useState } from "react";
import "./css/AllQuestions.css";

import { Link } from "react-router-dom";

import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const QuestionsList = styled.ul`
  width: 80%;
`;

const QuestionItem = styled.li`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  cursor: pointer;
`;

const QuestionTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const QuestionInfo = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #666;
`;

const Answer = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #444;
`;

function AllQuestions({ questions }) {
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
  const [clickedQuestionId, setClickedQuestionId] = useState(null);

  const handleQuestionClick = (id) => {
    if (id === clickedQuestionId) {
      setClickedQuestionId(null);
    } else {
      setClickedQuestionId(id);
    }
  };
  // let tags = JSON.parse(data?.tags[0]);

  return (
    <BodyContainer>
      <QuestionsList>
        {questions.map((question) => (
          <QuestionItem
            key={question._id}
            onClick={() => handleQuestionClick(question._id)}
          >
            <Link to={`/questions/${question._id}/answer`}>
              {" "}
              <QuestionTitle>{question.title}</QuestionTitle>
            </Link>

            {/* {clickedQuestionId === question.questionId && (
              <Answer>{question.answers[0]}</Answer>
            )} */}
          </QuestionItem>
        ))}
      </QuestionsList>
    </BodyContainer>
  );
}

export default AllQuestions;
