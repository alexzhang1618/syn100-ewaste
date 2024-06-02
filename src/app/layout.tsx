import './globals.css';
import styles from './page.module.scss';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'E-Waste | Seventh College',
  description: 'Learn more about the e-waste crisis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Image
            className={styles.background}
            src="/background.png"
            alt="Background Graphic"
            fill
          />
        </div>
        {children}
      </body>
    </html>
  );
}
