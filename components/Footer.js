// import styles from './footer.module.scss';

// import { getSocialNavItems } from '../lib/footer';

// import styles from './socials.module.scss';

// const Footer = () => {
//     return <footer className={styles.footer}>footer goes here
    
//     <Container>
//             <Row justifyContent="space-between">
//                 <Logo />
//                 <Footer.Social />
//                 <Socials 

//                 // need to rework this part for social logos
//                     icon="menu" 
//                     clickHandler={() => {
//                         setIsMobileNavOpen(true);
//                     }}
//                 />
//                 <AnimatePresence>
//                     {isMobileNavOpen && <Nav.Mobile closeHandler={() => {
//                         setIsMobileNavOpen(false);
//                     }} />}
//                 </AnimatePresence>
//             </Row>
//         </Container>

//     </footer>
// }

// const Social = () => {
//     const navItems = getSocialNavItems();
//     return <nav className={styles.nav__social}>
//         <ul className={styles.nav__list}>
//             {navItems.map((navItem, index) => {
//                 const { label, slug } = navItem; 
//                 return <li key={index} className={styles.nav__list__item}>
//                     <a href={slug}>
//                         {label}
//                     </a>
//                 </li>
//             })}
//         </ul>
//     </nav>
// }
// //compound components
// Footer.Social = Social;

// export default Footer;

// from showcase with images 

// import Image from 'next/image';

// import styles from './section.module.scss';

// const Showcase = ({ featuredImage, subtitle, title }) => {
//     return <section className={styles.showcase}>
//         showcase stuff
//         {featuredImage &&
//             <Image
//                 src={featuredImage.node.sourceUrl}
//                 alt={featuredImage.node.altText}
//                 width={featuredImage.node.mediaDetails.width}
//                 height={featuredImage.node.mediaDetails.height}
//             />
//         }
//     </section>
// }
// export default Showcase;