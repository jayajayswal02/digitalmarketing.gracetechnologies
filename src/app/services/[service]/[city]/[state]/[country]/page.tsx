import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import LocationNavigation from '@/components/sections/LocationNavigation/LocationNavigation';
import JsonLd from '@/components/seo/JsonLd';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { getServiceConfig } from '@/config/services';
import { getCityFromSegments } from '@/data/cities';
import { getLocationStatus } from '@/config/locationSeo';
import { SEO_CONFIG } from '@/lib/seo/config';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import styles from './location-page.module.css';

interface LocationPageProps {
  params: Promise<{
    service: string;
    city: string;
    state: string;
    country: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  if (!service || !cityData) {
    return {
      title: 'Location Not Found',
      robots: { index: false, follow: false },
    };
  }

  const status = getLocationStatus(
    cityData.city,
    cityData.state,
    cityData.country,
    service.slug
  );
  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  const metaTitle = `${service.name} in ${cityData.city}, ${cityData.state}`;
  const metaDescription = `Looking for digital marketing services in ${cityData.city}, ${cityData.state}? Grace Technologies helps UK businesses improve online visibility, reach relevant audiences and generate quality leads.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${metaTitle} | Grace Technologies`,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type: 'website',
      images: [
        {
          url: SEO_CONFIG.defaultOgImage,
          alt: `${service.name} in ${cityData.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${metaTitle} | Grace Technologies`,
      description: metaDescription,
      images: [SEO_CONFIG.defaultOgImage],
    },
    robots: status.isIndexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LocationServicePage({ params }: LocationPageProps) {
  // Indicate rendering should wait for an incoming user request, making the route fully dynamic on demand
  await connection();

  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  // Validate all segments: 404 on invalid service, city, state, or country
  if (!service || !cityData) {
    notFound();
  }

  const status = getLocationStatus(
    cityData.city,
    cityData.state,
    cityData.country,
    service.slug
  );
  if (!status.isPublished) {
    notFound();
  }

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  // Structured schemas
  const serviceSchema = getServiceSchema({
    name: `${service.name} Services in ${cityData.city}, ${cityData.state}`,
    description: `Digital marketing services for businesses in ${cityData.city}, ${cityData.state}, ${cityData.country}.`,
    url: canonicalUrl,
    serviceType: service.name,
    areaServedName: `${cityData.city}, ${cityData.state}, ${cityData.country}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: service.name, url: `${SEO_CONFIG.siteUrl}/services/${service.slug}` },
    { name: cityData.city, url: canonicalUrl },
  ]);

  // Location-tailored FAQs
  const locationFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost for businesses in ${cityData.city}?`,
      answer: `Pricing depends on your goals, audience, channel mix and the work required. Grace Technologies discusses scope and provides a clear proposal before work begins.`,
    },
    {
      question: `Can businesses in ${cityData.city} work with Grace Technologies remotely?`,
      answer: `Yes. Grace Technologies serves clients across ${cityData.city}, ${cityData.state}, and nationwide using streamlined digital project management, collaborative video sessions, and UK-governed communication channels.`,
    },
    {
      question: 'Which digital marketing channels can you help with?',
      answer:
        'Depending on the agreed scope, work can include SEO, GEO, AEO, social media, Google Ads and other paid advertising, content, email, lead generation and marketing reporting.',
    },
    {
      question: `How do you measure marketing activity?`,
      answer: `Reporting is agreed to fit the work and available data. It can cover activity, audience engagement and enquiries, with context on limitations.`,
    },
  ];

  const faqSchema = getFaqSchema(locationFaqs);

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
          { label: cityData.city },
        ]}
        backHref={`/services/${service.slug}`}
        backLabel={`Back to ${service.name}`}
      />

      {/* Dynamic Location Hero */}
      <ServiceDetailHero
        serviceId={service.slug}
        number="01"
        tagline={`${cityData.city.toUpperCase()}, ${cityData.country.toUpperCase()}`}
        headline={`${service.primaryKeyword} in ${cityData.city}, ${cityData.state}`}
        description={`Grace Technologies helps businesses in ${cityData.city}, ${cityData.state} improve online visibility, reach relevant audiences and generate quality leads through digital marketing.`}
        serviceTitle={service.name}
      />

      <Container size="wide">
        {/* Section 1: Strategic Regional Context */}
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <span className={styles.highlightTag}>DIGITAL MARKETING IN {cityData.city.toUpperCase()}</span>
              <h2 className={styles.introTitle}>
                Digital Marketing for Businesses in {cityData.city}, {cityData.state}
              </h2>
              <p className={styles.introParagraph}>
                Whether you are a growing business or an established organisation in {cityData.state}, marketing activity should be shaped around your audience, goals and available resources.
              </p>
              <p className={styles.introParagraph}>
                We help UK businesses plan and deliver agreed activity across search, social media, paid advertising, content and email, with clear priorities and reporting based on available data.
              </p>
            </div>

            <div className={styles.locationHighlightBox}>
              <span className={styles.highlightTag}>SERVICE AREA</span>
              <h3 className={styles.highlightTitle}>{cityData.city}, {cityData.country}</h3>
              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Region: {cityData.state}</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Jurisdiction: United Kingdom</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Service: Digital Marketing</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Consultations: Remote, by arrangement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Service Capabilities */}
        <section className={styles.section}>
          <SectionHeading
            label="WHAT WE DELIVER"
            title={`${service.name} Capabilities`}
            description={`Digital marketing activity shaped around the goals and audiences of businesses in ${cityData.city}.`}
          />
          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap, index) => (
              <div key={cap.title} className={styles.capabilityCard}>
                <span className={styles.capabilityNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Choose Grace Technologies */}
        <section className={styles.section}>
          <SectionHeading
            label="OUR ADVANTAGE"
            title={`Why ${cityData.city} Enterprises Partner With Us`}
            description="A practical approach to channel planning, delivery and reporting."
          />
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>UK-Based Communication</h3>
              <p className={styles.whyUsDesc}>
                Discuss your business goals and agree the scope, priorities and communication for your marketing work.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>Connected Channels</h3>
              <p className={styles.whyUsDesc}>
                Coordinate search, content, social, email and paid activity around a consistent message and agreed objectives.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>Clear Reporting</h3>
              <p className={styles.whyUsDesc}>
                Review marketing activity and the available data to understand progress and inform next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Marketing Process */}
        <section className={styles.section}>
          <SectionHeading
            label="HOW WE WORK"
            title="Our Marketing Process"
            description={`A clear, four-stage process for planning and reviewing marketing activity with your ${cityData.city} business.`}
          />
          <div className={styles.processGrid}>
            {service.process.map((p) => (
              <div key={p.step} className={styles.processCard}>
                <div className={styles.processStep}>{p.step}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Regional FAQs */}
        <section className={styles.section}>
          <SectionHeading
            label="FREQUENT QUESTIONS"
            title={`Frequently Asked Questions in ${cityData.city}`}
            description="Answers about digital marketing scope, remote working and reporting."
          />
          <FaqAccordion faqs={locationFaqs} />
        </section>

        {/* Section 6: UK Regional Navigation */}
        <LocationNavigation
          currentServiceSlug={service.slug}
          currentCitySlug={cityData.citySlug}
          serviceTitle={service.name}
        />
      </Container>

      {/* Dynamic CTA */}
      <ServiceCTASection
        badge={`ELEVATE YOUR ${cityData.city.toUpperCase()} BUSINESS`}
        title={`Discuss Digital Marketing for Your ${cityData.city} Business`}
        description="Tell us about your goals and current marketing activity. We can discuss a suitable scope and next steps."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle={service.name}
      />
    </div>
  );
}
