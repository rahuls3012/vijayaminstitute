import { Link } from 'react-router-dom';

/**
 * Elaborate, image-led profile block for a single university — used only
 * on the Universities page. Mobile-first: base styles stack the image
 * above full details; on large screens the two sit side by side, with
 * `reversed` alternating which side the image sits on.
 */
export default function UniversityProfile({ university, reversed = false, delay = 0 }) {
  return (
    <article
      id={university.id}
      className={`university-profile reveal ${reversed ? 'is-reversed' : ''} ${delay ? `reveal-delay-${delay}` : ''}`}
    >
      <div className="university-profile-media">
        <img
          src={university.coverImage}
          alt=""
          role="presentation"
          loading="lazy"
          width="1200"
          height="900"
        />
        <span className="university-profile-logo" aria-hidden="true">{university.logoInitials}</span>
        <span className="university-profile-media-tag">Representative image</span>
        <span className="university-profile-rank">
          <i className="bi bi-patch-check-fill" aria-hidden="true"></i> {university.naac}
        </span>
      </div>

      <div className="university-profile-body">
        <span className="university-profile-eyebrow">{university.type}</span>
        <h3>{university.name}</h3>
        <span className="loc">
          <i className="bi bi-geo-alt" aria-hidden="true"></i> {university.location}
        </span>

        <div className="university-profile-stats">
          <div className="university-profile-stat">
            <span className="stat-value">{university.established}</span>
            <span className="stat-label">Established</span>
          </div>
          <div className="university-profile-stat">
            <span className="stat-value">{university.recognition}</span>
            <span className="stat-label">Recognition</span>
          </div>
          <div className="university-profile-stat university-profile-stat--accent">
            <span className="stat-value">{university.naac}</span>
            <span className="stat-label">Accreditation</span>
          </div>
          <div className="university-profile-stat">
            <span className="stat-value">{university.city}</span>
            <span className="stat-label">Location</span>
          </div>
        </div>

        <p className="text-muted-vi mb-3" style={{ fontSize: '0.94rem' }}>{university.about}</p>

        <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
          {university.highlights.map((h) => (
            <li key={h} className="d-flex align-items-start gap-2">
              <i className="bi bi-check-circle-fill" style={{ color: 'var(--vi-teal-600)', marginTop: '0.2rem' }} aria-hidden="true"></i>
              <span style={{ fontSize: '0.92rem', color: 'var(--vi-ink)' }}>{h}</span>
            </li>
          ))}
        </ul>

        <p className="university-profile-section-label">Programme categories via Vijayam Institute</p>
        <div className="university-profile-programmes">
          {university.programmes.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <p className="university-profile-modes">Learning modes: {university.modes.join(', ')}</p>

        <div className="university-profile-actions">
          <Link to="/admission" className="btn-vi-primary">
            Check Eligibility <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
          </Link>
          <Link to={`/courses`} className="btn-vi-ghost">
            View Programmes
          </Link>
          <a href={university.website} target="_blank" rel="noopener noreferrer" className="university-profile-website">
            Official Website <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
}