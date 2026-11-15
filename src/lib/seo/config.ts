/**
 * Central SEO Configuration for Grace Technologies
 * Primary canonical domain: https://digitalmarketing.gracetechnologies.uk
 */

export const SEO_CONFIG = {
  siteName: 'Grace Technologies',
  legalName: 'Grace Technologies',
  siteUrl: 'https://digitalmarketing.gracetechnologies.uk',
  mainSiteUrl: 'https://www.gracetechnologies.uk',
  appleTouchIcon: '/apple-touch-icon.png',
  defaultTitle: 'Digital Marketing Services UK | Grace Technologies',
  titleTemplate: '%s | Grace Technologies',
  defaultDescription:
    'Grace Technologies provides digital marketing services for UK businesses, helping improve online visibility, reach targeted audiences and generate quality leads.',
  defaultOgImage: 'https://digitalmarketing.gracetechnologies.uk/logo/logo.png',
  locale: 'en_GB',
  inLocale: 'en_GB',
  language: 'en',
  themeColor: '#030712',
  organizationId: 'https://digitalmarketing.gracetechnologies.uk/#organization',
  websiteId: 'https://digitalmarketing.gracetechnologies.uk/#website',
  contact: {
    uk: {
      company: 'Grace Technologies',
      country: 'United Kingdom',
      addressLines: [
        '398 Whalebone Lane South',
        'Romford, Greater London',
        'RM6 6HP, England',
      ],
      postalCode: 'RM6 6HP',
      city: 'Romford',
      region: 'Greater London',
      countryCode: 'GB',
      email: 'contact@gracetechnologies.uk',
      phone: '+44 7440007332',
      geo: {
        latitude: 51.576,
        longitude: 0.148,
      },
    },
    indiaPartner: {
      company: 'Ank Square Pvt. Ltd.',
      country: 'India',
      addressLines: [
        'Ramjaipal Road, Opp. Gola Road',
        'Near Hotel Magadh Palace',
        'Patna, Bihar, India - 801503',
      ],
      postalCode: '801503',
      city: 'Patna',
      region: 'Bihar',
      countryCode: 'IN',
      email: 'contact@anksquare.com',
      phone: '+91-9939337638',
    },
  },
  socialLinks: [
    'https://www.instagram.com/gracetechnologiesofficial/',
    'https://www.facebook.com/share/1CKuqfF3Ef/',
    'https://www.youtube.com/@Gracetechnologiesofficial',
    'https://x.com/grace_Official4',
  ],
  services: [
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      url: 'https://digitalmarketing.gracetechnologies.uk/services/digital-marketing',
      description:
        'Digital marketing services for UK businesses, including SEO, GEO, AEO, social media marketing, Google Ads and paid advertising, content marketing, email marketing, lead generation, and marketing analytics and reporting.',
    },
  ],
} as const;
