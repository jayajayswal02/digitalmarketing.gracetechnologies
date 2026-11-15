'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HubIcon from '@mui/icons-material/Hub';
import CampaignIcon from '@mui/icons-material/Campaign';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import styles from './WhyChooseUs.module.css';

const strengths = [
  {
    icon: BusinessCenterIcon,
    number: '01',
    title: 'Audience-Led Strategy',
    description: 'We start with your business goals, audience and current activity to set practical marketing priorities.',
  },
  {
    icon: HubIcon,
    number: '02',
    title: 'Connected Channels',
    description: 'Coordinate search, social, content, email and paid activity around a consistent message.',
  },
  {
    icon: CampaignIcon,
    number: '03',
    title: 'Clear Delivery',
    description: 'Agree scope, responsibilities and priorities before carrying out the planned marketing activity.',
  },
  {
    icon: QueryStatsIcon,
    number: '04',
    title: 'Evidence-Informed Review',
    description: 'Use available campaign data to understand activity and agree what to review or adjust next.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="THE GRACE ADVANTAGE"
          title="Why Choose Grace Technologies"
          description="We help businesses plan, deliver and review digital marketing activity around their goals."
          align="center"
        />

        <div className={styles.editorialGrid}>
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                className={styles.editorialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconCircle}>
                    <Icon className={styles.icon} />
                  </div>
                  <span className={styles.cardNumber}>{item.number}</span>
                </div>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.bottomBorder} />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
