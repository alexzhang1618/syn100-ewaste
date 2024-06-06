import Typography from '@/components/Typography';
import styles from './style.module.scss';
import InfoAccordion from '@/components/InfoAccordion';
import Image from 'next/image';

export default function Obsolescence() {
  return (
    <div className={styles.container}>
      <div className={styles.contribution}>
        <div className={styles.title}>
          <Typography variant="title">obsolescence</Typography>
        </div>
        <div className={styles.dropdownContainer}>
          <InfoAccordion title="planned obsolescence" defaultExpanded>
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  <strong>Planned obsolescence</strong> refers to the practice by manufacturers of
                  deliberately designing products with a limited lifespan or functionality.
                </li>
                <li>
                  How can you help fight against planned obsolescence?
                  <ol className={styles.numberedList}>
                    <li>
                      <strong>Repair your devices when possible.</strong> Most companies or
                      manufacturers have services that can help repair your broken device instead of
                      buying an entirely new product.
                    </li>
                    <li>
                      <strong>Purchasing used products or &quot;hand-me-downs&quot;</strong> can
                      reduce the amount of profit that companies make by purposely engineering their
                      devices to hold short lifespans. In addition, it can also potentially help you
                      save money, and it decreases the possibility of that device ending up in a
                      landfill.
                    </li>
                    <li>
                      <strong>Spread more awareness.</strong> By spreading information on how to
                      fight planned obsolescence, you can help build a bigger community that can
                      help resist company efforts to create devices with shorter lifespans.
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
          <InfoAccordion title="perceived obsolescence">
            <Typography variant="body">
              <ul className={styles.list}>
                <li>
                  <strong>Perceived obsolescence</strong> refers to the idea where consumers believe
                  that a device is no longer useful or in style, so they replace it in favor of a
                  newer product despite their device being perfectly functional.
                </li>
                <li>
                  How can you help fight against perceived obsolescence?
                  <ol className={styles.numberedList}>
                    <li>
                      <strong>If it&apos;s not broken, don&apos;t replace it.</strong> When a brand
                      new product is released, many are quick to discard their old devices and get
                      the newer product. When you upgrade and discard your old device, potentially
                      harmful e-waste is created. Whenever possible, resist the urge to upgrade if
                      your device still works.
                    </li>
                    <li>
                      <strong>Think before you buy.</strong> Many new products are released with
                      minimal/niche upgrades. Many buy the latest new product without stopping to
                      think if the difference in features is worth the price and environmental
                      impact of buying a brand new device. Before you buy your next new device, stop
                      and think if you actually need it or if it&apos;s just a product designed to
                      get you to replace your old one.
                    </li>
                    <li>
                      <strong>Donate devices you no longer need.</strong> When you actually need a
                      new device, what should you do with your old one? By selling or donating your
                      old devices instead of just tossing them out, you can enable others to buy
                      &quot;hand-me-down&quot; items at a cheaper price, help provide for those who
                      might need it, and reduce the amount of e-waste that is sent into landfills.
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </InfoAccordion>
        </div>
      </div>
      <div className={styles.graphic}>
        <Image
          src="/ticking-phone.svg"
          width={400}
          height={600}
          alt="Ticking phone"
          className={styles.graphic}
        />
      </div>
    </div>
  );
}
