import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import CTASection from '@/components/common/CTASection/CTASection';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { UkFlag, IndiaFlag } from '@/components/common/Flags/CountryFlags';
import officesData from '@/config/offices.json';
import PartnershipHeroVisual from '@/components/sections/PartnershipHeroVisual/PartnershipHeroVisual';
import styles from './partnership.module.css';
import Logo from "../../../public/logo/logo.png"

export const metadata: Metadata = constructMetadata({
  title: 'UK–India Marketing Partnership',
  description:
    'Learn about the partnership between UK-based Grace Technologies and Ank Square in India supporting digital marketing work for UK businesses.',
  canonicalPath: '/partnership',
  keywords: [
    'UK India digital marketing partnership',
    'Bilateral marketing collaboration',
    'Grace Technologies and Ank Square',
    'Cross-border marketing collaboration',
    'Digital marketing services UK',
  ],
});

export default function PartnershipPage() {
  const { uk, india } = officesData.offices;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'UK–India Partnership', url: `${SEO_CONFIG.siteUrl}/partnership` },
  ]);

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb
        items={[{ label: 'UK–India Partnership' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Hero */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>DIGITAL MARKETING PARTNERSHIP</span>
              <h1 className={styles.heroTitle}>
                UK Business Focus. <br />
                Collaborative Marketing.
              </h1>
              <p className={styles.heroSubtitle}>
                Grace Technologies is a UK-based digital marketing business that works with Ank Square in India on agreed marketing activity, content and campaigns.
              </p>
            </div>

            <div className={styles.heroVisualCol}>
              <PartnershipHeroVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* Dual Corporate Profiles */}
      <section className={styles.profilesSection}>
        <Container size="wide">
          <div className={styles.profilesGrid}>
            {/* Grace Technologies UK */}
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileIconWrap} title="United Kingdom">
                  <UkFlag className={styles.flagSvg} width={44} height={28} />
                </div>
                <div>
                  <span className={styles.profileCountry}>{uk.country}</span>
                  <h2 className={styles.profileTitle}>{uk.company}</h2>
                </div>
                <a
                  href={uk.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.urlBadge}
                >
                  <span>{uk.websiteDisplay}</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>

              {/* Official Logo Banner */}
              <div className={styles.logoBox}>
                <Image
                  src={Logo}
                  alt="Grace Technologies Official Logo"
                  width={160}
                  height={48}
                  className={styles.officialLogo}
                />
                <p className={styles.logoName}>Grace Technologies</p>
              </div>

              <p className={styles.profileRole}>{uk.role}</p>
              <p className={styles.profileDesc}>
                Based in the UK, Grace Technologies works with clients to understand business goals, agree marketing priorities and coordinate delivery.
              </p>

              <div className={styles.coreContributions}>
                <h4 className={styles.contribTitle}>Key Responsibilities:</h4>
                <ul className={styles.contribList}>
                  <li>Client relationships and business goals</li>
                  <li>Marketing strategy and channel priorities</li>
                  <li>Campaign coordination and agreed scope</li>
                  <li>Client communication and reporting</li>
                </ul>
              </div>

              <div className={styles.cardFooterLink}>
                <a
                  href={uk.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  <span>Visit Official Site ({uk.websiteDisplay})</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>
            </div>

            {/* Central Nexus Symbol */}
            <div className={styles.nexusStrip}>
              <div className={styles.nexusCircle}>
                <HandshakeIcon className={styles.nexusIcon} />
              </div>
            </div>

            {/* Ank Square India */}
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.profileIconWrap} title="India">
                  <IndiaFlag className={styles.flagSvg} width={44} height={28} />
                </div>
                <div>
                  <span className={styles.profileCountry}>{india.country}</span>
                  <h2 className={styles.profileTitle}>{india.company}</h2>
                </div>
                <a
                  href={india.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.urlBadge}
                >
                  <span>{india.websiteDisplay}</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>

              {/* Official Logo Banner */}
              <div className={styles.logoBox}>
                <Image
                  src="/logo/anksquarelogo.svg"
                  alt="Ank Square Private Limited Official Logo"
                  width={160}
                  height={48}
                  className={styles.officialLogo}
                />
                <p className={styles.logoName}>Ank Square Private Limited</p>
              </div>

              <p className={styles.profileRole}>{india.role}</p>
              <p className={styles.profileDesc}>
                Based in India, Ank Square Private Limited is our strategic partner. We collaborate on digital marketing activity, content and campaign delivery for businesses.
              </p>

              <div className={styles.coreContributions}>
                <h4 className={styles.contribTitle}>Key Responsibilities:</h4>
                <ul className={styles.contribList}>
                  <li>Digital marketing content and campaign delivery</li>
                    <li>Search, social, paid and email activity</li>
                    <li>Campaign coordination and review</li>
                    <li>Collaborative planning and reporting</li>
                </ul>
              </div>

              <div className={styles.cardFooterLink}>
                <a
                  href={india.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  <span>Visit Official Site ({india.websiteDisplay})</span>
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal Structure Clarity Notice */}
      <section className={styles.legalSection}>
        <Container size="narrow">
          <div className={styles.legalNotice}>
            <h3 className={styles.legalTitle}>Formal Independent Partnership Framework</h3>
            <p className={styles.legalText}>
              Grace Technologies ({uk.country}) and Ank Square Private Limited ({india.country}) are distinct legal entities. Any joint marketing work is governed by the agreed responsibilities and terms for that work.
            </p>
          </div>
        </Container>
      </section>

      {/* Client Benefits */}
      <section className={styles.benefitsSection}>
        <Container size="wide">
          <SectionHeading
            label="HOW WE COLLABORATE"
            title="A Collaborative Marketing Approach."
            description="The partnership supports agreed digital marketing activity, with responsibilities discussed and defined for each engagement."
            align="center"
          />

          <div className={styles.benefitsGrid}>
            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <SpeedIcon />
              </div>
              <h3 className={styles.bTitle}>Agreed Priorities</h3>
              <p className={styles.bDesc}>
                Marketing goals, channel priorities and responsibilities are discussed before work begins.
              </p>
            </div>

            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <MilitaryTechIcon />
              </div>
              <h3 className={styles.bTitle}>Connected Activity</h3>
              <p className={styles.bDesc}>
                Search, content, social, paid and email activity can be coordinated around the agreed plan.
              </p>
            </div>

            <div className={styles.bCard}>
              <div className={styles.bIconWrap}>
                <VerifiedUserIcon />
              </div>
              <h3 className={styles.bTitle}>Clear Communication</h3>
              <p className={styles.bDesc}>
                Clients can discuss progress, available reporting and next steps with the team.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Discuss Your Digital Marketing Goals."
        description="Contact Grace Technologies to talk about your audience, priorities and possible next steps."
        primaryCtaText="Get a Quote"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
