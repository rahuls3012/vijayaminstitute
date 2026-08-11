import { CATEGORIES } from '../data/courses';

export default function CourseFilter({ active, onChange }) {
  return (
    <div className="filter-pills reveal" role="tablist" aria-label="Filter courses by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={active === cat.id}
          className={`filter-pill ${active === cat.id ? 'is-active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
