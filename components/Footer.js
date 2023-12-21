import styles from './footer.module.scss';
import Heading from './Heading';

import Image from 'next/image';

const Footer = ({ icon }) => {
     return <footer className={styles.footer}>
        <Heading level={2} textAlign="center">Connect with us</Heading>
        <ul className={styles.footer__list}>
            <li className={styles.footer__list__item}>
            <a href="https://www.facebook.com/subaruofamerica" target="blank">
                <Image
                    src="/images/icons/facebook.svg"
                    alt="Facebook logo"
                    width={48}
                    height={30}
                />
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/subaru_usa/" target="blank">
                <Image
                    src="/images/icons/instagram.svg"
                    alt="Instagram logo"
                    width={30}
                    height={34}
                />
            </a>
            </li>
            <li>
            <a href="https://www.tiktok.com/@subaruofamerica?lang=en" target="blank">
                <Image
                    src="/images/icons/tiktok.svg"
                    alt="TikTok logo"
                    width={30}
                    height={34}
                />
            </a>
            </li>
            <li>
            <a href="https://www.youtube.com/user/Subaru" target="blank">
                <Image
                    src="/images/icons/youtube.svg"
                    alt="YouTube logo"
                    width={30}
                    height={34}
                />
            </a>
            </li>
        </ul>
        <p className={styles.footer__copyright}>
            Copyright 2023 Subaru.
        </p>
     
     </footer>  

 }
 export default Footer; 