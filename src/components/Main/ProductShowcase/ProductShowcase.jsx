// components/Main/ProductShowcase/ProductShowcase.jsx
import React from 'react';
import styles from './ProductShowcase.module.css';

const ProductShowcase = () => {
  const categories = [
    { name: 'Laptops', image: '💻', count: '125 products' },
    { name: 'Handhelds', image: '🎮', count: '48 products' },
    { name: 'Monitors/Desktops', image: '🖥️', count: '92 products' },
    { name: 'Graphics Cards', image: '🧩', count: '76 products' },
    { name: 'Motherboards/Components', image: '🔌', count: '154 products' },
    { name: 'Peripherals', image: '⌨️', count: '210 products' },
    { name: 'Networking', image: '📡', count: '68 products' },
    { name: 'Servers', image: '🗄️', count: '35 products' },
    { name: 'Automotive/AMR', image: '🚗', count: '22 products' },
    { name: 'Industrial PC/Tablet', image: '📱', count: '41 products' },
  ];

  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <h2>Shop by Category</h2>
        <p className={styles.subtitle}>Browse our extensive collection of PC components and accessories</p>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>{category.image}</div>
              <h3>{category.name}</h3>
              <p>{category.count}</p>
              <button className={styles.shopBtn}>Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;