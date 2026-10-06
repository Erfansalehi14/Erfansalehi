/* Minimal thin-line icon set + brand logo. All icons inherit currentColor. */

export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M13 33.5V7h8.5a8.75 8.75 0 1 1 0 17.5H13" stroke="#F5F3EE" strokeWidth="2.6" />
        <path d="M13 33.5h8.5" stroke="#C6A873" strokeWidth="2.6" />
      </svg>
      <span className="logo-word">
        Padel
        <br />
        Club
      </span>
    </span>
  );
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'square',
};

export function IconCourt() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
      <rect x="2.5" y="5.5" width="27" height="21" />
      <line x1="16" y1="5.5" x2="16" y2="26.5" />
      <line x1="7" y1="10" x2="12" y2="10" />
      <line x1="7" y1="22" x2="12" y2="22" />
      <line x1="20" y1="10" x2="25" y2="10" />
      <line x1="20" y1="22" x2="25" y2="22" />
    </svg>
  );
}

export function IconLounge() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
      <path d="M6 15v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4" />
      <path d="M6 15a2.5 2.5 0 0 0-2.5 2.5V23H6" />
      <path d="M26 15a2.5 2.5 0 0 1 2.5 2.5V23H26" />
      <path d="M6 15a2.5 2.5 0 0 1 2.5 2.5V20h15v-2.5A2.5 2.5 0 0 1 26 15" />
      <line x1="7" y1="23" x2="7" y2="26" />
      <line x1="25" y1="23" x2="25" y2="26" />
      <line x1="6" y1="23" x2="26" y2="23" />
    </svg>
  );
}

export function IconFitness() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
      <line x1="11" y1="16" x2="21" y2="16" />
      <rect x="4" y="10" width="4" height="12" />
      <rect x="24" y="10" width="4" height="12" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="2.5" y1="13" x2="2.5" y2="19" />
      <line x1="29.5" y1="13" x2="29.5" y2="19" />
    </svg>
  );
}

export function IconCommunity() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
      <circle cx="16" cy="10" r="3.5" />
      <path d="M9.5 24v-2a6.5 6.5 0 0 1 13 0v2" />
      <circle cx="6.5" cy="12" r="2.5" />
      <path d="M2 23v-1.5a4.5 4.5 0 0 1 4.5-4.5" />
      <circle cx="25.5" cy="12" r="2.5" />
      <path d="M30 23v-1.5a4.5 4.5 0 0 0-4.5-4.5" />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.8">
      <line x1="4" y1="12" x2="20" y2="12" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowDown() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.8">
      <line x1="12" y1="4" x2="12" y2="20" />
      <path d="M6 14l6 6 6-6" />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.6">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.6">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function IconChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.8">
      <path d="M15 4l-8 8 8 8" />
    </svg>
  );
}

export function IconChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.8">
      <path d="M9 4l8 8-8 8" />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.8">
      <path d="M4 12.5l5.5 5.5L20 6.5" />
    </svg>
  );
}

export function IconPin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="1.6">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export const FACILITY_ICONS = {
  court: IconCourt,
  lounge: IconLounge,
  fitness: IconFitness,
  community: IconCommunity,
};
