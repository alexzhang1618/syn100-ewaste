import Link from 'next/link';
import Typography from '../Typography';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <Typography variant="title">time to act!</Typography>
        <Link href="/#info" className={styles.link}>
          <Typography variant="label">learn more about the e-waste crisis &gt;</Typography>
        </Link>
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
    </div>
  );
}
