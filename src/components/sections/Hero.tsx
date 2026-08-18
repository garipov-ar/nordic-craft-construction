'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Star, CheckCircle2, Sparkles, Calculator, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Graphic Overlay */}
      <div className={styles.bgOverlay} />
      <div className={styles.glowAura} />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* Tagline Badge */}
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Скандинавские технологии энергоэффективного строительства</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.title}>
            Строительство премиальных домов под ключ с <span className={styles.highlight}>фиксированной сметой</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Архитектурное проектирование и капитальное возведение загородных коттеджей из газобетона, фахверка и теплой керамики. 10 лет гарантии и аккредитация в топ-банках по льготной ипотеке от 6%.
          </p>

          {/* Dual Action Buttons */}
          <div className={styles.ctaGroup}>
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Calculator size={20} />}
              onClick={() => scrollTo('#calculator')}
            >
              Рассчитать стоимость дома онлайн
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<Eye size={20} />}
              onClick={() => scrollTo('#projects')}
            >
              Смотреть проекты
            </Button>
          </div>

          {/* Key Advantages Pills */}
          <div className={styles.advantages}>
            <div className={styles.advantageItem}>
              <CheckCircle2 size={18} className={styles.advIcon} />
              <span>0 ₽ скрытых переплат</span>
            </div>
            <div className={styles.advantageItem}>
              <ShieldCheck size={18} className={styles.advIcon} />
              <span>10 лет гарантии</span>
            </div>
            <div className={styles.advantageItem}>
              <CheckCircle2 size={18} className={styles.advIcon} />
              <span>Эскроу и льготная ипотека</span>
            </div>
          </div>

          {/* Social Proof Box */}
          <div className={styles.socialProof}>
            <div className={styles.avatarGroup}>
              <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80')` }} />
              <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80')` }} />
              <div className={styles.avatar} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80')` }} />
              <div className={styles.avatarPlus}>+140</div>
            </div>
            <div className={styles.proofText}>
              <div className={styles.ratingStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={styles.starIcon} fill="#F59E0B" />
                ))}
                <span className={styles.ratingValue}>4.9 / 5.0</span>
              </div>
              <p className={styles.proofLabel}>Более 140 семей уже живут в наших домах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
