import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/site.js';
import { useScrolled, useActiveSection } from '../hooks.js';
import { Logo, IconMenu, IconClose } from './Icons.jsx';

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="brand" aria-label="پدل کلاب — خانه">
            <Logo />
          </a>

          <nav className="nav-center" aria-label="منوی اصلی">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={active === link.id ? 'active' : ''} aria-current={active === link.id ? 'true' : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <a className="btn btn-outline btn-sm nav-book" href="#booking">
              رزرو زمین
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'بستن منو' : 'باز کردن منو'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
        <nav aria-label="منوی موبایل">
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={link.id} style={{ '--i': i }}>
                <a href={`#${link.id}`} className={active === link.id ? 'active' : ''} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-gold" href="#booking" onClick={() => setOpen(false)}>
            رزرو زمین
          </a>
        </nav>
      </div>
    </>
  );
}
