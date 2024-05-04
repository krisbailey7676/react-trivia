import "../styles/AnswerButton.css";
import { useState, useEffect } from "react";

interface Props {
  correctAnswer: string;
  onAnswerClick: () => void;
  isAnswered: boolean;
  updateScore: () => void;
  questionIndex: number;
  answer: string;
}

function AnswerButton({
  correctAnswer,
  onAnswerClick,
  isAnswered,
  updateScore,
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
  // const bgColor = isAnswered ? (correct ? "green" : "red") : "purple";

  const handleClick = () => {
    // only call updateScore if the answer is correct
    if (correct) {
      updateScore(); // triggers updateScore func in grandparent
    }

    // change background color according to correct/incorrect answer
    setBgColor(correct ? "green" : "red");

    // question is answered when any AnswerButton is clicked
    // triggers onAnswered func in parent
    onAnswerClick();
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
