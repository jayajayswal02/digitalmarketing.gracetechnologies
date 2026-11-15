import type { Metadata } from 'next';
import { SEO_CONFIG } from './config';

export interface MetadataGeneratorOptions {
  title?: string;
  titleIsAbsolute?: boolean;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
  alternateLocales?: Array<{ locale: string; path: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: Array<string>;
}

export function constructMetadata({
  title,
  titleIsAbsolute = false,
  description,
  canonicalPath = '',
  ogImage,
  ogType = 'website',
  keywords = [],
  noIndex = false,
  alternateLocales,
  publishedTime,
  modifiedTime,
  authors = [],
}: MetadataGeneratorOptions = {}): Metadata {
  const pageTitle = title
    ? titleIsAbsolute
      ? title
      : `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const ogImageUrl = ogImage || SEO_CONFIG.defaultOgImage;

  const languages: Record<string, string> = {
    'en-GB': canonicalUrl,
  };

  if (alternateLocales) {
    alternateLocales.forEach(({ locale, path }) => {
      const altCleanPath = path.startsWith('/') ? path : `/${path}`;
      languages[locale] = `${SEO_CONFIG.siteUrl}${altCleanPath === '/' ? '' : altCleanPath}`;
    });
  }

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors.length > 0 ? authors.map((name) => ({ name })) : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(languages).length > 1 ? languages : undefined,
    },
    openGraph: {
      type: ogType,
      locale: SEO_CONFIG.locale,
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SEO_CONFIG.siteName,
      publishedTime,
      modifiedTime,
      authors: authors.length > 0 ? authors : undefined,
      images: [
        {
          url: ogImageUrl,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      creator: '@grace_Official4',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
