import { useEffect, useRef } from 'react';
import { IconArrowRight, IconArrowDown } from './Icons.jsx';

export default function Hero() {
  const mediaRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = mediaRef.current;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        el.style.transform = `translate3d(0, ${y * 0.2}px, 0)`;
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Padel Club — introduction">
      <div className="hero-media" ref={mediaRef}>
        <img
          src="/images/hero.jpg"
          alt="Illuminated padel courts and clubhouse architecture at night"
          fetchpriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">Premium Padel. Perfect Experience.</p>
        <h1 className="hero-title">
          Play
          <br />
          Elevated
        </h1>
        <p className="hero-sub">Top-tier courts, world-class facilities, and a community that shares your passion.</p>
        <div className="hero-cta">
          <a className="btn btn-gold" href="#booking">
            Book a Court <IconArrowRight />
          </a>
          <a className="btn btn-ghost" href="#club">
            Explore the Club <IconArrowDown />
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#facilities">
        <span className="hero-scroll-circle" aria-hidden="true">
          <IconArrowDown />
        </span>
        <span className="hero-scroll-label">Scroll to Explore</span>
      </a>
    </section>
  );
}
