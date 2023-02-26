import { IAPIResp, IQuestion } from './types';
import shuffle from 'lodash.shuffle';

const totalCategories = Array(24)
  .fill(0)
  .map((_, j) => 32 - j);

const getAPIResp = async (): Promise<IQuestion[] | any> => {
  const difficulty = ['easy', 'medium', 'hard'][0];
  const category = totalCategories[0];

  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;

  const resp = await fetch(url);

  if (resp.ok) {
    const data: IAPIResp = await resp.json();

    if (data.results.length) {
      return data.results.map(i => {
        const decodedOptions = [
          decodeURIComponent(i.correct_answer),
          ...i.incorrect_answers.map(i => decodeURIComponent(i)),
        ];

        return {
          allOptions: shuffle(decodedOptions),
          correctAnswer: decodedOptions[0],
          question: decodeURIComponent(i.question),
          userAnswer: null,
        };
      });
    }
  }

};

export default getAPIResp;