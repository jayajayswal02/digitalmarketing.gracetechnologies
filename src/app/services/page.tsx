import React from 'react';
import type { Metadata } from 'next';
import ServicesOverview from '@/components/sections/ServicesOverview/ServicesOverview';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './services.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Our Digital Marketing Services UK',
  description:
    'Explore digital marketing services from Grace Technologies for UK businesses, including SEO, GEO, AEO, social media marketing, paid advertising and lead generation.',
  canonicalPath: '/services',
  keywords: [
    'Digital Marketing Agency UK',
    'Digital Marketing Services UK',
    'Digital Marketing Company UK',
    'SEO Services UK',
    'Online Marketing Services',
  ],
});

export default function ServicesPage() {
  const webPageSchema = getWebPageSchema({
    name: 'Digital Marketing Services UK | Grace Technologies',
    description:
      'Explore digital marketing services from Grace Technologies for UK businesses, including SEO, GEO, AEO, social media marketing, paid advertising and lead generation.',
    url: `${SEO_CONFIG.siteUrl}/services`,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Breadcrumb
        items={[{ label: 'Services' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* The single service currently offered by Grace Technologies */}
      <ServicesOverview headingLevel="h1" />

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Grow Your Business?"
        description="Talk with Grace Technologies about digital marketing that fits your business goals."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
