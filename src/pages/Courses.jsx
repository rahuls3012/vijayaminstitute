import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import CourseFilter from '../components/CourseFilter';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import { getCoursesByCategory } from '../data/courses';
import useScrollReveal from '../hooks/useScrollReveal';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Courses', item: `${SITE_URL}/courses` },
  ],
};

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);

  useScrollReveal([category]);

  useEffect(() => {
    const param = searchParams.get('category');
    if (param && param !== category) setCategory(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(id) {
    setCategory(id);
    if (id === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', id);
    }
    setSearchParams(searchParams, { replace: true });
  }

  const filtered = getCoursesByCategory(category);

  return (
    <>
      <SEO
        title="UG & PG Courses in Nagercoil | Vijayam Institute"
        description="Browse UG, PG, MBA, MCA, Diploma, Online and ODL programmes available through Vijayam Institute's associated universities in Nagercoil."
        path="/courses"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Programmes</span>
          <h1>Explore Our Programmes</h1>
          <p>Choose the right programme for your academic and career goals.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Courses' }]} />

      <section className="section">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Filter Programmes"
            title="Find a Programme by Category"
            subtitle="Availability of a specific programme depends on the offering university — our team can confirm details for your choice."
          />
          <div className="mb-4">
            <CourseFilter active={category} onChange={handleChange} />
          </div>
          <div className="row g-3 g-lg-4">
            {filtered.map((course, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={course.id} id={course.id}>
              <CourseCard
  course={course}
  delay={(i % 5) + 1}
  iscoursePage={true}
/>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-muted-vi reveal">No programmes found in this category yet. Please check back soon.</p>
          )}
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
