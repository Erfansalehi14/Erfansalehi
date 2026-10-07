import { IconArrowRight } from './Icons.jsx';

export default function StorySection() {
  return (
    <section id="club" className="section story" aria-labelledby="story-title">
      <div className="container story-grid">
        <div className="story-media" data-reveal>
          <img
            src="/images/story.jpg"
            alt="زمین سرپوشیدهٔ باشکوه پدل در سالنی با معماری کم‌نظیر"
            loading="lazy"
          />
        </div>
        <div className="story-content" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className="eyebrow">باشگاه</p>
          <h2 className="story-title" id="story-title">
            جایی که عملکرد
            <br />
            به سبک زندگی می‌رسد
          </h2>
          <p className="story-text">
            پدل کلاب بیش از یک مکان برای بازی است؛ مقصدی برای عملکرد، پیوند و تجربه‌های استثنایی.
          </p>
          <a className="btn btn-ghost" href="#gallery">
            کشف باشگاه <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
