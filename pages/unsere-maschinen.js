import Head from "next/head";
import Link from "next/link";

import styles from "../styles/UnsereMaschinen.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function UnsereMaschinen() {
  return (
    <>
      <Head>
        <title>SF SWISS TECHNOLOGY GMBH</title>
        <meta
          name="description"
          content="CNC - Frästeile aus Stahl, Edelstahl, Alumunium, Kunststoff und vielen weiteren Materialien!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.heading}>Unsere Maschinen</h1>
        <div className={styles.fotos}>
          <img
            src="/images/foto1.png"
            alt="foto1"
            className={styles.fotos__foto}
          />
          <img
            src="/images/foto2.png"
            alt="foto2"
            className={styles.fotos__foto}
          />
        </div>
        <Link href="/">
          <a>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className={styles.backToHome}
            />
          </a>
        </Link>
      </div>
    </>
  );
} // end UnsereMaschinen
