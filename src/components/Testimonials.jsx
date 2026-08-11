import { useEffect, useState } from 'react';

// Placeholder content — replace each entry with a real, verified student
// testimonial (with permission) before publishing.
const PLACEHOLDERS = [
  { id: 1, quote: 'Student testimonial will appear here.', name: 'Programme graduate' },
  { id: 2, quote: 'Student testimonial will appear here.', name: 'Working professional learner' },
  { id: 3, quote: 'Student testimonial will appear here.', name: 'Online programme student' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % PLACEHOLDERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = PLACEHOLDERS[active];

  return (
    <div className="testimonial-card vi-card reveal">
      <i className="bi bi-quote" style={{ fontSize: '1.8rem', color: 'var(--vi-gold-600)' }} aria-hidden="true"></i>
      <blockquote>&ldquo;{current.quote}&rdquo;</blockquote>
      <p className="text-muted-vi mb-0 fw-semibold">{current.name}</p>

      <div className="testimonial-dots">
        {PLACEHOLDERS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
