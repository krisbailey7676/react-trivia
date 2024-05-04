import "../styles/AnswerButtonGroup.css";
import AnswerButton from "./AnswerButton";

interface Props {
  options: string[];
  onAnswerClick: () => void;
  isAnswered: boolean;
  correctAnswerIndex: number;
  updateScore: () => void;
  questionIndex: number;
}

function AnswerButtonGroup({
  options,
  onAnswerClick,
  isAnswered,
  correctAnswerIndex,
  questionIndex,
  updateScore,
}: Props) {
  const buttons = [];

  for (let i = 0; i < 4; i++) {
    buttons.push(
      <AnswerButton
        key={i}
        correctAnswerIndex={correctAnswerIndex}
        updateScore={() => updateScore()}
        isAnswered={isAnswered}
        onAnswerClick={onAnswerClick} // callback passed to AnswerButton
        questionIndex={questionIndex}
        answer={options[i]}
        answerIndex={i}
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
