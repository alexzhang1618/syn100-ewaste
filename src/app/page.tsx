import styles from './page.module.scss';
import Help from '@/sections/help';
import Contribution from '@/sections/contribution';
import Info from '@/sections/info';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Info />
      <Contribution />
      <Help />
    </main>
  );
}
