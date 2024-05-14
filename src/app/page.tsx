import Typography from '@/components/Typography';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Typography variant="title">time to act!</Typography>
        <Typography variant="label">learn more about the e-waste crisis &gt;</Typography>
      </div>
      <div className={styles.graphic}>
        <Image
          src="/hero.svg"
          width={400}
          height={600}
          alt="Recycling Bin"
          className={styles.graphic}
        />
      </div>
    </main>
  );
}
