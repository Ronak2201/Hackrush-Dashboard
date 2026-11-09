export interface TrackItem {
  id: string;
  name: string;
  tag: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  gradient: string;
  accentColor: string;
  sampleProblems: string[];
  suggestedTech: string[];
}

export interface TimelineStage {
  id: number;
  stageNumber: string;
  title: string;
  date: string;
  day: string;
  type: 'milestone' | 'submission' | 'evaluation' | 'mentorship' | 'finale';
  description: string;
  isImportant?: boolean;
}

export interface AwardItem {
  id: string;
  rankTitle: string;
  category: 'podium' | 'special' | 'recognition';
  perks: string[];
  badge: string;
  highlightColor: string;
  description: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  tag: 'OFFICIAL' | 'DEMO' | 'URGENT';
  content: string;
  isDemo: boolean;
}

export const HACKATHON_META = {
  name: "HACKRUSH 2026",
  subTitle: "INNOVATION COMMAND CENTER",
  edition: "Flagship Hackathon",
  organizer: "Tech4Hack",
  institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
  partner: "Unstop",
  heading: "Ideas into Impact",
  tagline: "Pick a theme. Pick a problem. Build the fix.",
  format: "Online Hackathon",
  ceremonyVenue: "Offline Award Ceremony at IGDTUW Campus (Date TBA)",
  duration: "9th – 25th November 2026",
  submissionDeadline: "Monday, 16th November 2026, 11:59 PM IST",
  registrationDeadlineNotice: "Registration / Idea Submission: 9th Nov – 16th Nov 2026",
  prizePool: "To be Declared Soon",
  
  // Explicitly flagging the discrepancy between documents
  teamSizeNote: {
    briefStatement: "3 to 5 Members (Written brief)",
    posterStatement: "3 to 6 Members (Official banner poster)",
    flagMessage: "Discrepancy Flagged: Written brief specifies 3–5 members, while the official event poster specifies 3–6 members. Awaiting organizer confirmation."
  },
  
  eligibility: [
    "Engineering Students",
    "B-School & Management Students",
    "Undergraduate (UG)",
    "Postgraduate (PG)",
    "Arts, Commerce, Sciences & Others"
  ],
  
  // Reference images provided by user
  referenceImages: [
    {
      title: "HackRush Official Banner",
      path: "/assets/aistudio/IMG-20261109-WA0038_6351dd74.jpg",
      caption: "Tech4Hack IGDTUW & Unstop banner with funnel (Register → 80 → 30 → Win) and Teams of 3-6 note."
    },
    {
      title: "Themes, Eligibility & Star of Month",
      path: "/assets/aistudio/IMG-20261109-WA0040_0bd0641f.jpg",
      caption: "5 Themes, eligibility criteria, and Monthly Star of Month Head/Member recognition."
    },
    {
      title: "Awards & Recognition Document",
      path: "/assets/aistudio/IMG-20261109-WA0039_77b6a7d5.jpg",
      caption: "1st, 2nd, 3rd Position perks, Best Female Team, and Most Promising Startup Idea."
    },
    {
      title: "Stages and Timelines Document",
      path: "/assets/aistudio/IMG-20261109-WA0041_100067aa.jpg",
      caption: "All 9 chronological stages from 9th Nov Announcement to 25th Nov Result Declaration."
    }
  ]
};

