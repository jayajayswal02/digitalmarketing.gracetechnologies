import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { constructMetadata } from '@/lib/seo/metadata';
import styles from './legal.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description:
    'Review the terms for the Grace Technologies website and digital marketing services for UK businesses.',
  canonicalPath: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[{ label: 'Terms & Conditions' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <Container size="narrow">
        <div className={styles.content}>
          <span className={styles.badge}>TERMS OF ENGAGEMENT</span>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2026</p>

          <section className={styles.legalSection}>
            <h2>1. Introduction & Acceptance</h2>
            <p>
              By accessing the Grace Technologies website or engaging our digital marketing services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use immediately.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>2. Nature of Services & Partnership</h2>
            <p>
              Grace Technologies is a United Kingdom digital marketing business. Where work involves independent partners, each party remains a separate legal entity and the agreed client contract defines their responsibilities.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>3. Digital Marketing Services</h2>
            <p>
              The scope, deliverables, fees, advertising budgets and reporting for digital marketing work are set out in the relevant client agreement. Marketing outcomes depend on factors outside our control, and we do not guarantee search rankings, leads, sales or revenue.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>4. Intellectual Property</h2>
            <p>
              Website content, brand assets and original materials remain the intellectual property of their respective owners. Any rights in client marketing materials or deliverables are governed by the applicable client agreement.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h2>5. Governing Law</h2>
            <p>
              These Terms and Conditions and any disputes arising out of or related to our services are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
