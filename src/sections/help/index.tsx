import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';

export default function Help() {
  return (
    <div className={styles.container}>
      <div className={styles.help}>
        <Typography variant="title">what can you do?</Typography>
      </div>
      <div className={styles.dropdownContainer}>
        <InfoAccordion title="ways you can dispose e-waste">
          <Typography variant="body">
            <ul className={styles.list}>
              <li>
                check if the company has a recycling program that accepts your old electronic
                device. You may be able to trade in your old device or recycle it for free.
              </li>
              <li>
                check out your local recycling center. Some e-waste requires a drop off fee while
                others can be recycled for free
              </li>
              <li>
                Check out your local thrift store. Many thrift stores accept certain electronics
              </li>
            </ul>
            by doing this your e-waste will go through properly regulated and formal recycling
          </Typography>
        </InfoAccordion>
        <InfoAccordion title="formal recycling">
          <Typography variant="body">
            <ul className={styles.list}>
              <li>
                often governed by legal frameworks that outline guidelines for collection,
                transportation, treatment, and disposal of e-waste.
              </li>
              <li>
                this method typically involves the use of specialized facilities equipped with
                advanced technology and trained personnel to manage e-waste safely and effectively.
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
        <InfoAccordion title="informal recycling">
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
  );
}
