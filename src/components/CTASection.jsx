import { IconArrowRight } from './Icons.jsx';

export default function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-scrim" aria-hidden="true" />
      <div className="container cta-content" data-reveal>
        <p className="eyebrow">عضویت و بازی</p>
        <h2 className="cta-title" id="cta-title">
          آماده‌اید
          <br />
          بازی را به اوج برسانید؟
        </h2>
        <p className="cta-sub">زمین خود را رزرو کنید و از تجربهٔ نهایی پدل لذت ببرید.</p>
        <div className="cta-actions">
          <a className="btn btn-gold" href="#booking">
            رزرو زمین <IconArrowRight />
          </a>
          <a className="btn btn-ghost" href="#membership">
            عضو شوید <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
