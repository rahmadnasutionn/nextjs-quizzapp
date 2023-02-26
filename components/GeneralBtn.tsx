interface GeneralBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    pos?: 1 | 2;
  }
  
  const GeneralBtn = ({ text, pos, ...props }: GeneralBtnProps) => {
    const { className, disabled } = props;
  
    const cls = `transition-all select-none w-full py-2 text-lg font-semibold tracking-wide text-center bg-white border rounded-md ${
      disabled
        ? 'cursor-not-allowed opacity-60'
        : 'hover:bg-white shadow-md hover:text-green-600 focus:bg-white shadow-md focus:text-green-600 focus:outline-none'
    } ${pos && (pos === 1 ? 'border-r-0 rounded-r-none' : 'rounded-l-none')} ${className}`;
  
    return (
      <button {...props} className={cls}>
        {text}
      </button>
    );
  };
  
  export default GeneralBtn;