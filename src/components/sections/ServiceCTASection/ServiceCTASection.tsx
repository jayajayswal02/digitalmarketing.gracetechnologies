'use client';

import React from 'react';
import CTASection from '@/components/common/CTASection/CTASection';
import { openEnquiryModal } from '@/utils/modal';

interface ServiceCTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  serviceTitle?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export default function ServiceCTASection({
  title = 'Ready to Grow Your Business?',
  description = 'Tell us about your goals and we will discuss how our digital marketing services may help.',
  primaryCtaText = 'Get a Quote',
  serviceTitle,
  secondaryCtaText = 'Contact Us',
  secondaryCtaHref = '/contact',
  badge = 'DIGITAL MARKETING',
}: ServiceCTASectionProps) {
  return (
    <CTASection
      badge={badge}
      title={title}
      description={description}
      primaryCtaText={primaryCtaText}
      onPrimaryCtaClick={() => openEnquiryModal(serviceTitle)}
      secondaryCtaText={secondaryCtaText}
      secondaryCtaHref={secondaryCtaHref}
    />
  );
}
