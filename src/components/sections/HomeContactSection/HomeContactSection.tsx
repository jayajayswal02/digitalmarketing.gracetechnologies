'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import ContactForm from '@/components/sections/ContactForm/ContactForm';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './HomeContactSection.module.css';

export default function HomeContactSection() {
  return (
    <section id="contact-section" className={styles.section}>
      <Container size="wide">
        <div className={styles.layout}>
          {/* Left Column: Context, Value Proposition & Reassurance */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>DIGITAL MARKETING ENQUIRIES</span>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.subheading}>
              Tell us about your audience and business goals. Our team is ready to discuss a practical digital marketing approach.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <CheckCircleIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>UK-Based Contact</p>
                  <p className={styles.benefitDesc}>Discuss your business goals with the Grace Technologies team.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <SecurityOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>Privacy Matters</p>
                  <p className={styles.benefitDesc}>We handle enquiries in line with our privacy policy.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.iconCircle}>
                  <EmailOutlinedIcon fontSize="small" />
                </div>
                <div>
                  <p className={styles.benefitTitle}>Clear Next Steps</p>
                  <p className={styles.benefitDesc}>We will review your enquiry and discuss a suitable next step.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
