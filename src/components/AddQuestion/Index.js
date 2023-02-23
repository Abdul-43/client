import React, { useState, } from "react";
import axios from "axios";
import {API} from "../../global"
import "./index.css";
import {  useNavigate } from "react-router-dom";

function Question() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

const navigate=useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API}/question/addquestion`, {
        title,
        body,
      });
      navigate("/questions")
      // console.log(response.data);
      // The response from the server should contain the new post data
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="question-container">
            <div className="question-options">
              <div className="question-option">
                <div className="title">
                  <h3>Title</h3>
                  <small>
                    Be specific and imaging you're asking a question to another
                    person
                  </small>
                  <input
                    type="text"
                    placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>
              <div className="question-option"></div>
              <div className="question-option"></div>
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <input type="text" placeholder="" onChange={(event) => setBody(event.target.value)} />
              </div>
            </div>
          </div>
          <button type="submit" className="button">
            Add your question
          </button>
        </form>
      </div>
    </div>
  );
}

export default Question;
