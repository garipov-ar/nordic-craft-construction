import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { TrustStats } from '@/components/sections/TrustStats';
import { QuizCalculator } from '@/components/quiz/QuizCalculator';
import { ProjectsCatalog } from '@/components/projects/ProjectsCatalog';
import { Services } from '@/components/sections/Services';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Guarantees } from '@/components/sections/Guarantees';
import { FAQ } from '@/components/sections/FAQ';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
import { JsonLd } from '@/components/seo/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <QuizCalculator />
        <ProjectsCatalog />
        <Services />
        <ProcessTimeline />
        <Guarantees />
        <FAQ />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
