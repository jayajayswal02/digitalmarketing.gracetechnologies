import { ServiceDetail, IndustryItem, StepItem } from '@/types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    tagline: 'Strategy That Connects With Your Audience.',
    headline: 'Digital Marketing Solutions for Business Growth',
    description:
      'Digital marketing helps people discover and understand your business online. We help UK small and medium-sized businesses, startups and e-commerce companies improve visibility, connect with relevant audiences and generate enquiries through a practical mix of digital channels.',
    route: '/services/digital-marketing',
    capabilities: [
      {
        title: 'Search Engine Optimisation (SEO)',
        description:
          'Search Engine Optimisation (SEO) improves how your pages are structured and presented in organic search. Work can include keyword research, on-page optimisation and practical technical recommendations.',
      },
      {
        title: 'Generative Engine Optimisation (GEO)',
        description:
          'Generative Engine Optimisation (GEO) makes accurate brand and service information clearer for generative search systems to interpret. It does not guarantee citations or recommendations.',
      },
      {
        title: 'Answer Engine Optimisation (AEO)',
        description:
          'Answer Engine Optimisation (AEO) organises useful, direct answers to genuine customer questions so answer-led search systems can interpret the information more easily.',
      },
      {
        title: 'Social Media Marketing',
        description:
          'Plan and manage consistent social media activity that reflects your brand and supports meaningful audience engagement.',
      },
      {
        title: 'Google Ads & Paid Advertising',
        description:
          'Set up and manage targeted paid campaigns with clear objectives, considered budgets and ongoing performance review.',
      },
      {
        title: 'Content Marketing',
        description:
          'Create and organise useful content that addresses customer questions and supports your search and campaign strategy.',
      },
      {
        title: 'Email Marketing',
        description:
          'Plan relevant email communications and campaigns to nurture subscribers and support ongoing customer relationships.',
      },
      {
        title: 'Lead Generation',
        description:
          'Improve the path from discovery to enquiry with audience-focused campaigns, clear calls to action and lead capture planning.',
      },
      {
        title: 'Marketing Analytics & Reporting',
        description:
          'Review available campaign and website data, explain key trends and identify practical opportunities for improvement.',
      },
    ],
    benefits: [
      {
        title: 'More Relevant Visibility',
        description:
          'Build a clearer presence across search, content, social and paid channels that matter to your audience.',
      },
      {
        title: 'A Connected Strategy',
        description:
          'Coordinate channel activity around consistent messaging and business priorities.',
      },
      {
        title: 'Clearer Lead Journeys',
        description:
          'Help prospective customers understand your offer and take a straightforward next step.',
      },
      {
        title: 'Informed Decisions',
        description:
          'Use reporting and regular review to guide adjustments based on available evidence.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Understand Your Goals',
        description:
          'Discuss your audience, current activity, business priorities and the outcomes you want marketing to support.',
      },
      {
        step: '02',
        title: 'Build the Strategy',
        description:
          'Prioritise channels, audiences, messages and measurements into a practical marketing plan.',
      },
      {
        step: '03',
        title: 'Deliver the Activity',
        description:
          'Coordinate the agreed search, content, social, email and advertising work with your team.',
      },
      {
        step: '04',
        title: 'Review and Improve',
        description:
          'Report on activity and available results, then agree evidence-informed next steps.',
      },
    ],
    faqs: [
      {
        question: 'What is digital marketing?',
        answer:
          'Digital marketing uses online channels such as search, social media, content, email and paid advertising to help a business reach relevant audiences and support its goals.',
      },
      {
        question: 'Which digital marketing services can Grace Technologies provide?',
        answer:
          'Our digital marketing work includes SEO, GEO, AEO, social media marketing, Google Ads and paid advertising, content marketing, email marketing, lead generation, and marketing analytics and reporting.',
      },
      {
        question: 'What is the difference between SEO, GEO and AEO?',
        answer:
          'SEO helps improve a website’s visibility in organic search results. GEO focuses on making accurate information clear to generative search systems. AEO structures direct answers to customer questions for answer-led search experiences. None can guarantee rankings, citations or recommendations.',
      },
      {
        question: 'How does SEO help a business?',
        answer:
          'SEO can help relevant audiences find a business through organic search by improving page content, structure and technical clarity. Results depend on the market, website and ongoing work, so rankings or enquiry volumes are not guaranteed.',
      },
      {
        question: 'How does social media marketing support business goals?',
        answer:
          'Social media marketing helps a business plan consistent, audience-relevant communication and engagement on selected social platforms. The right activity depends on the audience, brand and agreed objectives.',
      },
      {
        question: 'How do you measure digital marketing activity?',
        answer:
          'Measures are agreed around the work and available data. Depending on the activity, reviews may include visibility, engagement, website activity, enquiries and campaign performance, with limitations explained.',
      },
      {
        question: 'What does a digital marketing strategy include?',
        answer:
          'A strategy starts with business goals and audience needs, then prioritises suitable channels, messages, activity and measures. The scope is agreed with each client and can include search, content, social, email and paid advertising.',
      },
      {
        question: 'How soon will digital marketing show results?',
        answer:
          'Timing varies with your market, starting position, channel mix and budget. We set expectations after understanding your goals and report on progress without guaranteeing rankings, leads or revenue.',
      },
      {
        question: 'Can you work with our existing marketing team?',
        answer:
          'Yes. We can agree a scope that complements your in-house team, partners or existing marketing activity.',
      },
      {
        question: 'How do you report on marketing activity?',
        answer:
          'Reporting is agreed to fit the work and available data. It can cover activity, audience engagement, enquiries and other relevant measures, with context on limitations.',
      },
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Professional Services',
    description:
      'Search visibility, useful content and enquiry-focused campaigns for consultancies and specialist firms.',
    stats: 'Relevant Reach',
  },
  {
    title: 'Retail and E-commerce',
    description:
      'Audience research, content, social activity and paid campaign planning for retail brands.',
    stats: 'Connected Campaigns',
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Clear, responsible audience communications and discoverable information for healthcare organisations.',
    stats: 'Clear Information',
  },
  {
    title: 'Financial & Business Services',
    description:
      'Trust-focused messaging and targeted marketing activity for business and financial services.',
    stats: 'Audience Trust',
  },
  {
    title: 'Education & EdTech',
    description:
      'Content and campaign planning to help education providers reach learners and decision-makers.',
    stats: 'Audience Engagement',
  },
  {
    title: 'Small and Medium Enterprises',
    description:
      'Practical digital marketing strategies shaped around the goals and resources of growing businesses.',
    stats: 'Focused Growth',
  },
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We learn about your business, audience, current marketing and priorities.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We agree a practical strategy, channel priorities and relevant measures.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We carry out the agreed marketing work and coordinate with your team.',
  },
  {
    number: '04',
    title: 'Review',
    description:
      'We report on activity and use available data to agree thoughtful next steps.',
  },
];
