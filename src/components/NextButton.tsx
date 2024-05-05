interface Props {
  disabled: boolean;
  onClick: () => void;
}

function NextButton({ disabled, onClick }: Props) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        Next &gt;&gt;&gt;
      </button>
    </>
  );
}

export default NextButton;
