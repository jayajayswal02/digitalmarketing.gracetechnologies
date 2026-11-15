import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import LanguageIcon from '@mui/icons-material/Language';
import HubIcon from '@mui/icons-material/Hub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getWebPageSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import officesData from '@/config/offices.json';
import styles from './contact.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Grace Technologies | Digital Marketing UK',
  titleIsAbsolute: true,
  description:
    'Contact Grace Technologies to discuss digital marketing solutions for your business and explore opportunities to grow your online presence.',
  canonicalPath: '/contact',
  keywords: [
    'Contact digital marketing agency UK',
    'Grace Technologies contact',
    'Digital marketing consultation UK',
    'SEO services UK',
  ],
});

export default function ContactPage() {
  const { uk, india } = officesData.offices;
  const webPageSchema = getWebPageSchema({
    name: 'Contact Grace Technologies | Digital Marketing UK',
    description:
      'Contact Grace Technologies to discuss digital marketing solutions for your business and explore opportunities to grow your online presence.',
    url: `${SEO_CONFIG.siteUrl}/contact`,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Contact Us', url: `${SEO_CONFIG.siteUrl}/contact` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <Breadcrumb
        items={[{ label: 'Contact Us' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      <section className={styles.section}>
        <Container size="wide">
          <div className={styles.layout}>
            {/* Left Column: Context, Trust, Offices */}
            <div className={styles.infoCol}>
              <span className={styles.badge}>DIGITAL MARKETING ENQUIRIES</span>
              <h1 className={styles.heading}>Let&apos;s Discuss Your Digital Marketing Goals.</h1>
              <p className={styles.subheading}>
                Start a conversation with our UK team about digital marketing, your audience and your business goals.
              </p>

              {/* UK Office Card */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <LanguageIcon className={styles.officeIcon} />
                  <div>
                    <h3 className={styles.officeName}>{uk.country}</h3>
                    <span className={styles.officeRole}>{uk.company} • {uk.tag}</span>
                  </div>
                </div>
                <div className={styles.officeDetails}>
                  <p>{uk.addressLines.join(', ')}</p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon fontSize="inherit" />
                    <a href={`mailto:${uk.email}`}>{uk.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon fontSize="inherit" />
                    <a href={`tel:${uk.phone.replace(/\s+/g, '')}`}>{uk.phone}</a>
                  </p>
                </div>
              </div>

              {/* India Office Card */}
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <HubIcon className={styles.officeIcon} />
                  <div>
                    <h3 className={styles.officeName}>{india.country}</h3>
                    <span className={styles.officeRole}>{india.company} • {india.tag}</span>
                  </div>
                </div>
                <div className={styles.officeDetails}>
                  <p>{india.addressLines.join(', ')}</p>
                  <p className={styles.contactLine}>
                    <EmailOutlinedIcon fontSize="inherit" />
                    <a href={`mailto:${india.email}`}>{india.email}</a>
                  </p>
                  <p className={styles.contactLine}>
                    <PhoneOutlinedIcon fontSize="inherit" />
                    <a href={`tel:${india.phone.replace(/[^0-9+]/g, '')}`}>{india.phone}</a>
                  </p>
                </div>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                  <SecurityOutlinedIcon className={styles.trustIcon} />
                  <span>Enquiries are handled in line with our privacy policy.</span>
                </div>
                <div className={styles.trustItem}>
                  <EmailOutlinedIcon className={styles.trustIcon} />
                  <span>We review your enquiry and discuss suitable next steps.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
