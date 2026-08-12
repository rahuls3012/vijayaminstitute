import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';
import useScrollReveal from '../hooks/useScrollReveal';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'Vijayam Institute',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vadasery',
        addressLocality: 'Nagercoil',
        addressRegion: 'Tamil Nadu',
        postalCode: '629003',
        addressCountry: 'IN',
      },
      telephone: ['+919443173657', '+918903702523'],
      url: `${SITE_URL}/contact`,
    },
  ],
};

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Contact Vijayam Institute | Vadasery, Nagercoil"
        description="Contact Vijayam Institute for admission guidance — phone, WhatsApp, address and an online enquiry form. Vadasery, Nagercoil, Kanyakumari District."
        path="/contact"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Get In Touch</span>
          <h1>Contact Vijayam Institute</h1>
          <p>Have a question about programmes or admission? Reach out — we're happy to help.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <section className="section">
        <div className="container-vi">
          <div className="row g-4">
             <div className="col-12 col-lg-8">
              <SectionTitle
                eyebrow="Send an Enquiry"
                title="Request Admission Guidance"
                subtitle="Fill in the form and our team will get back to you with programme and eligibility guidance."
              />
              <ContactForm />
            </div>

            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-3">
                <div className="vi-card p-4 reveal">
                  <span className="vi-icon-wrap mb-3" aria-hidden="true">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <h3 className="h6 mb-2">Office Address</h3>
                  <p className="text-muted-vi mb-0">
                    Vijayam Institute
                    <br />
                    Vadasery, Nagercoil &ndash; 629 003
                    <br />
                    Kanyakumari District, Tamil Nadu
                  </p>
                </div>

                <div className="vi-card p-4 reveal reveal-delay-1">
                  <span className="vi-icon-wrap mb-3" aria-hidden="true">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <h3 className="h6 mb-2">Phone</h3>
                  <a href="tel:+919443173657" className="d-block">94431 73657</a>
                  <a href="tel:+918903702523" className="d-block">89037 02523</a>
                </div>

                <div className="vi-card p-4 reveal reveal-delay-2">
                  <span className="vi-icon-wrap mb-3" aria-hidden="true">
                    <i className="bi bi-whatsapp"></i>
                  </span>
                  <h3 className="h6 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/919443173657?text=Hi%2C%20I%27d%20like%20admission%20guidance%20from%20Vijayam%20Institute."
target="_blank" rel="noopener noreferrer">
                    Chat with our admission team
                  </a>
                </div>

                <div className="vi-card p-4 reveal reveal-delay-3">
                  <span className="vi-icon-wrap mb-3" aria-hidden="true">
                    <i className="bi bi-clock-fill"></i>
                  </span>
                  <h3 className="h6 mb-2">Office Hours</h3>
                  <p className="text-muted-vi mb-0">Monday &ndash; Saturday, during business hours</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Find Us" title="Visit Our Office" />
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
