import { useEffect } from 'react';

const SITE_URL = 'https://www.vijayaminstitute.in';
const SITE_NAME = 'Vijayam Institute';

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Renders no DOM — manages <title>, meta tags, canonical link and JSON-LD
 * for the current page. Mount once per page/route.
 */
export default function SEO({ title, description, path = '/', jsonLd = null, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setLink('canonical', url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', SITE_NAME);

    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    setJsonLd('vi-jsonld', jsonLd);

    return () => {
      // Leave tags in place between route changes; next SEO instance overwrites them.
    };
  }, [title, description, path, jsonLd, noindex]);

  return null;
}

export { SITE_URL, SITE_NAME };
