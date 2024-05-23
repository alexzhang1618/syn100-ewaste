import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';

export default function Contribution() {
  return (
    <div className={styles.container}>
      <div className={styles.contribution}>
        <div className={styles.title}>
          <Typography variant="title">obsolescence</Typography>
        </div>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="planned obsolescence">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  <strong>planned obsolescence</strong> refers to the practice by manufacturers of
                  deliberately designing products with a limited lifespan or functionality
                </li>
                <li>insert info</li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="perceived obsolescence">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  <strong>perceived obsolescence</strong> refers to the idea where consumers believe
                  that a device or application is no longer in style or useful so they replace it
                  with a newer model even though the old model works perfectly fine
                </li>
                <li>insert info</li>
              </ul>
            </Typography>
          </InfoAccordion>
        </div>
      </div>
    </div>
  );
}
