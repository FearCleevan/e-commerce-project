// components/Main/Main.jsx
import React from 'react';
import Banner from './Banner/Banner';
import ProductShowcase from './ProductShowcase/ProductShowcase';
import Features from './Features/Features';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Banner />
      <ProductShowcase />
      <Features />
    </main>
  );
};

export default Main;