import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import Lightbox from './Lightbox.jsx';
import { GALLERY_CATS, GALLERY_ITEMS } from '../data/site.js';

export default function GallerySection() {
  const [cat, setCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = useMemo(
    () => (cat === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === cat)),
    [cat]
  );

  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeader id="gallery-title" eyebrow="The Gallery" title="Inside the Club" center />

        <div className="gallery-filters" data-reveal>
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              type="button"
              className={`gallery-filter${cat === c ? ' is-active' : ''}`}
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              className="gallery-item"
              data-reveal
              style={{ '--reveal-delay': `${(i % 4) * 80}ms` }}
              onClick={() => setLightboxIndex(i)}
              aria-label={`View photo — ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-item-label" aria-hidden="true">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
