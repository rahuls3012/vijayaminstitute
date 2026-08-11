import { useEffect, useRef, useState } from 'react';

/**
 * Loads the Google Maps embed iframe only once it scrolls near the
 * viewport, avoiding the upfront cost of a heavy third-party embed.
 */
export default function MapEmbed() {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="vi-card overflow-hidden reveal"
      style={{ borderRadius: 'var(--vi-radius-lg)', minHeight: 360 }}
    >
      {shouldLoad ? (
        <iframe
          title="Vijayam Institute location map — Vadasery, Nagercoil"
          src="https://www.google.com/maps?q=Vadasery,+Nagercoil,+Kanyakumari+District,+Tamil+Nadu+629003&output=embed"
          width="100%"
          height="360"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center text-muted-vi"
          style={{ height: 360, background: 'var(--vi-navy-100)' }}
        >
          <span>
            <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
            Map loads as you scroll here
          </span>
        </div>
      )}
    </div>
  );
}
