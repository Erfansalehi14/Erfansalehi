import SectionHeader from './SectionHeader.jsx';
import { COURTS } from '../data/site.js';
import { IconArrowRight } from './Icons.jsx';

export default function Courts() {
  return (
    <section id="courts" className="section courts" aria-labelledby="courts-title">
      <div className="container">
        <SectionHeader id="courts-title" eyebrow="The Courts" title="Play Your Way" center />
        <div className="courts-grid">
          {COURTS.map((court, i) => (
            <article className="court-card" key={court.id} data-reveal style={{ '--reveal-delay': `${i * 100}ms` }}>
              <div className="court-media">
                <img src={court.img} alt={`${court.name} at Padel Club`} loading="lazy" />
              </div>
              <div className="court-body">
                <p className="court-code">{court.code}</p>
                <h3 className="court-name">{court.name}</h3>
                <p className="court-desc">{court.desc}</p>
                <ul className="court-meta">
                  <li>
                    <span>Capacity</span>
                    <span>{court.capacity}</span>
                  </li>
                  <li>
                    <span>Lighting</span>
                    <span>{court.lighting}</span>
                  </li>
                  <li>
                    <span>Surface</span>
                    <span>{court.surface}</span>
                  </li>
                </ul>
                <a className="court-cta" href="#booking">
                  View Court <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
