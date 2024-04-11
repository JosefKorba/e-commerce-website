import styles from './BestAudioGearSection.module.css'; 

const BestAudioGearSection = ({ imageSrc, title, description }) => (
 <section className={styles.bestAudioSection}>
    <div className={styles.bestAudioContent}>
      <h2 className={styles.bestAudioTitle}>Bringing you the <span style={{color: 'orange'}}>BEST</span> audio gear</h2>
      <p className={styles.textDefault} >{description}</p>
    </div>
    <img className={styles.bestAudioImage} src={imageSrc} alt={title} /> 
 </section>
);

export default BestAudioGearSection;