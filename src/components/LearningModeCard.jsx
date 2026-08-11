export default function LearningModeCard({ icon, title, description, accent = 'gold', delay = 0 }) {
  const iconStyle =
    accent === 'teal'
      ? { background: 'var(--vi-teal-100)', color: 'var(--vi-teal-700)' }
      : { background: 'var(--vi-gold-100)', color: 'var(--vi-gold-700)' };

  return (
    <div className={`vi-card mode-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <span className="vi-icon-wrap" style={{ ...iconStyle, width: 60, height: 60, fontSize: '1.7rem' }} aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
