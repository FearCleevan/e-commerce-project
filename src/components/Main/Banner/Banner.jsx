// components/Main/Banner/Banner.jsx
import React, { Suspense } from 'react';
import styles from './Banner.module.css';
import ThreeScene from './ThreeScene';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <h1>Build Your Dream PC</h1>
          <p>Customize your perfect setup with our advanced PC Builder tool and AI assistant</p>
          <div className={styles.bannerActions}>
            <button className={styles.primaryBtn}>Start Building</button>
            <button className={styles.secondaryBtn}>Shop Components</button>
          </div>
        </div>
        <div className={styles.bannerImage}>
          <div className={styles.threeContainer}>
            <Suspense fallback={<div className={styles.loading}>Loading 3D...</div>}>
              <ThreeScene />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;