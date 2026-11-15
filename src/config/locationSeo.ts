/**
 * Location SEO Publishing and Indexing Strategy for Grace Technologies
 *
 * Implements a strict quality gate:
 * - Prevents doorway page / scaled-content penalties by Google.
 * - Controls which city-service combinations are published and indexable.
 * - Unpublished locations return a 404.
 * - Non-indexable published locations receive 'noindex, follow' robots directives.
 * - Only indexable pages are included in dynamic XML sitemaps.
 */

export interface LocationSEOConfig {
  citySlug: string; // e.g. "london", "manchester"
  stateSlug: string; // e.g. "greater-london"
  countrySlug: string; // e.g. "england"
  serviceSlug: string; // e.g. "digital-marketing"
  published: boolean;
  indexable: boolean;
  priority?: number;
  featuredNotice?: string;
}

/**
 * Tier 1 UK Hubs approved for primary search indexing
 */
export const APPROVED_LOCATION_HUBS = [
  // England
  { city: 'London', state: 'Greater London', country: 'England' },
  { city: 'Manchester', state: 'Greater Manchester', country: 'England' },
  { city: 'Birmingham', state: 'West Midlands', country: 'England' },
  { city: 'Leeds', state: 'West Yorkshire', country: 'England' },
  { city: 'Liverpool', state: 'Merseyside', country: 'England' },
  { city: 'Bristol', state: 'Bristol', country: 'England' },
  { city: 'Newcastle upon Tyne', state: 'Tyne and Wear', country: 'England' },
  { city: 'Sheffield', state: 'South Yorkshire', country: 'England' },
  { city: 'Cambridge', state: 'Cambridgeshire', country: 'England' },
  { city: 'Oxford', state: 'Oxfordshire', country: 'England' },
  { city: 'Chelmsford', state: 'Essex', country: 'England' },
  { city: 'Colchester', state: 'Essex', country: 'England' },
  { city: 'Southend-on-Sea', state: 'Essex', country: 'England' },
  // Scotland
  { city: 'Edinburgh', state: 'City of Edinburgh', country: 'Scotland' },
  { city: 'Glasgow', state: 'Glasgow City', country: 'Scotland' },
  { city: 'Aberdeen', state: 'Aberdeenshire', country: 'Scotland' },
  // Wales
  { city: 'Cardiff', state: 'Cardiff', country: 'Wales' },
  { city: 'Swansea', state: 'Swansea', country: 'Wales' },
  { city: 'Bangor', state: 'Gwynedd', country: 'Wales' },
  // Northern Ireland
  { city: 'Belfast', state: 'Belfast', country: 'Northern Ireland' },
  { city: 'Londonderry', state: 'Derry and Strabane', country: 'Northern Ireland' },
  { city: 'Bangor', state: 'Ards and North Down', country: 'Northern Ireland' },
];

export interface LocationStatus {
  isPublished: boolean;
  isIndexable: boolean;
}

/**
 * Keep valid city routes available, but only index the locations selected for
 * the current location SEO plan.
 */
export function getLocationStatus(
  city: string,
  state: string,
  country: string,
  serviceSlug: string
): LocationStatus {
  return {
    isPublished: true,
    isIndexable:
      serviceSlug === 'digital-marketing' &&
      APPROVED_LOCATION_HUBS.some(
        (location) =>
          location.city === city &&
          location.state === state &&
          location.country === country
      ),
  };
}
