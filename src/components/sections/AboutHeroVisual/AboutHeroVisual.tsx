'use client';

import React from 'react';
import styles from './AboutHeroVisual.module.css';

export default function AboutHeroVisual() {
  return (
    <div className={styles.visualContainer} aria-hidden="true">
      {/* Background ambient radial aura */}
      <div className={styles.ambientGlow} />

      {/* Outer subtle rotating orbital boundary */}
      <div className={styles.orbitCircle} />
      <div className={styles.orbitCircleDashed} />

      {/* Main architectural glass frame */}
      <div className={styles.glassTerminal}>
        {/* Terminal Header */}
        <div className={styles.terminalHeader}>
          <div className={styles.windowControls}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <span className={styles.terminalTag}>GT // DIGITAL MARKETING</span>
          <span className={styles.liveBadge}>COLLABORATION</span>
        </div>

        {/* Central Interconnected Hexagonal Monolith */}
        <div className={styles.coreMonolith}>
          <div className={styles.monolithRing} />
          <div className={styles.coreEmblem}>
            <span className={styles.coreLetter}>G</span>
            <span className={styles.coreSub}>GT-UK</span>
          </div>
          <div className={styles.pulseRings} />
        </div>

        {/* Bilateral Axis Nodes */}
        <div className={styles.axisBridge}>
          {/* UK Pillar */}
          <div className={`${styles.nodeCard} ${styles.ukNode}`}>
            <div className={styles.nodeIconWrap}>
              <span className={styles.flagIcon}>🇬🇧</span>
            </div>
            <div className={styles.nodeText}>
              <span className={styles.nodeTitle}>United Kingdom</span>
              <span className={styles.nodeDesc}>UK Business Planning</span>
            </div>
          </div>

          <div className={styles.connectingLine}>
            <span className={styles.photon} />
          </div>

          {/* India Pillar */}
          <div className={`${styles.nodeCard} ${styles.inNode}`}>
            <div className={styles.nodeIconWrap}>
              <span className={styles.flagIcon}>🇮🇳</span>
            </div>
            <div className={styles.nodeText}>
              <span className={styles.nodeTitle}>India Partner Team</span>
              <span className={styles.nodeDesc}>Campaign and Content Support</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Ticker */}
        <div className={styles.metricsBar}>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>Audience-Led</span>
            <span className={styles.metricLbl}>Marketing Strategy</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>Agreed</span>
            <span className={styles.metricLbl}>Channel Priorities</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>Regular</span>
            <span className={styles.metricLbl}>Review and Reporting</span>
          </div>
        </div>
      </div>

      {/* Floating auxiliary technological chips */}
      <div className={`${styles.floatingChip} ${styles.chip1}`}>
        <span className={styles.chipDot} />
        <span>Marketing Services for UK Businesses</span>
      </div>

      <div className={`${styles.floatingChip} ${styles.chip2}`}>
        <span className={styles.chipDot} />
        <span>SEO, Content and Campaigns</span>
      </div>
    </div>
  );
}
