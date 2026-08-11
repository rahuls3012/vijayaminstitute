import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Two responsibilities:
 * 1. Scrolls the window to top on every route change (SPA navigation).
 * 2. Renders a "back to top" button once the user has scrolled down.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`vi-scroll-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      tabIndex={visible ? 0 : -1}
    >
      <i className="bi bi-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
