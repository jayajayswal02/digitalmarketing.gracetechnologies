'use client';

import React from 'react';
import Link from 'next/link';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { cities, normalizeSegment } from '@/data/cities';
import styles from './LocationNavigation.module.css';

interface LocationNavigationProps {
  currentServiceSlug: string;
  currentCitySlug?: string;
  serviceTitle: string;
}

export default function LocationNavigation({
  currentServiceSlug,
  currentCitySlug,
  serviceTitle,
}: LocationNavigationProps) {
  // Group all cities by nation
  const hubsByCountry = {
    England: cities.filter((h) => h.country === 'England'),
    Scotland: cities.filter((h) => h.country === 'Scotland'),
    Wales: cities.filter((h) => h.country === 'Wales'),
    'Northern Ireland': cities.filter((h) => h.country === 'Northern Ireland'),
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badgeRow}>
          <PlaceOutlinedIcon className={styles.pinIcon} />
          <span className={styles.badge}>REGIONAL COVERAGE</span>
        </div>
        <h3 className={styles.title}>{serviceTitle} Across the United Kingdom</h3>
        <p className={styles.description}>
          Grace Technologies supports businesses across England, Scotland, Wales and Northern Ireland with digital marketing services and remote consultations.
        </p>
      </div>

      <div className={styles.countriesGrid}>
        {Object.entries(hubsByCountry).map(([countryName, hubs]) => (
          <div key={countryName} className={styles.countryCard}>
            <h4 className={styles.countryTitle}>{countryName}</h4>
            <div className={styles.cityPills}>
              {hubs.map((hub) => {
                const cSlug = normalizeSegment(hub.city);
                const sSlug = normalizeSegment(hub.state);
                const coSlug = normalizeSegment(hub.country);
                const isCurrent = currentCitySlug === cSlug;
                const href = `/services/${currentServiceSlug}/${cSlug}/${sSlug}/${coSlug}`;

                return (
                  <Link
                    key={`${hub.city}-${hub.state}`}
                    href={href}
                    className={`${styles.cityPill} ${isCurrent ? styles.cityPillActive : ''}`}
                  >
                    <span>{hub.city}</span>
                    <ArrowForwardIcon className={styles.arrowIcon} />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
