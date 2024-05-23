import './globals.css';
import styles from './page.module.scss';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Waste | Seventh College',
  description: 'Learn more about the e-waste crisis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div>
        <Image className={styles.background} src="/background.png" alt="Background Graphic" fill />
      </div>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
