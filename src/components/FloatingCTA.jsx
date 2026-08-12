import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop floating action buttons */}
      <div className="vi-fab-stack" aria-hidden="false">
        <a
          href="https://wa.me/919443173657?text=Hi%2C%20I%27d%20like%20admission%20guidance%20from%20Vijayam%20Institute."
          target="_blank"
          rel="noopener noreferrer"
          className="vi-fab vi-fab-whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="bi bi-whatsapp" aria-hidden="true"></i>
        </a>
        <a href="tel:+919443173657" className="vi-fab vi-fab-call" aria-label="Call Vijayam Institute">
          <i className="bi bi-telephone-fill" aria-hidden="true"></i>
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="vi-sticky-cta" role="navigation" aria-label="Quick contact">
        <a href="tel:+919443173657" className="call">
          <i className="bi bi-telephone-fill" aria-hidden="true"></i>
          Call
        </a>
        <a
          href="https://wa.me/919443173657?text=Hi%2C%20I%27d%20like%20admission%20guidance%20from%20Vijayam%20Institute."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <i className="bi bi-whatsapp" aria-hidden="true"></i>
          WhatsApp
        </a>
        <Link to="/contact" className="apply">
          <i className="bi bi-pencil-square" aria-hidden="true"></i>
          Apply
        </Link>
      </div>
    </>
  );
}
