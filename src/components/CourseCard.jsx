import { Link } from 'react-router-dom';

const CATEGORY_ICON = {
  UG: 'bi-mortarboard',
  PG: 'bi-mortarboard-fill',
  MBA: 'bi-briefcase-fill',
  MCA: 'bi-code-slash',
  Diploma: 'bi-award',
};

export default function CourseCard({ course, delay = 0,iscoursePage=false }) {
  return (
    <div className={`vi-card course-card reveal ${delay ? `reveal-delay-${delay}` : ''}`}>
      <div className="course-card-top">
        <span className="vi-icon-wrap" aria-hidden="true">
          <i className={`bi ${CATEGORY_ICON[course.category] || 'bi-book'}`}></i>
        </span>
        <span className="category-pill">{course.category}</span>
      </div>
      <div className="course-card-body">
        <h3>{course.name}</h3>
        <p className="text-muted-vi mb-2" style={{ fontSize: '0.85rem' }}>{course.fullName}</p>
        <p className="desc">{course.description}</p>
        <div className="modes">
          {course.modes.map((mode) => (
            <span className="mode-chip" key={mode}>{mode}</span>
          ))}
        </div>
        {!iscoursePage&&<Link to={`/courses#${course.id}`} className="btn-vi-ghost mt-auto align-self-start">
          View Details <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
        </Link>}
      
      </div>
    </div>
  );
}
