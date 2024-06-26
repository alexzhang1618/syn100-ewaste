import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';
import Image from 'next/image';
import Link from 'next/link';

const COLOR = '#e19f12';

export default function Contribute() {
  return (
    <div className={styles.container} id="contribute">
      <div className={styles.help}>
        <Typography variant="title" style={{ color: COLOR }} className={styles.title}>
          what can you do as seviies?
        </Typography>
        <div className={styles.dropdownContainer}>
          <InfoAccordion
            title="how to dispose of e-waste (on campus)"
            accentColor={COLOR}
            defaultExpanded
          >
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  During the move-in and move-out process, it&apos;s good practice to designate a
                  specific area or bucket for used batteries and e-waste to make the disposal
                  process smoother. By doing this, you can save time when it comes to searching and
                  preparing your e-waste for disposal.
                </li>
                <li>
                  If you have used batteries during the move-out process, you can dispose of them
                  either by dropping them off at the Seventh College Residential Life Office or by
                  following{' '}
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://blink.ucsd.edu/safety/research-lab/hazardous-waste/disposal-guidance/battery/index.html#Battery-Disposal-for-Campus,-SI"
                  >
                    this procedure.
                  </a>
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="how to dispose of e-waste (off campus)" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  Check if your device&apos;s company (ex. Apple) has a recycling/trade-in program
                  that accepts your old electronic device. You may be able to trade in your old
                  device or recycle it for free.
                </li>
                <li>
                  Check your local recycling center. Some e-waste centers will require a drop off
                  fee while others can be recycled for free.
                </li>
                <li>
                  Check your local thrift store. Many thrift stores accept certain electronics.
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="looking forward to the future" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  UC San Diego plans to provide numerous donation bins and e-waste containers near
                  key locations during fall move-in and spring move-out.
                </li>
                <li>
                  UC San Diego Environment, Health & Safety is expanding their training and
                  enforcement to more students and staff members in order to promote and educate
                  others on how to properly dispose of electronic waste.
                </li>
                <li>
                  For more information, you can visit UC San Diego&apos;s{' '}
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://sustain.ucsd.edu/_files/UCSanDiegoZeroWastePlan.pdf"
                  >
                    Zero Waste Plan.
                  </a>
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="who should I contact with questions?" accentColor={COLOR}>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  <a className={styles.link} href="mailto:seventhreslife@ucsd.edu">
                    seventhreslife@ucsd.edu
                  </a>{' '}
                  (for more information about e-waste disposal during move-in/move-out)
                </li>
                <li>
                  <a className={styles.link} href="mailto:hazwaste@ucsd.edu">
                    hazwaste@ucsd.edu
                  </a>{' '}
                  (for more information on general e-waste procedures)
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
