import type { CaseStudySection, PortfolioProject } from '../types/portfolio';

function sections(
  concept: Omit<CaseStudySection, 'key'>,
  process: Omit<CaseStudySection, 'key'>,
  execution: Omit<CaseStudySection, 'key'>,
  outcome: Omit<CaseStudySection, 'key'>,
): CaseStudySection[] {
  return [
    { key: 'concept', ...concept },
    { key: 'process', ...process },
    { key: 'execution', ...execution },
    { key: 'outcome', ...outcome },
  ];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'ethio-tech-summit',
    title: 'Ethio-Tech Summit',
    category: 'Events',
    description: 'Opening film and stage direction for 3,000 guests.',
    intro:
      'The brief: transform a technology summit into a premiere — one continuous evening, no breaks in atmosphere.',
    image: '/placeholder.jpg',
    year: '2025',
    client: 'Ethio-Tech Foundation',
    sections: sections(
      {
        title: 'Concept',
        body: 'We treated the summit as a film premiere: one narrative arc from arrival to applause. Light, sound, and motion choreographed as a single sequence.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Process',
        body: 'Six weeks of pre-visualization with the client. Storyboards for the opening film, lighting plots for the hall, and a run-of-show timed to the second.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Execution',
        body: 'An eight-minute opening film anchored the stage. Live feeds, restrained typography, and a black-stage palette kept focus on speakers without visual noise.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Outcome',
        body: 'Full attendance through the program. Press led with the opening sequence. Retained for the following year.',
      },
    ),
  },
  {
    id: '2',
    slug: 'modern-heritage',
    title: 'Modern Heritage',
    category: 'Production',
    description: 'A four-part documentary on craft and place.',
    intro:
      'Four artisans. Four cities. One question: what survives when tradition meets the present?',
    image: '/placeholder.jpg',
    year: '2024',
    client: 'Regional Arts Council',
    sections: sections(
      {
        title: 'Concept',
        body: 'Each episode follows a single maker without voiceover. Observation and sound carry the story — no explanatory interviews.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Process',
        body: 'Location scouting across six months. Trust built with subjects before cameras rolled. A shared visual language agreed in week one.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Execution',
        body: 'Natural light, long takes, minimal score. Earth-tone grade to unify regions and seasons into one series.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Outcome',
        body: 'Festival premiere. Streaming rights in two territories. Second season in development.',
      },
    ),
  },
  {
    id: '3',
    slug: 'blue-nile-sessions',
    title: 'Blue Nile Sessions',
    category: 'Events',
    description: 'An intimate concert series on the river at dusk.',
    intro: 'Music at the water’s edge — designed for stillness, not spectacle.',
    image: '/placeholder.jpg',
    year: '2024',
    sections: sections(
      {
        title: 'Concept',
        body: 'Limited capacity. No screens. The river and sky as backdrop. Guests arrive at golden hour; performances begin as light falls.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Process',
        body: 'Acoustic modeling for open air. Guest journey mapped from arrival pier to seating. Rehearsals at the same hour as showtime.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Execution',
        body: 'Modular stage, warm practical lighting, sound design that respected the river’s silence between sets.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Outcome',
        body: 'Six sold-out evenings. Waitlist for the next season. Documented as a short film for sponsors.',
      },
    ),
  },
  {
    id: '4',
    slug: 'abyssinia-collection',
    title: 'Abyssinia Collection',
    category: 'Marketing',
    description: 'Launch film and identity for a fashion house.',
    intro: 'A debut collection deserved a debut film — not a lookbook with music.',
    image: '/placeholder.jpg',
    year: '2025',
    client: 'Abyssinia Collection',
    sections: sections(
      {
        title: 'Concept',
        body: 'Garments in movement, in real spaces — ateliers, streets, interiors. Identity from typography and one accent tone only.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Process',
        body: 'Casting and locations chosen for texture, not trend. Wardrobe and set design developed as one palette.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Execution',
        body: 'Three-minute hero film, press stills, restrained digital kit. One grid, one rhythm of cuts across all assets.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Outcome',
        body: 'Launch week sell-through exceeded target by forty percent. Identity applied across retail.',
      },
    ),
  },
  {
    id: '5',
    slug: 'atlas-interactive',
    title: 'Atlas Interactive',
    category: 'Technology',
    description: 'Immersive exhibition for the National Museum.',
    intro: 'History through touch, projection, and pace — not touchscreens on walls.',
    image: '/placeholder.jpg',
    year: '2023',
    client: 'National Museum',
    sections: sections(
      {
        title: 'Concept',
        body: 'Rooms that respond to presence. Content unfolds slowly; nothing demands immediate interaction.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Process',
        body: 'Prototyping with curators and architects. User testing at half-scale before fabrication.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Execution',
        body: 'Custom software, projection mapping, physical interfaces matching the museum’s material language.',
        image: '/placeholder.jpg',
      },
      {
        title: 'Outcome',
        body: 'Dwell time tripled versus the previous exhibition. Second gallery approved.',
      },
    ),
  },
];
