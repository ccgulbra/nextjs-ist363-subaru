import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Link from 'next/link';

import styles from './cta.module.scss';

const CTA = () => {
    return <section className={styles.cta}>
        <div className={styles.cta__text}>
        <Heading level={2} textAlign="center" color="white" marginBottom={1}>Get Behind the Wheel</Heading>
        <Paragraph color="white" marginBottom={2}>Start customizing your Impreza today, or contact your local Subaru dealer to experience one in person.</Paragraph>
        </div>
        <ul className={styles.cta__buttons}>
            <li className={styles.cta__buttons__listItem}>
            <Link href="/build-price">
            <Button type="primary">
                Build & Price
            </Button>
            </Link>
            </li>
            <li className={styles.cta__buttons__listItem}>
            <Link href="/contact" >
            <Button type="secondary">
                Contact Dealer
            </Button>
            </Link>
            </li>
        </ul>
    </section>

}
//text and two buttons that can be pulled from button.js

export default CTA; 

