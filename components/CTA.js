import Button from './Button';
import Heading from './Heading';
import styles from './cta.module.scss';

const CTA = () => {
    return <section className={styles.cta}>
        <div className={styles.cta__text}>
        <Heading level={2} textAlign="center" >Get Behind the Wheel</Heading>
        <p className={styles.cta__subhead}>Start customizing your Impreza today, or contact your local Subaru dealer to experience one in person.</p>
        </div>
        <ul className={styles.cta__buttons}>
            <a href="https://www.subaru.com/build.html" target="blank">
            <Button className={styles.cta__button}>
                Build & Price
            </Button>
            </a>
            <a href="https://www.subaru.com/find/a-retailer.html" target="blank">
            <Button>
                Contact Dealer
            </Button>
            </a>
        </ul>
    </section>

}
//text and two buttons that can be pulled from button.js

export default CTA; 

