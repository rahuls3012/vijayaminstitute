import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Vijayam Institute" description="The page you're looking for could not be found." path="/404" noindex />
      <section className="section" style={{ paddingTop: '9rem', minHeight: '60vh' }}>
        <div className="container-vi text-center">
          <span className="eyebrow d-inline-flex">404</span>
          <h1 className="mt-2 mb-3">We Couldn&apos;t Find That Page</h1>
          <p className="text-muted-vi mb-4">
            The page you're looking for may have moved. Try one of the links below.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Link to="/" className="btn-vi-primary">Go to Homepage</Link>
            <Link to="/courses" className="btn-vi-ghost">Browse Courses</Link>
            <Link to="/contact" className="btn-vi-ghost">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
