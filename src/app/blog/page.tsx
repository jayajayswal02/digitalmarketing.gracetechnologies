import type { Metadata } from 'next';
import BlogLanding from '@/components/sections/BlogLanding/BlogLanding';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getBlogIndexSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS } from '@/data/blog';
import styles from './blog.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Insights',
  description:
    'Read Grace Technologies insights on digital marketing for UK businesses, including SEO, GEO, AEO, content, social media and lead generation.',
  canonicalPath: '/blog',
  keywords: [
    'Grace Technologies blog',
    'Digital Marketing Services UK',
    'SEO Services UK',
    'Generative Engine Optimisation',
    'Answer Engine Optimisation',
    'Content Marketing Services',
    'Lead Generation Services',
  ],
});

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Blog', url: `${SEO_CONFIG.siteUrl}/blog` },
  ]);

  const blogCollectionSchema = getBlogIndexSchema(
    BLOG_POSTS.slice(0, 15).map((post) => ({
      title: post.title,
      url: `${SEO_CONFIG.siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    }))
  );

  return (
    <>
      <div className={styles.page}>
        <JsonLd data={[breadcrumbSchema, blogCollectionSchema]} />
        <Breadcrumb items={[{ label: 'Blog' }]} backHref="/" backLabel="Back to Home" />
        <BlogLanding />
      </div>
    </>
  );
}
