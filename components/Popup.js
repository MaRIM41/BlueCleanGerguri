import Link from "next/link";

import { useEffect, useState } from "react";

import styles from "../styles/components/Popup.module.css";

export default function Popup() {
  useEffect(() => {
    const popupContainer = document.querySelector(".popupContainer");

    var timerId1 = 0;

    timerId1 = setTimeout(() => {
      popupContainer.style.display = "block";
    }, 5000); // end setTimeout

    const closePopup = document.querySelector(".closePopup");
    closePopup.onclick = () => {
      popupContainer.style.display = "none";
    };

    return () => {
      clearTimeout(timerId1);
    };
  }, []); // end useEffect

  return (
    <div className={`${styles.container} popupContainer`}>
      <div className={styles.content}>
        Wir verwenden Cookies auf unserer Website, um zu verstehen, wie Sie
        diese nutzen. Indem Sie auf Zustimmen klicken, stimmen Sie deren Verwendung zu.
        <div>
          <span className="closePopup">Zustimmen</span>
          <Link href="/impressum-datenschutz">
            <a>Datenschutz</a>
          </Link>
        </div>
      </div>
    </div>
  );
} // end Popup component
