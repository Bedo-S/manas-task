import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';

const images = [
  './images/gallery/image1.jpeg',
  './images/gallery/image2.jpeg',
  './images/gallery/image3.jpeg',
  './images/gallery/image4.jpeg',
  './images/gallery/image5.jpeg',
  './images/gallery/image6.jpeg',
  './images/gallery/image7.jpeg',
  './images/gallery/image8.jpeg',
];

const repeatedImages = [...images, ...images];

const ImageCollage = () => {
  return (
    <div className="collage-container">
      <motion.div
        className="collage-track"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {repeatedImages.map((src, i) => (
          <div className={`collage-item size-${i % 5}`} key={i}>
            <img src={src} alt={`collage-${i}`} loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCollage;