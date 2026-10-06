import { IconArrowRight } from './Icons.jsx';

export default function StorySection() {
  return (
    <section id="club" className="section story" aria-labelledby="story-title">
      <div className="container story-grid">
        <div className="story-media" data-reveal>
          <img
            src="/images/story.jpg"
            alt="Grand indoor padel court set within an architecturally significant hall"
            loading="lazy"
          />
        </div>
        <div className="story-content" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className="eyebrow">The Club</p>
          <h2 className="story-title" id="story-title">
            Where Performance
            <br />
            Meets Lifestyle
          </h2>
          <p className="story-text">
            More than a place to play, Padel Club is a destination built around performance, connection and
            exceptional experiences.
          </p>
          <a className="btn btn-ghost" href="#gallery">
            Discover the Club <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
