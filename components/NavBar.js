import { useState, useEffect } from "react";

import Link from "next/link";

import styles from "../styles/components/NavBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    document.body.style.overflowY = isMenuOpened ? "hidden" : "scroll";

    if (windowWidth >= 1025) {
      setIsMenuOpened(false);
    }

    const windowResizedHandler = () => {
      setWindowWidth(window.innerWidth);
    }; // end windowResizedHandler

    const scrollToElement = (indentifier) => {
      if (document.querySelector(indentifier)) {
        var scrollToEl = document.querySelector(indentifier);

        window.scroll({
          top: scrollToEl.offsetTop - 75,
          behavior: "smooth",
        });

        if (windowWidth < 1025) {
          setIsMenuOpened(false);
        }
      }
    }; // end scrollToElement

    document.querySelector(".toServices").addEventListener("click", () => {
      scrollToElement(".services");
    });

    document.querySelector(".toUberUns").addEventListener("click", () => {
      scrollToElement(".about");
    });

    document.querySelector(".toKontakt").addEventListener("click", () => {
      scrollToElement(".contactForm");
    });

    window.addEventListener("resize", windowResizedHandler);

    return () => {
      window.removeEventListener("resize", windowResizedHandler);
      document.body.style.overflowY = "scroll";
    };
  }, [isMenuOpened, windowWidth]); // end useEffect

  const menuClickedHandler = () => {
    setIsMenuOpened(!isMenuOpened);
  }; // end menuClickedHandler

  return (
    <div className={styles.navbar}>
      <img
        className={styles.navbar__logo}
        src="/images/logo.png"
        alt="SF SWISS"
      />

      <div>
        <div
          className={
            windowWidth >= 1025
              ? styles.navbar__menus
              : isMenuOpened
              ? styles.navbar__mobileMenus
              : styles.navbar__mobileMenusHide
          }
        >
          <span className="toServices">Dienstleistungen</span>
          <span className="toUberUns">Über uns</span>
          <span className="toKontakt">Kontakt</span>
          {windowWidth < 1025 && (
            <a
              href="https://maps.app.goo.gl/hgqHnGxbLSBPJiJv9"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className={styles.navbar__mapLocIcon}
              />
            </a>
          )}        
        </div>

        {!isMenuOpened ? (
          <FontAwesomeIcon
            icon={faBars}
            className={styles.navbar__menuIcon}
            onClick={menuClickedHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.navbar__menuIcon}
            onClick={menuClickedHandler}
          />
        )}
      </div>
    </div>
  );
} // end NavBar component
