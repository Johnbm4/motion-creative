export const hero = {
  label: 'Motion Creative',
  lines: ['We shape worlds', 'through image and event.'],
} as const;

export const identity = {
  label: 'Identity',
  lines: [
    'A creative company — not an agency.',
    'Film, live experience, and digital craft.',
    'Addis Ababa · Worldwide.',
  ],
} as const;

export const ecosystem = {
  label: 'Capabilities',
  headline: ['Four disciplines.', 'One practice.'],
  pillars: [
    { name: 'Production', description: 'Film, motion, and long-form visual narrative.' },
    { name: 'Events', description: 'Live experiences designed as complete environments.' },
    { name: 'Marketing', description: 'Brand stories told with cinematic restraint.' },
    { name: 'Technology', description: 'Interactive work that still feels human.' },
  ],
} as const;

export const portfolio = {
  label: 'Selected Work',
  headline: 'Proof, not noise.',
  previewCount: 3,
} as const;

export const closing = {
  line: 'If the work matters, we should talk.',
  cta: 'Start a project',
  location: 'Addis Ababa',
} as const;

export const contactIntro = {
  line: 'Every project begins with a conversation.',
  sub: 'A few questions — answered at your pace.',
} as const;
