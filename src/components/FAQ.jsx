export default function FAQ({ items, idPrefix = 'faq' }) {
  return (
    <div className="accordion vi-accordion reveal" id={`${idPrefix}-accordion`}>
      {items.map((item, i) => (
        <div className="accordion-item" key={item.id}>
          <h3 className="accordion-header" id={`${idPrefix}-heading-${i}`}>
            <button
              className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-collapse-${i}`}
              aria-expanded={i === 0}
              aria-controls={`${idPrefix}-collapse-${i}`}
            >
              {item.question}
            </button>
          </h3>
          <div
            id={`${idPrefix}-collapse-${i}`}
            className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
            aria-labelledby={`${idPrefix}-heading-${i}`}
            data-bs-parent={`#${idPrefix}-accordion`}
          >
            <div className="accordion-body text-muted-vi">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
