import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Universities', to: '/universities' },
  { label: 'Online & ODL', to: '/online-learning' },
  { label: 'Admission', to: '/admission' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header className={`vi-navbar ${solid ? 'is-solid' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-vi vi-navbar-inner">
          <Link to="/" className="vi-brand" aria-label="Vijayam Institute home">
            <span className="vi-brand-mark" aria-hidden="true">VI</span>
            <span>
              Vijayam Institute
              <span className="vi-brand-sub">Nagercoil</span>
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="vi-nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="vi-navbar-actions">
            <Link to="/contact" className="btn-vi-primary d-none d-lg-inline-flex">
              Apply Now
            </Link>
            <button
              type="button"
              className="vi-nav-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="vi-mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`vi-mobile-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />

      <nav id="vi-mobile-menu" className={`vi-mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="vi-brand" style={{ color: '#fff' }}>
            <span className="vi-brand-mark">VI</span> Vijayam Institute
          </span>
        </div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'is-active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn-vi-primary w-100 mt-3">
          Apply Now
        </Link>
      </nav>
    </>
  );
}
