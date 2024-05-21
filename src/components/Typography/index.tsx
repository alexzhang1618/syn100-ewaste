import { ReactNode } from 'react';
import styles from './style.module.scss';

type Variant = 'title' | 'label' | 'body';

interface TypographyProps {
  variant: Variant;
  children: ReactNode;
}

function getClassNameFromVariant(variant: Variant) {
  switch (variant) {
    case 'title':
      return styles.title;
    case 'label':
      return styles.label;
    case 'body':
      return styles.body;
    default:
      return styles.title;
  }
}

export default function Typography({ variant, children }: TypographyProps) {
  return <div className={getClassNameFromVariant(variant)}>{children}</div>;
}