export const TRACKS_DATA: TrackItem[] = [
  {
    id: "ai-ml-genai",
    name: "AI, Machine Learning & Generative AI",
    tag: "Track 01",
    iconName: "Cpu",
    shortDesc: "Build cutting-edge agentic workflows, autonomous systems, LLM fine-tunes, computer vision, and neural assistants.",
    fullDesc: "Harness the power of foundational models, generative multimodal systems, retrieval-augmented generation (RAG), and intelligent agents to solve real-world productivity, accessibility, and computational challenges.",
    gradient: "from-violet-600/30 via-indigo-600/20 to-purple-900/40",
    accentColor: "#8b5cf6",
    sampleProblems: [
      "Autonomous accessibility tools for visually impaired students",
      "Domain-specific RAG copilots for vernacular legal or medical queries",
      "Multimodal fraud and deepfake detection pipelines"
    ],
    suggestedTech: ["Python", "Gemini API", "PyTorch", "LangChain", "Vector DBs"]
  },
  {
    id: "fintech-blockchain",
    name: "Fintech & Blockchain",
    tag: "Track 02",
    iconName: "Coins",
    shortDesc: "Decentralized finance, algorithmic risk engines, fraud mitigation, programmable micropayments, and verifiable identity.",
    fullDesc: "Reimagine the economic rails through decentralized ledgers, zero-knowledge proofs, automated escrow contracts, automated micro-investing, and next-generation fraud detection for digital banking.",
    gradient: "from-blue-600/30 via-cyan-600/20 to-sky-900/40",
    accentColor: "#3b82f6",
    sampleProblems: [
      "Zero-knowledge compliance & KYC for cross-border student remittances",
      "Automated micro-insurance policies with smart contract triggers",
      "Real-time fraud defense for UPI and digital wallet transactions"
    ],
    suggestedTech: ["Solidity", "Ethers.js", "Ethereum / Polygon", "Rust", "Web3.js"]
  },
  {
    id: "healthtech-biotech",
    name: "HealthTech & Biotech",
    tag: "Track 03",
    iconName: "Activity",
    shortDesc: "Predictive diagnostics, mental wellness analytics, remote patient telemetry, and genomic data visualization.",
    fullDesc: "Empower patients, researchers, and healthcare professionals through non-invasive wearable telemetry, assistive AI diagnostics, decentralized electronic health records (EHR), and public health outbreak trackers.",
    gradient: "from-emerald-600/30 via-teal-600/20 to-green-950/40",
    accentColor: "#10b981",
    sampleProblems: [
      "Early anomaly detection for cardiovascular telemetry from consumer wearables",
      "Privacy-first decentralized medical prescription and record locker",
      "AI-driven triaging assistant for rural primary healthcare clinics"
    ],
    suggestedTech: ["TensorFlow", "FastAPI", "FHIR / HL7", "WebRTC", "React Native"]
  },
  {
    id: "cybersecurity-safety",
    name: "Cybersecurity & Digital Safety",
    tag: "Track 04",
    iconName: "ShieldCheck",
    shortDesc: "Threat intelligence, zero-trust perimeter defense, endpoint protection, women's digital safety, and vulnerability scanners.",
    fullDesc: "Fortify digital perimeters against adversarial attacks, social engineering, identity theft, and online harassment with proactive threat monitoring, encryption layers, and automated incident triage.",
    gradient: "from-rose-600/30 via-pink-600/20 to-red-950/40",
    accentColor: "#f43f5e",
    sampleProblems: [
      "Real-time cyber harassment and stalking prevention shield for women online",
      "Zero-trust credential leak prober across public code repositories",
      "Lightweight IoT firmware security validator and honeypot monitor"
    ],
    suggestedTech: ["Rust", "Go", "Wireshark", "Cryptography API", "Docker"]
  },
  {
    id: "smart-cities-sustainability",
    name: "Smart Cities & Sustainability",
    tag: "Track 05",
    iconName: "Leaf",
    shortDesc: "Clean energy grids, intelligent traffic routing, circular waste tracking, water management, and carbon accounting.",
    fullDesc: "Design resilient urban infrastructure and eco-conscious platforms using geospatial intelligence, IoT sensor grids, smart traffic telemetry, dynamic routing, and carbon offset verification systems.",
    gradient: "from-amber-600/30 via-yellow-600/20 to-orange-950/40",
    accentColor: "#f59e0b",
    sampleProblems: [
      "Dynamic urban traffic congestion clearance for emergency ambulances",
      "Automated municipal water loss detection and sensor-grid alert system",
      "Decentralized carbon credit verification for university campus solar grids"
    ],
    suggestedTech: ["Mapbox / Leaflet", "Node.js", "MQTT / IoT", "PostGIS", "Tailwind"]
  }
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 1,
    stageNumber: "01",
    title: "Official Announcement",
    date: "9th November 2026",
    day: "Monday",
    type: "milestone",
    description: "HackRush 2026 officially unveiled across social handles and Unstop. Problem tracks, eligibility guidelines, and challenge rules published.",
    isImportant: false
  },
  {
    id: 2,
    stageNumber: "02",
    title: "Idea / PPT Submission Begins",
    date: "9th November 2026",
    day: "Monday",
    type: "submission",
    description: "Portal opens for all registered teams to submit their problem statement formulation, proposed tech stack, and pitch deck (PPT).",
    isImportant: true
  },
  {
    id: 3,
    stageNumber: "03",
    title: "Idea / PPT Submission Ends",
    date: "16th November 2026",
    day: "Monday",
    type: "submission",
    description: "Final deadline for Phase 1 Idea / PPT submission portal. All submissions undergo initial screening by the Tech4Hack panel.",
    isImportant: true
  },
  {
    id: 4,
    stageNumber: "04",
    title: "Result of Top 80 Teams",
    date: "18th November 2026",
    day: "Wednesday",
    type: "evaluation",
    description: "Top 80 shortlisted teams announced across all 5 tracks based on innovation, technical feasibility, and problem-solution fit.",
    isImportant: true
  },
  {
    id: 5,
    stageNumber: "05",
    title: "Mentorship Round Begins",
    date: "19th November 2026",
    day: "Thursday",
    type: "mentorship",
    description: "Shortlisted Top 80 teams get paired with industry mentors and technical guides for architecture review and prototype planning.",
    isImportant: false
  },
  {
    id: 6,
    stageNumber: "06",
    title: "Mentorship Round Ends",
    date: "20th November 2026",
    day: "Friday",
    type: "mentorship",
    description: "Mentorship feedback collected, project refinements concluded, and final evaluation criteria locked.",
    isImportant: false
  },
  {
    id: 7,
    stageNumber: "07",
    title: "Result of Top 30 Teams",
    date: "21st November 2026",
    day: "Saturday",
    type: "evaluation",
    description: "Top 30 Finalist teams announced to advance into the live Online Finale round.",
    isImportant: true
  },
  {
    id: 8,
    stageNumber: "08",
    title: "Finale Round (Online)",
    date: "22nd November 2026",
    day: "Sunday",
    type: "finale",
    description: "Online prototype demonstrations, code defense, and live jury evaluations for the Top 30 teams.",
    isImportant: true
  },
  {
    id: 9,
    stageNumber: "09",
    title: "Result Declaration",
    date: "25th November 2026",
    day: "Wednesday",
    type: "milestone",
    description: "Official declaration of HackRush 2026 winners and category awards.",
    isImportant: true
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "first-position",
    rankTitle: "First Position",
    category: "podium",
    perks: ["Internship Opportunity", "Platform Credits", "Exclusive Goodies & Swag"],
    badge: "1st Place Champion",
    highlightColor: "#f59e0b",
    description: "Awarded to the overall highest-scoring team displaying unmatched technical innovation, execution, and presentation."
  },
  {
    id: "second-position",
    rankTitle: "Second Position",
    category: "podium",
    perks: ["Internship Opportunity", "Platform Credits", "Exclusive Goodies & Swag"],
    badge: "2nd Place Runner-Up",
    highlightColor: "#94a3b8",
    description: "Awarded to the first runner-up team demonstrating exemplary prototype fidelity and domain impact."
  },
  {
    id: "third-position",
    rankTitle: "Third Position",
    category: "podium",
    perks: ["Internship Opportunity", "Platform Credits", "Exclusive Goodies & Swag"],
    badge: "3rd Place Runner-Up",
    highlightColor: "#d97706",
    description: "Awarded to the second runner-up team for distinguished engineering quality and clear problem framing."
  },
  {
    id: "best-female-team",
    rankTitle: "Best Female Team",
    category: "special",
    perks: ["Special Goodies & Swag Pack", "Feature Spotlight on Tech4Hack IGDTUW handles", "Mentorship Access"],
    badge: "Women in Tech Leader",
    highlightColor: "#ec4899",
    description: "Flagship recognition championing women in STEM and technical leadership from IGDTUW and universities nationwide."
  },
  {
    id: "promising-startup",
    rankTitle: "Most Promising Startup Idea",
    category: "special",
    perks: ["Startup Goodies", "Incubation Guidance", "Founder Network Connect"],
    badge: "Venture Impact",
    highlightColor: "#8b5cf6",
    description: "Recognizing the project with the strongest commercial viability, scalability, and go-to-market execution."
  },
  {
    id: "star-month-head",
    rankTitle: "Star of the Month Head",
    category: "recognition",
    perks: ["Certificate of Excellence", "Monthly Distinction", "Leadership Citation"],
    badge: "Tech4Hack IGDTUW Monthly Head",
    highlightColor: "#06b6d4",
    description: "Monthly leadership honor conferred by Tech4Hack IGDTUW for outstanding hackathon coordination and technical direction."
  },
  {
    id: "star-month-member",
    rankTitle: "Star of the Month Member",
    category: "recognition",
    perks: ["Certificate of Recognition", "Monthly Distinction", "Active Contributor Citation"],
    badge: "Tech4Hack IGDTUW Monthly Member",
    highlightColor: "#3b82f6",
    description: "Monthly merit honor conferred by Tech4Hack IGDTUW for dedicated organizing committee contribution and peer mentorship."
  }
];

