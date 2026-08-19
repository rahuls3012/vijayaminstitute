import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import CourseCard from '../components/CourseCard';
import CourseFilter from '../components/CourseFilter';
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

const WHY_ITEMS = [
  { icon: 'bi-mortarboard', title: 'University Programme Guidance', description: 'Clear direction on UG, PG, MBA, MCA and Diploma options through our associated universities offering distance and online education.' },
  { icon: 'bi-clock-history', title: 'Flexible Distance Learning', description: 'Regular, Online and ODL (Open & Distance Learning) formats so you can study in a way that fits your life in Nagercoil.' },
  { icon: 'bi-chat-heart', title: 'Expert Admission Counselling', description: 'One-on-one guidance to help you choose a distance education programme aligned with your goals.' },
  { icon: 'bi-laptop', title: 'Online & ODL Options', description: 'Continue learning from anywhere in Kanyakumari district with flexible digital and distance formats.' },
  { icon: 'bi-graph-up-arrow', title: 'Career Focused Education', description: 'Programmes chosen to support real academic and professional progress for working professionals.' },
  { icon: 'bi-geo-alt', title: 'Local Admission Support in Nagercoil', description: 'In-person support at our Vadasery, Nagercoil centre throughout your distance education admission journey.' },
];

const DOCUMENTS = [
  { icon: 'bi-file-earmark-text', label: 'Academic Certificates' },
  { icon: 'bi-file-earmark-ruled', label: 'Mark Statements' },
  { icon: 'bi-file-earmark-check', label: 'Transfer Certificate' },
  { icon: 'bi-patch-check', label: 'Degree / Provisional Certificate' },
  { icon: 'bi-person-vcard', label: 'Government ID' },
  { icon: 'bi-camera', label: 'Passport-size Photograph' },
];

const CAREER_FEATURES = [
  { icon: 'bi-arrow-up-right-circle', title: 'Career Advancement', description: 'Build on your current role while you study through distance education.' },
  { icon: 'bi-mortarboard-fill', title: 'Higher Education', description: 'Progress from UG to PG and professional programmes via ODL.' },
  { icon: 'bi-tools', title: 'Skill Development', description: 'Strengthen practical, job-relevant capabilities.' },
  { icon: 'bi-person-workspace', title: 'Professional Growth', description: 'Learn in formats designed for working adults in Nagercoil and nearby districts.' },
];

// Enhanced structured data: LocalBusiness + EducationalOrganization signals combined
// so Google can serve this for local "distance education Nagercoil" queries
// as well as course/education-related queries.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Vijayam Institute',
  alternateName: 'Distance Education at Nagercoil',
  description:
    'Vijayam Institute in Vadasery, Nagercoil offers admission guidance for UG, PG, MBA, MCA and Diploma programmes through Regular, Online and Open & Distance Learning (ODL) modes, in association with recognized universities.',
  url: SITE_URL,
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
  sameAs: [
    // Add your verified social/profile URLs here, e.g.:
    // 'https://www.facebook.com/vijayaminstitute',
    // 'https://www.instagram.com/vijayaminstitute',
    // 'https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID',
  ],
};

