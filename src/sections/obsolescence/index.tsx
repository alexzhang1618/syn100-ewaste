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
                  <strong>planned obsolescence</strong> refers to the practice by manufacturers of
                  deliberately designing products with a limited lifespan or functionality
                </li>
                <li>
                  how you can help fight against planned obsolescence:
                  <ol>
                    <li>
                      <strong>repair your devices when possible.</strong> most companies or
                      manufacturers have services that can help repair your broken device. it beats
                      buying an entirely new product.
                    </li>
                    <li>
                      <strong>purchasing used products or &quot;hand-me-downs&quot;</strong> is a
                      great way to fight against planned obsolescence as it can restrict the amount
                      of potential profits that companies try to take from consumers by purposely
                      engineering their devices to hold short lifespans. in addition, it can also
                      potentially help you save some money and it decreases the possibility of that
                      device ending up in landfills.
                    </li>
                    <li>
                      <strong>spread more awareness.</strong> planned obsolescence is sadly not
                      common knowledge, so by spreading the information about how to fight planned
                      obsolescence to your community, you are building a bigger community that will
                      help resist company efforts to create devices with shorter lifespans. this
                      will hopefully encourage companies to create longer-lasting products.
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
                  <strong>perceived obsolescence</strong> refers to the idea where consumers believe
                  that a device or application is no longer in style or useful so they replace it
                  with a newer model even though the old model works perfectly fine
                </li>
                <li>
                  how you can help fight against perceived obsolescence:
                  <ol>
                    <li>
                      <strong>if it&apos;s not broken, no need to replace it.</strong> when a brand
                      new product gets release, a lot of people are quick to replace their old
                      devices in order to get the new and improved device even though their previous
                      device was working fine. by upgrading and tossing your old device, more
                      unnecessary e-waste get generated and could do even more harm to the
                      environment. so in order to fight this, resist the trend and if your device is
                      still working, then there&apos;s no need to upgrade.
                    </li>
                    <li>
                      <strong>think before you buy.</strong> usually with most new products, they
                      only provide very minimal feature upgrades, some (iPhone cameras) even being
                      tailored to people of a specific profession. some people buy the latest new
                      device or application just because they think it&apos;s in style without
                      stopping to think about whether the difference in features is actually worth
                      the price of buying a completely new device. before you buy your next new
                      device, make sure to stop and think about whether you actually need it or is
                      it just a product designed to get you to replace your old one.
                    </li>
                    <li>
                      <strong>donate devices you no longer need.</strong> suppose you do actually
                      need a new device, what do you do with your old one? one way to help perceived
                      obsolescence is to either sell or donate your old devices instead of just
                      tossing them out. by doing this, you&apos;re enabling others to buy
                      &quot;hand-me-down&quot; items at a cheaper price. by doing this, you&apos;re
                      helping provide for those who might need it while also reducing the amount of
                      e-waste that is sent into landfills.
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
