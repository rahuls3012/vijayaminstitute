import SEO, { SITE_URL } from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionTitle from '../components/SectionTitle';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { faqs } from '../data/faqs';
import useScrollReveal from '../hooks/useScrollReveal';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export default function FAQPage() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="FAQ | Vijayam Institute Nagercoil"
        description="Answers to common questions about programmes, online and ODL learning, documents, eligibility and admission at Vijayam Institute, Nagercoil."
        path="/faq"
        jsonLd={jsonLd}
      />

      <header className="vi-page-header">
        <div className="container-vi">
          <span className="eyebrow" style={{ color: 'var(--vi-gold-400)' }}>Support</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before starting your admission journey.</p>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <section className="section">
        <div className="container-vi">
          <SectionTitle
            eyebrow="Common Questions"
            title="Have a Question? We Have Answers"
            align="center"
          />
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <FAQ items={faqs} idPrefix="faq-page" />
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
