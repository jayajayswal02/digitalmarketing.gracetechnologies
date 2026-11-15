import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero/Hero';
import CompanyIntro from '@/components/sections/CompanyIntro/CompanyIntro';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import Projects from '@/components/sections/Projects/Projects';
import ClientSection from '@/components/sections/ClientSection/ClientSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import HowWeWork from '@/components/sections/HowWeWork/HowWeWork';
import PartnershipSection from '@/components/sections/PartnershipSection/PartnershipSection';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import CTASection from '@/components/common/CTASection/CTASection';
import HomeContactSection from '@/components/sections/HomeContactSection/HomeContactSection';
import GlobalOffices from '@/components/sections/GlobalOffices/GlobalOffices';

import { constructMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/seo/JsonLd';
import { getWebPageSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Services UK',
  description: SEO_CONFIG.defaultDescription,
  canonicalPath: '/',
  keywords: [
    'Digital Marketing Agency UK',
    'Digital Marketing Services UK',
    'Digital Marketing Company UK',
    'Online Marketing Agency UK',
    'Digital Marketing Solutions UK',
    'SEO Services UK',
    'Search Engine Optimisation',
    'Generative Engine Optimisation',
    'Answer Engine Optimisation',
    'Social Media Marketing UK',
    'Google Ads Management',
    'Paid Advertising Services',
    'Content Marketing Services',
    'Email Marketing Services',
    'Lead Generation Services',
    'Digital Marketing Strategy',
  ],
});

export default function HomePage() {
  const webPageSchema = getWebPageSchema({
    name: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
  });

  return (
    <>
      <JsonLd data={webPageSchema} />
      {/* SECTION 1 – CINEMATIC HERO */}
      <Hero />

      {/* SECTION 2 – COMPANY INTRODUCTION */}
      <CompanyIntro />

      {/* SECTION 3 – SERVICES OVERVIEW */}
      <ServicesOverview />

      {/* SECTION 4 – FEATURED PROJECTS (REDESIGNED HORIZONTAL CAROUSEL & FILTERS) */}
      <Projects />

      {/* SECTION 4B – PROVEN COMMERCIAL CLIENT ENGAGEMENTS */}
      <ClientSection />

      {/* SECTION 5 – WHY GRACE TECHNOLOGIES */}
      <WhyChooseUs />

      {/* SECTION 6 – HOW WE WORK */}
      <HowWeWork />

      {/* SECTION 7 – UK–INDIA PARTNERSHIP */}
      <PartnershipSection />



      {/* SECTION 9 – CLIENT TESTIMONIALS (INFINITE 3-CARD CAROUSEL) */}
      <Testimonials />

      {/* SECTION 10 – FINAL CTA */}
      <CTASection
        title="Ready to Grow Your Business?"
        description="Talk with Grace Technologies about a digital marketing strategy for your business."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/contact"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* SECTION 10 – CONTACT SECTION */}
      <HomeContactSection />

      {/* SECTION 11 – BILATERAL ADDRESS & INTERACTIVE COORDINATE GLOBE */}
      <GlobalOffices />
    </>
  );
}
