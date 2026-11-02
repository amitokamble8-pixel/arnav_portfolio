/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Arnav",
  last: "Bang",
  fullName: "Arnav Sachin Bang",
  tagline: "Agriculture • Technology • Community • Leadership",
  location: "Maharashtra, India",
  email: "",
  phone: "",
  bio: [
    "Hi, I'm Arnav, a Grade 12 student with a strong academic foundation and a passion for continuous learning. I am interested in understanding real-world problems through direct experience and turning those observations into practical solutions.",
    "My journey began with agriculture. Regular visits to my grandfather's farm made me notice changes in yield and ask why they happened. A summer agriculture internship in Jalna and visits to farms and processing units showed me how production, markets, technology and sustainability come together — and gradually led me toward research, technology projects, entrepreneurship and community-focused initiatives.",
    "Outside of these, I balance my interests through sport, public speaking and community service. Every experience has taught me the importance of consistency, resilience, and approaching challenges with an open mind.",
  ],
  quote:
    "I believe that growth comes from embracing every opportunity to learn — whether in the classroom, on the sports field, or through experiences that challenge me to think beyond the ordinary. I enjoy exploring new ideas, gaining hands-on experience, and turning what I learn into something practical and meaningful.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "",
  aboutPhoto: "/photo.jpeg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Research & Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Activities & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) — Internships & field learning ---- */

export const EXPERIENCE = [
  {
    slug: "pharmint-entrepreneurship-business-intern",
    role: "Entrepreneurship & Business Intern",
    org: "Pharmint Pte. Ltd.",
    logo: "/logos/pharmint.png",
    location: "Singapore",
    dates: "1 month",
    meta: "1 month · Singapore ·",
    badge: "Internship",
    desc: "A one-month internship in Entrepreneurship and Business, focused on Behavioural Science in the Context of Global Pharmaceutical Trade, under the mentorship of Ming Xia Ho and Himanshu Mehlawat. It gave me exposure to how human behaviour influences business decisions and the wider pharmaceutical industry.",
    bullets: [
      "Entrepreneurship: developed business thinking and problem-solving skills",
      "Behavioural Science: explored human behaviour in a global business context",
      "Pharmaceutical Trade: gained exposure to the global pharmaceutical industry",
      "Business Perspective: understood international business practices and industry dynamics",
    ],
    tags: ["Entrepreneurship", "Behavioural Science", "Pharmaceutical Trade", "International Business"],
    featured: true,
  },
  {
    slug: "jalna-agriculture-intern",
    role: "Agriculture Intern",
    org: "Agriculture-Focused Summer Internship",
    logo: "/logos/agriculture.png",
    location: "Jalna, Maharashtra, India",
    dates: "Summer",
    meta: "Summer · Jalna, Maharashtra ·",
    badge: "Internship",
    desc: "My interest in agriculture began on my grandfather's farm, where I noticed changes in yield and started asking why. A summer internship in Jalna gave me practical exposure to organic agricultural inputs, farmer communication and the business side of agriculture — learning I then brought back to the family farm.",
    bullets: [
      "Gained first-hand exposure to organic agricultural inputs and their use",
      "Applied the learning on the family farm and observed an improvement in yield",
      "Took part in local discussions with farmers and shops",
      "Explored sustainability ideas such as solar energy and rainwater harvesting",
    ],
    tags: ["Organic Farming", "Agricultural Inputs", "Farmer Communication", "Sustainability"],
    featured: true,
  },
  {
    slug: "agriculture-rural-business-field-learning",
    role: "Field Learning — Agriculture & Rural Business",
    org: "Farms & Processing Units",
    logo: "/logos/field-learning.png",
    location: "Maharashtra, India",
    dates: "Weekends & breaks",
    meta: "Weekends & breaks · Maharashtra ·",
    badge: "Field Learning",
    desc: "Used weekends and breaks to visit agricultural farms and processing units. Rather than treating them as separate visits, I compared how raw materials, production, machinery, labour, processing, packaging, markets and by-products connect to form one larger value chain.",
    bullets: [
      "Bhumata — agricultural practices, inputs/outputs, customers, local markets and value creation",
      "Bhusari — organic farming practices, inputs, processing, communication and local sales",
      "Sericulture — silkworm life cycle, mulberry cultivation, cocoon production and the commercial chain",
      "Drumstick / Moringa — processing, powder production and value addition from farm produce",
      "Polyhouse — protected cultivation, controlled conditions, technology and resource use",
      "Oil Mill — oilseed handling, machinery, extraction, packaging and by-product use",
    ],
    tags: ["Value Chains", "Systems Thinking", "Agri-Processing", "Business Thinking", "Entrepreneurial Thinking"],
    featured: true,
  },
];

