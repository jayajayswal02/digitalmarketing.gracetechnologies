'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import HeroVisual from './HeroVisual/HeroVisual';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background architectural grid and ambient particles */}
      <div className={styles.gridOverlay} />
      <div className={styles.radialBackdrop} />

      <Container size="wide" className={styles.container}>
        <div className={styles.heroGrid}>
          {/* LEFT SIDE: Brand Intro, Headline, Description, CTAs & Metrics */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.badgeWrap}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={styles.badgePulse} />
              <span className={styles.badgeText}>
                DIGITAL MARKETING FOR UK BUSINESSES
              </span>
            </motion.div>

            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital Marketing Services to{' '}
              <span className={styles.highlightText}>Grow Your Business</span>
            </motion.h1>

            <motion.p
              className={styles.supportingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Digital marketing helps people discover and understand your business online. We help UK small and medium-sized businesses, startups and e-commerce companies improve visibility, connect with relevant audiences and generate enquiries.
            </motion.p>
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button href="/services/digital-marketing" variant="primary" size="lg" icon>
                Get a Quote
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Interactive trust metrics strip */}
            <motion.div
              className={styles.metricStrip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>UK Focus</span>
                <span className={styles.metricLabel}>Digital Marketing Services</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>9 Capabilities</span>
                <span className={styles.metricLabel}>One Integrated Marketing Strategy</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricNum}>Data-Led</span>
                <span className={styles.metricLabel}>Strategy & Reporting</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive 4-Platform Connected Technology Visual */}
          <div className={styles.rightCol}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>


      </Container>
    </section>
  );
}
