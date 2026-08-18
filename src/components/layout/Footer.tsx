import React from 'react';
import { Compass, Phone, Mail, MapPin, Send, ShieldCheck, FileText } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.container}`}>
        {/* Top Grid */}
        <div className={styles.topGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoIconWrapper}>
                <Compass className={styles.logoIcon} size={22} />
              </div>
              <div className={styles.logoText}>
                <span className={styles.brandName}>NORDIC CRAFT</span>
                <span className={styles.brandSub}>Архитектура & Строительство</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Проектирование и капитальное строительство энергоэффективных загородных домов в скандинавском стиле. Фиксированная смета и 10 лет официальной гарантии.
            </p>
            <div className={styles.licenseBadge}>
              <ShieldCheck size={18} className={styles.shieldIcon} />
              <span>Член ассоциации СРО (№ СРО-С-000-00000000)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Разделы</h4>
            <ul className={styles.linkList}>
              <li><a href="#calculator" className={styles.footerLink}>Калькулятор стоимости</a></li>
              <li><a href="#projects" className={styles.footerLink}>Каталог проектов</a></li>
              <li><a href="#services" className={styles.footerLink}>Услуги и цены</a></li>
              <li><a href="#process" className={styles.footerLink}>Этапы строительства</a></li>
              <li><a href="#guarantees" className={styles.footerLink}>Гарантии и технадзор</a></li>
              <li><a href="#faq" className={styles.footerLink}>Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Технологии</h4>
            <ul className={styles.linkList}>
              <li><a href="#projects" className={styles.footerLink}>Дома из газобетона</a></li>
              <li><a href="#projects" className={styles.footerLink}>Скандинавский фахверк</a></li>
              <li><a href="#projects" className={styles.footerLink}>Каркасные дома</a></li>
              <li><a href="#projects" className={styles.footerLink}>Керамический блок</a></li>
              <li><a href="#calculator" className={styles.footerLink}>Ипотека и Эскроу</a></li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className={styles.contactsCol}>
            <h4 className={styles.colTitle}>Контакты</h4>
            <div className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <div>
                <a href="tel:+78000000000" className={styles.contactPhone}>+7 (800) 000-00-00</a>
                <p className={styles.contactSub}>Ежедневно с 09:00 до 21:00</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:demo@nordic-craft.example" className={styles.footerLink}>demo@nordic-craft.example</a>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} />
              <span>Москва, ул. Архитекторов, 10 (Демо-офис)</span>
            </div>

            <div className={styles.socialButtons}>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Telegram"
              >
                <Send size={16} />
                <span>Написать в Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} ООО «Нордик Крафт» (Портфолио-проект). Все права защищены.
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Политика конфиденциальности</a>
            <a href="#" className={styles.legalLink}>Пользовательское соглашение</a>
            <a href="#" className={styles.legalLink}>Реквизиты компании</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
