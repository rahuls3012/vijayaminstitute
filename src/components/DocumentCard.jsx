export default function DocumentCard({ icon, label, delay = 0 }) {
  return (
    <div className={`vi-card doc-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <span className="vi-icon-wrap" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <span className="label">{label}</span>
    </div>
  );
}
