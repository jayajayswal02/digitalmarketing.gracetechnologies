import projectsConfig from '@/config/projects.json';

export interface ProjectItem {
  id: string;
  slug: string;
  clientSlug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  summary: string;
  logo?: string;
}

// All project records are loaded directly from src/config/projects.json
export const PROJECTS_DATA: ProjectItem[] = projectsConfig.projects as ProjectItem[];
