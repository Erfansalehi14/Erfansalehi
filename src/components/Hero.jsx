import { useEffect, useRef } from 'react';
import { HERO_VIDEO_URL } from '../data/heroVideo.js';
import { IconArrowRight, IconArrowDown } from './Icons.jsx';

/**
 * Hero with a fully scroll-scrubbed background video.
 * The scroll position maps 1:1 onto the video timeline (0% → 100%);
 * a rAF loop lerps toward the scroll target so scrubbing feels
 * cinematic instead of jumpy. No autoplay, no loop, no React re-renders.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.pause();
    video.load();

    let target = 0;
    let current = null;
    let duration = 0;
    let ready = false;
    let raf = 0;

    const onMeta = () => {
      duration = video.duration || 0;
      ready = duration > 0;
      video.pause();
    };
    video.addEventListener('loadedmetadata', onMeta);

    const onScroll = () => {
      const track = section.offsetHeight - window.innerHeight;
      if (track <= 0) {
        target = 0;
        return;
      }
      const progress = -section.getBoundingClientRect().top / track;
      target = Math.min(1, Math.max(0, progress));
    };

    const tick = () => {
      if (ready) {
        if (current === null) current = target;
        else if (Math.abs(target - current) < 0.0005) current = target;
        else current += (target - current) * 0.15;

        const time = current * duration;
        if (Math.abs(video.currentTime - time) > 0.004) {
          try {
            video.currentTime = time;
          } catch {
            /* metadata not ready yet */
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      video.removeEventListener('loadedmetadata', onMeta);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef} aria-label="پدل کلاب — معرفی">
      <div className="hero-stage">
        <div className="hero-media">
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            poster="/images/hero.jpg"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>

        <div className="container hero-content">
          <p className="eyebrow hero-eyebrow">پدلِ لوکس. تجربه‌ای بی‌نقص.</p>
          <h1 className="hero-title">
            بازی
            <br />
            در اوج
          </h1>
          <p className="hero-sub">زمین‌های درجه‌یک، امکاناتی بی‌همتا و جامعه‌ای که اشتیاق شما را سهیم می‌شود.</p>
          <div className="hero-cta">
            <a className="btn btn-gold" href="#booking">
              رزرو زمین <IconArrowRight />
            </a>
            <a className="btn btn-ghost" href="#club">
              کاوش در باشگاه <IconArrowDown />
            </a>
          </div>
        </div>

        <a className="hero-scroll" href="#facilities">
          <span className="hero-scroll-circle" aria-hidden="true">
            <IconArrowDown />
          </span>
          <span className="hero-scroll-label">برای کشف، اسکرول کنید</span>
        </a>
      </div>
    </section>
  );
}
