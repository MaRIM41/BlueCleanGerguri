import { useEffect } from "react";

import styles from "../styles/components/ContactBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactBar() {
  useEffect(() => {
    const scrollEventHandler = () => {
      let windowHeight = window.innerHeight;
      let windowWidth = window.innerWidth;
      let windowTopPosition = document.documentElement.scrollTop;
      let windowBottomPosition = windowTopPosition + windowHeight;

      let footerTopPos = document.querySelector(".footer").offsetTop;

      let contactBar = document.querySelector(".contactBar");

      if (
        windowWidth < 1025 &&
        windowTopPosition > windowHeight / 2 &&
        footerTopPos > windowBottomPosition
      ) {
        contactBar.style.visibility = "visible";
      } else {
        contactBar.style.visibility = "hidden";
      }
    }; // end scrollEventHandler

    window.addEventListener("scroll", scrollEventHandler);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, []); // end useEffect

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // end scrollToTop

  return (
    <address className={`${styles.contactBar} contactBar`}>
      <a
        className={styles.whatsappBtn}
        href="whatsapp://send?text=Hi!Ich bin auf eurer Webseite und habe folgende Frage:&phone=+41763781123"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/whatsapp_reduced.png"
          alt="whatsapp"
          width="100%"
          height="100%"
        />
      </a>

      <div className={styles.scrollTop} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className={styles.scrollTopIcon} />
      </div>

      <span className={styles.contactBar__email}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={styles.contactBar__icons}
          fixedWidth
        />
        <a href="mailto:info@sf-swiss.ch">info@sf-swiss.ch</a>
      </span>
      <span className={styles.contactBar__phones}>
        <FontAwesomeIcon
          icon={faPhoneAlt}
          className={styles.contactBar__icons}
          fixedWidth
        />
        <a href="tel:+41 76 378 11 23">+41 76 378 11 23</a>
      </span>
    </address>
  );
} // end ContactBar component
