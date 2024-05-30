import { CSSProperties, ReactNode } from 'react';
import styles from './style.module.scss';

type Variant = 'title' | 'label' | 'body';

interface TypographyProps {
  variant: Variant;
  style?: CSSProperties;
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

export default function Typography({ variant, children, style }: TypographyProps) {
  return (
    <div className={getClassNameFromVariant(variant)} style={style}>
      {children}
    </div>
  );
}
