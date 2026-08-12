import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="vi-footer">
      <div className="container-vi">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <div className="vi-footer-brand">
              <span className="vi-brand-mark" aria-hidden="true">VI</span>
              Vijayam Institute
            </div>
            <p style={{ maxWidth: '34ch' }}>
              Admission guidance for UG, PG, MBA, MCA, Diploma, Online Learning and Open &amp;
              Distance Learning programmes through recognized universities.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/universities">Universities</Link>
            <Link to="/admission">Admission</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h4>Programmes</h4>
            <Link to="/courses?category=UG">UG</Link>
            <Link to="/courses?category=PG">PG</Link>
            <Link to="/courses?category=MBA">MBA</Link>
            <Link to="/courses?category=MCA">MCA</Link>
            <Link to="/online-learning">Online</Link>
            <Link to="/odl">ODL</Link>
          </div>

          <div className="col-12 col-lg-4">
            <h4>Contact</h4>
            <a href="tel:+919443173657">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>94431 73657
            </a>
            <a href="tel:+918903702523">
              <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>89037 02523
            </a>
            <a href="https://wa.me/919443173657?text=Hi%2C%20I%27d%20like%20admission%20guidance%20from%20Vijayam%20Institute."
 target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>Chat on WhatsApp
            </a>
            <p className="mt-2 mb-0" style={{ color: 'rgba(231,237,245,0.78)' }}>
              <i className="bi bi-geo-alt-fill me-2" aria-hidden="true"></i>
              Vadasery, Nagercoil – 629 003, Kanyakumari District, Tamil Nadu
            </p>
          </div>
        </div>

        <div className="vi-footer-bottom">
          <span>&copy; {year} Vijayam Institute. All Rights Reserved.</span>
          <span>Vadasery, Nagercoil &middot; Kanyakumari District &middot; Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
