'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './ClientCard.module.css';

export interface ClientItem {
  id: number;
  name: string;
  slug: string;
  logo: string;
  category: string;
  location: string;
}

interface ClientCardProps {
  client: ClientItem;
  index: number;
}

export default function ClientCard({ client, index }: ClientCardProps) {
  const { name, slug, logo, category, location } = client;

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <span className={styles.bracketTL} />
      <span className={styles.bracketBR} />

      <div className={styles.previewArea}>
        <div className={styles.previewGlow} />
        {location && <span className={styles.previewTopBadge}>{location}</span>}

        <div className={styles.logoContainer}>
          {logo ? (
            <Image
              src={logo}
              alt={`${name} Official Logo`}
              width={90}
              height={90}
              className={styles.logoImage}
            />
          ) : (
            <div className={styles.logoPlaceholder}>{initials}</div>
          )}
        </div>
      </div>

      <div className={styles.cardContent}>
        <div>
          <span className={styles.categoryLabel}>{category}</span>
          <h3 className={styles.clientName}>{name}</h3>
          <p className={styles.projectTitle}>Client profile</p>
        </div>

        <div className={styles.cardActionRow}>
          <Link href={`/client/${slug}`} className={styles.viewProjectLink}>
            <span>View client profile</span>
            <ArrowForwardIcon />
          </Link>

          <Link
            href={`/client/${slug}`}
            className={styles.actionCircle}
            aria-label={`View client profile for ${name}`}
          >
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
