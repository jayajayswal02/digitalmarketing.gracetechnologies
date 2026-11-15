'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VerifiedIcon from '@mui/icons-material/Verified';
import CampaignIcon from '@mui/icons-material/Campaign';
import HubIcon from '@mui/icons-material/Hub';
import { UkFlag, IndiaFlag } from '@/components/common/Flags/CountryFlags';
import Logo from '../../../../public/logo/logo.png';
import styles from './PartnershipHeroVisual.module.css';

export default function PartnershipHeroVisual() {
  return (
    <div className={styles.visualWrapper} aria-hidden="true">
      {/* Ambient background glow and orbital rings */}
      <div className={styles.ambientGlow} />
      <div className={styles.orbitalRingOuter} />
      <div className={styles.orbitalRingInner} />

      {/* Main Glass Console Card */}
      <motion.div
        className={styles.glassConsole}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Terminal Header */}
        <div className={styles.consoleHeader}>
          <div className={styles.statusGroup}>
            <span className={styles.statusDot} />
            <span className={styles.statusLabel}>UK // INDIA BILATERAL SYNERGY</span>
          </div>
          <span className={styles.badgeLive}>VERIFIED ALLIANCE</span>
        </div>

        {/* Bilateral Axis Diagram */}
        <div className={styles.axisContainer}>
          {/* Node 1: UK Strategic Entity */}
          <motion.div
            className={`${styles.entityNode} ${styles.ukNode}`}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className={styles.nodeHeader}>
              <div className={styles.flagBox}>
                <UkFlag width={26} height={16} />
              </div>
              <span className={styles.nodeCountry}>United Kingdom</span>
            </div>

            <div className={styles.logoWrap}>
              <Image
                src={Logo}
                alt="Grace Technologies"
                width={110}
                height={32}
                className={styles.logoImg}
              />
            </div>

            <span className={styles.nodeRole}>UK-Based Client Communication</span>

            <div className={styles.nodeTags}>
              <span className={styles.tagPill}>Business Goals</span>
              <span className={styles.tagPill}>Marketing Strategy</span>
            </div>
          </motion.div>

          {/* Central Animated Quantum Bridge */}
          <div className={styles.bridgeSection}>
            <div className={styles.bridgeTrack}>
              <span className={styles.bridgePulseParticle} />
            </div>

            <div className={styles.nexusOrb}>
              <div className={styles.orbInner}>
                <HandshakeIcon className={styles.handshakeIcon} />
              </div>
              <span className={styles.synergyLabel}>ACTIVE BRIDGE</span>
            </div>

            <div className={styles.bridgeTrack}>
              <span className={`${styles.bridgePulseParticle} ${styles.reverseParticle}`} />
            </div>
          </div>

          {/* Node 2: India Partnership */}
          <motion.div
            className={`${styles.entityNode} ${styles.inNode}`}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className={styles.nodeHeader}>
              <div className={styles.flagBox}>
                <IndiaFlag width={26} height={16} />
              </div>
              <span className={styles.nodeCountry}>India</span>
            </div>

            <div className={styles.logoWrap}>
              <Image
                src="/logo/anksquarelogo.svg"
                alt="Ank Square Private Limited"
                width={110}
                height={32}
                className={styles.logoImg}
              />
            </div>

            <span className={styles.nodeRole}>Campaign and Content Support</span>

            <div className={styles.nodeTags}>
              <span className={styles.tagPill}>Content & Campaigns</span>
              <span className={styles.tagPill}>Search & Social</span>
            </div>
          </motion.div>
        </div>

        {/* Telemetry Footer Ticker */}
        <div className={styles.telemetryBar}>
          <div className={styles.telemetryItem}>
            <div className={styles.telemetryIcon}>
              <VerifiedIcon fontSize="inherit" />
            </div>
            <div>
              <span className={styles.telemetryVal}>Independent</span>
              <span className={styles.telemetryDesc}>Separate Legal Entities</span>
            </div>
          </div>

          <div className={styles.telemetryDivider} />

          <div className={styles.telemetryItem}>
            <div className={styles.telemetryIcon}>
              <CampaignIcon fontSize="inherit" />
            </div>
            <div>
              <span className={styles.telemetryVal}>Agreed</span>
              <span className={styles.telemetryDesc}>Marketing Activity</span>
            </div>
          </div>

          <div className={styles.telemetryDivider} />

          <div className={styles.telemetryItem}>
            <div className={styles.telemetryIcon}>
              <HubIcon fontSize="inherit" />
            </div>
            <div>
              <span className={styles.telemetryVal}>Connected</span>
              <span className={styles.telemetryDesc}>Channel Coordination</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
