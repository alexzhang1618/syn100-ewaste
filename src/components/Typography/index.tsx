import { CSSProperties, ReactNode } from 'react';
import styles from './style.module.scss';

type Variant = 'title' | 'subtitle' | 'label' | 'body';

interface TypographyProps {
  variant: Variant;
  style?: CSSProperties;
  children: ReactNode;
  className?: string;
}

function getClassNameFromVariant(variant: Variant) {
  switch (variant) {
    case 'title':
      return styles.title;
    case 'subtitle':
      return styles.subtitle;
    case 'label':
      return styles.label;
    case 'body':
      return styles.body;
    default:
      return styles.title;
  }
}

export default function Typography({ variant, children, style, className }: TypographyProps) {
  return (
    <div className={`${getClassNameFromVariant(variant)} ${className || ''}`} style={style}>
      {children}
    </div>
  );
}
