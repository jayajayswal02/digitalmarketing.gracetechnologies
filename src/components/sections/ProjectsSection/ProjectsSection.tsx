'use client';

import React from 'react';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '@/data/projects';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ProjectsSection({ limit, showViewAll = true }: ProjectsSectionProps) {
  const allProjects = PROJECTS_DATA;
  const displayedProjects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="projects-section" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="SELECTED CLIENT WORK"
          title="Explore Our Client Work."
          description="View selected projects and collaborations from Grace Technologies and its clients."
          align="center"
        />

        <div className={styles.grid}>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {showViewAll && (
          <div className={styles.ctaRow}>
            <Button href="/projects" variant="secondary" size="lg" icon>
              View All Client Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
