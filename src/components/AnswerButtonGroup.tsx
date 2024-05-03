import "../styles/AnswerButtonGroup.css";
import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";

interface Props {
  options: string[];
  correctAnswer: string;
  updateScore: () => void;
  questionIndex: number;
}

function AnswerButtonGroup({
  options,
  correctAnswer,
  questionIndex,
  updateScore,
}: Props) {
  const [isAnswered, setIsAnswered] = useState(false);

  // reset the isAnswered state back to false to toggle disabled property
  // when questionIndex changes
  useEffect(() => {
    setIsAnswered(false);
  }, [questionIndex]);

  // once question is answered (AnswerButton clicked) change isAnswered state
  // to trigger disabled property
  const onAnswer = () => {
    setIsAnswered(true);
  };

  const buttons = [];

  for (let i = 0; i < 4; i++) {
    buttons.push(
      <AnswerButton
        key={i}
        correctAnswer={correctAnswer}
        updateScore={() => updateScore()}
        disabled={isAnswered}
        answered={() => onAnswer()} // callback passed to AnswerButton
        questionIndex={questionIndex}
        option={options[i]}
      />
    );
  }

  return (
    <div className="container" id="AnswerButtonGroup">
      {buttons.map((button) => button)}
    </div>
  );
}

export default AnswerButtonGroup;