// Separate FAQ schema — Google can show these directly as rich results,
// which is high-value real estate for a competitive local keyword like this.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.slice(0, 5).map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function Home() {
  const [category, setCategory] = useState('all');
  const featured = getCoursesByCategory(category).slice(0, 6);

  useScrollReveal([category]);

  return (
    <>
      <SEO
        title="Distance Education at Nagercoil | Vijayam Institute – UG, PG, MBA, MCA Admissions"
        description="Looking for distance education at Nagercoil? Vijayam Institute, Vadasery offers admission guidance for UG, PG, MBA, MCA & Diploma through Online and ODL modes with associated universities. Get expert counselling today."
        path="/"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      {/*
        NOTE on <Hero />: this component isn't in the files I have, but it almost
        certainly renders your page's <h1>. For this keyword to rank, the H1 needs
        to contain it near-verbatim once, e.g.:

          <h1>Distance Education at Nagercoil — Vijayam Institute</h1>
          <p>UG, PG, MBA, MCA & Diploma admissions through Online and ODL learning.</p>

        Only one <h1> should exist on the page. If Hero currently renders something
        generic like "Welcome to Vijayam Institute", that's the single highest-impact
        SEO fix available — more impactful than anything below.
      */}
      <Hero />

      {/* Quick trust / feature stats */}
      <section className="section-tight" aria-label="Highlights">
        <div className="container-vi">
          <div className="row g-3 g-lg-4 highlights-row">
            {[
              { icon: 'bi-mortarboard', label: 'University Programmes' },
              { icon: 'bi-shuffle', label: 'Flexible Distance Learning' },
              { icon: 'bi-people', label: 'Expert Guidance' },
              { icon: 'bi-briefcase', label: 'Career Focused' },
            ].map((s, i) => (
              <div className="col-6 col-lg-3" key={s.label}>
                <StatCard icon={s.icon} label={s.label} delay={(i % 5) + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="section" style={{ background: '#fff' }} id="programmes">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Programmes"
            title="Explore Distance & Online Education Programmes in Nagercoil"
            subtitle="Choose the right UG, PG, MBA, MCA or Diploma programme for your academic and career goals."
          />
          <div className="mb-4">
            <CourseFilter active={category} onChange={setCategory} />
          </div>
          <div className="row g-3 g-lg-4">
            {featured.map((course, i) => (
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

      {/* Universities */}
      <section className="section" id="universities">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Associated Universities"
            title="Universities Offering Distance Education Through Vijayam Institute"
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

      {/* Founder Profile */}
      <section className="founder-section">
        <div className="container-vi">
          <div className="founder-heading reveal">
            <span className="eyebrow">Meet Our Founder</span>
            <h2>Leadership Behind Distance Education at Nagercoil</h2>
            <p>
              Meet the vision behind Vijayam Institute and our commitment to
              helping students in Nagercoil make informed academic decisions.
            </p>
          </div>

          <div className="founder-card reveal">
            <div className="founder-image-wrapper">
              <img
                src="/founderimg.jpeg"
                alt="M A Perumal, Founder and University Coordinator at Vijayam Institute Nagercoil"
                className="founder-image"
                width="500"
                height="500"
              />
            </div>

            <div className="founder-content ">
              <div className="founder-info">
                <h3 className="founder-name">M A Perumal</h3>
                <span className="founder-education">M.Tech., M.B.A.,B.G.L.,L.L.B.</span>
              </div>

              <p className="founder-position">University Coordinator (DSG)</p>

              <div className="founder-divider"></div>

              <p className="founder-description">
                With a vision to make quality higher education more accessible,
                our founder established Vijayam Institute to guide students and
                working professionals in Nagercoil towards the right distance
                and online academic opportunities.
              </p>

              <p className="founder-description mb-0">
                Through personalized guidance and student-focused support, the
                institute helps learners understand their programme options,
                eligibility and admission process for distance education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vijayam Institute */}
      <section className="section" id="why-us">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Why Vijayam Institute"
            title="Why Choose Us for Distance Education at Nagercoil?"
            subtitle="Admission guidance that stays with you from choosing a programme to starting class."
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

      {/* MBA / MCA feature split */}
      <section className="section">
        <div className="container-vi">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 reveal">
              <div className="vi-card p-0 overflow-hidden" style={{ borderRadius: 'var(--vi-radius-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
                  alt="Working professionals collaborating on an MBA project through distance education"
                  loading="lazy"
                  width="900"
                  height="700"
                  style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: 420 }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 reveal reveal-delay-2">
              <span className="eyebrow">Professional Programmes</span>
              <h2 className="mt-2 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.35rem)' }}>
                Upgrade Your Career With Distance MBA & MCA at Nagercoil
              </h2>
              <div className="d-flex flex-column gap-3 mb-3">
                <div>
                  <strong style={{ color: 'var(--vi-navy-900)' }}>MBA — Master of Business Administration</strong>
                  <p className="text-muted-vi mb-0" style={{ fontSize: '0.94rem' }}>For eligible graduates aiming for leadership and strategy roles.</p>
                </div>
                <div>
                  <strong style={{ color: 'var(--vi-navy-900)' }}>MCA — Master of Computer Applications</strong>
                  <p className="text-muted-vi mb-0" style={{ fontSize: '0.94rem' }}>For eligible graduates building advanced software and IT careers.</p>
                </div>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {['Flexible learning', 'Career-oriented education', 'Professional development', 'Suitable for eligible graduates', 'Online/ODL options depending on programme'].map((f) => (
                  <li key={f} className="d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--vi-teal-600)' }} aria-hidden="true"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/admission" className="btn-vi-primary">
                Check Eligibility <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning modes */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Flexibility" title="Learn Your Way" align="center" />
          <div className="row g-3 g-lg-4">
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-laptop" title="Online Learning" description="Learn from anywhere with flexible digital learning." accent="gold" delay={1} />
            </div>
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-mailbox" title="ODL — Open & Distance Learning" description="Continue your education through Open & Distance Learning at Nagercoil." accent="teal" delay={2} />
            </div>
            <div className="col-12 col-md-4">
              <LearningModeCard icon="bi-calendar2-check" title="Flexible Education" description="Choose a learning format that fits your schedule." accent="gold" delay={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Admission process */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Getting Started" title="Simple Admission Process for Distance Education" align="center" />
          <AdmissionTimeline />
        </div>
      </section>

      {/* Eligibility checker */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Guidance Tool"
            title="Find The Right Distance Education Programme For You"
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
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Prepare Ahead" title="Documents Required for Admission" />
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

      {/* Career section */}
      <section className="section">
        <div className="container-vi">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6 reveal order-2 order-lg-1">
              <span className="eyebrow">Beyond The Classroom</span>
              <h2 className="mt-2 mb-3" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.35rem)' }}>
                Distance Education That Supports Your Career
              </h2>
              <p className="text-muted-vi mb-4">
                Upgrade your qualification while continuing your career. Explore flexible
                distance education programmes at Nagercoil designed for students, working
                professionals and learners seeking academic growth.
              </p>
              <div className="row g-3">
                {CAREER_FEATURES.map((f) => (
                  <div className="col-6" key={f.title}>
                    <div className="d-flex align-items-start gap-2">
                      <i className={`bi ${f.icon}`} style={{ color: 'var(--vi-gold-600)', fontSize: '1.3rem' }} aria-hidden="true"></i>
                      <div>
                        <strong style={{ fontSize: '0.95rem', color: 'var(--vi-navy-900)' }}>{f.title}</strong>
                        <p className="text-muted-vi mb-0" style={{ fontSize: '0.85rem' }}>{f.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6 reveal reveal-delay-2 order-1 order-lg-2">
              <div className="vi-card p-0 overflow-hidden" style={{ borderRadius: 'var(--vi-radius-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                  alt="Working professional studying for a distance education degree with a laptop"
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

      {/* Testimonials */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container-vi">
          <SectionTitle eyebrow="Learn. Grow. Succeed." title="Your Journey Starts Here" align="center" />
          <Testimonials />
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section">
        <div className="container-vi">
          <SectionTitle eyebrow="Have Questions?" title="Distance Education at Nagercoil — Frequently Asked Questions" align="center" />
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <FAQ items={faqs.slice(0, 5)} idPrefix="home-faq" />
              <div className="text-center mt-3 reveal">
                <Link to="/faq" className="btn-vi-ghost">
                  View All FAQs <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
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
