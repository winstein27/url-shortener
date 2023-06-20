import styles from "./Footer.module.scss";

import Logo from "../assets/images/Logo";

import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <Logo />
        <ul className={styles.list}>
          <li>
            Features
            <ul className={styles.links}>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </li>
          <li>
            Resources
            <ul className={styles.links}>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </li>
          <li>
            Company
            <ul className={styles.links}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles.social}>
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
