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
       <a
  href="https://www.google.com/maps/place/VIJAYAM+INSTITUTE/@8.1910989,77.4311497,16.65z/data=!4m14!1m7!3m6!1s0x3b04f154d3f17b3b:0xb95eaf122fc64188!2sVIJAYAM+INSTITUTE!8m2!3d8.1915854!4d77.4340219!16s%2Fg%2F11ybt5z435!3m5!1s0x3b04f154d3f17b3b:0xb95eaf122fc64188!8m2!3d8.1915854!4d77.4340219!16s%2Fg%2F11ybt5z435?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'block',
    cursor: 'pointer',
  }}
>
  <iframe
    title="Vijayam Institute location"
    src="https://www.google.com/maps?q=8.1915854,77.4340219&z=17&output=embed"
    width="100%"
    height="360"
    style={{
      border: 0,
      display: 'block',
      pointerEvents: 'none',
    }}
  />
</a>
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
