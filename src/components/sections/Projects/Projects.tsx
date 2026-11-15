'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/common/Container/Container';
import ProjectsHeader from './ProjectsHeader';
import ProjectFilters, { CategoryFilter } from './ProjectFilters';
import ProjectCarousel from './ProjectCarousel';
import { PROJECTS_DATA, ProjectItem } from '@/data/projects';
import styles from './Projects.module.css';

interface ProjectsProps {
  initialProjects?: ProjectItem[];
}

export default function Projects({ initialProjects = PROJECTS_DATA }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return initialProjects;
    }
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [initialProjects, selectedCategory]);

  return (
    <section id="projects" className={styles.section} aria-label="Our Projects & Portfolio">
      <div className={styles.backgroundDecor} />
      <div className={styles.ambientOrbitalLine} />

      <Container size="wide">
        {/* Editorial Section Header matching reference image */}
        <ProjectsHeader
          label="OUR PROJECTS"
          title="Selected Client"
          highlightText="Projects"
          description="Explore selected work and collaborations with businesses in the UK and beyond."
          viewAllHref="/projects"
        />

        {/* Interactive Category Filter Pills */}
        <ProjectFilters
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 4-Card Responsive Carousel Showcase */}
        <ProjectCarousel projects={filteredProjects} />

      </Container>
    </section>
  );
}
