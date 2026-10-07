import SectionHeader from './SectionHeader.jsx';
import { COURTS } from '../data/site.js';
import { IconArrowRight } from './Icons.jsx';

export default function Courts() {
  return (
    <section id="courts" className="section courts" aria-labelledby="courts-title">
      <div className="container">
        <SectionHeader id="courts-title" eyebrow="زمین‌ها" title="به سبک خودت بازی کن" center />
        <div className="courts-grid">
          {COURTS.map((court, i) => (
            <article className="court-card" key={court.id} data-reveal style={{ '--reveal-delay': `${i * 100}ms` }}>
              <div className="court-media">
                <img src={court.img} alt={`${court.name} در پدل کلاب`} loading="lazy" />
              </div>
              <div className="court-body">
                <p className="court-code">{court.code}</p>
                <h3 className="court-name">{court.name}</h3>
                <p className="court-desc">{court.desc}</p>
                <ul className="court-meta">
                  <li>
                    <span>ظرفیت</span>
                    <span>{court.capacity}</span>
                  </li>
                  <li>
                    <span>نورپردازی</span>
                    <span>{court.lighting}</span>
                  </li>
                  <li>
                    <span>سطح زمین</span>
                    <span>{court.surface}</span>
                  </li>
                </ul>
                <a className="court-cta" href="#booking">
                  مشاهدهٔ زمین <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
