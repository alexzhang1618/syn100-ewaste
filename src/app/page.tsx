import styles from './page.module.scss';
import Contribute from '@/sections/contribute';
import Obsolescence from '@/sections/obsolescence';
import Info from '@/sections/info';
import Hero from '@/components/Hero';
import PersonalityQuiz from '@/sections/PersonalityQuiz';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Info />
      <Obsolescence />
      <Contribute />
      <PersonalityQuiz />
    </main>
  );
}
