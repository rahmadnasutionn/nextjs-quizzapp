import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import FinalScore from '@/components/FinalScore';
import TopText from '@/components/TopText';
import useQuiz from '@/hooks/useQuiz';

import getAPIResp from '@/utils/apiResp';
import { buttonClass, getAnsBtnState, optionAlphabets } from '@/utils/helper';
import { IQuestion } from '@/utils/types';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const DynamicButtonGroup = dynamic(() => import('@/components/BtnGroup'));
const DynamicGeneralButton = dynamic(() => import('@/components/GeneralBtn'));
const DynamicCard = dynamic(() => import('@/components/Card'));
const DynamicAnswerButton = dynamic(() => import('@/components/AnswerBtn'));

const AppHome = ({ data }: { data: IQuestion[] }) => {
  const { currentQn, index, setIndex, moveNext, movePre, totalCorrect, handleUserSelect, topText } = useQuiz(data);
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/signin');
    return;
  };
  return (
    <>
    <Head>
      <title>Quiz | LandingPage</title>
      <meta name="description" content="test your knowledge with our quiz" />
      <meta property='og:title' content='test your knowledge with our quiz' />
      <meta property='og:description' content='test your knowledge with our quiz' />
      <meta property='og:image' content='https://imageurlkalian' />
      <meta property='og:url' content='http://localhost:3000/' />
    </Head>

    <div className='w-full bg-[#e1f8f9] p-6 shadow-md text-center font-sans tracking-tight'>
      <button onClick={() => {
        logout()
        router.push('/signin')
      }} className='text-white text-2xl'>Logout</button>
    </div>
      <TopText index={index} text={topText} />
      <DynamicCard>
        {index === 10 ? (
          <FinalScore score={totalCorrect} />
        ) : (
          currentQn.allOptions.map((option, index) => {
            const help = buttonClass(getAnsBtnState(currentQn.userAnswer, currentQn.correctAnswer, option));
            return (
              <DynamicAnswerButton
                key={option}
                text={option}
                buttonClass={help}
                onPress={handleUserSelect}
                shouldDisable={currentQn.userAnswer !== null}
                optionAlpha={help.alpha || optionAlphabets[index as 0 | 1 | 2 | 3]}
              />
            );
          })
        )}
      </DynamicCard>
      <DynamicButtonGroup>
        <DynamicGeneralButton text="Previous" pos={1} onClick={movePre} disabled={index === 0} />
        <DynamicGeneralButton text="Next" pos={2} onClick={moveNext} disabled={index === 10} />
      </DynamicButtonGroup>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAPIResp();
  return { props: { data } };
};

export default AppHome;