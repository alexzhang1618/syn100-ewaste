'use client';
import Typography from '@/components/Typography';
import { QUESTIONS } from './questions';
import { MouseEventHandler, ReactNode, useState } from 'react';
import styles from './style.module.scss';
import QuizResults, { QuestionResponse } from './QuizResults';

interface ResponseProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Response({ children, onClick }: ResponseProps) {
  return (
    <button className={styles.response} onClick={onClick}>
      <Typography variant="label">{children}</Typography>
    </button>
  );
}

interface QuizQuestionDisplayProps {
  index: number;
  handleResponse: (response: QuestionResponse) => void;
}

function QuizQuestionDisplay({ index, handleResponse }: QuizQuestionDisplayProps) {
  const question = QUESTIONS[index];
  return (
    <div className={styles.quiz}>
      <Typography variant="label" className={styles.question}>
        <strong>
          Question {index + 1}/{QUESTIONS.length}: {question.question}
        </strong>
      </Typography>

      <div className={styles.responses}>
        <Response onClick={() => handleResponse('a')}>a. {question.a}</Response>
        <Response onClick={() => handleResponse('b')}>b. {question.b}</Response>
        <Response onClick={() => handleResponse('c')}>c. {question.c}</Response>
        <Response onClick={() => handleResponse('d')}>d. {question.d}</Response>
      </div>
    </div>
  );
}

export default function PersonalityQuiz() {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [results, setResults] = useState<QuestionResponse[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const handleResponse = (response: QuestionResponse) => {
    console.log('response');
    setResults([...results, response]);
    setActiveQuestion(aq => aq + 1);
  };

  const resetQuiz = () => {
    setResults([]);
    setActiveQuestion(0);
  };

  return (
    <div className={styles.container} id="quiz">
      <div className={styles.title}>
        <Typography variant="title">e-waste personality quiz</Typography>
      </div>

      <div className={styles.activityContainer}>
        {!quizStarted ? (
          <div className={styles.welcome}>
            <Typography variant="subtitle">
              <strong>Welcome to the E-Waste Personality Quiz! </strong>
            </Typography>
            <Typography variant="label">
              Get ready to uncover your e-waste persona as we delve into the quirky world of
              electronics and sustainability. Let&apos;s find out what kind of e-waste warrior you
              truly are!
            </Typography>
            <button onClick={() => setQuizStarted(true)} className={styles.button}>
              <Typography variant="label">Take the quiz</Typography>
            </button>
          </div>
        ) : activeQuestion < QUESTIONS.length ? (
          <QuizQuestionDisplay index={activeQuestion} handleResponse={handleResponse} />
        ) : (
          <QuizResults results={results} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
}
