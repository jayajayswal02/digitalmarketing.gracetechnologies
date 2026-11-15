'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import testimonialsData from '@/config/testimonials.json';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  service: string;
  avatarInitial: string;
  content: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = testimonialsData.testimonials;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-label="Client testimonials"
    >
      <Container size="wide">
        <SectionHeading
          label="CLIENT TESTIMONIALS"
          title="Endorsed by Visionary Leaders."
          description="Read how clients describe their experience working with Grace Technologies on digital marketing."
          align="center"
        />

        <div className={styles.cardsGrid}>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div
                  className={styles.starRating}
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <StarIcon key={starIndex} sx={{ fontSize: '1.125rem' }} />
                  ))}
                </div>
                <span className={styles.serviceBadge}>{item.service}</span>
              </div>

              <div className={styles.quoteSymbol} aria-hidden="true">
                <FormatQuoteIcon
                  sx={{ fontSize: '2.5rem', transform: 'rotate(180deg)' }}
                />
              </div>
              <p className={styles.quoteContent}>&ldquo;{item.content}&rdquo;</p>

              <div className={styles.cardFooter}>
                <div className={styles.avatar}>{item.avatarInitial}</div>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                  <span className={styles.authorCompany}>
                    {item.company} &bull; {item.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.article
            className={`${styles.card} ${styles.invitationCard}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: testimonials.length * 0.08 }}
          >
            <span className={styles.invitationLabel}>YOUR EXPERIENCE</span>
            <h3 className={styles.invitationTitle}>Your story could be next.</h3>
            <p className={styles.invitationDescription}>
              We value honest feedback from the businesses we work with. Talk
              to our team about your digital marketing goals.
            </p>
            <Link href="/contact" className={styles.invitationLink}>
              Get in touch <ArrowForwardIcon fontSize="small" />
            </Link>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
