import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/api/questions');
      setQuestions(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question) => (
        <div key={question._id}>
          <h2>{question.title}</h2>
          <p>{question.body}</p>
          <p>Posted by: {question.author}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
