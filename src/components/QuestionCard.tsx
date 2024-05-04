import "../styles/QuestionCard.css";
import { useState } from "react";
import AnswerButtonGroup from "./AnswerButtonGroup.jsx";
import NextButton from "./NextButton.js";
import PreviousButton from "./PreviousButton.js";
import ResetButton from "./ResetButton.js";
import { breedNameArr } from "../data/nameData.js";
import { breedImageArr } from "../data/imageData.js";
import {
  wrongAnswersA,
  wrongAnswersB,
  wrongAnswersC,
} from "../data/answerData.js";

function QuestionCard() {
  const [questionIndex, setquestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [randomAnswerIndex, setRandomAnswerIndex] = useState(
    Math.floor(Math.random() * 4)
  );

  console.log("Answered? :" + isAnswered);

  const firstQuestion = questionIndex === 0;
  const lastQuestion = questionIndex === breedNameArr.length - 1;

  const options = [
    wrongAnswersA[questionIndex], // wrongAnswersA is an array of incorrect answers
    wrongAnswersB[questionIndex], // wrongAnswersB is another array of incorrect answers
    wrongAnswersC[questionIndex], // wrongAnswersC is another array of incorrect answers
    breedNameArr[questionIndex], // breedNameArr contains the correct answers
  ];

  function shuffleOptions(options: string[]) {
    const shuffled = [];
    let position = 0;

    for (let i = 0; i < options.length; i++) {
      position = (randomAnswerIndex + i) % options.length;
      shuffled.push(options[position]);
    }

    return shuffled;
  }

  const shuffledOptions = shuffleOptions(options);

  const questionData = {
    correctAnswer: breedNameArr[questionIndex],
    img: breedImageArr[questionIndex],
    options: shuffledOptions,
  };

  const onAnswerClick = (isCorrect: boolean) => {
    setIsAnswered(true);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const incrementQuestionIndex = () => {
    setquestionIndex(questionIndex + 1);
    setRandomAnswerIndex(Math.floor(Math.random() * 4)); // only change random index when questionIndex is incremented
    setIsAnswered(false);
  };

  const decrementQuestionIndex = () => {
    setquestionIndex(questionIndex - 1);
    setIsAnswered(false);
  };

  const resetQuestionIndex = () => {
    setquestionIndex(0);
    setScore(0);
    setIsAnswered(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <img
          className="card-image"
          src={questionData.img}
          alt={`Picture of ${questionData.correctAnswer}`}
        />
        <div className="text-center" id="ntbTextSection">
          <p className="card-text">
            What is the name of the dog breed pictured above?
          </p>
        </div>
        <div id="answerButtonSection">
          <div style={{ visibility: "visible" }}>
            <AnswerButtonGroup
              options={questionData.options}
              correctAnswer={questionData.correctAnswer}
              onAnswerClick={onAnswerClick}
              isAnswered={isAnswered}
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
              disabled={firstQuestion || lastQuestion}
              onClick={() => decrementQuestionIndex()}
            />
          </div>
          <div id="midCol" className="d-flex flex-column">
            <span>Question #{questionIndex + 1}</span>
            <div id="score">🐶Score {score}/20🐶</div>
          </div>
          <div className="d-flex flex-column">
            {!lastQuestion ? (
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
  );
}

export default QuestionCard;
