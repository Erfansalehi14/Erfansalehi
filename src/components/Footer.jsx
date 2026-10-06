import { CLUB, FOOTER_COLUMNS, LEGAL_LINKS } from '../data/site.js';
import { Logo } from './Icons.jsx';

export default function Footer() {
  return (
    <footer id="contact" className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden">
        Contact and site information
      </h2>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand" aria-label="Padel Club — back to top">
              <Logo />
            </a>
            <p>{CLUB.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav className="footer-col" key={col.title} aria-label={`Footer — ${col.title}`}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <span>{CLUB.address}</span>
              </li>
              <li>
                <a href={CLUB.phoneHref}>{CLUB.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Padel Club. All rights reserved.</p>
          <ul className="footer-legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
