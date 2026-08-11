export default function StatCard({ icon, label, delay = 0 }) {
  return (
    <div className={`vi-card stat-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <span className="vi-icon-wrap" aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </span>
      <p>{label}</p>
    </div>
  );
}
