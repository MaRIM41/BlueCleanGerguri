import styles from "../styles/components/Background.module.css";

export default function Background() {
  return (
    <div className={styles.videoWrapper}>
      <video className={styles.bgVideo} autoPlay loop playsInline muted>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
} // end Background component
