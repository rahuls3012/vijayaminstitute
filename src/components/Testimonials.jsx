import { useEffect, useState } from 'react';

// Placeholder content — replace each entry with a real, verified student
// testimonial (with permission) before publishing.
const PLACEHOLDERS = [
  { id: 1, quote: 'Education is the key that opens the door to endless possibilities.', name: 'Keep Learning' },
{ id: 2, quote: 'Every new skill you learn today brings you one step closer to the future you dream of.', name: 'Keep Growing' },
{ id: 3, quote: 'Believe in your potential, embrace every opportunity to learn, and never stop moving forward.', name: 'Keep Moving Forward' },
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
