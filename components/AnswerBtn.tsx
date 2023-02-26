import { IBtnCls } from '@/utils/types';

interface AnswerButtonProps {
  text: string;
  buttonClass: IBtnCls;
  optionAlpha: string;
  shouldDisable: boolean;
  onPress: (ans: string) => void;
}

const AnswerBtn = ({ onPress, text, optionAlpha, shouldDisable, buttonClass }: AnswerButtonProps) => {
  const handleClick = () => onPress(text);

  return (
    <button
      onClick={handleClick}
      disabled={shouldDisable}
      title={shouldDisable ? 'Not Allowed' : text}
      className={`flex items-center w-full py-2 pl-3 mt-1 mb-4 text-justify border-2 border-gray-400 rounded-full focus:outline-none focus:ring-2 select-none truncate ${
        shouldDisable && 'cursor-not-allowed'
      } ${buttonClass.btn}`}
    >
      <span
        className={`inline-flex items-center text-lg sm:text-xl justify-center w-4 h-4 p-4 font-semibold rounded-full ${buttonClass.span1}`}
        style={{ borderWidth: '3px' }}
      >
        {optionAlpha}
      </span>
      <span className={`w-full px-2 sm:text-lg font-medium ${buttonClass.span2}`}>{text}</span>
    </button>
  );
};

export default AnswerBtn;