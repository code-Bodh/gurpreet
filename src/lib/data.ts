export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  headline: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  resumeSummary: string;
  quote: string;
  status: string;
  behance: string;
  behancePortfolio: string;
  pinterest: string;
  instagram: string;
  resumePath: string;
  github: string;
  linkedin: string;
}

export interface NavItem {
  label: string;
  href: string;
  num: string;
}

export type SkillCategory = "Design" | "Tools" | "AI Tools" | "Process";

export interface Skill {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: SkillCategory;
  isBrand: boolean;
  brandKey?: string;
  description?: string;
  projects: string[];
  footerLine?: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  github?: string;
  uiType: "dashboard" | "mobile" | "marketplace" | "atlas" | "video" | "saas";
}

export interface ExperienceItem {
  period: string;
  year: string;
  role: string;
  company: string;
  location: string;
  type: "experience" | "education";
  bullets: string[];
}

export interface Achievement {
  index: string;
  numberDisplay: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
  platform: string;
  platformKey: string;
}

export const PROFILE: Profile = {
  name: "Gurpreet Kaur",
  firstName: "GURPREET",
  initials: "GK",
  role: "Senior UI/UX & Graphic Designer",
  headline: "Websites, Mobile Apps, SaaS & eCommerce",
  location: "Chandigarh, India",
  phone: "+91 98142 75335",
  phoneHref: "tel:+919814275335",
  email: "creativehead.gk@gmail.com",
  resumeSummary:
    "Senior UI/UX & Graphic Designer with 9+ years of experience and 10+ live products. I design websites, dashboards, mobile apps, and eCommerce flows, plus the logos, brand identities, social creatives, and pitch decks that go with them.",
  quote:
    "Designing intuitive, human-centered systems across mobile and web—bridging research, craft, and engineering.",
  status: "Open to Remote / Hybrid / Full-Time UI/UX Roles",
  behance: "https://www.behance.net/designsbykaur",
  behancePortfolio: "https://www.behance.net/gallery/233576423/Portfolio",
  pinterest: "http://in.pinterest.com/designedbykaur",
  instagram: "https://www.instagram.com/smarttoonkids/",
  resumePath: "/resume.pdf",
  github: "",
  linkedin: "",
};

