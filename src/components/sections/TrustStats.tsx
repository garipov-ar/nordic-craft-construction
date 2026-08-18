import React from 'react';
import { Calendar, Home, Shield, Percent } from 'lucide-react';
import styles from './TrustStats.module.css';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: <Calendar size={28} className={styles.icon} />,
      number: '12 лет',
      label: 'Безупречной работы',
      description: 'Строим надежные загородные дома с 2014 года',
    },
    {
      icon: <Home size={28} className={styles.icon} />,
      number: '140+',
      label: 'Сданных домов',
      description: 'Более 28 000 м² введенного в эксплуатацию жилья',
    },
    {
      icon: <Shield size={28} className={styles.icon} />,
      number: '10 лет',
      label: 'Гарантии по договору',
      description: 'Юридическая защита фундамента, стен и кровли',
    },
    {
      icon: <Percent size={28} className={styles.icon} />,
      number: '0 ₽',
      label: 'Скрытых переплат',
      description: 'Жесткая фиксация сметы до начала строительных работ',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {stats.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.textBlock}>
                <div className={styles.number}>{item.number}</div>
                <div className={styles.label}>{item.label}</div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
