import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <div className="cta-band reveal">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-7">
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>Ready To Start Your Next Step?</h2>
          <p className="mb-0">
            Talk to our admission guidance team and find the right programme for you.
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
            <a href="tel:+919443173657" className="btn-vi-primary">
              <i className="bi bi-telephone-fill" aria-hidden="true"></i> Call Now
            </a>
            <a href="https://wa.me/919443173657" target="_blank" rel="noopener noreferrer" className="btn-vi-secondary">
              <i className="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <Link to="/admission" className="btn-vi-secondary">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
