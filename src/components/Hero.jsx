import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="vi-hero">
      <svg className="vi-ribbon-path" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M -50 550 C 200 450, 300 650, 550 500 S 900 300, 1250 380"
          fill="none"
          stroke="#e3b85c"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
      </svg>

      <i className="bi bi-mortarboard-fill vi-floating vi-hero-shape" style={{ top: '18%', left: '4%', fontSize: '2.4rem' }} aria-hidden="true"></i>
      <i className="bi bi-book-half vi-floating delay-2 vi-hero-shape" style={{ top: '68%', left: '9%', fontSize: '1.9rem' }} aria-hidden="true"></i>
      <i className="bi bi-award-fill vi-floating delay-3 vi-hero-shape" style={{ top: '12%', right: '6%', fontSize: '2rem' }} aria-hidden="true"></i>

      <div className="container-vi">
        <div className="vi-hero-grid">
          <div className="reveal is-visible">
            <span className="vi-hero-badge">
              <span className="dot" aria-hidden="true"></span>
              Admissions Open 2026&ndash;27
            </span>

            <h1>
              Build Your Career With <em>Quality &amp; Flexible</em> Education
            </h1>

            <p className="lead">
              Explore UG, PG, MBA, MCA, Diploma and Online Learning programmes through recognized
              universities with expert admission guidance &mdash; right here in Nagercoil.
            </p>

            <div className="vi-hero-cta">
              <Link to="/courses" className="btn-vi-primary">
                Explore Courses <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link to="/contact" className="btn-vi-secondary">
                Apply Now
              </Link>
            </div>

            <a href="tel:+919443173657" className="vi-hero-advisor">
              <i className="bi bi-headset" aria-hidden="true"></i>
              Talk to an Advisor &mdash; 94431 73657
            </a>
          </div>

          <div className="vi-hero-visual reveal reveal-delay-2 is-visible">
            <div className="vi-hero-art">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop"
                alt="Graduates celebrating at a university campus"
                loading="eager"
                width="900"
                height="990"
              />
            </div>

            <div className="vi-hero-float-card vi-glass vi-hero-float-card--top">
              <i className="bi bi-mortarboard-fill" style={{ color: 'var(--vi-gold-400)', fontSize: '1.4rem' }} aria-hidden="true"></i>
              <div>
                <span className="num">UG &amp; PG</span>
                <small>Programme guidance</small>
              </div>
            </div>

            <div className="vi-hero-float-card vi-glass vi-hero-float-card--bottom">
              <i className="bi bi-laptop" style={{ color: 'var(--vi-gold-400)', fontSize: '1.4rem' }} aria-hidden="true"></i>
              <div>
                <span className="num">Online + ODL</span>
                <small>Flexible learning modes</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
