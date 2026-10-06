export default function SectionHeader({ eyebrow, title, intro, center = false, id }) {
  return (
    <header className={`section-head${center ? ' is-center' : ''}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
