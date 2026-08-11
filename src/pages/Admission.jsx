import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import AdmissionTimeline from '../components/AdmissionTimeline';
import EligibilityChecker from '../components/EligibilityChecker';
import DocumentCard from '../components/DocumentCard';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';

const DOCUMENTS = [
  { icon: 'bi-file-earmark-text', label: 'Academic Certificates' },
  { icon: 'bi-file-earmark-ruled', label: 'Mark Statements' },
  { icon: 'bi-file-earmark-check', label: 'Transfer Certificate' },
  { icon: 'bi-patch-check', label: 'Degree / Provisional Certificate' },
  { icon: 'bi-person-vcard', label: 'Government ID' },
  { icon: 'bi-camera', label: 'Passport-size Photograph' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Admission', item: `${SITE_URL}/admission` },
  ],
};

export default function Admission() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Admissions 2026\u201327 | Vijayam Institute Nagercoil"
        description="Start your admission journey with Vijayam Institute — simple steps, required documents and an eligibility checker for UG, PG, MBA, MCA, Online and ODL programmes."
        path="/admission"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Admissions Open 2026&ndash;27</span>
          <h1>Start Your Admission Journey</h1>
          <p>A simple, guided path from choosing your programme to starting class.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Admission' }]} />

      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Getting Started" title="Simple Admission Process" align="center" />
          <AdmissionTimeline />
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle
            eyebrow="Guidance Tool"
            title="Find The Right Programme For You"
            subtitle="Answer three quick questions for a starting recommendation."
            align="center"
          />
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <EligibilityChecker />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Prepare Ahead" title="Documents Required" />
          <div className="row g-3">
            {DOCUMENTS.map((d, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={d.label}>
                <DocumentCard {...d} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
          <p className="text-muted-vi mt-3 mb-0 reveal" style={{ fontSize: '0.9rem' }}>
            Required documents may vary depending on the selected programme and university.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <div className="vi-card p-4 p-lg-5 reveal">
            <span className="eyebrow">Please Note</span>
            <p className="text-muted-vi mt-2 mb-0">
              Eligibility, fees, recognition and admission requirements are set by each university
              and are subject to university/programme eligibility and applicable regulations. Our
              team will confirm current details for your chosen programme.
            </p>
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
