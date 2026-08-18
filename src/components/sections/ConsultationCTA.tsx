'use client';

import React, { useState } from 'react';
import { Phone, User, Send, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './ConsultationCTA.module.css';

export const ConsultationCTA: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('7') || val.startsWith('8')) val = val.substring(1);
    let formatted = '+7 ';
    if (val.length > 0) formatted += '(' + val.substring(0, 3);
    if (val.length >= 3) formatted += ') ' + val.substring(3, 6);
    if (val.length >= 6) formatted += '-' + val.substring(6, 8);
    if (val.length >= 8) formatted += '-' + val.substring(8, 10);
    setPhone(formatted.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, '').length < 10) {
      setError('Пожалуйста, укажите контактный номер телефона');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'engineer_consultation_form',
          name: name.trim() || 'Потенциальный заказчик',
          phone: phone.trim(),
          comment: comment.trim(),
          preferredMessenger: 'call',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setError(data.error || 'Ошибка отправки');
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Info Column */}
          <div className={styles.infoCol}>
            <span className={styles.badge}>Персональная консультация</span>
            <h2 className={styles.title}>Закажите бесплатный выезд инженера на ваш участок</h2>
            <p className={styles.description}>
              Главный инженер-конструктор приедет на ваш участок в удобное время, проведет замер высот оптическим нивелиром, оценит грунты и подъездные пути для техники.
            </p>

            <div className={styles.engineerCard}>
              <div
                className={styles.engineerAvatar}
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80')`,
                }}
              />
              <div className={styles.engineerInfo}>
                <div className={styles.engineerName}>Алексей Воронов</div>
                <div className={styles.engineerRole}>Главный инженер проектов Nordic Craft (стаж 15 лет)</div>
                <div className={styles.engineerQuote}>«Грамотная посадка дома на участке экономит до 20% бюджета на фундаменте»</div>
              </div>
            </div>

            <div className={styles.checkList}>
              <div className={styles.checkItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Выезд в пределах 120 км от МКАД — 0 ₽</span>
              </div>
              <div className={styles.checkItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Составление предварительной сметы прямо на месте</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {!isSuccess ? (
                <>
                  <h3 className={styles.formTitle}>Забронировать выезд инженера</h3>
                  <p className={styles.formSubtitle}>
                    Оставьте контактные данные, и мы свяжемся для согласования удобного дня и времени
                  </p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    {error && <div className={styles.errorBox}>{error}</div>}

                    <div className={styles.field}>
                      <label className={styles.label}>Ваше имя</label>
                      <div className={styles.inputWrap}>
                        <User size={18} className={styles.inputIcon} />
                        <input
                          type="text"
                          placeholder="Михаил"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        Номер телефона <span className={styles.req}>*</span>
                      </label>
                      <div className={styles.inputWrap}>
                        <Phone size={18} className={styles.inputIcon} />
                        <input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={handlePhoneChange}
                          required
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Локация участка / комментарий</label>
                      <div className={styles.inputWrap}>
                        <MapPin size={18} className={styles.inputIcon} />
                        <input
                          type="text"
                          placeholder="Например: Новорижское ш., 45 км"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      rightIcon={<ArrowRight size={18} />}
                    >
                      Вызвать инженера на участок (0 ₽)
                    </Button>

                    <p className={styles.privacy}>
                      Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных
                    </p>
                  </form>
                </>
              ) : (
                <div className={styles.successBlock}>
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={48} color="#10B981" />
                  </div>
                  <h4 className={styles.successHeader}>Заявка принята!</h4>
                  <p className={styles.successDesc}>
                    Инженер свяжется с вами в течение 10 минут для подтверждения времени выезда.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)}>
                    Отправить еще одну заявку
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
