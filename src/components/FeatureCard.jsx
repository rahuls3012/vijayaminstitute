export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div className={`vi-card feature-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <span className="vi-icon-wrap" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
