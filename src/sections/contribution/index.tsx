import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';
import Image from 'next/image';

const COLOR = '#e19f12';

export default function Contribution() {
  return (
    <div className={styles.container}>
      <div className={styles.help}>
        <div className={styles.title}>
          <Typography variant="title" style={{ color: COLOR }}>
          what can you do as seviies?
          </Typography>
        </div>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="ways you can dispose e-waste (on campus)" accentColor={COLOR} defaultExpanded>
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
          <InfoAccordion title="who to contact" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                insert link here
                </li>
                <li>
                insert link here
                </li>
                <li>
                  insert link here
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
