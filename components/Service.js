import styles from "../styles/components/Service.module.css";

export default function Service({ imgURL, heading, details, theme }) {
  return (
    <div className={theme == "red" ? styles.redContainer : styles.whiteContainer}>
      <img src={imgURL} alt="service" className={`${styles.img} service_img`} width="75px" />
      <h1 className={styles.title}>{heading}</h1>
      <p className={styles.details}>{details}</p>
    </div>
  );
} // end Service component
