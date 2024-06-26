import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import InfoAccordion from '@/components/InfoAccordion';

const COLOR = '#7eb65e';
export default function Info() {
  return (
    <div className={styles.container} id="info">
      <div className={styles.info}>
        <div className={styles.title}>
          <Typography variant="title" style={{ color: COLOR }}>
            what is e-waste?
          </Typography>
        </div>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="what is e-waste?" defaultExpanded accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  E-waste (or electronic waste) refers to <strong>discarded electronics</strong>{' '}
                  that are no longer desired or are no longer usable.
                </li>
                <li>
                  E-waste includes computers, phones, televisions, refrigerators, or any device or
                  appliance that contains electronic components.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="why is e-waste bad?" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  E-waste often contains hazardous materials such as lead, mercury, cadmium, and
                  flame retardants.
                </li>
                <li>
                  Improper disposal of e-waste poses significant environmental and health risks.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="not-so-fun-facts about e-waste" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  Large amounts of e-waste are exported from developed nations to developing
                  countries, who don&apos;t have the tools to properly dispose of e-waste.
                </li>
                <li>
                  Developing countries don&apos;t have the tools to properly dispose of e-waste and
                  often resort to burning or manually dismantling electronics.
                </li>
                <li>
                  E-waste disposal in developing countries are often performed by children, who are
                  exposed to high levels of hazardous chemicals and injury.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
        </div>
      </div>
      <div className={styles.graphic}>
        <Image
          src="/devices.svg"
          width={400}
          height={600}
          alt="Devices"
          className={styles.graphic}
        />
      </div>
    </div>
  );
}
