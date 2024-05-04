import "../styles/AnswerButton.css";
import { useState, useEffect } from "react";

interface Props {
  correctAnswer: string;
  onAnswerClick: (isCorrect: boolean) => void;
  isAnswered: boolean;
  questionIndex: number;
  answer: string;
}

function AnswerButton({
  correctAnswer,
  onAnswerClick,
  isAnswered,
  questionIndex,
  answer,
}: Props) {
  const [bgColor, setBgColor] = useState("purple");

  // reset the bgColor state back to initial color
  // when questionIndex changes
  useEffect(() => {
    setBgColor("purple");
  }, [questionIndex]);

  const correct = answer === correctAnswer;

  const handleClick = () => {
    setBgColor(correct ? "green" : "red"); // change background color of selected button based on correct/incorrect answer
    onAnswerClick(correct);
  };

  return (
    <>
      <button
        className="answerButton"
        disabled={isAnswered}
        style={
          isAnswered
            ? { backgroundColor: bgColor, opacity: 0.7 }
            : { backgroundColor: bgColor }
        }
        onClick={() => handleClick()}
      >
        {answer}
      </button>
    </>
  );
}

export default AnswerButton;
