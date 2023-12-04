export default function ButtonAtom({ onButtonClick, text }: ButtonAtomProps) {
  return (
    <button
      className='h-11 px-4 border-2 rounded-md justify-self-end border-primary-200 text-primary-500 bg-offWhite bg-opacity-50'
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}
