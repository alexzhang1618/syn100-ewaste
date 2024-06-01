import Typography from '@/components/Typography';
import { PERSONAS } from './questions';
import styles from './style.module.scss';

export type QuestionResponse = 'a' | 'b' | 'c' | 'd';

interface QuizResultsProps {
  results: QuestionResponse[];
  resetQuiz: () => void;
}

export default function QuizResults({ results, resetQuiz }: QuizResultsProps) {
  const counts = [
    results.filter(r => r === 'a').length,
    results.filter(r => r === 'b').length,
    results.filter(r => r === 'c').length,
    results.filter(r => r === 'd').length,
  ];

  const maxIndex = counts.indexOf(Math.max(...counts));

  const persona = PERSONAS[maxIndex];

  return (
    <div className={styles.results}>
      <div>
        <Typography variant="label">Your Personality Type:</Typography>
        <Typography variant="subtitle">
          <strong>{persona.name}</strong>
        </Typography>
      </div>
      <Typography variant="label">{persona.description}</Typography>
      <button onClick={resetQuiz} className={styles.button}>
        <Typography variant="label">Take the quiz again</Typography>
      </button>
    </div>
  );
}
