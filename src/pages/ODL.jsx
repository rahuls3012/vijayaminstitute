import { Link } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';

const FEATURES = [
  { icon: 'bi-mailbox2', title: 'Study Material Provided', description: 'Structured material issued by the offering university.' },
  { icon: 'bi-people', title: 'Periodic Contact Classes', description: 'Occasional in-person or online sessions, as defined by the university.' },
  { icon: 'bi-clipboard-check', title: 'University-Set Assessments', description: 'Examinations and evaluation follow the university\u2019s ODL structure.' },
  { icon: 'bi-briefcase', title: 'Built for Working Learners', description: 'A format designed for professionals continuing their education.' },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'ODL', item: `${SITE_URL}/odl` },
  ],
};

const webPageSchema = {
  '@type': 'WebPage',
  name: 'ODL — Distance Education at Nagercoil',
  description:
    'How Open & Distance Learning (ODL) works, and ODL programmes available through Vijayam Institute\u2019s associated universities at Nagercoil.',
  url: `${SITE_URL}/odl`,
};

const combinedJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbSchema, webPageSchema],
};

export default function ODL() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="ODL Programmes | Distance Education at Nagercoil — Vijayam Institute"
        description="Learn how Open & Distance Learning (ODL) works and explore ODL-based distance education at Nagercoil through Vijayam Institute's associated universities."
        path="/odl"
        jsonLd={combinedJsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>ODL</span>
          <h1>ODL — Distance Education at Nagercoil</h1>
          <p>Continue your education through Open &amp; Distance Learning, at your own pace.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Online & ODL', to: '/online-learning' }, { label: 'ODL' }]} />

      <section className="section">
        <div className="container-vi">
          <SectionTitle
            eyebrow="How ODL Works"
            title="A Learning Format Built for Flexibility"
            subtitle="ODL programmes are offered through our associated universities and structured to suit learners who cannot attend regular classes."
          />
          <div className="row g-3 g-lg-4">
            {FEATURES.map((f, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={f.title}>
                <FeatureCard {...f} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <div className="vi-card p-4 p-lg-5 reveal text-center mx-auto" style={{ maxWidth: 720 }}>
            <span className="eyebrow d-inline-flex">Ready to Explore ODL?</span>
            <h2 className="mt-2 mb-3">See Which Programmes Are Offered in ODL Mode</h2>
            <p className="text-muted-vi mb-4">
              Browse programmes and filter by ODL, or speak with our admission guidance team for
              a recommendation based on your background.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/courses?category=ODL" className="btn-vi-primary">
                Browse ODL Programmes
              </Link>
              <Link to="/contact" className="btn-vi-ghost">
                Talk to Our Team
              </Link>
            </div>
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