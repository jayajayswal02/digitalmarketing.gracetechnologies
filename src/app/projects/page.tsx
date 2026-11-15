import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import ProjectsClientView from './ProjectsClientView';
import projectsConfig from '@/config/projects.json';
import type { ProjectItem } from '@/data/projects';
import styles from './projects.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Selected Client Relationships',
  description:
    'Explore selected client organisations and their work with Grace Technologies.',
  canonicalPath: '/projects',
  keywords: [
    'Grace Technologies projects',
    'Grace Technologies client profiles',
    'Digital marketing services UK',
  ],
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Projects', url: `${SEO_CONFIG.siteUrl}/projects` },
  ]);

  // Pass project data directly from the centralized JSON configuration
  const projectsData = projectsConfig.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'Projects' }]}
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

      {/* Interactive Filterable Projects Grid */}
      <section className={styles.gridSection}>
        <ProjectsClientView initialProjects={projectsData} />
      </section>

 
      {/* Conversion CTA with modal trigger */}
      <ServiceCTASection
        title="Looking for Digital Marketing Support?"
        description="Talk with our UK team about your business goals and marketing priorities."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Digital Marketing"
        secondaryCtaHref="/services/digital-marketing"
      />
    </div>
  );
}
