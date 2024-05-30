import * as React from 'react';
import { ReactNode } from 'react';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import Typography from '../Typography';
import styles from './style.module.scss';

interface InfoAccordionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export default function InfoAccordion({ title, children, defaultExpanded }: InfoAccordionProps) {
  return (
    <Accordion className={styles.accordion} defaultExpanded={defaultExpanded}>
      <AccordionSummary className={styles.accordionSummary}>
        <Typography variant="label">
          <strong>&gt; {title}</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>{children}</AccordionDetails>
    </Accordion>
  );
}
