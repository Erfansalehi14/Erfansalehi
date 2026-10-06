import SectionHeader from './SectionHeader.jsx';
import { EVENTS } from '../data/site.js';
import { IconArrowRight, IconPin } from './Icons.jsx';

export default function Events() {
  return (
    <section id="events" className="section events" aria-labelledby="events-title">
      <div className="container">
        <SectionHeader id="events-title" eyebrow="Community" title="Upcoming Events" center />
        <div className="events-grid">
          {EVENTS.map((event, i) => (
            <article className="event-card" key={event.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
              <p className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </p>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-text">{event.text}</p>
              <p className="event-loc">
                <IconPin />
                {event.location}
              </p>
              <a className="court-cta" href="#booking">
                View Event <IconArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
