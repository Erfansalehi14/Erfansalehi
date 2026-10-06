import SectionHeader from './SectionHeader.jsx';
import { SHOWCASE_IMAGES } from '../data/site.js';

export default function Showcase() {
  return (
    <section className="section showcase" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHeader id="showcase-title" eyebrow="Experience Padel" title="More Than a Game" center />
        <div className="showcase-grid">
          {SHOWCASE_IMAGES.map((img, i) => (
            <figure className="showcase-card" key={img.src} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
