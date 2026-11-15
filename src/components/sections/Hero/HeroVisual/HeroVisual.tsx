'use client';

import React, { useState } from 'react';
import DigitalGlobe from './DigitalGlobe';
import OrbitingSatellites from './OrbitingSatellites';
import EnergyPlatform from './EnergyPlatform';
import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div
      className={styles.heroVisualContainer}
      aria-label="Grace Technologies Digital Marketing Visual"
    >
      {/* Background Deep Cosmic Radial Light */}
      <div className={styles.ambientCoreGlow} />
      <div className={styles.outerOrbitTrack} />

      {/* High-Tech Circular Energy Platform beneath Earth */}
      <EnergyPlatform activePlatform={activePlatform} />

      {/* Center 3D Digital Earth Globe with Equatorial Ring & Lighting */}
      <DigitalGlobe activePlatform={activePlatform} />

      {/* Digital marketing service link revolving around the globe */}
      <OrbitingSatellites
        activePlatform={activePlatform}
        onHover={setActivePlatform}
      />
    </div>
  );
}
