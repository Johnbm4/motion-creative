export const about = {
  label: 'About',
  headline: 'We build experiences that move people.',
  body: 'Motion Creative is a multidisciplinary studio based in Addis Ababa. We work at the intersection of film, live events, brand, and technology — always in service of a single idea, told with restraint.',
} as const;

export const philosophy = {
  label: 'Philosophy',
  lines: [
    'Move slowly.',
    'Let the work breathe.',
    'Every frame is a decision.',
  ],
} as const;

export const capabilities = [
  {
    id: 'production' as const,
    title: 'Production',
    lines: ['Film, motion, and long-form narrative.', 'From treatment to final grade.'],
  },
  {
    id: 'events' as const,
    title: 'Events',
    lines: ['Live environments as complete worlds.', 'Stage, sound, and guest journey.'],
  },
  {
    id: 'marketing' as const,
    title: 'Marketing',
    lines: ['Launch films and brand systems.', 'Story first — never noise.'],
  },
  {
    id: 'technology' as const,
    title: 'Technology',
    lines: ['Interactive and immersive platforms.', 'Human pace, not product demos.'],
  },
] as const;
