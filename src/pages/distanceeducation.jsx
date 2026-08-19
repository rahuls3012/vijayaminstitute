import { Link } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import CourseCard from '../components/CourseCard';
import UniversityCard from '../components/UniversityCard';
import LearningModeCard from '../components/LearningModeCard';
import AdmissionTimeline from '../components/AdmissionTimeline';
import EligibilityChecker from '../components/EligibilityChecker';
import DocumentCard from '../components/DocumentCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { getCoursesByCategory } from '../data/courses';
import { universities, universityDisclaimer } from '../data/universities';
import { faqs } from '../data/faqs';
import useScrollReveal from '../hooks/useScrollReveal';

const PAGE_PATH = '/distance-education-nagercoil';

const WHY_ITEMS = [
  { icon: 'bi-geo-alt-fill', title: 'Based Right Here in Nagercoil', description: 'Our Vadasery office means real, in-person support — not a call centre in another state.' },
  { icon: 'bi-mortarboard', title: 'Recognized University Programmes', description: 'UG, PG, MBA, MCA and Diploma options through our associated universities offering distance and online education.' },
  { icon: 'bi-chat-heart', title: 'Free Admission Counselling', description: 'One-on-one guidance to help you pick the right distance education programme, at no cost to you.' },
  { icon: 'bi-clock-history', title: 'Built for Working Professionals', description: 'Study around your job, family and other commitments through Online and ODL formats.' },
  { icon: 'bi-file-earmark-check', title: 'End-to-End Admission Support', description: 'From eligibility check to enrolment paperwork, our team handles the process with you.' },
  { icon: 'bi-people', title: 'Trusted by Students Across Kanyakumari District', description: 'Learners from Nagercoil, Vadasery, Marthandam, Colachel, Thuckalay and nearby areas study with us.' },
];

const AREAS_SERVED = [
  'Nagercoil', 'Vadasery', 'Asaripallam', 'Thuckalay', 'Marthandam',
  'Colachel', 'Kanyakumari', 'Thovalai', 'Parvathipuram', 'Kottar',
];

const DOCUMENTS = [
  { icon: 'bi-file-earmark-text', label: 'Academic Certificates' },
  { icon: 'bi-file-earmark-ruled', label: 'Mark Statements' },
  { icon: 'bi-file-earmark-check', label: 'Transfer Certificate' },
  { icon: 'bi-patch-check', label: 'Degree / Provisional Certificate' },
  { icon: 'bi-person-vcard', label: 'Government ID' },
  { icon: 'bi-camera', label: 'Passport-size Photograph' },
];

// ---- Structured data --------------------------------------------------
// This page is the primary keyword target, so it carries the richest
// combined LocalBusiness + EducationalOrganization + FAQPage signals on
// the whole site. All merged into one script tag via @graph.

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Distance Education in Nagercoil', item: `${SITE_URL}${PAGE_PATH}` },
  ],
};

const orgSchema = {
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'Vijayam Institute',
  alternateName: 'Distance Education at Nagercoil',
  description:
    'Vijayam Institute is the leading centre for distance education at Nagercoil, offering admission guidance for UG, PG, MBA, MCA and Diploma programmes through Online and Open & Distance Learning (ODL) modes, in association with recognized universities.',
  url: `${SITE_URL}${PAGE_PATH}`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/founderimg.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vadasery',
    addressLocality: 'Nagercoil',
    addressRegion: 'Tamil Nadu',
    postalCode: '629003',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.1833,
    longitude: 77.4119,
  },
  areaServed: [
    { '@type': 'City', name: 'Nagercoil' },
    { '@type': 'AdministrativeArea', name: 'Kanyakumari District' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  telephone: ['+919443173657', '+918903702523'],
  priceRange: '₹₹',
  founder: {
    '@type': 'Person',
    name: 'M A Perumal',
    jobTitle: 'University Coordinator (DSG)',
  },
};

const webPageSchema = {
  '@type': 'WebPage',
  name: 'Distance Education in Nagercoil',
  description:
    'Distance education at Nagercoil through Vijayam Institute — UG, PG, MBA, MCA and Diploma admissions via Online and ODL modes with recognized universities.',
  url: `${SITE_URL}${PAGE_PATH}`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Vijayam Institute',
    url: SITE_URL,
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.slice(0, 6).map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

const combinedJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbSchema, orgSchema, webPageSchema, faqSchema],
};

