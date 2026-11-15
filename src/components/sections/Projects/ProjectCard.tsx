'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { ProjectItem } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const initials = project.client
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.article
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
        <span className={styles.previewLocationBadge}>{project.location}</span>
        <div className={styles.mockupContainer}>
          {project.logo ? (
            <div className={styles.logoBoxWrapper}>
              <div className={styles.logoBoxInner}>
                <Image
                  src={project.logo}
                  alt={`${project.client} logo`}
                  width={96}
                  height={96}
                  className={styles.logoBoxImg}
                />
              </div>
            </div>
          ) : (
            <div className={styles.profileDeckFrame}>
              <span className={styles.profileTopBadge}>Client profile</span>
              <span className={styles.profileDocTitle}>{initials}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.cardContent}>
        <div>
          <div className={styles.categoryRow}>
            <span className={styles.categoryLabel}>{project.category}</span>
          </div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.summary}</p>
        </div>

        <div className={styles.cardActionRow}>
          <Link href={`/client/${project.clientSlug}`} className={styles.primaryAction}>
            <span>View client profile</span>
            <ArrowForwardIcon fontSize="small" />
          </Link>
          <Link href="/contact" className={styles.secondaryAction}>
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
