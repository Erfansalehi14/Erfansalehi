import { useEffect, useCallback } from 'react';
import { IconClose, IconChevronLeft, IconChevronRight } from './Icons.jsx';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  if (!item) return null;

  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, prev, next]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Close photo viewer" onClick={onClose} autoFocus>
        <IconClose />
      </button>

      <button
        type="button"
        className="lightbox-nav is-prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <IconChevronLeft />
      </button>

      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          <span>{item.label}</span>
          <span>
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox-nav is-next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <IconChevronRight />
      </button>
    </div>
  );
}
