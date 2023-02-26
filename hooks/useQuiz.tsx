import { useEffect, useState } from 'react';

import { IQuestion } from '../utils/types';

const useQuiz = (data: IQuestion[]) => {
  const [quizQns, setQuizQns] = useState(data);
  const [index, setIndex] = useState(0);

  const currentQn = quizQns[index];

  const handleUserSelect = (userAnswer: string) => {
    setQuizQns(quizQns.map(i => (i.question === currentQn.question ? { ...i, userAnswer } : i)));
  };

  const moveQns = (id: 'pre' | 'next') => {
    const nextIndex = id === 'next' ? (index + 1 >= 10 ? 10 : index + 1) : index - 1 <= 0 ? 0 : index - 1;
    setIndex(nextIndex);
  };

  const moveNext = () => moveQns('next');
  const movePre = () => moveQns('pre');

  const { topText, totalCorrect } =
    index === 10
      ? { topText: 'Your Score', totalCorrect: quizQns.filter(i => i.userAnswer === i.correctAnswer).length }
      : { topText: currentQn.question, totalCorrect: 0 };

  return { moveNext, movePre, setIndex, handleUserSelect, currentQn, index, totalCorrect, topText };
};

export default useQuiz;