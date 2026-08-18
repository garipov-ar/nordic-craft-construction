'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/contentData';
import { HelpCircle, ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <HelpCircle size={14} />
            Часто задаваемые вопросы
          </span>
          <h2 className="section-heading">Отвечаем на главные вопросы о стройке</h2>
          <p className="section-subtitle">
            Все детали по договору, ипотеке, материалам и гарантиям — открыто и честно.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={styles.accordionWrapper}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={styles.iconCircle}>
                    <ChevronDown size={18} className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.answerWrapper}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
