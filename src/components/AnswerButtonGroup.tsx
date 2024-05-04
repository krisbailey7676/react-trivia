import "../styles/AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";

interface Props {
  options: string[];
  // correctAnswerIndex: number;
  correctAnswer: string;
  onAnswerClick: () => void;
  isAnswered: boolean;
  updateScore: () => void;
  questionIndex: number;
}

function AnswerButtonGroup({
  options,
  // correctAnswerIndex,
  correctAnswer,
  onAnswerClick,
  isAnswered,
  updateScore,
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
        updateScore={() => updateScore()}
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
