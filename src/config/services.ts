export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortName: string;
  primaryKeyword: string;
  description: string;
  keywords: string[];
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  enabled: boolean;
}

export const SERVICES_CONFIG: Record<string, ServiceConfig> = {
  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    primaryKeyword: 'Digital Marketing Agency UK',
    description:
      'Strengthen your online presence, reach the right audience and generate quality leads with strategic digital marketing solutions designed to support sustainable business growth.',
    keywords: [
      'Digital Marketing Agency UK',
      'Digital Marketing Services UK',
      'Digital Marketing Company UK',
      'Online Marketing Agency UK',
      'Digital Marketing Solutions UK',
      'SEO Services UK',
      'Search Engine Optimisation',
      'Generative Engine Optimisation',
      'Answer Engine Optimisation',
      'Social Media Marketing UK',
      'Google Ads Management',
      'Paid Advertising Services',
      'Content Marketing Services',
      'Email Marketing Services',
      'Lead Generation Services',
      'Digital Marketing Strategy',
    ],
    capabilities: [
      {
        title: 'Search Engine Optimisation (SEO)',
        description:
          'Search Engine Optimisation (SEO) improves organic search visibility through keyword research, on-page optimisation and actionable technical recommendations.',
      },
      {
        title: 'Generative Engine Optimisation (GEO)',
        description:
          'Generative Engine Optimisation (GEO) makes accurate brand and service information clearer for generative search systems to interpret, without promising specific citations or recommendations.',
      },
      {
        title: 'Answer Engine Optimisation (AEO)',
        description:
          'Answer Engine Optimisation (AEO) organises useful, direct answers to genuine customer questions for answer-led search experiences.',
      },
      {
        title: 'Social Media Marketing',
        description:
          'Plan and manage consistent social media activity that reflects your brand and supports audience engagement.',
      },
      {
        title: 'Google Ads & Paid Advertising',
        description:
          'Set up and manage targeted paid campaigns with agreed objectives, considered budgets and regular review.',
      },
      {
        title: 'Content Marketing',
        description:
          'Create and organise useful content that addresses customer questions and supports your marketing strategy.',
      },
      {
        title: 'Email Marketing',
        description:
          'Plan relevant email communications to nurture subscribers and support customer relationships.',
      },
      {
        title: 'Lead Generation',
        description:
          'Improve the path from discovery to enquiry through focused campaigns and clear calls to action.',
      },
      {
        title: 'Marketing Analytics & Reporting',
        description:
          'Review available marketing data, explain key trends and identify practical opportunities for improvement.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Understand Your Goals',
        description:
          'Review your audience, current activity and the business goals marketing should support.',
      },
      {
        step: '02',
        title: 'Build the Strategy',
        description:
          'Prioritise channels, messages and measures in a clear, practical plan.',
      },
      {
        step: '03',
        title: 'Deliver the Activity',
        description:
          'Coordinate the agreed marketing work with your team and existing partners.',
      },
      {
        step: '04',
        title: 'Review and Improve',
        description:
          'Report on activity and available results, then agree evidence-informed next steps.',
      },
    ],
    enabled: true,
  },
};

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return SERVICES_CONFIG[slug] || null;
};

export const getAllServiceConfigs = (): ServiceConfig[] => {
  return Object.values(SERVICES_CONFIG).filter((service) => service.enabled);
};
