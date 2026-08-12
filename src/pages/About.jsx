import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import useScrollReveal from '../hooks/useScrollReveal';

const VALUES = [
  { icon: 'bi-compass', title: 'Clear Guidance', description: 'We help you understand your options before you commit to a programme.' },
  { icon: 'bi-shield-check', title: 'Honest Information', description: 'We share what is verified and confirmed — not unsupported claims.' },
  { icon: 'bi-people', title: 'Student-First Support', description: 'Every learner receives individual attention through the admission process.' },
  { icon: 'bi-arrow-repeat', title: 'Continued Support', description: 'Our team stays reachable throughout your programme, not just at admission.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
  ],
};

export default function About() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="About Vijayam Institute | Nagercoil Admission Guidance"
        description="Learn about Vijayam Institute, an admission guidance centre in Vadasery, Nagercoil, supporting UG, PG, MBA, MCA, Diploma, Online and ODL learners."
        path="/about"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>About Us</span>
          <h1>Guiding Students Toward the Right Programme</h1>
          <p>
            Vijayam Institute is an education and admission guidance centre based in Vadasery,
            Nagercoil, supporting learners through UG, PG, MBA, MCA, Diploma, Online Learning
            and Open &amp; Distance Learning programmes offered through associated universities.
          </p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

 {/* Founder Profile */}
<section className="founder-section">
  <div className="container-vi">

    {/* Section Heading */}
    <div className="founder-heading reveal">
      <span className="eyebrow">Meet Our Founder</span>

      <h2>Leadership Behind Vijayam Institute</h2>

      <p>
        Meet the vision behind Vijayam Institute and our commitment to
        helping students make informed academic decisions.
      </p>
    </div>

    {/* Founder Card */}
    <div className="founder-card reveal">

      {/* Image - Left */}
      <div className="founder-image-wrapper">
        <img
          src="/founderimg.jpeg"
          alt="Founder of Vijayam Institute"
          className="founder-image"
          width="500"
          height="500"
        />
      </div>

      {/* Details - Right */}
      <div className="founder-content">

        <h3 className="founder-name">
          M A perumal
        </h3>

        <p className="founder-position">
         University Coordinator
        </p>

        <div className="founder-divider"></div>

        <p className="founder-description">
          With a vision to make quality higher education more accessible,
          our founder established Vijayam Institute to guide students and
          working professionals towards the right academic opportunities.
        </p>

        <p className="founder-description mb-0">
          Through personalized guidance and student-focused support, the
          institute helps learners understand their programme options,
          eligibility and admission process.
        </p>

      </div>

    </div>

  </div>
</section>

      <section className="section">
        <div className="container-vi">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 reveal">
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-2 mb-3">A Local Team Focused on Your Academic Journey</h2>
              <p className="text-muted-vi">
                We work with learners across Kanyakumari District — students moving from school to
                undergraduate study, graduates exploring postgraduate and professional programmes,
                and working professionals looking to continue their education through flexible
                formats.
              </p>
              <p className="text-muted-vi mb-0">
                Our role is to make the admission journey clear: understanding programme options,
                learning modes, eligibility and documentation, and connecting you with the right
                university for your goals.
              </p>
            </div>
            <div className="col-12 col-lg-6 reveal reveal-delay-2">
              <div className="vi-card p-0 overflow-hidden" style={{ borderRadius: 'var(--vi-radius-lg)' }}>
                <img
                  src="https://media.istockphoto.com/id/1461630610/photo/group-of-happy-students-checking-results-on-laptop-while-sitting-on-college-campus-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=NH10qLuxG702jHp8-GAKYxxlNHSfnnCesqib6Si2JGs= "
                  alt="Students discussing coursework in a study space"
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

      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="What Guides Us" title="Our Approach" align="center" />
          <div className="row g-3 g-lg-4">
            {VALUES.map((v, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={v.title}>
                <FeatureCard {...v} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-vi">
          <div className="vi-card p-4 p-lg-5 reveal">
            <span className="eyebrow">Please Note</span>
            <p className="text-muted-vi mt-2 mb-0">
              Programme availability, eligibility, recognition and affiliation details are set by
              each university and applicable regulatory bodies, and may change over time. We share
              information as accurately as possible and recommend confirming current details with
              our admission guidance team and the relevant university before you apply.
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
