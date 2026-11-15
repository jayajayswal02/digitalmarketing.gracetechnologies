import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema, getWebPageSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { SERVICES_DATA } from '@/config/site';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ShareIcon from '@mui/icons-material/Share';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import styles from '../service-page.module.css';

const service = SERVICES_DATA[0];
const capabilityIcons = [
  SearchIcon,
  AutoAwesomeIcon,
  QuestionAnswerIcon,
  ShareIcon,
  AdsClickIcon,
  ArticleOutlinedIcon,
  EmailOutlinedIcon,
  PersonAddAlt1Icon,
  QueryStatsIcon,
];

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Agency UK | Grace Technologies',
  titleIsAbsolute: true,
  description:
    'Explore digital marketing solutions from Grace Technologies, including SEO, GEO, AEO, social media marketing, paid advertising and lead generation.',
  canonicalPath: '/services/digital-marketing',
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

export default function DigitalMarketingPage() {
  const serviceSchema = getServiceSchema({
    name: 'Digital Marketing',
    description: service.description,
    url: `${SEO_CONFIG.siteUrl}/services/digital-marketing`,
    serviceType: 'Digital Marketing',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: 'Digital Marketing', url: `${SEO_CONFIG.siteUrl}/services/digital-marketing` },
  ]);

  const faqSchema = getFaqSchema(
    service.faqs ? service.faqs.map((f) => ({ question: f.question, answer: f.answer })) : []
  );
  const webPageSchema = getWebPageSchema({
    name: 'Digital Marketing Agency UK | Grace Technologies',
    description:
      'Explore digital marketing solutions from Grace Technologies, including SEO, GEO, AEO, social media marketing, paid advertising and lead generation.',
    url: `${SEO_CONFIG.siteUrl}/services/digital-marketing`,
  });

  return (
    <div className={styles.page}>
      <JsonLd data={[webPageSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Digital Marketing' },
        ]}
        backHref="/services"
        backLabel="Back to Services"
      />

      {/* Hero with Visual */}
      <ServiceDetailHero
        serviceId={service.id}
        serviceTitle={service.title}
        number={service.number}
        tagline={service.tagline}
        headline={service.headline}
        description={service.description}
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* Capabilities Section */}
      <section id="capabilities" className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="DIGITAL MARKETING SERVICES"
            title="Digital Marketing Services"
            description="Choose the digital marketing activities that fit your business goals, audience and available resources."
            align="left"
          />

          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap, index) => {
              const Icon = capabilityIcons[index];

              return (
              <div key={cap.title} className={styles.capCard}>
                <div className={styles.capHeader}>
                  <Icon className={styles.capIcon} aria-hidden="true" />
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                </div>
                <p className={styles.capDesc}>{cap.description}</p>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="BUSINESS BENEFITS"
            title="Benefits of Digital Marketing"
            description="A joined-up strategy can help make your marketing clearer, more relevant and easier to assess."
            align="left"
          />

          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, i) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <span className={styles.benefitIndex}>0{i + 1}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />

      {/* Process Section */}
      <section className={styles.section}>
        <Container size="wide">
          <SectionHeading
            label="HOW WE WORK"
            title="A Clear, Collaborative Process"
            description="We agree priorities with you, deliver the planned activity and review progress together."
            align="center"
          />

          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className={styles.faqSection}>
        <Container size="narrow">
          <SectionHeading
            label="QUESTIONS & ANSWERS"
            title="Digital Marketing FAQs"
            description="Common questions about our marketing services, approach and reporting."
            align="center"
          />

          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      {/* Enquiry CTA */}
      <ServiceCTASection
        title="Ready to Discuss Your Digital Marketing?"
        description="Tell us about your business goals and we will discuss how our digital marketing services may help."
        primaryCtaText="Get a Quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        serviceTitle={service.title}
      />
    </div>
  );
}
