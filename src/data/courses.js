// Course catalogue data.
// Keep UI components free of hard-coded course content — edit this file instead.
// NOTE: "universityIds" indicates which associated universities may offer a
// given programme. Always verify current availability with the admission
// guidance team before publishing — do not assume every university offers
// every programme.

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'UG', label: 'UG' },
  { id: 'PG', label: 'PG' },
  { id: 'MBA', label: 'MBA' },
  { id: 'MCA', label: 'MCA' },
  { id: 'Diploma', label: 'Diploma' },
  { id: 'Online', label: 'Online' },
  { id: 'ODL', label: 'ODL' },
];

export const courses = [
  {
    id: 'ba',
    name: 'B.A.',
    fullName: 'Bachelor of Arts',
    category: 'UG',
    type: 'Undergraduate',
    modes: ['ODL'],
    description:
      'A broad-based undergraduate programme across humanities and social science disciplines, suited to learners building a foundation for further study or public-sector careers.',
    universityIds: ['msu', 'alagappa'],
  },
  {
    id: 'bcom',
    name: 'B.Com.',
    fullName: 'Bachelor of Commerce',
    category: 'UG',
    type: 'Undergraduate',
    modes: [ 'Online', 'ODL'],
    description:
      'Undergraduate commerce education covering accounting, taxation, business law and finance fundamentals for careers in finance and administration.',
    universityIds: ['bdu', 'msu', 'alagappa'],
  },
  {
    id: 'bsc',
    name: 'B.Sc.',
    fullName: 'Bachelor of Science',
    category: 'UG',
    type: 'Undergraduate',
    modes: ['Online',"ODL"],
    description:
      'Science stream undergraduate degree with options across mathematics, computer science and allied disciplines, depending on the affiliated university.',
    universityIds: ['bdu', 'msu'],
  },
  {
    id: 'bba',
    name: 'B.B.A.',
    fullName: 'Bachelor of Business Administration',
    category: 'UG',
    type: 'Undergraduate',
    modes: [ 'Online'],
    description:
      'Management-focused undergraduate programme introducing business fundamentals, communication and early leadership skills.',
    universityIds: ['bdu', 'alagappa'],
  },
  {
    id: 'bca',
    name: 'B.C.A.',
    fullName: 'Bachelor of Computer Applications',
    category: 'UG',
    type: 'Undergraduate',
    modes: ["Online","ODL"],
    description:
      'Computer applications degree covering programming, systems and application development fundamentals for entry into the IT sector.',
    universityIds: ['bdu', 'msu'],
  },
  {
    id: 'blis',
    name: 'B.L.I.S.',
    fullName: 'Bachelor of Library and Information Science',
    category: 'UG',
    type: 'Undergraduate',
    modes: ["Online", 'ODL'],
    description:
      'Professional undergraduate programme in library and information science for careers in academic, public and institutional libraries.',
    universityIds: ['alagappa'],
  },
  {
    id: 'ma',
    name: 'M.A.',
    fullName: 'Master of Arts',
    category: 'PG',
    type: 'Postgraduate',
    modes: ['Online', 'ODL'],
    description:
      'Postgraduate specialisation in humanities and social science subjects for learners advancing an existing UG qualification.',
    universityIds: ['msu', 'alagappa'],
  },
  {
    id: 'mcom',
    name: 'M.Com.',
    fullName: 'Master of Commerce',
    category: 'PG',
    type: 'Postgraduate',
    modes: [ 'Online', 'ODL'],
    description:
      'Advanced commerce postgraduate programme covering financial management, accounting theory and research methods.',
    universityIds: ['bdu', 'msu'],
  },
  {
    id: 'msc',
    name: 'M.Sc.',
    fullName: 'Master of Science',
    category: 'PG',
    type: 'Postgraduate',
    modes: ['Online','ODL'],
    description:
      'Postgraduate science specialisation building on an undergraduate science degree, subject to the affiliated university offering.',
    universityIds: ['bdu'],
  },
  {
    id: 'mba',
    name: 'MBA',
    fullName: 'Master of Business Administration',
    category: 'MBA',
    type: 'Professional',
    modes: [ 'Online', 'ODL'],
    description:
      'Professional management programme for graduates seeking to move into leadership, strategy and cross-functional business roles while continuing to work.',
    universityIds: ['bdu', 'alagappa'],
  },
  {
    id: 'mca',
    name: 'MCA',
    fullName: 'Master of Computer Applications',
    category: 'MCA',
    type: 'Professional',
    modes: ['Online'],
    description:
      'Professional postgraduate programme in computer applications for eligible graduates pursuing software and IT careers.',
    universityIds: ['bdu', 'msu'],
  },
  {
    id: 'diploma-general',
    name: 'Diploma Programmes',
    fullName: 'Diploma & Certificate Programmes',
    category: 'Diploma',
    type: 'Diploma',
    modes: ["Online", 'ODL'],
    description:
      'Short-duration diploma and certificate options across commerce, computer applications and management topics for focused, career-oriented learning.',
    universityIds: ['msu', 'alagappa'],
  },
];

export function getCoursesByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return courses;
  if (categoryId === 'Online') return courses.filter((c) => c.modes.includes('Online'));
  if (categoryId === 'ODL') return courses.filter((c) => c.modes.includes('ODL'));
  return courses.filter((c) => c.category === categoryId);
}
