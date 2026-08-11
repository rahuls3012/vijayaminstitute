import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  // items: [{ label, to }] — last item has no `to` (current page)
  return (
    <nav className="vi-breadcrumb" aria-label="Breadcrumb">
      <div className="container-vi">
        <ol>
          {items.map((item, i) => (
            <li key={item.label}>
              {item.to && i !== items.length - 1 ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
