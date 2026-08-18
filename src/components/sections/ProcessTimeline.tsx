'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/contentData';
import { Clock, CheckCircle2, FileCheck, Layers } from 'lucide-react';
import styles from './ProcessTimeline.module.css';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStepData = PROCESS_STEPS.find((s) => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section className="section section-dark" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Layers size={14} />
            Прозрачный регламент
          </span>
          <h2 className="section-heading">6 этапов строительства вашего дома</h2>
          <p className="section-subtitle">
            Каждый скрытый этап сопровождается актом технадзора, фотоотчетом и оплачивается только после вашей личной приемки.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className={styles.stepperNav}>
          {PROCESS_STEPS.map((item) => (
            <button
              key={item.step}
              className={`${styles.stepNavBtn} ${activeStep === item.step ? styles.stepNavBtnActive : ''}`}
              onClick={() => setActiveStep(item.step)}
            >
              <span className={styles.navStepNum}>Этап 0{item.step}</span>
              <span className={styles.navStepTitle}>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className={styles.detailCard}>
          <div className={styles.cardHeader}>
            <div className={styles.stepBadge}>Этап {currentStepData.step} из 6</div>
            <div className={styles.durationBadge}>
              <Clock size={14} /> {currentStepData.duration}
            </div>
          </div>

          <h3 className={styles.detailTitle}>{currentStepData.title}</h3>
          <p className={styles.detailSubtitle}>{currentStepData.subtitle}</p>
          <p className={styles.detailDescription}>{currentStepData.description}</p>

          <div className={styles.deliverablesBlock}>
            <h4 className={styles.deliverablesTitle}>
              <FileCheck size={18} className={styles.docIcon} />
              Что вы получаете на руки по итогу этапа:
            </h4>
            <div className={styles.deliverablesGrid}>
              {currentStepData.deliverables.map((item, idx) => (
                <div key={idx} className={styles.delivItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
