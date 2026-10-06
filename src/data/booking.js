/* ------------------------------------------------------------------ */
/*  Booking engine placeholder.                                        */
/*  `fetchAvailability` mimics a backend round-trip; swapping it for a */
/*  real `fetch('/api/availability')` later needs no UI changes.       */
/* ------------------------------------------------------------------ */

export const DURATIONS = [60, 90, 120];
export const TIME_SLOTS = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
export const BOOKINGS_KEY = 'padel-club-bookings';

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getLocalBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveLocalBooking(booking) {
  const list = getLocalBookings();
  list.push(booking);
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable — booking still confirmed in-session */
  }
}

/**
 * Resolves with the bookable time slots for a date + court.
 * Deterministic pseudo-availability stands in for the real API;
 * locally confirmed bookings are always honoured.
 */
export function fetchAvailability({ date, courtId }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booked = getLocalBookings()
        .filter((b) => b.date === date && b.courtId === courtId)
        .map((b) => b.time);
      const available = TIME_SLOTS.filter(
        (t) => !booked.includes(t) && hashString(`${date}|${courtId}|${t}`) % 4 !== 0
      );
      resolve(available);
    }, 650);
  });
}

export function createBookingRef() {
  return 'PC-' + Math.random().toString(36).slice(2, 7).toUpperCase();
}