export default function DistanceEducationNagercoil() {
  useScrollReveal();
  const popularCourses = getCoursesByCategory('all').slice(0, 6);

  return (
    <>
      <SEO
        title="Distance Education in Nagercoil | Vijayam Institute — Admissions Open 2026–27"
        description="Distance education at Nagercoil, done right. Vijayam Institute, Vadasery offers UG, PG, MBA, MCA & Diploma admissions through Online and ODL modes with recognized universities. Free eligibility check — enquire today."
        path={PAGE_PATH}
        jsonLd={combinedJsonLd}
      />

      {/* Page header / hero — deliberately keyword-dense but natural, since
          this page exists specifically to rank + convert for the phrase
          "distance education at Nagercoil" and close variants. */}
      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>
            Admissions Open 2026&ndash;27
          </span>
          <h1>Distance Education in Nagercoil</h1>
          <p style={{ maxWidth: 640 }}>
            Vijayam Institute is Nagercoil&rsquo;s local centre for distance education —
            helping students and working professionals in Vadasery, Kanyakumari District
            enrol in UG, PG, MBA, MCA and Diploma programmes through Online and Open &amp;
            Distance Learning (ODL), with recognized universities.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/admission" className="btn-vi-primary">
              Check Your Eligibility <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
            <a
              href="https://wa.me/919443173657?text=Hi%2C%20I%27d%20like%20guidance%20on%20distance%20education%20at%20Nagercoil."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vi-ghost"
            >
              <i className="bi bi-whatsapp me-1" aria-hidden="true"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Distance Education in Nagercoil' }]} />

      {/* Trust stats */}
      <section className="section-tight" aria-label="Highlights">
        <div className="container-vi">
          <div className="row g-3 g-lg-4 highlights-row">
            {[
              { icon: 'bi-geo-alt', label: 'Local Nagercoil Office' },
              { icon: 'bi-mortarboard', label: 'Recognized Universities' },
              { icon: 'bi-people', label: 'Free Counselling' },
              { icon: 'bi-clock-history', label: 'Online & ODL Modes' },
            ].map((s, i) => (
              <div className="col-6 col-lg-3" key={s.label}>
                <StatCard icon={s.icon} label={s.label} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is distance education — intent-matching explainer, important
          for both search relevance and for actually informing the reader. */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 reveal">
              <span className="eyebrow">Understanding Your Options</span>
              <h2 className="mt-2 mb-3">What Does Distance Education in Nagercoil Look Like?</h2>
              <p className="text-muted-vi">
                Distance education lets you earn a recognized degree without attending regular
                daily classes. Depending on the university and programme, this can mean fully
                Online learning, or Open &amp; Distance Learning (ODL) — where you receive study
                material, periodic contact classes, and university-set assessments.
              </p>
              <p className="text-muted-vi mb-4">
                For students and working professionals across Nagercoil and Kanyakumari
                District, this means you can pursue a UG, PG, MBA, MCA or Diploma programme
                without relocating or pausing your job.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/online-learning" className="btn-vi-ghost">
                  Learn About Online Learning
                </Link>
                <Link to="/odl" className="btn-vi-ghost">
                  Learn About ODL
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 reveal reveal-delay-2">
              <div className="vi-card p-0 overflow-hidden" style={{ borderRadius: 'var(--vi-radius-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
                  alt="Student in Nagercoil studying distance education material at home"
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

      {/* Why us */}
      <section className="section" id="why-us">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Why Vijayam Institute"
            title="Why Students Choose Us for Distance Education at Nagercoil"
            subtitle="Local support, recognized universities, and guidance that continues after you enrol."
          />
          <div className="row g-3 g-lg-4">
            {WHY_ITEMS.map((item, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={item.title}>
                <FeatureCard {...item} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular programmes */}
      <section className="section" style={{ background: '#fff' }} id="programmes">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Programmes"
            title="Popular Distance Education Programmes"
            subtitle="A sample of what's available — browse the full list or talk to our team for a personal recommendation."
          />
          <div className="row g-3 g-lg-4">
            {popularCourses.map((course, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={course.id}>
                <CourseCard course={course} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4 reveal">
            <Link to="/courses" className="btn-vi-ghost">
              View All Programmes <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning modes */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Flexibility" title="Choose the Mode That Fits Your Life" align="center" />
          <div className="row g-3 g-lg-4">
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-laptop" title="Online Learning" description="Learn from anywhere with flexible digital learning." accent="gold" delay={1} />
            </div>
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-mailbox" title="ODL — Open & Distance Learning" description="Structured distance education with periodic contact classes at Nagercoil." accent="teal" delay={2} />
            </div>
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-calendar2-check" title="Flexible Education" description="Choose a learning format that fits your schedule." accent="gold" delay={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section" style={{ background: '#fff' }} id="universities">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Associated Universities"
            title="Recognized Universities Behind Our Distance Education Programmes"
            subtitle={universityDisclaimer}
          />
          <div className="row g-3 g-lg-4">
            {universities.map((u, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={u.id}>
                <UniversityCard university={u} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission process */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Getting Started" title="How to Apply for Distance Education at Nagercoil" align="center" />
          <AdmissionTimeline />
        </div>
      </section>

      {/* Eligibility checker */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle
            eyebrow="Guidance Tool"
            title="Not Sure Which Programme Fits You?"
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

      {/* Documents */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Prepare Ahead" title="Documents You'll Need" />
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

      {/* Local area coverage — hyperlocal SEO signal + genuinely useful for
          a visitor confirming we serve their part of the district. */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle
            eyebrow="Local Reach"
            title="Serving Students Across Kanyakumari District"
            subtitle="Our Vadasery, Nagercoil office supports learners from across the district."
            align="center"
          />
          <div className="d-flex flex-wrap justify-content-center gap-2 reveal">
            {AREAS_SERVED.map((area) => (
              <span
                key={area}
                className="vi-card px-3 py-2"
                style={{ borderRadius: '999px', fontSize: '0.9rem', fontWeight: 600 }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Learn. Grow. Succeed." title="Students Who Chose Distance Education at Nagercoil" align="center" />
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Have Questions?" title="Distance Education at Nagercoil — FAQs" align="center" />
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <FAQ items={faqs.slice(0, 6)} idPrefix="den-faq" />
              <div className="text-center mt-3 reveal">
                <Link to="/faq" className="btn-vi-ghost">
                  View All FAQs <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section">
        <div className="container-vi">
          <div className="vi-card p-4 p-lg-5 reveal">
            <span className="eyebrow">Please Note</span>
            <p className="text-muted-vi mt-2 mb-0">
              Eligibility, fees, recognition and admission requirements are set by each
              university and are subject to applicable regulations. Our team will confirm
              current details for your chosen programme.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container-vi">
          <CTASection />
        </div>
      </section>
    </>
  );
}