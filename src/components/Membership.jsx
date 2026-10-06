import SectionHeader from './SectionHeader.jsx';
import { MEMBERSHIPS } from '../data/site.js';
import { IconArrowRight } from './Icons.jsx';

export default function Membership() {
  return (
    <section id="membership" className="section membership" aria-labelledby="membership-title">
      <div className="container">
        <SectionHeader id="membership-title" eyebrow="Membership" title="Your Game. Your Club." center />
        <div className="member-grid">
          {MEMBERSHIPS.map((plan, i) => (
            <article
              className={`member-card${plan.featured ? ' is-featured' : ''}`}
              key={plan.id}
              data-reveal
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              {plan.featured && <span className="member-badge">Recommended</span>}
              <h3 className="member-name">{plan.name}</h3>
              <p className="member-price">
                <span>From</span>€{plan.price}
                <small>/ month</small>
              </p>
              <p className="member-blurb">{plan.blurb}</p>
              <ul className="member-list">
                {plan.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a className={`btn btn-block ${plan.featured ? 'btn-gold' : 'btn-ghost'}`} href="#booking">
                Become a Member <IconArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
