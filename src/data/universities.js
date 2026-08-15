// Associated / recognized universities.
//
// Facts below (established year, NAAC grade, UGC recognition, official
// website) were checked against each university's own official website
// and/or Wikipedia in August 2026 and should be re-verified periodically,
// since accreditation cycles and rankings change. "programmes" lists broad
// categories only — not a guarantee that every course is available at
// every learning mode. Verify current affiliation, recognition and
// programme availability with each university before publishing.
//
// `coverImage` is placeholder stock photography, NOT an official photo of
// the campus — replace with real, sourced campus photography (with
// permission) before launch. `logoInitials` is a text placeholder; replace
// with the university's official logo asset once sourced and verified.

export const universities = [
   {
    id: 'bdu',
    name: 'Bharathidasan University',
    initials: 'BU',
    city: 'Tiruchirappalli',
    location: 'Palkalaiperur, Tiruchirappalli, Tamil Nadu',
    established: 1982,
    type: 'Public State University',
    naac: "NAAC 'A+' Grade (3rd Cycle)",
    recognition: 'UGC-recognized',
    website: 'https://www.bdu.ac.in',
    coverImage: 'bdu.webp',
    about:
      'Named after the Tamil poet Bharathidasan, the university has offered undergraduate, postgraduate and research programmes from its Tiruchirappalli campuses since 1982.',
    highlights: [
      "Motto: \u201cWe will create a brave new world\u201d, from Bharathidasan\u2019s own poetry",
      'Centre for Distance and Online Education (CDOE) offers online UG and PG programmes',
      'Campuses at Palkalaiperur and Khajamalai, Tiruchirappalli',
    ],
    programmes: ['UG', 'PG', 'MBA', 'MCA'],
    modes: ['Regular', 'Online', 'ODL'],
  },
  
  
  {
    id: 'msu',
    initials:"MSU",
    name: 'Manonmaniam Sundaranar University',
    logoInitials: 'MS',
    city: 'Tirunelveli',
    location: 'Abishekapatti, Tirunelveli, Tamil Nadu',
    established: 1990,
    type: 'Public State University',
    naac: "NAAC 'A' Grade",
    recognition: 'UGC-recognized',
    website: 'https://www.msuniv.ac.in',
    coverImage: 'msuimage.png',
    about:
      'Set up by the Government of Tamil Nadu to serve the state\u2019s four southernmost districts, MSU is named after Tamil scholar Professor P. Sundaram Pillai.',
    highlights: [
      'Motto: \u201cReaching the Unreached\u201d',
      '550-acre campus serving Tirunelveli, Tenkasi, Thoothukudi and Kanyakumari districts',
      'Directorate of Distance & Continuing Education offers ODL programmes',
    ],
    programmes: ['UG', 'PG', 'MCA', 'Diploma'],
    modes: ['Regular', 'ODL'],
  },
  {
    id: 'alagappa',
    initials:"AU",
    name: 'Alagappa University',
    logoInitials: 'AU',
    city: 'Karaikudi',
    location: 'Alagappapuram, Karaikudi, Sivaganga District, Tamil Nadu',
    established: 1985,
    type: 'Public State University',
    naac: "NAAC 'A++' Grade (4th Cycle)",
    recognition: 'UGC-recognized',
    website: 'https://www.alagappauniversity.ac.in',
    coverImage: 'alagappaimg.png',
    about:
      'Constituted by a Special Act of the Tamil Nadu Government in 1985, the university traces its roots to Alagappa Arts College, founded in 1947 by Dr. RM. Alagappa Chettiar.',
    highlights: [
      'Motto: \u201cExcellence in Action\u201d',
      'Directorate of Distance Education established in 1992',
      'Main campus spans over 400 acres at Karaikudi, Sivaganga District',
    ],
    programmes: ['UG', 'PG', 'MBA', 'Diploma'],
    modes: ['Regular', 'Online', 'ODL'],
  },
  {
  id: 'iiiier',
  initials:"IIIIER",
  name: 'Indian Institute of Industry Interaction Education and Research',

  logoInitials: 'IIIIER',

  city: 'Chennai',

  location: 'Chennai, Tamil Nadu',

  established: '2008', // not verifiable from public sources — leave blank

  type: 'Professional Education Institution',

  naac: '',

  recognition: 'Private, autonomous professional institution; not a UGC-recognized university',

  website: 'https://www.iiiier.org/',

  coverImage: 'https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlpaWVyJTIwdW5pdmVyc2l0aWVzfGVufDB8fDB8fHww',

  about:
    'IIIIER is a private, autonomous professional institution focused on industry-oriented education, skill development and work-integrated learning. Its academic membership programmes are delivered through blended, virtual and micro-learning approaches, particularly supporting working professionals.',

  highlights: [
    'Industry-oriented education and professional development',
    'Focus on skill development and work-integrated learning',
    'Academic membership programmes for working professionals',
    'Blended, virtual and micro-learning approaches',
  ],

  programmes: [
    'Diploma','B.E','M.E',
    'Professional Programmes',
  ],

  modes: [
    'Virtual Learning',
    'Blended Learning',
    'Work-Integrated Learning',
  ],
},  
 
];

export const universityDisclaimer =
  'Programme availability, recognition and eligibility criteria are set by each university and are subject to change. Please confirm current details with our admission guidance team before applying.';

export const universitySourceNote =
  'University names, locations, establishment years, accreditation and official websites are sourced from each university\u2019s own website and verified periodically. Programme categories reflect our current guidance scope, not an official university listing.';