/* ---- Projects (Research & Projects) ---- */

export const PROJECTS = [
  {
    name: "Weed Suppress — Preliminary Research",
    org: "Independent Researcher",
    meta: "2025 – 26 · Paper presented at ICRDILS-2025",
    desc: "Time spent around farms led me to identify weed management as a recurring agricultural problem. This became an early research question: could organic or environmentally conscious materials be used for weed suppression while reducing the risk of harming crops? I presented the work at an international life-sciences conference in 2025 and developed it into a preliminary research paper in 2026. It is presented as preliminary research, not a commercially validated product.",
    tags: ["Organic Weed Suppression", "Sustainable Agriculture", "Research", "Academic Writing"],
    featured: true,
  },
  {
    name: "Agriculture Transportation App",
    org: "Individual Project · Concept & Design",
    meta: "Student-developed concept",
    desc: "Field visits showed me that agricultural problems also involve transport, coordination and markets. I designed a concept app that connects farmers or vegetable vendors with available local transport to move produce from smaller communities to nearby markets: the farmer enters produce and transport needs, the request is recorded digitally, available local vehicles can accept it, and collection and delivery details are organised in one place.",
    tags: ["App Concept", "Logistics", "Agri-Tech", "Problem Identification"],
    featured: true,
  },
  {
    name: "Shani Shingnapur Digital Tourist Guide",
    org: "Individual Project · Developer",
    meta: "Live web application",
    desc: "A digital tourist-guide and navigation app for Shani Shingnapur, a major pilgrimage and tourist destination. It brings navigation to key locations, tourist information, points of interest and nearby places to explore into one platform — applying technology to a familiar local setting and its visitors' needs.",
    tags: ["Web Development", "Navigation", "User Experience", "Local Heritage"],
    link: [{ label: "Shani Shingnapur Tourism Site", href: "https://shree-shani-shingnapur-tourism.netlify.app/" }],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏆",
    title: "Best Delegate — UNEP Committee, IAMUN",
    meta: "IAMUN Championship · Model United Nations",
    detail: "Recognised as Best Delegate in the UNEP committee at the IAMUN Championship, reflecting skills in public speaking, diplomacy, research, negotiation and structured debate.",
    link: "",
    featured: true,
  },
  {
    icon: "🔬",
    title: "Research Paper Presentation — ICRDILS 2025",
    meta: "International · Ahmednagar College (B.P. Hivale Education Society) · September 2025",
    detail: "Participated in and presented a research paper at the International Conference on Recent Discoveries and Innovations in Life Sciences (ICRDILS-2025), engaging with emerging research in the life sciences.",
    link: "",
    featured: true,
  },
  {
    icon: "🌍",
    title: "International Conference on Climate Change — ICCEAMHS 2024",
    meta: "International · 2024",
    detail: "Actively participated in the International Conference on Climate Change and its Effect on Environment, Agriculture, Management, Health and Society, gaining exposure to interdisciplinary discussions on sustainability, agriculture, health and society.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Best Student Award",
    meta: "School",
    detail: "Recognised for consistent academic performance and active participation in school life.",
    link: "",
    featured: true,
  },
  {
    icon: "🧮",
    title: "Academic Olympiads — IMO & NSO (Level 2)",
    meta: "International Mathematics Olympiad · National Science Olympiad",
    detail: "Competed in the International Mathematics Olympiad and qualified for Level 2 of the National Science Olympiad.",
    link: "",
    featured: false,
  },
  {
    icon: "💻",
    title: "Web Designing Using HTML & CSS",
    meta: "Certification",
    detail: "Completed a course in web design with HTML & CSS, building foundational skills in website structure, styling and front-end design.",
    link: "",
    featured: false,
  },
  {
    icon: "📜",
    title: "Level 1 English Certification",
    meta: "World Education Events · Online Certification Programme",
    detail: "Completed a Level 1 English course, strengthening foundational English language and communication skills.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Agriculture & Sustainability",
    outlet: "Learning from farms, processing units and agricultural businesses while exploring sustainable solutions",
    link: "",
  },
  {
    title: "Technology & Innovation",
    outlet: "Using technology to address practical problems in agriculture, tourism and local communities",
    link: "",
  },
  {
    title: "Research",
    outlet: "Turning field observations into research questions, with a focus on sustainable agricultural problem-solving",
    link: "",
  },
  {
    title: "Business & Entrepreneurship",
    outlet: "Value chains, processing, markets, behavioural science and building initiatives from the ground up",
    link: "",
  },
  {
    title: "Community & Leadership",
    outlet: "Taking initiative in education, digital awareness and projects that create practical value for others",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "6", label: "Farms & Processing Units Studied" },
    { value: "2", label: "International Conferences" },
    { value: "1", label: "School Branch Established" },
  ],
  orgs: [
    {
      name: "Kids Kingdom Academy — Kukana Branch",
      role: "Initiator & Developer · Education & Entrepreneurship",
      desc: "My mother runs Kids Kingdom Academy in Sonai. I took the initiative to establish and develop a branch of the school in Kukana, a nearby smaller village. It gave me practical exposure to building an educational institution — taking responsibility from idea to development, contributing to access to schooling, and understanding the administration and entrepreneurship involved in running a school.",
    },
    {
      name: "Digital Banking & Scam Awareness Workshop",
      role: "Workshop Leader · Kids Kingdom Academy",
      desc: "Conducted a digital banking awareness workshop for teaching and non-teaching staff, covering net banking basics, safe UPI transactions, OTP and UPI PIN safety, and how to spot common scams, suspicious links and calls. It taught me to explain technical topics clearly and apply IT knowledge to everyday problems.",
    },
    {
      name: "Clean & Green Village",
      role: "Participant · Community Service",
      desc: "Took part in a local environmental initiative promoting cleanliness and community awareness.",
    },
    {
      name: "Leadership & Personal Growth",
      role: "Across agriculture, technology, education & community work",
      desc: "The common thread across my experiences is a habit of noticing real problems, learning from direct experience, and turning that understanding into something useful: Observe → Learn → Research → Build → Contribute. I want to use what I learn to create practical value for the people around me.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🏓",
    name: "Table Tennis — District Level",
    desc: "Competing at district level has strengthened my focus, precision and consistency.",
  },
  {
    icon: "🏐",
    name: "Volleyball",
    desc: "Volleyball has developed my teamwork, coordination and ability to communicate effectively on court.",
  },
  {
    icon: "🏃",
    name: "Running & Marathon",
    desc: "Regular running and marathon competition have built my endurance, determination and resilience.",
  },
  {
    icon: "🏏",
    name: "Cricket",
    desc: "Cricket has strengthened my adaptability, strategic thinking and collaboration in a team environment.",
  },
  {
    icon: "💃",
    name: "Dandiya — District Level",
    desc: "Participated in district-level cultural competitions, celebrating teamwork and cultural traditions through performance.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Technology",
    items: ["Web Design (HTML & CSS)", "App Concept Design", "Navigation & Tourism App Development", "Digital Banking & UPI Literacy", "Computational Thinking"],
  },
  {
    group: "Agriculture & Research",
    items: ["Organic Farming Practices", "Agricultural Value Chains", "Sustainable Agriculture", "Field Observation", "Research & Academic Presentation"],
  },
  {
    group: "Business",
    items: ["Entrepreneurship", "Business Thinking", "Behavioural Science", "School Administration"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "Marathi"],
  },
  {
    group: "Core Strengths",
    items: ["Communication", "Leadership", "Collaboration", "Social Responsibility", "Public Speaking", "Diplomacy & Negotiation"],
  },
];

