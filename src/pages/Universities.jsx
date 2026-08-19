import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import UniversityProfile from '../components/UniversityProfile';
import CTASection from '../components/CTASection';
import { universities, universityDisclaimer, universitySourceNote } from '../data/universities';
import useScrollReveal from '../hooks/useScrollReveal';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Universities', item: `${SITE_URL}/universities` },
      ],
    },
    {
      '@type': 'ItemList',
      itemListElement: universities.map((u, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CollegeOrUniversity',
          name: u.name,
          url: u.website,
          address: { '@type': 'PostalAddress', addressLocality: u.city, addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
        },
      })),
    },
  ],
};

export default function Universities() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Distance education Universities | Vijayam Institute Nagercoil"
        description="Meet the universities associated with Vijayam Institute — Bharathidasan University, Manonmaniam Sundaranar University and Alagappa University — for UG, PG, MBA, MCA and Diploma admission guidance."
        path="/universities"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Universities</span>
          <h1>Our Associated Universities</h1>
          <p>{universityDisclaimer}</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Universities' }]} />

      <section className="section">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Where You Can Study"
            title="Meet Our Associated Universities"
            subtitle="Established, UGC-recognized state universities in Tamil Nadu, each offering programmes across different categories and learning modes."
          />

          <div className="d-flex flex-column gap-4 gap-lg-5">
            {universities.map((u, i) => (
              <UniversityProfile
                key={u.id}
                university={u}
                reversed={i % 2 === 1}
                delay={(i % 5) + 1}
              />
            ))}
          </div>

          <div className="university-source-note mt-4 mt-lg-5 reveal">
            <i className="bi bi-info-circle-fill" aria-hidden="true"></i>
            <span>{universitySourceNote}</span>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-vi">
          <CTASection />
        </div>
      </section>
    </>
  );
}