import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Recommendations.module.css';

const Recommendations = ({ recommendations }) => {
  const navigate = useNavigate();

  const getScreenSize = () => {
    if (window.innerWidth <= 600) return "mobile";
    if (window.innerWidth <= 900) return "tablet";
    return "desktop";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenSize = getScreenSize();

  const handleSeeProduct = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <div className={styles.recommendations}>
      <h3 className={styles.title}>You may also like</h3>
      <div className={styles.items}>
        {recommendations.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image[screenSize]} alt={item.name} className={styles.image} />
            <h4 className={styles.name}>{item.name}</h4>
            <button className={styles.button} onClick={() => handleSeeProduct(item.slug)}>See Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;