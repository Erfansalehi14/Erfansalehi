import { IconArrowRight } from './Icons.jsx';

export default function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-scrim" aria-hidden="true" />
      <div className="container cta-content" data-reveal>
        <p className="eyebrow">Membership &amp; Play</p>
        <h2 className="cta-title" id="cta-title">
          Ready to
          <br />
          Elevate Your Game?
        </h2>
        <p className="cta-sub">Book your court and enjoy the ultimate padel experience.</p>
        <div className="cta-actions">
          <a className="btn btn-gold" href="#booking">
            Book a Court <IconArrowRight />
          </a>
          <a className="btn btn-ghost" href="#membership">
            Become a Member <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
