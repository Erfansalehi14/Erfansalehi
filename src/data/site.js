/* ------------------------------------------------------------------ */
/*  Site content — single source of truth for all copy and imagery.    */
/*  Swap this module for a CMS/API adapter without touching components */
/* ------------------------------------------------------------------ */

export const CLUB = {
  name: 'Padel Club',
  tagline: 'Play. Connect. Elevate.',
  address: 'Köpenicker Str. 96, 10179 Berlin',
  phone: '+49 30 555 0180',
  phoneHref: 'tel:+49305550180',
  email: 'hello@padelclub.com',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'club', label: 'Club' },
  { id: 'courts', label: 'Courts' },
  { id: 'membership', label: 'Membership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export const FACILITIES = [
  {
    icon: 'court',
    title: 'Premium Courts',
    text: 'Premium surfaces, professional lighting & world-class playing conditions.',
  },
  {
    icon: 'lounge',
    title: 'Clubhouse',
    text: 'Relax and recharge in our luxury lounge & café.',
  },
  {
    icon: 'fitness',
    title: 'Fitness Area',
    text: 'Performance training zones designed to elevate your game.',
  },
  {
    icon: 'community',
    title: 'Community',
    text: 'Join events, leagues & a community that plays together.',
  },
];

export const SHOWCASE_IMAGES = [
  { src: '/images/gallery-racket.jpg', label: 'Equipment', alt: 'Padel racket and balls resting on a blue court' },
  { src: '/images/gallery-clubhouse.jpg', label: 'Clubhouse', alt: 'Warmly lit clubhouse lounge and bar' },
  { src: '/images/gallery-dusk.jpg', label: 'Courts', alt: 'Illuminated padel courts at dusk' },
  { src: '/images/gallery-detail.jpg', label: 'Detail', alt: 'Close-up of a padel racket and balls' },
];

export const COURTS = [
  {
    id: 'panoramic',
    code: 'Court 01',
    name: 'Panoramic Court',
    img: '/images/court-1.jpg',
    desc: 'Floor-to-ceiling glass and full-height openings with uninterrupted views across the club.',
    capacity: '2–4 Players',
    lighting: 'Full LED System',
    surface: 'Monofilament Turf',
  },
  {
    id: 'premium',
    code: 'Court 02',
    name: 'Premium Court',
    img: '/images/court-2.jpg',
    desc: 'Tournament-grade blue turf tuned for pace, control and long rallies under the lights.',
    capacity: '2–4 Players',
    lighting: 'LED Floodlights',
    surface: 'Blue Monofilament Turf',
  },
  {
    id: 'private',
    code: 'Court 03',
    name: 'Private Court',
    img: '/images/court-3.jpg',
    desc: 'An enclosed indoor court with a quieter, club-like atmosphere reserved for members.',
    capacity: '2–4 Players',
    lighting: 'Indirect Warm LED',
    surface: 'Premium Acrylic Turf',
  },
];

export const MEMBERSHIPS = [
  {
    id: 'essential',
    name: 'Essential',
    price: 49,
    blurb: 'For players who want reliable access to the courts.',
    benefits: [
      'Court booking access',
      'Member events',
      'Clubhouse access',
      'League participation',
    ],
    featured: false,
  },
  {
    id: 'performance',
    name: 'Performance',
    price: 99,
    blurb: 'The complete playing experience, seven days a week.',
    benefits: [
      'Court booking access',
      'Priority booking',
      'Member events',
      'Clubhouse access',
      'Fitness area',
      'League participation',
    ],
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 199,
    blurb: 'The highest level of club life, on and off the court.',
    benefits: [
      'Everything in Performance',
      'Guest privileges',
      'Private court priority',
      'Personal training session',
      'Locker & towel service',
      'Dedicated concierge',
    ],
    featured: false,
  },
];

export const EVENTS = [
  {
    day: '17',
    month: 'Oct',
    title: 'Padel Tournament',
    text: 'A one-day knockout for members and guests — fast games, big energy.',
    location: 'Panoramic Court',
  },
  {
    day: '23',
    month: 'Oct',
    title: 'Friday Night Padel',
    text: 'Social rounds under the lights, followed by drinks in the clubhouse.',
    location: 'All Courts',
  },
  {
    day: '05',
    month: 'Nov',
    title: 'Member Social',
    text: 'An evening in the lounge for new and long-standing members.',
    location: 'Clubhouse Lounge',
  },
  {
    day: '14',
    month: 'Nov',
    title: 'Beginner Clinic',
    text: 'A two-hour introduction to padel with our head coach.',
    location: 'Premium Court',
  },
];

export const GALLERY_CATS = ['All', 'Courts', 'Clubhouse', 'Community', 'Events'];

export const GALLERY_ITEMS = [
  { src: '/images/hero.jpg', cat: 'Courts', label: 'Night Session', alt: 'Illuminated padel courts and fencing under evening floodlights' },
  { src: '/images/gallery-clubhouse.jpg', cat: 'Clubhouse', label: 'The Lounge', alt: 'Warmly lit clubhouse lounge and bar' },
  { src: '/images/gallery-players.jpg', cat: 'Community', label: 'Club Match', alt: 'Players in a lively padel match on blue courts' },
  { src: '/images/gallery-racket.jpg', cat: 'Courts', label: 'Rackets & Balls', alt: 'Padel rackets and balls resting on a court' },
  { src: '/images/gallery-event.jpg', cat: 'Events', label: 'Exhibition Night', alt: 'Professional padel exhibition match played at night' },
  { src: '/images/gallery-dusk.jpg', cat: 'Courts', label: 'Blue Hour', alt: 'Padel courts glowing at dusk' },
  { src: '/images/gallery-lounge.jpg', cat: 'Clubhouse', label: 'After Hours', alt: 'Dim lounge interior in the evening' },
  { src: '/images/gallery-detail.jpg', cat: 'Courts', label: 'Indoor Arena', alt: 'Indoor padel arena interior' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Club',
    links: [
      { label: 'About', href: '#club' },
      { label: 'Facilities', href: '#facilities' },
      { label: 'Membership', href: '#membership' },
      { label: 'Events', href: '#events' },
    ],
  },
  {
    title: 'Play',
    links: [
      { label: 'Courts', href: '#courts' },
      { label: 'Book a Court', href: '#booking' },
      { label: 'Leagues', href: '#events' },
      { label: 'Coaching', href: '#events' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'YouTube', href: 'https://youtube.com' },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];
