import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import clientsConfig from '@/config/clients.json';
import type { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './client-detail.module.css';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const clients = clientsConfig.clients as ClientItem[];
  return clients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clients = clientsConfig.clients as ClientItem[];
  const client = clients.find((item) => item.slug === slug);

  if (!client) {
    return constructMetadata({
      title: 'Client Profile',
      description: 'Grace Technologies client profile.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `Client Profile: ${client.name}`,
    description: `Client profile for ${client.name}, in the ${client.category.toLowerCase()} sector.`,
    canonicalPath: `/client/${client.slug}`,
  });
}

export default async function ClientDetailPage({ params }: Props) {
  const { slug } = await params;
  const clients = clientsConfig.clients as ClientItem[];
  const client = clients.find((item) => item.slug === slug);

  if (!client) {
    notFound();
  }

  const initials = client.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Clients', url: `${SEO_CONFIG.siteUrl}/client` },
    { name: client.name, url: `${SEO_CONFIG.siteUrl}/client/${client.slug}` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <div className={styles.heroDecor} />
      <div className={styles.ambientGlowSpot} />

      <Breadcrumb
        items={[{ label: 'Clients', href: '/client' }, { label: client.name }]}
        backHref="/client"
        backLabel="Back to Clients"
      />

      <Container size="wide">
        <header className={styles.clientHeroBanner}>
          <div className={styles.heroContentGrid}>
            <div className={styles.heroInfoCol}>
              <div className={styles.badgeRow}>
                <span className={styles.categoryBadge}>{client.category}</span>
                <span className={styles.verifiedTag}>Client Profile</span>
              </div>

              <h1 className={styles.clientMainTitle}>{client.name}</h1>
              <p className={styles.projectSubtitle}>Client profile</p>
              <p className={styles.clientSummaryParagraph}>
                Grace Technologies focuses on digital marketing for UK businesses. Explore our
                current service to learn about the work we offer.
              </p>

              <div className={styles.metaSpecsGrid}>
                <div className={styles.metaSpecCard}>
                  <LocationOnIcon className={styles.metaSpecIcon} />
                  <div>
                    <span className={styles.metaSpecLabel}>Location</span>
                    <span className={styles.metaSpecVal}>{client.location}</span>
                  </div>
                </div>
                <div className={styles.metaSpecCard}>
                  <BusinessIcon className={styles.metaSpecIcon} />
                  <div>
                    <span className={styles.metaSpecLabel}>Sector</span>
                    <span className={styles.metaSpecVal}>{client.category}</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroActionRow}>
                <Link href="/services/digital-marketing" className={styles.heroPrimaryBtn}>
                  Explore Digital Marketing
                </Link>
                <Link href="/client" className={styles.heroBackLink}>
                  <ArrowBackIcon fontSize="small" />
                  <span>All Clients</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroBrandCardCol}>
              <div className={styles.brandGlassContainer}>
                <div className={styles.brandLogoFrame}>
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={160}
                      height={160}
                      className={styles.heroLogoImg}
                      priority
                    />
                  ) : (
                    <div className={styles.heroLogoPlaceholder}>{initials}</div>
                  )}
                </div>
                <div className={styles.brandCardFooter}>
                  <span className={styles.brandCardClientName}>{client.name}</span>
                  <span className={styles.brandCardTypeBadge}>Client</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.workSection}>
          <SectionHeading
            label="OUR CURRENT SERVICE"
            title="Digital Marketing"
            description="Grace Technologies provides digital marketing services for UK businesses. Learn about our approach, capabilities and business benefits."
            align="left"
          />
          <Link href="/services/digital-marketing" className={styles.heroPrimaryBtn}>
            View Digital Marketing Services
          </Link>
        </section>
      </Container>

      <ServiceCTASection
        title="Discuss Your Digital Marketing Goals"
        description="Contact Grace Technologies to talk about your audience, priorities and possible next steps."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle="Digital Marketing"
      />
    </div>
  );
}
