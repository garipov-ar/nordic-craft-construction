import React from 'react';

export const JsonLd: React.FC = () => {
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Nordic Craft Architecture & Construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    description:
      'Проектирование и капитальное строительство энергоэффективных домов под ключ со скандинавским характером. Фиксированная смета, гарантия 10 лет.',
    telephone: '+78000000000',
    email: 'demo@nordic-craft.example',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Архитекторов, 10',
      addressLocality: 'Москва',
      postalCode: '101000',
      addressCountry: 'RU',
    },
    priceRange: '44000RUB - 95000RUB per m2',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '142',
    },
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Может ли увеличиться стоимость строительства в процессе работ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Нет. Перед подписанием договора фиксируется подробная смета. Все риски удорожания материалов мы берем на себя.',
        },
      },
      {
        '@type': 'Question',
        name: 'Работаете ли вы с льготной ипотекой и эскроу-счетами?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы аккредитованы в Сбере, ВТБ, ДОМ.РФ и Альфа-Банке под программы IT-ипотеки и семейной ипотеки.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
    </>
  );
};
