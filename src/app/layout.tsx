import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#12151A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Nordic Craft — Проектирование и строительство энергоэффективных домов под ключ',
  description:
    'Строительство загородных домов и коттеджей в скандинавском стиле под ключ. Фиксированная смета в договоре, 10 лет гарантии, онлайн-калькулятор стоимости и 140+ реализованных объектов.',
  keywords: [
    'строительство домов под ключ',
    'скандинавские дома',
    'строительство коттеджей',
    'калькулятор стоимости строительства',
    'дома из газобетона',
    'фахверковые дома',
    'каркасные дома',
  ],
  authors: [{ name: 'Nordic Craft Architecture & Construction' }],
  openGraph: {
    title: 'Nordic Craft — Строительство домов со скандинавским характером',
    description: 'Индивидуальные проекты, фиксированная смета без доплат и гарантия 10 лет.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Nordic Craft Construction',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
