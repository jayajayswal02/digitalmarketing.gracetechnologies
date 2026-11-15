import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientCard, { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import clientsConfig from '@/config/clients.json';
import styles from './client.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Client Profiles',
  description:
    'Meet selected client organisations that have worked with Grace Technologies.',
  canonicalPath: '/client',
  keywords: [
    'Grace Technologies clients',
    'Grace Technologies client profiles',
    'Digital marketing services UK',
  ],
});

export default function ClientsIndexPage() {
  const clients = clientsConfig.clients as ClientItem[];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Clients', url: `${SEO_CONFIG.siteUrl}/client` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Clients' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="CLIENT PROFILES"
            title="Selected Client Relationships."
            description="Meet some of the businesses Grace Technologies has worked with."
            align="center"
            headingLevel="h1"
          />
        </Container>
      </section>

      {/* Grid of All Client Cards */}
      <section className={styles.gridSection}>
        <Container size="wide">
          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <ClientCard key={client.id} client={client} index={index} />
            ))}
          </div>

        </Container>
      </section>

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Grow Your Business Online?"
        description="Speak with our team about digital marketing for your business."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Digital Marketing"
        secondaryCtaHref="/services/digital-marketing"
      />
    </div>
  );
}
