import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import styles from "./Footer.module.css";
import facebookIcon from "/images/shared/desktop/icon-facebook.svg";
import twitterIcon from "/public/images/shared/desktop/icon-twitter.svg";
import instagramIcon from "/public/images/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footerBackground}>
      <nav className={styles.footerNavContainer} aria-label="Main navigation">
        <Logo />
        <NavBar />
      </nav>
      <section className={styles.footerDescriptionContainer}>
        <div className={styles.footerDescription}>
          <p className={styles.footerDescriptionText}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.footerDescriptionCopyright}>
            Copyright 2024. All Rights Reserved
          </p>
        </div>
        <nav className={styles.footerSocialMediaNav} aria-label="Social media">
          <a
            className={styles.footerSocialMediaLink}
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            className={styles.footerSocialMediaLink}
            href="https://www.twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a
            className={styles.footerSocialMediaLink}
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