export const ANNOUNCEMENTS_DATA: AnnouncementItem[] = [
  {
    id: "ann-01",
    title: "HackRush 2026 Idea/PPT Submission Window Live",
    date: "9 Nov 2026",
    tag: "OFFICIAL",
    content: "The Unstop submission portal is now active for all registered teams. Upload your problem statement and pitch presentation before Monday, 16 Nov 2026, 11:59 PM IST.",
    isDemo: false
  },
  {
    id: "ann-02",
    title: "Team Size Clarification in Review",
    date: "9 Nov 2026",
    tag: "OFFICIAL",
    content: "Note on Team Size: Written brief specifies 3–5 members, while the official poster specifies 3–6 members. Both configurations are presently accepted while organizing leads finalize the exact upper threshold.",
    isDemo: false
  },
  {
    id: "ann-03",
    title: "Offline Award Ceremony Venue Confirmed at IGDTUW",
    date: "9 Nov 2026",
    tag: "OFFICIAL",
    content: "While the hackathon rounds and finale are held online, the physical Award Ceremony will take place at the historic Indira Gandhi Delhi Technical University for Women (IGDTUW) campus in Delhi.",
    isDemo: false
  },
  {
    id: "ann-04",
    title: "Tech4Hack PPT Template & Evaluation Rubric Guidelines",
    date: "10 Nov 2026",
    tag: "DEMO",
    content: "Sample demonstration notice: Download the recommended 7-slide pitch deck structure covering Problem, Proposed Architecture, Feasibility, and Impact.",
    isDemo: true
  },
  {
    id: "ann-05",
    title: "Mentor Office Hours Schedule for Shortlisted Top 80",
    date: "11 Nov 2026",
    tag: "DEMO",
    content: "Sample demonstration notice: Top 80 teams will receive private Discord mentor calendar invites following the Nov 18 announcement.",
    isDemo: true
  }
];
