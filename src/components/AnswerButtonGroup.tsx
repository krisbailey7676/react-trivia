import "../styles/AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";

interface Props {
  options: string[];
  correctAnswer: string;
  onAnswerClick: (isCorrect: boolean) => void;
  isAnswered: boolean;
  questionIndex: number;
}

function AnswerButtonGroup({
  options,
  correctAnswer,
  onAnswerClick,
  isAnswered,
  questionIndex,
}: Props) {
  const buttons = [];

  for (let i = 0; i < 4; i++) {
    buttons.push(
      <AnswerButton
        key={i}
        correctAnswer={correctAnswer}
        onAnswerClick={onAnswerClick}
        isAnswered={isAnswered}
        questionIndex={questionIndex}
        answer={options[i]}
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
