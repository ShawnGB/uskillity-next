export default function ButtonAtom({ onButtonClick, text }: ButtonAtomProps) {
  return (
    <button
      className='h-11 px-4 border-2 rounded-md justify-self-end'
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}
