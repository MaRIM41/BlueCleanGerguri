import Link from "next/link";

import styles from "../styles/components/Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // end scrollToTop

  return (
    <>
      <div className={`${styles.footer} footer`}>
        <div className={styles.footer__scrollTop} onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={styles.footer__scrollTopIcon}
          />
        </div>

        <div className={styles.footer__info}>
          <div className={styles.footer__contact}>
            <p>SF Swiss Technology GmbH</p>
            <p>Rheinstrasse 41b, 4402 Frenkendorf</p>
            <p>
              <a href="tel:+41 76 378 11 23">+41 76 378 11 23</a> /{" "}
              <a href="tel:+41 76 396 95 93">+41 76 396 95 93</a>
            </p>
            <a href="mailto:info@sf-swiss.ch">info@sf-swiss.ch</a>
          </div>
          <div className={styles.footer__social}>
            <div>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={styles.footer__icons}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.footer__icons}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.footer__icons}
                />
              </a>
            </div>
            <div className={styles.footer__policy}>
              <Link href="/impressum-datenschutz">
                <a>Impressum und Datenschutz</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2022 sf-swiss.ch</p>
      <p className={styles.createdBy}>
        erstellt von{" "}
        <a href="https://www.dinihomepage.ch/" target="_blank" rel="noreferrer">
          dinihomepage.ch
        </a>
      </p>
    </>
  );
} // end Footer component