export const NAV: NavItem[] = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Work", href: "#work", num: "03" },
  { label: "Experience", href: "#experience", num: "04" },
  { label: "Achievements", href: "#achievements", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export const SKILL_GROUPS: Skill[] = [
  // 1. Design Category
  {
    atomicNumber: 1,
    symbol: "Ux",
    name: "UI/UX Design",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 2,
    symbol: "Ux",
    name: "Data Visualization",
    category: "Design",
    isBrand: false,
    projects: [
      "Election Atlas",
      "Meradesh Platform",
      "portal.meridianapi.com",
      "Fangorn",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 3,
    symbol: "Ux",
    name: "Dashboard Design",
    category: "Design",
    isBrand: false,
    projects: ["OOH Audit", "Retibazaar", "Fangorn", "Machine Dalal"],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 4,
    symbol: "Ds",
    name: "Design Systems",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 5,
    symbol: "Rs",
    name: "Responsive Design",
    category: "Design",
    isBrand: false,
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 6,
    symbol: "Mf",
    name: "Mobile-First",
    category: "Design",
    isBrand: false,
    projects: [
      "Moshpit",
      "Machine Dalal",
      "Brand Manager",
      "Eikaebana",
      "Retitrak",
    ],
    footerLine: "From first wireframe to final handoff.",
  },

  // 2. Tools Category
  {
    atomicNumber: 7,
    symbol: "Fg",
    name: "Figma",
    category: "Tools",
    isBrand: true,
    brandKey: "figma",
    projects: [
      "OOH Audit",
      "Eikaebana",
      "Machine Dalal",
      "Brand Manager",
      "Moshpit",
      "Fangorn Ops",
      "Retitrak",
      "EIkeabana",
    ],
    footerLine: "From first wireframe to final handoff.",
  },
  {
    atomicNumber: 8,
    symbol: "Xd",
    name: "Adobe XD",
    category: "Tools",
    isBrand: true,
    brandKey: "xd",
    projects: ["Mobile App Prototypes", "Wireframes"],
  },
  {
    atomicNumber: 9,
    symbol: "Ps",
    name: "Photoshop",
    category: "Tools",
    isBrand: true,
    brandKey: "photoshop",
    projects: ["Eikaebana", "Marketing Creatives", "Brand Identity"],
  },
  {
    atomicNumber: 10,
    symbol: "Ai",
    name: "Illustrator",
    category: "Tools",
    isBrand: true,
    brandKey: "illustrator",
    projects: ["Election Atlas Infographics", "Logos & Vector Assets"],
  },
  {
    atomicNumber: 11,
    symbol: "Ex",
    name: "Adobe Express",
    category: "Tools",
    isBrand: true,
    brandKey: "express",
    projects: ["Social Media Assets", "Rapid Collateral"],
  },
  {
    atomicNumber: 12,
    symbol: "Ff",
    name: "Adobe Firefly",
    category: "Tools",
    isBrand: true,
    brandKey: "firefly",
    projects: ["SmartToonKids Assets", "Generative Visuals"],
  },
  {
    atomicNumber: 13,
    symbol: "Cv",
    name: "Canva",
    category: "Tools",
    isBrand: true,
    brandKey: "canva",
    projects: ["Pitch Decks", "Investor Presentations"],
  },
  {
    atomicNumber: 14,
    symbol: "Kn",
    name: "Keynote",
    category: "Tools",
    isBrand: true,
    brandKey: "keynote",
    projects: ["Investor Pitch Decks", "Client Presentations"],
  },

  // 3. AI Tools Category
  {
    atomicNumber: 15,
    symbol: "Gp",
    name: "ChatGPT",
    category: "AI Tools",
    isBrand: true,
    brandKey: "chatgpt",
    projects: ["UX Copywriting", "Scripting SmartToonKids", "User Personas"],
  },
  {
    atomicNumber: 16,
    symbol: "Cd",
    name: "Claude",
    category: "AI Tools",
    isBrand: true,
    brandKey: "claude",
    projects: ["Research Synthesis", "UX Strategy & Flow Ideation"],
  },
  {
    atomicNumber: 17,
    symbol: "Gm",
    name: "Gemini",
    category: "AI Tools",
    isBrand: true,
    brandKey: "gemini",
    projects: ["SmartToonKids Concepts", "Asset Generation Ideas"],
  },
  {
    atomicNumber: 18,
    symbol: "St",
    name: "Stitch",
    category: "AI Tools",
    isBrand: true,
    brandKey: "stitch",
    projects: ["AI Workflow Acceleration", "Asset Prototyping"],
  },
  {
    atomicNumber: 19,
    symbol: "Mt",
    name: "Meta AI",
    category: "AI Tools",
    isBrand: true,
    brandKey: "meta",
    projects: ["Social Creative Ideation", "Visual Prompt Research"],
  },

  // 4. Process Category
  {
    atomicNumber: 20,
    symbol: "Ur",
    name: "User Research",
    category: "Process",
    isBrand: false,
    projects: ["OOH Audit Field Studies", "Machine Dalal Buyer Interviews"],
  },
  {
    atomicNumber: 21,
    symbol: "Wf",
    name: "Wireframing",
    category: "Process",
    isBrand: false,
    projects: ["OOH Audit", "Eikaebana", "Retibazaar"],
  },
  {
    atomicNumber: 22,
    symbol: "Pr",
    name: "Prototyping",
    category: "Process",
    isBrand: false,
    projects: ["Interactive Figma Prototypes", "Developer Previews"],
  },
  {
    atomicNumber: 23,
    symbol: "Uf",
    name: "User Flows",
    category: "Process",
    isBrand: false,
    projects: ["eCommerce Checkout Funnels", "B2B Deal-Making Paths"],
  },
  {
    atomicNumber: 24,
    symbol: "Dh",
    name: "Developer Handoff",
    category: "Process",
    isBrand: false,
    projects: ["Design Token Specs", "Reusable Component Libraries"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ooh-audit",
    index: "01",
    title: "OOH Audit Platform",
    kicker: "Mobile App + Analytics Dashboard",
    description:
      "Designed a real-time campaign tracking platform to improve data visibility and field-team workflows across national outdoor advertising networks.",
    features: [
      "Tamper-proof field proof with Moshpit mobile app",
      "Executive Brand Manager live monitoring dashboard",
      "Real-time geo-tagged status audits & proof logs",
      "Measured task completion acceleration by ~30%",
    ],
    tech: ["Figma", "Design Systems", "Mobile-First", "Data Visualization"],
    liveUrl: "https://oohaudit.com/",
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    appStoreUrl: "https://apps.apple.com/in/app/moshpit-app/id1438508518",
    uiType: "dashboard",
  },
  {
    id: "eikaebana",
    index: "02",
    title: "Eikaebana",
    kicker: "eCommerce Mobile App & Web",
    description:
      "E-commerce app for artificial flowers and luxury home décor, engineered with an intuitive catalog browsing experience and frictionless checkout.",
    features: [
      "Optimized eCommerce browsing & checkout flows",
      "Raised transaction conversion rates by ~15–20%",
      "Curated visual aesthetics with high-res product galleries",
      "Native cross-platform experience across iOS and Android",
    ],
    tech: ["Figma", "UI/UX Design", "User Flows", "Photoshop"],
    liveUrl: "https://shop.eikaebana.com/",
    appStoreUrl: "https://apps.apple.com/in/app/eikaebana/id1640209271",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.hashbrown.eikaebana&hl=en_IN",
    uiType: "mobile",
  },
  {
    id: "machine-dalal",
    index: "03",
    title: "Machine Dalal",
    kicker: "B2B Industrial Marketplace",
    description:
      "Designed a B2B marketplace connecting machinery buyers, sellers, and financing partners—enabling discovery, deal-making, and logistics for industrial equipment trade.",
    features: [
      "Heavy industrial machinery directory & spec comparisons",
      "Direct buyer-to-seller deal-making negotiations",
      "Integrated financing, inspection and logistics inquiry flows",
      "Multi-currency, internationalized search & discovery",
    ],
    tech: ["Figma", "Dashboard Design", "User Research", "Wireframing"],
    liveUrl: "https://www.machinedalal.com/",
    appStoreUrl: "https://apps.apple.com/gm/app/machine-dalal/id1071517063",
    uiType: "marketplace",
  },
  {
    id: "brand-manager",
    index: "04",
    title: "Brand Manager App",
    kicker: "Executive Monitoring Mobile App",
    description:
      "Designed the Brand Manager mobile application empowering brand leaders and executives with live campaign monitoring, real-time audit approvals, and proof-of-performance analytics.",
    features: [
      "Live executive campaign monitoring and audit logs",
      "Real-time proof verification and inspection approvals",
      "Instant push notifications for campaign milestones",
      "Seamless cross-platform deployment on iOS and Android",
    ],
    tech: ["iOS", "Android", "UI/UX Design", "Data Visualization"],
    liveUrl: "https://oohaudit.com/",
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    appStoreUrl: "https://apps.apple.com/in/app/moshpit-app/id1438508518",
    uiType: "dashboard",
  },
  {
    id: "smarttoonkids",
    index: "05",
    title: "SmartToonKids",
    kicker: "AI-Generated Educational Media",
    description:
      "Conceptualized, scripted, and produced AI-generated educational video content for SmartToonKids end-to-end—driving 45K+ views and 100K+ likes across the channel.",
    features: [
      "End-to-end storyboard scripting & visual direction",
      "Generative visual asset generation via Gemini & Firefly",
      "High-retention shortform pacing for young learners",
      "Surpassed 45K+ organic views and 100K+ channel likes",
    ],
    tech: ["ChatGPT", "Gemini", "Adobe Firefly", "Photoshop", "Canva"],
    liveUrl: "https://www.instagram.com/smarttoonkids/",
    uiType: "video",
  },
  {
    id: "moshpit-app",
    index: "06",
    title: "Moshpit App",
    kicker: "Tamper-Proof Field Verification App",
    description:
      "Designed Moshpit, a tamper-proof mobile application for field auditors to capture geo-tagged proof of performance, monitor live campaign sites, and accelerate field workflows.",
    features: [
      "Tamper-proof field proof with geo-tagged logs & timestamps",
      "Offline-first camera capture for low-connectivity zones",
      "Automated sync with Brand Manager executive dashboards",
      "Seamless cross-platform deployment on iOS and Android",
    ],
    tech: ["iOS", "Android", "Mobile-First", "UI/UX Design"],
    liveUrl: "https://oohaudit.com/",
    caseStudyUrl:
      "https://www.behance.net/gallery/251451983/OOH-Audit-Tamper-Proof-Field-Verification-Ecosystem",
    appStoreUrl: "https://apps.apple.com/in/app/moshpit-app/id1438508518",
    uiType: "mobile",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Feb 2017 – Present",
    year: "2017–Present",
    role: "Senior UI/UX & Graphic Designer",
    company: "Hashbrown Systems Pvt. Ltd.",
    location: "Chandigarh, India",
    type: "experience",
    bullets: [
      "Lead designer for 10+ web and mobile products, owning design from concept through developer handoff.",
      "Created dashboards and analytics visualizations that improved task completion by ~30%.",
      "Optimized eCommerce flows, raising conversion rates by ~15–20%.",
      "Built reusable component libraries to ensure design consistency across products.",
      "Collaborated with developers and product teams through agile sprints.",
      "Created brand identities, logos, marketing assets, social media creatives, investor pitch decks and business presentations for product launches and client engagement.",
      "Mentored junior designers and introduced structured design review workflows.",
    ],
  },
  {
    period: "2011 – 2014",
    year: "2011–2014",
    role: "B.Tech, Computer Science",
    company: "Computer Science & Engineering",
    location: "India",
    type: "education",
    bullets: [
      "Focused on foundational computing, software architecture, user interface principles, and web technologies.",
    ],
  },
  {
    period: "2008 – 2011",
    year: "2008–2011",
    role: "Diploma, Computer Science",
    company: "Computer Science",
    location: "India",
    type: "education",
    bullets: [
      "Grounding in algorithmic problem-solving, graphic programming, and digital systems.",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    index: "01 / 06",
    numberDisplay: "9+",
    targetNumber: 9,
    suffix: "Yrs",
    label: "Design Experience",
    caption: "UI/UX Leadership",
    detail:
      "Leading design for mobile apps, responsive websites, and enterprise SaaS platforms from concept to handoff.",
    platform: "Hashbrown Systems",
    platformKey: "hashbrown",
  },
  {
    index: "02 / 06",
    numberDisplay: "10+",
    targetNumber: 10,
    suffix: "Apps",
    label: "Live Products",
    caption: "Shipped at Scale",
    detail:
      "Cross-sector portfolio spanning eCommerce, B2B marketplaces, SaaS, and outdoor advertising networks.",
    platform: "Production",
    platformKey: "production",
  },
  {
    index: "03 / 06",
    numberDisplay: "~30%",
    targetNumber: 30,
    prefix: "~",
    suffix: "%",
    label: "Task Completion Boost",
    caption: "Analytics Dashboards",
    detail:
      "Measured ~30% faster task execution through redesigned data visualization and operational dashboards.",
    platform: "OOH Audit",
    platformKey: "oohaudit",
  },
  {
    index: "04 / 06",
    numberDisplay: "~20%",
    targetNumber: 20,
    prefix: "~15–",
    suffix: "%",
    label: "Conversion Lift",
    caption: "eCommerce Flow UX",
    detail:
      "Optimized browsing-to-payment user journeys delivering 15–20% higher shopping cart conversion.",
    platform: "Eikaebana",
    platformKey: "eikaebana",
  },
  {
    index: "05 / 06",
    numberDisplay: "45K+",
    targetNumber: 45,
    suffix: "K+",
    label: "Organic Reach",
    caption: "SmartToonKids AI Media",
    detail:
      "Conceptualized and produced AI-generated educational video content driving broad reach.",
    platform: "Instagram",
    platformKey: "instagram",
  },
  {
    index: "06 / 06",
    numberDisplay: "100K+",
    targetNumber: 100,
    suffix: "K+",
    label: "Engagement",
    caption: "Audience Interaction",
    detail:
      "Cumulative likes and shares achieved through high-retention visual storytelling and character design.",
    platform: "SmartToonKids",
    platformKey: "smarttoonkids",
  },
];

export const CERTIFICATIONS: never[] = [];
