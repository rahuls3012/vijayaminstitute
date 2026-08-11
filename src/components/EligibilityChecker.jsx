import { useState } from 'react';
import { Link } from 'react-router-dom';

const QUALIFICATIONS = ['12th', 'Diploma', "Bachelor's Degree", 'B.E / B.Tech', 'BCA', 'B.Sc', 'B.Com', 'Other'];
const INTERESTS = ['Management', 'Computer Science', 'Commerce', 'Arts', 'Science', 'Other'];
const MODES = ['Online', 'ODL', 'Need Guidance'];

function recommend(qualification, interest) {
  const isPG = ['Bachelor\'s Degree', 'B.E / B.Tech', 'BCA', 'B.Sc', 'B.Com'].includes(qualification);

  if (interest === 'Management') {
    return isPG ? 'MBA' : 'B.B.A.';
  }
  if (interest === 'Computer Science') {
    return isPG ? 'MCA' : 'B.C.A.';
  }
  if (interest === 'Commerce') {
    return isPG ? 'M.Com.' : 'B.Com.';
  }
  if (interest === 'Arts') {
    return isPG ? 'M.A.' : 'B.A.';
  }
  if (interest === 'Science') {
    return isPG ? 'M.Sc.' : 'B.Sc.';
  }
  return 'a suitable UG/PG programme';
}

export default function EligibilityChecker() {
  const [qualification, setQualification] = useState('');
  const [interest, setInterest] = useState('');
  const [mode, setMode] = useState('');
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!qualification || !interest || !mode) {
      setResult({ error: true });
      return;
    }
    setResult({ error: false, suggestion: recommend(qualification, interest) });
  }

  return (
    <div className="vi-card p-4 p-lg-5 reveal">
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <label htmlFor="qualification" className="form-label fw-semibold">Qualification</label>
            <select
              id="qualification"
              className="form-select"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            >
              <option value="">Select qualification</option>
              {QUALIFICATIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label htmlFor="interest" className="form-label fw-semibold">Area of Interest</label>
            <select
              id="interest"
              className="form-select"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            >
              <option value="">Select interest</option>
              {INTERESTS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label htmlFor="mode" className="form-label fw-semibold">Preferred Learning Mode</label>
            <select
              id="mode"
              className="form-select"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
            >
              <option value="">Select mode</option>
              {MODES.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="btn-vi-primary mt-4">
          Find My Programme <i className="bi bi-search ms-1" aria-hidden="true"></i>
        </button>
      </form>

      {result && result.error && (
        <div className="alert alert-warning mt-4 mb-0" role="alert">
          Please select an option for each field so we can suggest a programme.
        </div>
      )}

      {result && !result.error && (
        <div className="mt-4 p-3 p-lg-4 rounded-3" style={{ background: 'var(--vi-navy-100)' }}>
          <p className="mb-1 fw-semibold" style={{ color: 'var(--vi-navy-900)' }}>
            Based on your answers, you may consider: <span style={{ color: 'var(--vi-gold-700)' }}>{result.suggestion}</span>
          </p>
          <p className="text-muted-vi mb-3" style={{ fontSize: '0.9rem' }}>
            Final eligibility depends on the university and programme requirements.
          </p>
          <Link to="/contact" className="btn-vi-ghost">
            Talk to Our Admission Team
          </Link>
        </div>
      )}
    </div>
  );
}
