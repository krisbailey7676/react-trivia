interface Props {
  disabled: boolean;
  onClick: () => void;
}

function PreviousButton({ disabled, onClick }: Props) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        &lt;&lt;&lt; Previous
      </button>
    </>
  );
}

export default PreviousButton;
