import "../styles/AnswerButton.css";
import { useState, useEffect } from "react";

interface Props {
  updateScore: () => void;
  disabled: boolean;
  questionIndex: number;
  answered: () => void;
  option: string;
  correctAnswer: string;
}

function AnswerButton({
  updateScore,
  disabled,
  questionIndex,
  answered,
  option,
  correctAnswer,
}: Props) {
  const [bgColor, setBgColor] = useState("purple");

  // reset the bgColor state back to initial color
  // when questionIndex changes
  useEffect(() => {
    setBgColor("purple");
  }, [questionIndex]);

  const handleClick = () => {
    let selectedBreedName = "";
    let correctBreedName = "";
    let isCorrect = true;

    selectedBreedName = option;
    correctBreedName = correctAnswer;

    selectedBreedName === correctBreedName
      ? (isCorrect = true)
      : (isCorrect = false);

    // only call updateScore if the answer is correct
    if (isCorrect) {
      updateScore(); // triggers updateScore func in grandparent
    }

    // change background color according to correct/incorrect answer
    setBgColor(isCorrect ? "green" : "red");

    // question is answered when any AnswerButton is clicked
    // triggers onAnswered func in parent
    answered();
  };

  return (
    <>
      <button
        className="answerButton"
        disabled={disabled}
        style={
          disabled
            ? { backgroundColor: bgColor, opacity: 0.7 }
            : { backgroundColor: bgColor }
        }
        onClick={handleClick}
      >
        {option}
      </button>
    </>
  );
}

export default AnswerButton;
