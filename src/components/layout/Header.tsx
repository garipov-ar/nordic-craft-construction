'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Compass, Menu, X, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Калькулятор', href: '#calculator', isHighlight: true },
    { label: 'Проекты', href: '#projects' },
    { label: 'Услуги', href: '#services' },
    { label: 'Этапы', href: '#process' },
    { label: 'Гарантии', href: '#guarantees' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        {/* Brand Logo */}
        <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, '#')}>
          <div className={styles.logoIconWrapper}>
            <Compass className={styles.logoIcon} size={24} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.brandName}>NORDIC CRAFT</span>
            <span className={styles.brandSub}>Архитектура & Строительство</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${link.isHighlight ? styles.highlightLink : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {link.isHighlight && <span className={styles.badgePulse}>Расчет 3 мин</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacts & Quick CTA */}
        <div className={styles.actions}>
          <div className={styles.phoneBlock}>
            <a href="tel:+74958224512" className={styles.phoneLink}>
              <Phone size={16} className={styles.phoneIcon} />
              <span>+7 (495) 822-45-12</span>
            </a>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Ответим за 5 мин</span>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            className={styles.ctaButton}
            onClick={() => {
              const el = document.querySelector('#calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Рассчитать смету
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerContent}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} />
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.mobileContactBox}>
              <a href="tel:+74958224512" className={styles.mobilePhone}>
                +7 (495) 822-45-12
              </a>
              <p className={styles.mobileWorkTime}>Пн-Вс: 09:00 – 21:00 (Без выходных)</p>
              <Button
                variant="primary"
                fullWidth
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector('#calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Рассчитать стоимость онлайн
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
