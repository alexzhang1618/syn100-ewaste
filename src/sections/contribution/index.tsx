import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import InfoAccordion from '@/components/InfoAccordion';

export default function Contribution() {
  return (
    <div className={styles.container}>
      <div className={styles.contribution}>
        <div className={styles.title}>
          <Typography variant="title">planned obsolescence</Typography>
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
          <InfoAccordion title="third world shipping">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  large amounts of e-waste are exported from developed nations to developing
                  countries, who don&apos;t have the tools to properly dispose of e-waste.
                </li>
                <li>
                  developing countries don&apos;t have the tools to properly dispose of e-waste and
                  often resort to burning or manually dismantling electronics.
                </li>
                <li>
                  e-waste disposal in developing countries are often performed by children, who are
                  exposed to high levels of hazardous chemicals and injury.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
        </div>
      </div>
    </div>
  );
}
