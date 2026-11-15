export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  updated: string;
  tags: string[];
  category: string;
  visual: 'blue' | 'sky' | 'indigo' | 'lavender' | 'teal';
  image: string;
  related: string[];
  keyTakeaways: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  content: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'seo-geo-aeo-strategy',
    title: 'SEO, GEO and AEO: Why Search Visibility Needs More Than Keywords',
    excerpt:
      'Modern discovery is no longer a single search engine problem. Visibility increasingly depends on how content is structured, cited and answered across the web.',
    author: 'Grace Technologies',
    date: '2026-07-11',
    updated: '2026-10-10',
    tags: ['SEO', 'GEO', 'AEO'],
    category: 'SEO',
    visual: 'lavender',
    image: '/logo/logo.png',
    related: ['digital-marketing-agency-uk'],
    keyTakeaways: [
      'SEO still matters, but visibility now also depends on answer quality and clarity.',
      'Generative search rewards content that is structured, useful and evidence-based.',
      'AEO and GEO work best when the website is already strong in user experience and content architecture.',
    ],
    faq: [
      {
        question: 'What is the difference between SEO, GEO and AEO?',
        answer:
          'SEO focuses on ranking in search engines, GEO improves visibility in generative and AI-assisted search experiences, and AEO optimises content for direct, question-based answers that answer engines can surface clearly.',
      },
      {
        question: 'Why do businesses need AEO in addition to SEO?',
        answer:
          'Search behaviour is evolving. More users now rely on direct answers, summaries and suggested results. AEO helps content surface clearly when the question is asked directly or summarised by a machine.',
      },
      {
        question: 'How do I improve content for GEO and AEO?',
        answer:
          'Use clear headings, answer common questions directly, explain service value in plain language, and organise content around business problems, use cases and trust signals rather than just keyword repetition.',
      },
    ],
    content: [
      {
        heading: 'Search now rewards clarity and authority',
        paragraphs: [
          'Traditional SEO still matters, but it is only one part of how people discover trusted expertise. Generative search, answer engines, and knowledge summaries reward content that is structured, relevant, and plainly useful.',
          'That means businesses need more than keyword density. They need better topic architecture, cleaner entity signals, and service content that can withstand machine summarisation without losing the human story.',
          'The strongest visible content combines five things: clarity, relevance, trust, structure and evidence. That is why content should answer the questions decision makers actually ask, not just hit a phrase count.',
        ],
      },
      {
        heading: 'A better content system wins attention',
        paragraphs: [
          'A well-structured content system helps both people and machines understand what a business offers, what problems it solves, and why it is credible. When content answers the questions decision makers actually ask, visibility improves naturally across both traditional and AI-assisted discovery channels.',
          'The long-term goal is not just traffic. It is trust, authority, and better-quality enquiries from audiences who are ready to act.',
          'Businesses that invest in clear content systems are more likely to get found for the right reasons, not just for broad or generic search terms.',
        ],
      },
      {
        heading: 'It is about showing expertise, not just ranking',
        paragraphs: [
          'Search engines and AI assistants are increasingly evaluating whether your content is useful, authoritative and genuinely aligned with the user intent. That means clear explanations, realistic service framing and well-organised landing pages matter more than vague marketing language.',
          'A good SEO and GEO strategy therefore works best when it is grounded in actual business capability, not just optimisation tricks.',
        ],
      },
    ],
  },
  {
    slug: 'landing-page-journey-for-digital-campaigns',
    title: 'Landing Pages and Digital Marketing: Making the Next Step Clear',
    excerpt:
      'A clear campaign journey helps visitors understand how an offer relates to their needs and what action they can take next.',
    author: 'Grace Technologies',
    date: '2026-06-04',
    updated: '2026-09-28',
    tags: ['Digital Marketing', 'Lead Generation', 'Customer Journey'],
    category: 'Digital Marketing',
    visual: 'teal',
    image: '/logo/logo.png',
    related: ['seo-geo-aeo-strategy'],
    keyTakeaways: [
      'Keep the message on a campaign page consistent with the search or advert that brought a visitor there.',
      'Use a clear call to action to explain the next step.',
      'Review available page and enquiry data to understand where visitors engage or leave.',
    ],
    faq: [
      {
        question: 'How can a landing page support a digital marketing campaign?',
        answer:
          'A landing page can continue the message of a campaign, explain the relevant offer and make the next step clear. Its content should reflect the audience and intent of the traffic.',
      },
      {
        question: 'What should a marketing landing page include?',
        answer:
          'Useful landing pages explain the offer in plain language, address relevant customer questions and include a clear call to action. The right content depends on the campaign and audience.',
      },
      {
        question: 'How can businesses review a campaign journey?',
        answer:
          'Agree relevant measures before a campaign starts, then review the available data such as visits, engagement and enquiries. Interpret results in context rather than relying on one metric.',
      },
    ],
    content: [
      {
        heading: 'Continue the campaign message',
        paragraphs: [
          'A person who clicks a search result or advert arrives with a particular question or expectation. The page should make it easy to recognise how its message relates to that starting point.',
          'Use clear language to explain the service, who it is for and what the visitor can do next. Avoid broad claims that are not supported by the business or its work.',
        ],
      },
      {
        heading: 'Make the next step understandable',
        paragraphs: [
          'A focused call to action helps visitors understand how to enquire, request more information or continue exploring. Keep the action aligned with the stage of the customer journey and the campaign objective.',
          'Answer likely questions on the page and link to relevant service details so people can make an informed decision without being forced into an enquiry.',
        ],
      },
      {
        heading: 'Review the journey using available data',
        paragraphs: [
          'Review campaign and page information that is available, such as visits, engagement and enquiries. Compare results with the agreed objective and account for limitations in the data.',
          'Use those observations to discuss what to keep, clarify or test next. This is a practical way to connect campaign activity with the experience visitors actually encounter.',
        ],
      },
    ],
  },
  {
    slug: 'answer-engine-optimization-for-business-sites',
    title: 'Answer Engine Optimisation for Business Sites: How to Win Direct Answers',
    excerpt:
      'Answer engines reward clarity. If your site explains service value in direct, useful language, you become easier to cite, trust and recommend.',
    author: 'Grace Technologies',
    date: '2026-09-07',
    updated: '2026-10-31',
    tags: ['AEO', 'Answer Engines', 'Content Strategy'],
    category: 'SEO',
    visual: 'lavender',
    image: '/logo/logo.png',
    related: ['seo-geo-aeo-strategy'],
    keyTakeaways: [
      'Answer engines surface concise, structured, useful responses.',
      'Answer-first content improves both user trust and machine readability.',
      'The most effective answers are direct, specific and user-focused.',
    ],
    faq: [
      {
        question: 'What is AEO and why does it matter?',
        answer:
          'AEO, or Answer Engine Optimisation, helps your content become easier to understand and surface when a user asks a direct question or an AI system summarises the best answer.',
      },
      {
        question: 'How do I write answer-first content?',
        answer:
          'Use clear headings, answer the question in the first paragraph, and then expand with practical detail, examples and supporting proof so the answer remains useful and trustworthy.',
      },
      {
        question: 'Does AEO replace SEO?',
        answer:
          'No. It complements SEO. Good SEO provides discoverability, while strong AEO makes the content more useful and more likely to be cited or summarised in direct-answer experiences.',
      },
    ],
    content: [
      {
        heading: 'The best answers are simple, relevant and clear',
        paragraphs: [
          'A direct answer is often more valuable than a long page of vague marketing copy. Answer Engine Optimisation is about making the website easier to understand for both the user and the system generating a summary or recommendation.',
          'When you answer the question quickly and clearly, users gain confidence and the business becomes easier to cite in AI-assisted answer experiences.',
        ],
      },
      {
        heading: 'Structure drives visibility',
        paragraphs: [
          'Use concise headings, short paragraphs and a clear sense of hierarchy. This makes content easier to scan, easier to trust and easier to summarise accurately in a search result or AI response.',
          'AEO works best when the site already has strong authority, clear service descriptions and a logic that supports natural discovery across multiple touchpoints.',
        ],
      },
      {
        heading: 'Useful content outperforms keyword stuffing',
        paragraphs: [
          'Search engines and answer engines increasingly assess context, usefulness and clarity. That means pages that are direct, practical and aligned to buyer intent are more likely to earn trust than pages that overstuff a topic with generic language.',
          'The business that can answer the user’s question clearly is often the business that wins attention and enquiry.',
        ],
      },
    ],
  },
  {
    slug: 'b2b-lead-generation-agency-uk',
    title: 'B2B Lead Generation Agency in the UK: Generate Better Enquiries, Not Just More Traffic',
    excerpt:
      'Lead generation works best when the offer is clear, the funnel is structured, and the business is positioned to attract high-intent buyers who are ready to act.',
    author: 'Grace Technologies',
    date: '2026-09-26',
    updated: '2026-11-03',
    tags: ['Lead Generation', 'B2B', 'Growth'],
    category: 'Digital Marketing',
    visual: 'indigo',
    image: '/logo/logo.png',
    related: ['digital-marketing-agency-uk'],
    keyTakeaways: [
      'Quality enquiries outperform volume every time.',
      'A stronger website and clearer offer usually improve the lead funnel more than more ad spend.',
      'Great lead generation is part strategy, part system design, and part conversion clarity.',
    ],
    faq: [
      {
        question: 'What is a B2B lead generation agency supposed to do?',
        answer:
          'A strong agency helps a business attract better-fit prospects, improve conversion paths, qualify interest more effectively, and turn that demand into a healthier pipeline.',
      },
      {
        question: 'How do I improve lead quality?',
        answer:
          'Start with better positioning, sharper service messaging, stronger funnel design, and clear conversion paths so your team spends time on the right prospects instead of low-intent noise.',
      },
      {
        question: 'Is paid traffic enough for B2B lead generation?',
        answer:
          'Not on its own. The best strategies combine visibility with a strong offer, persuasive landing experience, and a clear qualification process that helps sales focus on the right opportunities.',
      },
    ],
    content: [
      {
        heading: 'More traffic is not the same as better leads',
        paragraphs: [
          'A lot of businesses mistake volume for performance. That works against them when the traffic is shallow or unrelated to their real commercial need. Strong lead generation begins with relevance, positioning and a clear value proposition.',
          'If the buyer does not understand what is being offered or why it matters, the business may receive more traffic but not better opportunities.',
        ],
      },
      {
        heading: 'The funnel must be built for quality, not just volume',
        paragraphs: [
          'Lead generation becomes more effective when the website, offer and follow-up process are aligned. If the user journey is confusing, the business loses quality before the conversation even begins.',
          'This is where strategy and conversion design matter. The strongest systems create a smoother path from interest to enquiry and from enquiry to trust.',
        ],
      },
      {
        heading: 'Commercial clarity drives better outcomes',
        paragraphs: [
          'When a company explains its offer clearly, speaks to the right buyer, and moves prospects through a structured journey, lead quality improves. That creates a healthier pipeline and a stronger basis for growth.',
          'A good growth system does not chase every click. It prioritises the enquiries that are most likely to become meaningful commercial relationships.',
        ],
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-uk',
    title: 'Digital Marketing Agency in the UK: Turn Visibility into Better Business Growth',
    excerpt:
      'A digital marketing agency should help a business attract attention that is relevant, measurable, and capable of leading to better-quality enquiries and real commercial growth.',
    author: 'Grace Technologies',
    date: '2026-10-31',
    updated: '2026-11-09',
    tags: ['Digital Marketing', 'Growth', 'SEO'],
    category: 'Digital Marketing',
    visual: 'lavender',
    image: '/logo/logo.png',
    related: ['b2b-lead-generation-agency-uk', 'seo-geo-aeo-strategy'],
    keyTakeaways: [
      'The right marketing agency improves both attention and conversion quality.',
      'Visibility is useful only when it leads to a stronger commercial outcome.',
      'Measurement and clarity matter more than broad vanity metrics.',
    ],
    faq: [
      {
        question: 'What should a digital marketing agency actually deliver?',
        answer:
          'A useful agency connects strategy, content, SEO, conversion path and performance measurement so that visibility turns into better commercial opportunities, not just traffic spikes.',
      },
      {
        question: 'How do I know if my digital marketing is working?',
        answer:
          'You should be tracking quality of enquiry, conversion rate, cost per lead or opportunity, and whether the traffic matches your real business intent rather than only vanity metrics.',
      },
      {
        question: 'Can marketing and website strategy work together?',
        answer:
          'Yes. A stronger digital marketing strategy performs best when the website is already clear, credible and designed to convert qualified attention into action.',
      },
    ],
    content: [
      {
        heading: 'The real goal is relevance, not just reach',
        paragraphs: [
          'A growing business does not need more noise. It needs more relevant attention from the right audience. That is why digital marketing should be connected to commercial outcome rather than only awareness metrics.',
          'A strong agency helps shape the messages, channels and conversion path so that demand quality improves along with reach.',
        ],
      },
      {
        heading: 'Marketing works best when the offer is already clear',
        paragraphs: [
          'If the website, offer and conversion path are weak, traffic will not fix that. The content and campaigns may generate attention, but the business still has to convert that interest into real opportunity.',
          'That is why good digital marketing is rarely isolated from website strategy, design and content quality.',
        ],
      },
      {
        heading: 'Growth comes from better decisions, not just more activity',
        paragraphs: [
          'The strongest digital strategies focus on measurable customer journeys and better commercial fit. That means tracking what actually drives meaningful enquiry quality and building a system that keeps improving that signal.',
          'This is how marketing becomes a growth system instead of a source of noise.',
        ],
      },
    ],
  },
  {
    slug: 'london-seo-strategy-for-service-businesses',
    title: 'London SEO Strategy for Service Businesses: Rank in the Capital Without Losing Clarity',
    excerpt:
      'London search demand is competitive, which means service businesses need sharper positioning, stronger local relevance and better quality content than generic keyword-first strategies.',
    author: 'Grace Technologies',
    date: '2026-11-04',
    updated: '2026-11-09',
    tags: ['London SEO', 'SEO', 'Local Search'],
    category: 'SEO',
    visual: 'blue',
    image: '/logo/logo.png',
    related: ['seo-geo-aeo-strategy'],
    keyTakeaways: [
      'London SEO rewards specific service positioning, not broad keyword repetition.',
      'Local trust signals matter as much as technical optimisation.',
      'A clear offer wins better quality traffic than a broad marketing message.',
    ],
    faq: [
      {
        question: 'Why is London SEO harder than smaller local markets?',
        answer:
          'Because competition is stronger and search intent is more diverse. The business that speaks directly to buyer needs and local context is more likely to stand out.',
      },
      {
        question: 'What should a London service page include?',
        answer:
          'A clear service offer, local relevance, proof of capability, transparent process detail, and a direct route to enquiry or consultation.',
      },
      {
        question: 'Does local trust matter in London search results?',
        answer:
          'Yes. Buyers in competitive cities want confidence that the provider understands their market, service expectations and commercial realities.',
      },
    ],
    content: [
      {
        heading: 'A stronger London strategy starts with market clarity',
        paragraphs: [
          'In London, search competition is often high and buyers are more likely to compare providers quickly. That means service businesses need a more precise offer and clearer proof of value than a generic brand page can provide.',
          'The strongest London SEO strategy is not simply about ranking for a broad keyword. It is about making the business obvious to the right decision maker at the right time.',
        ],
      },
      {
        heading: 'Local relevance creates commercial trust',
        paragraphs: [
          'Buyers want to know whether a provider understands their sector, region and expectations. A strong local SEO page does more than mention the city. It explains who the service is for, where it is delivered, and why the business is a credible fit.',
          'That same clarity also improves how search engines and answer engines interpret the page. Better context produces stronger discoverability and better-quality attention.',
        ],
      },
      {
        heading: 'The winning strategy balances visibility and conversion',
        paragraphs: [
          'A London-focused SEO plan should improve both visibility and enquiry quality. If the site is clear, relevant and commercially credible, the business stands a better chance of turning search attention into real opportunity.',
          'That is why great SEO in London is part strategy, part messaging, and part conversion design.',
        ],
      },
    ],
  },
  {
    slug: 'london-geo-visibility-for-digital-growth',
    title: 'London GEO Visibility: How Businesses Win in Generative Search and AI Discovery',
    excerpt:
      'GEO is becoming a key part of digital visibility for London businesses because AI-assisted discovery increasingly rewards clarity, structure and commercial relevance.',
    author: 'Grace Technologies',
    date: '2026-11-02',
    updated: '2026-11-09',
    tags: ['London', 'GEO', 'AEO', 'SEO'],
    category: 'SEO',
    visual: 'sky',
    image: '/logo/logo.png',
    related: ['seo-geo-aeo-strategy', 'answer-engine-optimization-for-business-sites', 'london-aeo-for-local-service-queries'],
    keyTakeaways: [
      'AI-assisted discovery values structured, useful information more than generic marketing copy.',
      'London businesses need content that clearly defines service, geography and value.',
      'Strong GEO performance depends on clarity, trust and content structure.',
    ],
    faq: [
      {
        question: 'What is GEO in a London business context?',
        answer:
          'GEO, or Generative Engine Optimisation, helps a business become more discoverable in AI-driven search experiences and content summaries that reference credible, well-structured information.',
      },
      {
        question: 'Why does London benefit from GEO?',
        answer:
          'Because London businesses often compete in crowded supply chains and more competitive service markets. Better structure helps them gain visibility without relying on shallow keyword positioning alone.',
      },
      {
        question: 'Can GEO improve local conversion quality?',
        answer:
          'Yes. Clear, relevant answers help the right audience understand the offer faster, which usually improves both trust and conversion quality.',
      },
    ],
    content: [
      {
        heading: 'Generative search rewards business clarity',
        paragraphs: [
          'AI assistants and search systems increasingly prefer information that is cleanly structured and clearly relevant. In a fast-moving city market like London, businesses that explain themselves well are easier to recognise and trust.',
          'That means GEO is not just a technical exercise. It is a content and messaging system that makes the business easier to understand in broader discovery environments.',
        ],
      },
      {
        heading: 'Organisation matters more than noise',
        paragraphs: [
          'A service business can win better visibility by using clear headings, direct explanations, service-specific pages and contextual proof. This helps both users and machines understand the offer with less ambiguity.',
          'The result is a more accurate and usable digital presence that supports better discovery and a smoother buyer journey.',
        ],
      },
      {
        heading: 'The best GEO strategy is built on real value',
        paragraphs: [
          'Generative discovery rewards information that is actually useful. If your site clearly explains who it helps, what it solves, and why it is credible, it becomes easier to cite and easier to trust.',
          'That is a compelling reason for London businesses to combine strong content architecture with a conversion-focused website.',
        ],
      },
    ],
  },
  {
    slug: 'london-aeo-for-local-service-queries',
    title: 'London AEO for Local Service Queries: Answer the Right Questions Before the Buyer Reaches Out',
    excerpt:
      'In London, many buyers ask direct questions before they contact a provider. Answer Engine Optimisation helps your site become the clearest, most useful answer in that moment.',
    author: 'Grace Technologies',
    date: '2026-10-30',
    updated: '2026-11-09',
    tags: ['London', 'AEO', 'Answer Engine', 'SEO'],
    category: 'SEO',
    visual: 'lavender',
    image: '/logo/logo.png',
    related: ['answer-engine-optimization-for-business-sites', 'london-seo-strategy-for-service-businesses', 'london-geo-visibility-for-digital-growth'],
    keyTakeaways: [
      'Answer-ready content matches real buyer intent in local search.',
      'Direct answers improve trust and reduce user confusion.',
      'AEO works best when the site already has clear positioning and structure.',
    ],
    faq: [
      {
        question: 'Why is AEO useful in London search?',
        answer:
          'Because buyers often ask direct, fast questions such as which service provider matches their needs, what the service includes, and how quickly they can respond. AEO helps provide those answers clearly.',
      },
      {
        question: 'How do I write answer-first pages?',
        answer:
          'Give the answer in the first paragraph, then support it with detail, context and proof so the reader can understand the value quickly and confidently.',
      },
      {
        question: 'Does AEO also help conversion?',
        answer:
          'Yes. If the buyer understands the offer early and trusts the business quickly, they move toward enquiry with less friction and less hesitation.',
      },
    ],
    content: [
      {
        heading: 'The fastest path to authority is a direct answer',
        paragraphs: [
          'Users in London often search with intent that is urgent and practical. They want to know whether a provider can help, how the process works, and what to expect. A good AEO approach answers those questions without the user having to dig through generic marketing copy.',
          'The best answer-first content does not feel robotic. It feels helpful, direct and grounded in real business context.',
        ],
      },
      {
        heading: 'Useful content performs better than decorative copy',
        paragraphs: [
          'Answer Engines and AI experience layers tend to favour content that is specific and structured. If a business explains its offer clearly, supports it with proof and uses a natural information hierarchy, it is more likely to be trusted and surfaced.',
          'This makes AEO a business-strengthening exercise, not just a technical tweak.',
        ],
      },
      {
        heading: 'Direct answers create better buyer confidence',
        paragraphs: [
          'When a visitor can understand the service quickly and trust the business right away, they are more likely to take the next step. That is why answer-focused content is one of the strongest links between SEO, GEO and conversion strategy.',
          'For London businesses, this can be a meaningful edge in highly competitive markets.',
        ],
      },
    ],
  },
  {
    slug: 'london-business-visibility-with-strong-topical-clusters',
    title: 'London Business Visibility: Why Topical Authority Beats Generic Search Content',
    excerpt:
      'London businesses need topic depth, not random content. A stronger topical cluster helps search and answer engines understand expertise and relevance far more clearly.',
    author: 'Grace Technologies',
    date: '2026-10-18',
    updated: '2026-11-09',
    tags: ['London', 'SEO', 'Content Strategy', 'GEO'],
    category: 'SEO',
    visual: 'indigo',
    image: '/logo/logo.png',
    related: ['london-seo-strategy-for-service-businesses', 'london-geo-visibility-for-digital-growth', 'seo-geo-aeo-strategy'],
    keyTakeaways: [
      'Depth beats distraction in competitive local search markets.',
      'Topical clusters improve discoverability and commercial relevance.',
      'Search visibility is strongest when business expertise is consistent and organised.',
    ],
    faq: [
      {
        question: 'What is topical authority in practice?',
        answer:
          'It means creating helpful, structured content around the problems and questions your customers actually care about. That helps both users and search systems understand your business expertise.',
      },
      {
        question: 'Why does this matter for London businesses?',
        answer:
          'Because London markets are crowded and buyers compare a lot of providers. A topical cluster helps a business appear more relevant and more credible than generic competitors.',
      },
      {
        question: 'Can good topical content also improve conversion?',
        answer:
          'Yes. When the content is clear and relevant, it helps buyers understand the offer and makes the decision to enquire feel more natural and informed.',
      },
    ],
    content: [
      {
        heading: 'Depth creates confidence',
        paragraphs: [
          'A business website becomes more valuable when it explains the problems it solves in a thoughtful and structured way. This is especially important in London, where buyers often compare several providers before deciding.',
          'Topical authority is not about publishing more pages for the sake of volume. It is about building a clear and credible content pattern around what people need to understand before they trust a business.',
        ],
      },
      {
        heading: 'Better organisation improves both SEO and readiness',
        paragraphs: [
          'Clusters help search engines understand the relationship between service pages, explanations, proof and buyer intent. They also make it easier for the user to move through the buying journey without friction.',
          'This is a strong strategic advantage in markets where trust and relevance are central to decision-making.',
        ],
      },
      {
        heading: 'Search visibility grows when expertise feels consistent',
        paragraphs: [
          'Businesses that publish clear, relevant and useful content over time often appear more credible and authoritative. That builds stronger discovery potential across both traditional search and answer-driven experiences.',
          'For London businesses, that consistency can be one of the most valuable growth assets of all.',
        ],
      },
    ],
  },
];
