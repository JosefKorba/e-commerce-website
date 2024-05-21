import { useState, useEffect, useCallback } from 'react';
import styles from './ProductImage.module.css';
import productsData from '../../../data.json';

const getScreenSize = () => {
  if (window.innerWidth <= 600) return "mobile";
  if (window.innerWidth <= 900) return "tablet";
  return "desktop";
};

const ProductImage = ({ productSlug }) => {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [images, setImages] = useState([]);

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const product = productsData.find(product => product.slug === productSlug);
    if (product && product.gallery) {
      const galleryImages = Object.values(product.gallery).map(galleryItem => galleryItem[screenSize]);
      setImages(galleryImages);
    }
  }, [productSlug, screenSize]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryImageSmallContainer}>
        {images.slice(0, 2).map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className={styles.galleryImageSmall} />
        ))}
      </div>
      <img src={images[2]} alt="Gallery Image 3" className={styles.galleryImage} />
    </div>
  );
};

export default ProductImage;