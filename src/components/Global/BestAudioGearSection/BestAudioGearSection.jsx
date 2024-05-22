import styles from "./BestAudioGearSection.module.css";
import PropTypes from "prop-types";

const BestAudioGearSection = ({ imageSrc, title, description }) => (
  <section className={styles.bestAudioSection}>
    <div className={styles.bestAudioContent}>
      <h2 className={styles.bestAudioTitle}>
        Bringing you the <span style={{ color: "orange" }}>BEST</span> audio
        gear
      </h2>
      <p className={styles.textDefault}>{description}</p>
    </div>
    <img className={styles.bestAudioImage} src={imageSrc} alt={title} />
  </section>
);

BestAudioGearSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default BestAudioGearSection;
