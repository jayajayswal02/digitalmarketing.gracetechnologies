'use client';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShareIcon from '@mui/icons-material/Share';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import styles from './ServiceVisual.module.css';

const marketingChannels = [
  { label: 'Search', icon: SearchIcon },
  { label: 'GEO & AEO', icon: AutoAwesomeIcon },
  { label: 'Social', icon: ShareIcon },
  { label: 'Paid campaigns', icon: AdsClickIcon },
  { label: 'Content', icon: ArticleOutlinedIcon },
  { label: 'Email', icon: EmailOutlinedIcon },
  { label: 'Lead generation', icon: PersonAddAlt1Icon },
  { label: 'Reporting', icon: QueryStatsIcon },
];

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  if (serviceId !== 'digital-marketing') {
    return null;
  }

  return (
    <div className={styles.visualContainer} aria-label="Digital marketing channels">
      <div className={styles.ambientGlow} />
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <div>
            <span className={styles.eyebrow}>DIGITAL MARKETING</span>
            <h3 className={styles.title}>A connected approach</h3>
          </div>
          <QueryStatsIcon className={styles.headerIcon} aria-hidden="true" />
        </div>

        <div className={styles.channelGrid}>
          {marketingChannels.map(({ label, icon: Icon }) => (
            <div className={styles.channel} key={label}>
              <span className={styles.channelIcon}>
                <Icon aria-hidden="true" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.processBar} aria-label="Plan, deliver, review">
          <span>Plan</span>
          <span className={styles.processLine} />
          <span>Deliver</span>
          <span className={styles.processLine} />
          <span>Review</span>
        </div>
      </div>
    </div>
  );
}
