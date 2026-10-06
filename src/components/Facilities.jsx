import SectionHeader from './SectionHeader.jsx';
import { FACILITIES } from '../data/site.js';
import { FACILITY_ICONS } from './Icons.jsx';

export default function Facilities() {
  return (
    <section id="facilities" className="section facilities" aria-labelledby="facilities-title">
      <div className="container">
        <SectionHeader id="facilities-title" eyebrow="Built for Players" title="Premium Facilities" center />
        <div className="fac-grid">
          {FACILITIES.map((f, i) => {
            const Icon = FACILITY_ICONS[f.icon];
            return (
              <article className="fac-item" key={f.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                <span className="fac-icon">
                  <Icon />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
