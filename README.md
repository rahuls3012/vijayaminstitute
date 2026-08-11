# Vijayam Institute — Website

A React + Vite + Bootstrap 5 admission-guidance website for Vijayam Institute
(Vadasery, Nagercoil, Kanyakumari District, Tamil Nadu).

## Getting started

This project was built without network access, so dependencies have **not**
been installed and the build has **not** been verified end-to-end. Run these
yourself before deploying:

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

If `npm run build` or `npm run dev` surface any errors, they're almost
certainly a missing/mistyped import or a small JSX slip — every file was
hand-written and checked for balanced braces/parens and import usage, but
that's not a substitute for an actual compile.

## Project structure

```
src/
  components/   Reusable UI building blocks
  pages/        One component per route
  data/         Course, university and FAQ content (edit these, not the JSX)
  hooks/        useScrollReveal (IntersectionObserver reveal-on-scroll)
  styles/       Design tokens + component/page CSS
public/
  robots.txt
  sitemap.xml
  favicon.svg
```

## Before you publish — verify these

The brief this site was built from was explicit that no claims should be
invented. The following are placeholders or unverified and **must** be
checked/updated before this goes live:

- **Reference images/branding**: no poster images were actually attached to
  the build request, so hero and section imagery currently uses stock photos
  (Unsplash) as placeholders. Replace with real Vijayam Institute photography
  and, if available, official university logos (`src/data/universities.js`
  currently renders text initials instead of real logos).
- **University list & programme mapping** (`src/data/universities.js`,
  `src/data/courses.js`): Bharathidasan University, Manonmaniam Sundaranar
  University and Alagappa University are included per the brief, but the
  exact programme-to-university mapping is illustrative. Confirm current
  affiliation and course availability with each university.
- **Accreditation/recognition claims**: none are made anywhere on the site
  (no UGC, UGC-DEB, AICTE, or NIRF claims). Add these only once verified, and
  cite the source.
- **Contact details**: phone numbers 94431 73657 / 89037 02523 are wired into
  `tel:` and `wa.me` links — confirm both are correct and WhatsApp-enabled
  before launch.
- **Domain**: canonical URLs, sitemap.xml and JSON-LD use
  `https://www.vijayaminstitute.in` as a placeholder domain — replace with
  the real production domain everywhere it appears (`index.html`,
  `src/components/SEO.jsx`, `public/sitemap.xml`).
- **Testimonials** (`src/components/Testimonials.jsx`): placeholder text only
  ("Student testimonial will appear here."). Replace with real, permissioned
  testimonials.
- **Google Maps embed** (`src/components/MapEmbed.jsx`): uses a generic query
  string for Vadasery, Nagercoil. Replace with the exact address/pin once
  confirmed.
- **OG image**: `index.html` references `/og-image.jpg`, which doesn't exist
  yet — add a real 1200×630 social preview image at that path.

## Backend integration

`src/data/api.js` is a stub service layer — `submitAdmissionEnquiry()`
currently simulates a network call and does not send data anywhere. Swap its
implementation for a real API call when a backend/CRM endpoint is ready; no
component code needs to change.

## Notes

- No animation or icon library beyond Bootstrap Icons and CSS is used —
  scroll reveals run on the native `IntersectionObserver` API.
- All animations respect `prefers-reduced-motion`.
- No invented statistics: the homepage stats section uses feature-based
  cards, not counted-up numbers, per the brief.
