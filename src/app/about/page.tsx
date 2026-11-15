import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import CTASection from '@/components/common/CTASection/CTASection';
import AboutHeroVisual from '@/components/sections/AboutHeroVisual/AboutHeroVisual';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './about.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'About Grace Technologies | Digital Marketing Company UK',
  titleIsAbsolute: true,
  description:
    'Learn how Grace Technologies helps UK businesses improve online visibility and connect with relevant audiences through strategic digital marketing.',
  canonicalPath: '/about',
  keywords: [
    'Grace Technologies',
    'Digital Marketing Agency UK',
    'Digital Marketing Company UK',
    'UK digital marketing services',
  ],
});

export default function AboutPage() {
  const webPageSchema = getWebPageSchema({
    name: 'About Grace Technologies | Digital Marketing Company UK',
    description:
      'Learn how Grace Technologies helps UK businesses improve online visibility and connect with relevant audiences through strategic digital marketing.',
    url: `${SEO_CONFIG.siteUrl}/about`,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'About Us', url: `${SEO_CONFIG.siteUrl}/about` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Breadcrumb
        items={[{ label: 'About Us' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Editorial Hero with 2-Column Visual Layout */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <span className={styles.badge}>ABOUT GRACE TECHNOLOGIES</span>
              <h1 className={styles.heroTitle}>
                Combining UK Business Insight With Strategic Digital Marketing.
              </h1>
              <p className={styles.heroSubtitle}>
                Grace Technologies helps UK businesses reach relevant audiences and build a stronger online presence through digital marketing, working with Ank Square in India as our strategic partner.
              </p>
            </div>

            {/* Right Hero Visual */}
            <div className={styles.heroVisualWrap}>
              <AboutHeroVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <Container size="wide">
          <div className={styles.storyGrid}>
            <div className={styles.storyLeft}>
              <span className={styles.subBadge}>OUR STORY</span>
              <h2 className={styles.storyHeading}>Built Around Clear Strategy and Collaboration.</h2>
            </div>
            <div className={styles.storyRight}>
              <p className={styles.storyText}>
                Businesses need marketing that reflects their commercial priorities, speaks clearly to customers and can be reviewed using meaningful information.
              </p>
              <p className={styles.storyText}>
                Grace Technologies was founded in the United Kingdom to help businesses address that need. Our UK presence and partnership with Ank Square Private Limited in India support collaborative digital marketing work shaped around each client&apos;s goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <Container size="wide">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvTag}>OUR MISSION</span>
              <h3 className={styles.mvTitle}>Supporting Business Growth Through Relevant Marketing.</h3>
              <p className={styles.mvDesc}>
                To help businesses communicate clearly, improve their online visibility and connect with relevant audiences through considered digital marketing.
              </p>
            </div>

            <div className={styles.mvCard}>
              <span className={styles.mvTag}>OUR VISION</span>
              <h3 className={styles.mvTitle}>A Trusted Partner for Digital Marketing.</h3>
              <p className={styles.mvDesc}>
                To build a trusted digital marketing partnership that gives clients clear communication, thoughtful strategy and consistent support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <Container size="wide">
          <SectionHeading
            label="GUIDING PRINCIPLES"
            title="Our Core Values."
            description="The principles that guide our marketing work, client communication and recommendations."
            align="left"
          />

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <h3 className={styles.valHeader}>Integrity & Candour</h3>
              <p className={styles.valP}>We speak plainly about marketing scope, timelines, and commercial realities. We never over-promise or sell unnecessary complexity.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>02</span>
              <h3 className={styles.valHeader}>Thoughtful Marketing</h3>
              <p className={styles.valP}>We ground recommendations in your audience, business goals and the available evidence.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>03</span>
              <h3 className={styles.valHeader}>Business-First Thinking</h3>
              <p className={styles.valP}>We focus on relevant activity and useful reporting rather than unsupported promises or vanity metrics.</p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>04</span>
              <h3 className={styles.valHeader}>Global Collaboration</h3>
              <p className={styles.valP}>We support collaborative marketing delivery, bringing together UK business planning and our partner&apos;s work in India.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Businesses Choose Us */}
      <section className={styles.whySection}>
        <Container size="wide">
          <div className={styles.whyBox}>
            <div className={styles.whyContent}>
              <span className={styles.subBadge}>OUR APPROACH</span>
              <h2 className={styles.whyTitle}>Why Forward-Thinking Leaders Choose Grace Technologies.</h2>
              <p className={styles.whyLead}>
                Our UK-based team works collaboratively with Ank Square in India to support clear communication, considered digital marketing strategy and consistent delivery.
              </p>
              <div className={styles.whyActions}>
                <Button href="/contact" variant="primary" size="lg" icon>
                  Initiate a Dialogue
                </Button>
                <Button href="/partnership" variant="outline" size="lg">
                  Explore The Partnership
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's Discuss Your Marketing Goals."
        description="Tell us about your audience, priorities and current marketing activity."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
