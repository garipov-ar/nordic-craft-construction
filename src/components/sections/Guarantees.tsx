import React from 'react';
import { GUARANTEES } from '../../data/contentData';
import { Shield, Lock, Camera, CheckCircle2, Award } from 'lucide-react';
import styles from './Guarantees.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield size={32} />,
  Lock: <Lock size={32} />,
  Camera: <Camera size={32} />,
  CheckCircle2: <CheckCircle2 size={32} />,
};

export const Guarantees: React.FC = () => {
  return (
    <section className="section" id="guarantees">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Award size={14} />
            Надежность и контроль
          </span>
          <h2 className="section-heading">4 гарантии вашей безопасности</h2>
          <p className="section-subtitle">
            Мы берем на себя финансовые, технические и юридические обязательства, чтобы процесс строительства был для вас спокойным и предсказуемым.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className={styles.grid}>
          {GUARANTEES.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                {ICON_MAP[item.icon] || <Shield size={32} />}
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
