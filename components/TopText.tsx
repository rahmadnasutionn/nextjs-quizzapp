interface TopTextProps {
    text: string;
    index: number;
  }
  
  const TopText = ({ text, index }: TopTextProps) => (
    <p className="text-2xl text-center top-text mt-5 max-w-6xl flex items-center mx-auto justify-center">
      <span className="inline px-2 font-bold bg-white rounded-md">
      {index === 10 ? null : index + 1}. {text}
      </span>
    </p>
  );
  
  export default TopText;