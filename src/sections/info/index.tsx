import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import InfoAccordion from '@/components/InfoAccordion';

export default function Info() {
  return (
    <div className={styles.container} id="info">
      <div className={styles.info}>
        <div className={styles.title}>
          <Typography variant="title">what is e-waste?</Typography>
        </div>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="what is e-waste?">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  e-waste (or electronic waste) refers to <strong>discarded electronics</strong>{' '}
                  that are no longer desired or are no longer usable.
                </li>
                <li>
                  e-waste includes computers, phones, televisions, refrigerators, or any device or
                  appliance that contains electronic components.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="why is e-waste bad?">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  e-waste often contains hazardous materials such as lead, mercury, cadmium, and
                  flame retardants
                </li>
                <li>
                  improper management during disposal poses significant environmental and health
                  risks
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="not-so-fun-facts about e-waste">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  developing nations are disproportionately harmed due to illegal dumping and lack
                  of treatment options. This leads to improper recycling often performed by
                  children. This exposes them and the environment to high levels of hazardous
                  chemicals and injury.
                </li>
                <li>usually done in developing countries and by children</li>
                <li>
                  struggle due to issues like inadequate data, illegal dumping, and lack of
                  treatment options.
                  <ul>
                    <li>
                      informal recyclers often use basic techniques and tools to extract materials
                      from e-waste, such as burning or manually dismantling electronics
                    </li>
                    <ul>
                      <li>exposes workers to high levels of hazardous chemicals and injury</li>
                      <li>usually done in developing countries and by children</li>
                      <li>
                        contributes to 67% of the total emissions produced by the product over its
                        lifetime
                      </li>
                    </ul>
                  </ul>
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
