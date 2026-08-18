'use client';

import React from 'react';
import { SERVICES } from '../../data/contentData';
import { Button } from '../ui/Button';
import { Wrench, Check, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  const scrollToCalculator = () => {
    const el = document.querySelector('#calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Wrench size={14} />
            Услуги и компетенции
          </span>
          <h2 className="section-heading">Полный комплекс строительных работ</h2>
          <p className="section-subtitle">
            Мы берем на себя все задачи от анализа грунта и согласования документации до чистовой отделки и ландшафта.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.number}>{service.number}</span>
                <div className={styles.priceTag}>{service.priceFrom}</div>
              </div>

              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.tagline}>{service.tagline}</p>
              <p className={styles.description}>{service.description}</p>

              <div className={styles.features}>
                <span className={styles.featuresTitle}>Что входит в работу:</span>
                <ul className={styles.featuresList}>
                  {service.features.map((feat, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <Check size={14} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.timeline}>Срок: {service.timeline}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToCalculator}
                  rightIcon={<ArrowRight size={14} />}
                >
                  Заказать расчет
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
