import styles from './footer.module.scss';

import Image from 'next/image';

// import Link from 'next/link';

const Footer = ({ icon }) => {
     return <footer className={styles.footer}>
        <h3>Footer</h3>
        <ul className={styles.footer__list}>
            <li className={styles.footer__list__item}>
            <a src="/images/icons/facebook.svg"
            href="https://www.facebook.com/subaruofamerica">
            </a>
            </li>
            <li>
                <a href="https://www.instagram.com/subaru_usa/">
                    insta
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@subaruofamerica?lang=en">
                    tiktok
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/user/Subaru">
                    youtube
                </a>
            </li>

        </ul>
        <p className={styles.footer__copyright}>
            Copyright 2023 Subaru.
        </p>
     
     </footer>  

 }
 export default Footer; 


// // nav.social
// const Social = () => {
//     const navItems = getSocialNavItems();
//     return <nav className={styles.nav__social}>
//         <ul className={styles.nav__list}>
//             {navItems.map((navItem, index) => {
//                 const { label, slug } = navItem; 
//                 return <li key={index} className={styles.nav__list__item}>
//                     <Link href={slug}>
//                         {label}
//                     </Link>
//                 </li>
//             })}
//         </ul>
//     </nav>
// }
// Nav.Social = Social; 

// const social = ({ icon }) => {
//         <Image 
//             src={`/images/icons/${icon}.svg`}
//             alt={`${icon} icon`}
//             width={16}
//             height={12}
//         />
//     </button>
// }

// export default Footer; 