const env = import.meta.env;

export const SITE = {
  name: 'Wrench Theory',
  tagline: 'Technical knowledge · Industrial maintenance',
  description:
    'In-depth technical articles for millwrights, maintenance technicians, industrial mechanics and students: hydraulics, bearings, alignment, lubrication and troubleshooting.',
  locale: 'en_CA',
  ogImage: '/og-default.png',
  author: {
    name: 'Wrench Theory Technical Desk',
    role: 'Millwrighting & industrial maintenance',
    bio: 'Written and reviewed by maintenance professionals with years on the shop floor in Morocco and Ontario, Canada. Figures are checked against manufacturer and standards sources listed at the end of each article.',
  },
  // Add the channel URLs here; empty entries are hidden.
  social: [
    { name: 'YouTube', url: '' },
    { name: 'TikTok', url: '' },
    { name: 'Instagram', url: '' },
    { name: 'LinkedIn', url: '' },
  ],
  contactEmail: '', // shown on the contact page when set
};

export const ADS = {
  client: (env.PUBLIC_ADSENSE_CLIENT || '').trim(),
  showPlaceholders: env.PUBLIC_SHOW_AD_PLACEHOLDERS === 'true' || env.DEV,
  slots: {
    header: { id: env.PUBLIC_ADSENSE_SLOT_HEADER || '', size: '728 × 90', shape: 'leader' },
    inArticle: { id: env.PUBLIC_ADSENSE_SLOT_IN_ARTICLE || '', size: '336 × 280', shape: 'rect' },
    sidebar: { id: env.PUBLIC_ADSENSE_SLOT_SIDEBAR || '', size: '300 × 250', shape: 'rect' },
    end: { id: env.PUBLIC_ADSENSE_SLOT_END || '', size: '728 × 90', shape: 'leader' },
    home: { id: env.PUBLIC_ADSENSE_SLOT_HOME || '', size: '728 × 90', shape: 'leader' },
  },
} as const;
export type AdSlotName = keyof typeof ADS.slots;

export const INTEGRATIONS = {
  gaId: (env.PUBLIC_GA_ID || '').trim(),
  gscVerification: (env.PUBLIC_GSC_VERIFICATION || '').trim(),
  newsletterEndpoint: (env.PUBLIC_NEWSLETTER_ENDPOINT || '').trim(),
  contactEndpoint: (env.PUBLIC_CONTACT_ENDPOINT || '').trim(),
};
