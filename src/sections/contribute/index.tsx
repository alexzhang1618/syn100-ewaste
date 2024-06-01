import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';
import Image from 'next/image';

const COLOR = '#e19f12';

export default function Contribute() {
  return (
    <div className={styles.container} id="contribute">
      <div className={styles.help}>
        <Typography variant="title" style={{ color: COLOR }}>
          what can you do as seviies?
        </Typography>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="ways you can dispose e-waste (on campus)" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  often governed by legal frameworks that outline guidelines for collection,
                  transportation, treatment, and disposal of e-waste.
                </li>
                <li>
                  this method typically involves the use of specialized facilities equipped with
                  advanced technology and trained personnel to manage e-waste safely and
                  effectively.
                </li>
                <li>
                  formal recycling aims to minimize environmental impact by ensuring proper disposal
                  of hazardous materials and maximizing resource recovery through techniques like
                  shredding, sorting, and extracting valuable metals.
                </li>
                <li>
                  activities associated with formal recycling are often governed by legal frameworks
                  that outline guidelines for collection, transportation, treatment, and disposal of
                  e-waste.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="ways you can dispose e-waste (off campus)" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  check if the company has a recycling program that accepts your old electronic
                  device. you may be able to trade in your old device or recycle it for free.
                </li>
                <li>
                  check out your local recycling center. some e-waste requires a drop off fee while
                  others can be recycled for free
                </li>
                <li>
                  check out your local thrift store. many thrift stores accept certain electronics
                </li>
              </ul>
              by doing this your e-waste will go through properly regulated and formal recycling
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="informal recycling" accentColor={COLOR}>
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
      <div className={styles.graphic}>
        <Image
          src="/seventh.png"
          width={400}
          height={400}
          alt="Seventh College Logo"
          className={styles.graphic}
        />
      </div>
    </div>
  );
}
