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
    console.log('Product:', product); // Debugging line
    if (product && product.gallery) {
      const galleryImages = Object.values(product.gallery).map(galleryItem => galleryItem[screenSize]);
      console.log('Gallery Images:', galleryImages); // Debugging line
      setImages(galleryImages);
    } else {
      console.log('Product not found or no gallery available');
    }
  }, [productSlug, screenSize]);

  return (
    <div className={styles.content}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className={styles.galleryImage} />
      ))}
    </div>
  );
};

export default ProductImage;
