interface Props {
  onClick: () => void;
}

function ResetButton({ onClick }: Props) {
  return (
    <>
      <button onClick={onClick}>Play Again</button>
    </>
  );
}

export default ResetButton;
