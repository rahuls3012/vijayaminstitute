import { Link } from 'react-router-dom';

export default function UniversityCard({ university, delay = 0 }) {
  return (
    <div className={`vi-card university-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <div className="university-card-head">
        <span className="university-logo" aria-hidden="true">{university.initials}</span>
        <div>
          <h3>{university.name}</h3>
          <span className="loc">
            <i className="bi bi-geo-alt" aria-hidden="true"></i> {university.location}
          </span>
        </div>
      </div>

      <div className="university-programmes">
        {university.programmes.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>

      <p className="text-muted-vi mb-0" style={{ fontSize: '0.85rem' }}>
        Modes: {university.modes.join(', ')}
      </p>

      <Link to={`/universities#${university.id}`} className="btn-vi-ghost align-self-start mt-auto">
        View Programmes <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
