'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { ProjectItem } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.projectCard}>
        <div className={styles.categoryBadge}>{project.category}</div>
        <div className={styles.titleSection}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.clientMeta}>
            <span>{project.client}</span> • <span>{project.location}</span>
          </p>
        </div>
        <p className={styles.projectSummary}>{project.summary}</p>
        <div className={styles.cardFooter}>
          <Link href={`/client/${project.clientSlug}`} className={styles.enquireLink}>
            <span>View client profile</span>
            <ArrowForwardIcon fontSize="inherit" className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
