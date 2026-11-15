'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section id="company-intro" className={styles.section}>
      <Container size="wide">
        <div className={styles.grid}>
          {/* Left Column: Asymmetrical Editorial Heading & Subheading */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.labelWrap}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.label}>WHO WE ARE</span>
            </motion.div>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Grace Technologies
            </motion.h2>

            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Digital marketing brings together channels such as search, social media, content, email and paid campaigns to help businesses reach customers online. Grace Technologies builds practical strategies for UK small and medium-sized businesses, startups and e-commerce companies.
            </motion.p>

            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button href="/about" variant="secondary" size="md" icon>
                About Us
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Abstract editorial architectural visualization card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.interactivePillarCard}>
              <div className={styles.cardHeaderStrip}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.systemTag}>SYSTEM ARCHITECTURE // GT-UK-IN</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.cardHeading}>Digital Marketing Built Around Your Goals.</p>
                <p className={styles.cardText}>
                  We work with UK businesses to build clear marketing strategies, improve search visibility and connect with relevant audiences. Our approach focuses on practical activity, open communication and reporting that helps clients understand their marketing progress.                </p>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Strategic Business Alignment</p>
                      <p className={styles.valDesc}>Connecting marketing decisions with business goals and audience needs.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Tailored Marketing Strategy</p>
                      <p className={styles.valDesc}>Aligning channel choices and messaging with your audience and business priorities.</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <div className={styles.valueCheck}>✓</div>
                    <div>
                      <p className={styles.valTitle}>Clear, Consistent Reporting</p>
                      <p className={styles.valDesc}>Sharing useful updates so you can understand activity, results and next steps.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient visual overlay */}
              <div className={styles.cardMesh} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
