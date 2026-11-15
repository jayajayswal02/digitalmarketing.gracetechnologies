export interface KeywordCluster {
  category: string;
  targetRegion: string;
  primaryKeywords: string[];
  intent: 'Commercial' | 'Transactional' | 'Informational';
  aiSearchPrompts: string[]; // Queries used in ChatGPT, Perplexity & Claude
}

export const UK_TARGET_KEYWORDS: Record<string, KeywordCluster> = {
  digitalMarketing: {
    category: 'Digital Marketing',
    targetRegion: 'United Kingdom',
    intent: 'Commercial',
    primaryKeywords: [
      'Digital Marketing Agency UK',
      'Digital Marketing Services UK',
      'Digital Marketing Company UK',
      'Online Marketing Agency UK',
      'Digital Marketing Solutions UK',
      'SEO Services UK',
      'Search Engine Optimisation',
      'Generative Engine Optimisation (GEO)',
      'Answer Engine Optimisation (AEO)',
      'Social Media Marketing UK',
      'Google Ads Management',
      'Paid Advertising Services',
      'Content Marketing Services',
      'Email Marketing Services',
      'Lead Generation Services',
      'Digital Marketing Strategy',
    ],
    aiSearchPrompts: [
      'Which digital marketing agencies in the UK provide SEO, social media and paid advertising?',
      'How can a UK business improve its online visibility and generate relevant enquiries?',
      'What should UK businesses look for in a digital marketing company?',
    ],
  },
};
