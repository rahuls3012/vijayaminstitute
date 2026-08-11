import { Link } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';

const FEATURES = [
  { icon: 'bi-wifi', title: 'Study From Anywhere', description: 'Access classes and material online without relocating for study.' },
  { icon: 'bi-calendar2-week', title: 'Flexible Scheduling', description: 'Fit coursework around work, family and other commitments.' },
  { icon: 'bi-camera-video', title: 'Digital Learning Material', description: 'Recorded and live sessions depending on the university\u2019s format.' },
  { icon: 'bi-person-check', title: 'Guided Enrolment', description: 'Our team helps you choose an online programme suited to your background.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Online & ODL', item: `${SITE_URL}/online-learning` },
  ],
};

export default function OnlineLearning() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Online Learning & ODL Programmes | Vijayam Institute"
        description="Explore Online Learning and Open & Distance Learning (ODL) programmes available through Vijayam Institute's associated universities."
        path="/online-learning"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Flexible Learning</span>
          <h1>Online &amp; Open Distance Learning</h1>
          <p>Continue your education on a schedule that works for you, wherever you are.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Online & ODL' }]} />

      <section className="section" id="online">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Online Learning"
            title="Learn From Anywhere"
            subtitle="Selected UG, PG, MBA and MCA programmes are available in Online mode through our associated universities, depending on the course."
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

      <section className="section" style={{ background: '#fff' }} id="odl">
        <div className="container-vi">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 reveal">
              <span className="eyebrow">Open &amp; Distance Learning</span>
              <h2 className="mt-2 mb-3">What is ODL?</h2>
              <p className="text-muted-vi">
                Open &amp; Distance Learning (ODL) allows you to study without attending regular
                classroom sessions. Learners typically receive study material, periodic contact
                classes and assessments as defined by the offering university &mdash; making it
                well suited to working professionals and learners managing other commitments.
              </p>
              <p className="text-muted-vi mb-4">
                ODL programmes are offered through our associated universities in categories
                including UG, PG and Diploma. Exact availability depends on the university and
                current regulatory approvals.
              </p>
              <Link to="/admission" className="btn-vi-primary">
                Check Eligibility <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-12 col-lg-6 reveal reveal-delay-2">
              <div className="vi-card p-0 overflow-hidden" style={{ borderRadius: 'var(--vi-radius-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
                  alt="Learner studying with course material at home"
                  loading="lazy"
                  width="900"
                  height="700"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: 420 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-vi">
          <div className="vi-card p-4 p-lg-5 reveal">
            <span className="eyebrow">Please Note</span>
            <p className="text-muted-vi mt-2 mb-0">
              Online and ODL programme availability, recognition and regulatory approval status
              are determined by each university and applicable authorities, and can change. Please
              confirm current details with our admission guidance team before applying.
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
