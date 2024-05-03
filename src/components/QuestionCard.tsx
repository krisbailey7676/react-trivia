import "../styles/QuestionCard.css";
import { breedDataObj } from "../data/gameData.js";
import { useState } from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";
import ResetButton from "./ResetButton.js";

function QuestionCard() {
  const [questionIndex, setquestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const lastQuestion = questionIndex === breedDataObj.length - 1;

  const incrementQuestionIndex = () => {
    setquestionIndex(questionIndex + 1);
  };

  const decrementQuestionIndex = () => {
    setquestionIndex(questionIndex - 1);
  };

  const resetQuestionIndex = () => {
    setquestionIndex(0);
    setScore(0);
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <img
            className="card-image"
            src={breedDataObj[questionIndex].imagePath}
            alt="image"
          />
          <div className="text-center" id="ntbTextSection">
            <p className="card-text">
              What is the name of the dog breed pictured above?
            </p>
          </div>
          <div id="answerButtonSection">
            <div style={{ visibility: "visible" }}>
              <AnswerButtonGroup
                updateScore={() => updateScore()} // callback passed to AnswerButtonGroup then to AnswerButton
                questionIndex={questionIndex}
              />
            </div>
          </div>

          <div
            className="d-flex justify-content-between flex-row align-items-center"
            id="navSection"
          >
            <div className="d-flex flex-column">
              <PreviousButton
                disabled={questionIndex === 0 || lastQuestion}
                onClick={() => decrementQuestionIndex()}
              />
            </div>
            <div id="midCol" className="d-flex flex-column">
              <span>Question #{breedDataObj[questionIndex].questionId}</span>
              <div id="score">🐶Score {score}/20🐶</div>
            </div>
            <div className="d-flex flex-column">
              {questionIndex !== breedDataObj.length - 1 ? (
                <NextButton
                  disabled={lastQuestion}
                  onClick={() => incrementQuestionIndex()}
                />
              ) : (
                <ResetButton
                  disabled={!lastQuestion}
                  onClick={() => resetQuestionIndex()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
