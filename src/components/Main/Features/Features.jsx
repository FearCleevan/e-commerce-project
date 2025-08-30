// components/Main/Features/Features.jsx
import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      title: 'PC Builder Tool',
      description: 'Build your custom PC with our easy-to-use tool and compatibility checking',
      icon: '⚙️'
    },
    {
      title: 'AI Assistant',
      description: 'Get personalized build suggestions based on your budget and needs',
      icon: '🤖'
    },
    {
      title: '3D Preview',
      description: 'Visualize your build in 3D before making a purchase',
      icon: '👓'
    },
    {
      title: 'Performance Focused',
      description: 'We prioritize performance over fancy RGB or style',
      icon: '🚀'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Why Choose Our PC Builder?</h2>
        <p className={styles.subtitle}>We provide the tools and expertise to build the perfect PC for your needs</p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;