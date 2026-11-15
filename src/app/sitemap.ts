import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo/config';
import clientsData from '@/config/clients.json';
import { BLOG_POSTS } from '@/data/blog';
import { getAllServiceConfigs } from '@/config/services';
import { getLocationStatus } from '@/config/locationSeo';
import { cities, normalizeSegment } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partnership`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/client`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const clientRoutes = clientsData.clients.map((client) => ({
    url: `${baseUrl}/client/${client.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Only include location pages approved for indexing.
  const services = getAllServiceConfigs();
  const locationRoutes: MetadataRoute.Sitemap = [];

  for (const s of services) {
    for (const item of cities) {
      const cSlug = normalizeSegment(item.city);
      const sSlug = normalizeSegment(item.state);
      const coSlug = normalizeSegment(item.country);
      const locationStatus = getLocationStatus(
        item.city,
        item.state,
        item.country,
        s.slug
      );

      if (!locationStatus.isIndexable) {
        continue;
      }

      locationRoutes.push({
        url: `${baseUrl}/services/${s.slug}/${cSlug}/${sSlug}/${coSlug}`,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
      });
    }
  }

  return [...staticRoutes, ...blogRoutes, ...clientRoutes, ...locationRoutes];
}