/* ---- Photo gallery (Home page) ----
   HOW TO ADD IMAGES
   1. Copy the image file into  public/images/
   2. Add a line below:  { src: "/images/<filename>", caption: "..." }
   The path works exactly like PROFILE.aboutPhoto ("/photo.png" = public/photo.png).
   Optional: alt (screen-reader text; defaults to the caption).
   Files that are missing are hidden automatically, so the filenames below are
   placeholders — rename them to match your real files and edit the captions.

   The same { src, caption } objects can also be added as an  images: [ ... ]
   array on any item in EXPERIENCE (shown on its detail page), PROJECTS or
   SPORTS (shown as small thumbnails inside the card). */

export const GALLERY = [
  { src: "/images/bhumata.jpeg", caption: "" },
  { src: "/images/bhusari.jpeg", caption: "" },
  { src: "/images/drumstick.jpeg", caption: "" },
  { src: "/images/drumstick2.jpeg", caption: "" },
  { src: "/images/netbanking.jpeg", caption: "" },
  { src: "/images/netbanking2.jpeg", caption: "" },
  { src: "/images/netbanking3.jpeg", caption: "" },
  { src: "/images/probitek.jpeg", caption: "" },
  { src: "/images/probitek1.jpeg", caption: "" },
  { src: "/images/probitek2.jpeg", caption: "" },
  { src: "/images/probitek3.jpeg", caption: "" },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "",
    location: "Maharashtra, India",
    level: "Grade 12",
    dates: "Graduating 2027",
    gpa: "",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Information Technology",
      "Geography",
      "English",
    ],
  },
];

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Research & Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Activities & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
