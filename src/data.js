/* =====================================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   Edit text, add news items, swap photos here. App.jsx never needs to change.
   Images/files go in the /public folder and are referenced as "./images/..."
   Content last checked against CV: October 2026.
   ===================================================================== */

// ---------- Profile ----------
export const PROFILE_PHOTO = "./images/profile.jpeg";
export const PROFILE_ALT = "Portrait of Mirmahdi Seyedrezaei";

export const PROFILE = {
  name: "Mirmahdi Seyedrezaei",
  short: "M. Seyedrezaei",
  role: "Ph.D. Candidate · Civil and Environmental Engineering · University of Southern California",
  email: "seyedrez@usc.edu",
  cv: "./CV_Mirmahdi_Seyedrezaei.pdf",
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=O6CRJkMAAAAJ&hl=en" },
    { label: "ORCID", href: "https://orcid.org/0000-0003-4169-200X" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mirmahdi-seyedrezaei/" },
    { label: "GitHub", href: "https://github.com/mmsrezaei" },
  ],
};

// ---------- Hero ----------
export const HERO = {
  eyebrow: "Human-building interaction · Cyber-physical systems · Human-centered AI",
  headline: "Buildings that sense, understand, and adapt to the people inside them.",
  lede:
    "I study how indoor environments shape people's health, comfort, and energy costs, and how buildings, " +
    "operated as cyber-physical systems, can use that evidence to adapt. My work combines field sensing, " +
    "wearables, and momentary surveys with statistical and machine learning models, from shared offices " +
    "and affordable homes to habitats where people cannot simply step outside.",
  note:
    "My doctoral work has appeared in Building and Environment, Energy and Buildings, and the Journal of " +
    "Occupational and Environmental Medicine, with support from the National Science Foundation, the California " +
    "Energy Commission, and NIOSH. I am grateful to the students, residents, and collaborators who made it possible.",
  status: "On the 2026–27 academic job market · U.S. permanent resident",
};

// Where the work sits. Shown as a row of labels under the hero.
export const FIELDS = [
  { label: "Human-Building Interaction", note: "how people and buildings shape each other" },
  { label: "Cyber-Physical Systems", note: "sensing, models, and controls that act on spaces" },
  { label: "Human-Centered AI", note: "agents that represent people and explain decisions" },
  { label: "Human-Computer Interaction", note: "trust, override, and interfaces occupants use" },
  { label: "Occupant Health", note: "stress, comfort, workload, and well-being" },
  { label: "Habitats on Earth and Beyond", note: "homes under stress to sealed habitats" },
];

// ---------- Research vision (matches Figure 1 of the research statement) ----------
export const VISION = {
  intro:
    "Buildings now measure themselves in detail, yet they still treat their occupants as one average person. " +
    "My research program moves from understanding individual occupants, to deciding among people who share a space, " +
    "to protecting them when conditions turn extreme.",
  thrusts: [
    {
      num: "01",
      verb: "Understand",
      title: "Personalized environmental intelligence and occupant-aware digital twins",
      text:
        "Learning how each person responds to combined, changing indoor conditions, and carrying those " +
        "person-specific models into the digital twins that operate buildings, with uncertainty and privacy built in.",
    },
    {
      num: "02",
      verb: "Negotiate",
      title: "Negotiated shared spaces and human-AI decision support",
      text:
        "When people share a space, whose needs should the building follow? AI agents that represent each occupant, " +
        "balance competing needs fairly over time, explain their choices, and never act without safety checks and human override.",
    },
    {
      num: "03",
      verb: "Protect",
      title: "Habitability under stress, from homes to sealed habitats",
      text:
        "Keeping people safe during wildfire smoke, extreme heat, and outages without raising their energy burden, " +
        "and carrying those lessons to isolated habitats where occupants cannot leave.",
    },
  ],
  foundation: ["field sensing", "person-specific models", "validated decisions", "occupant consent and override"],
};

// ---------- Mottos ----------
export const MOTTOS = {
  first: { before: "We are", big: "bigger", mid: "than our", small: "problems", after: "." },
  second: "This too shall pass.",
  verse: {
    fa: "دائم یکسان نباشد حال دوران، غم مخور",
    translit: "Dā’em yeksān nabāshad hāl-e dowrān, gham makhor",
    en: "The state of the world never stays the same. Do not grieve.",
  },
};

// ---------- News (newest first). Use any date text, e.g. "Mar 2025". ----------
// To add one, copy an object and fill in the fields. image is optional ("./images/news/xyz.jpg").
export const NEWS = [
  {
    date: "Jun 2026",
    title: "Hybrid work comfort study at Indoor Air 2026",
    desc: "Our longitudinal field study of home and office workspaces appeared in the Indoor Air 2026 proceedings, Singapore.",
    link: "https://par.nsf.gov/biblio/10707203",
    linkLabel: "Read the paper",
    image: null,
  },
  {
    date: "2026",
    title: "NIOSH-supported pilot grant as principal investigator",
    desc: "I conceived and wrote a pilot study on work-pattern boundedness and occupational stress, funded through the Southern California Education and Research Center.",
    link: "",
    linkLabel: "",
    image: null,
  },
  {
    date: "2026",
    title: "New papers in Building and Environment and JOEM",
    desc: "Two papers from our NSF-funded hybrid work study, on workload and on productivity and well-being at home and in the office.",
    link: "https://doi.org/10.1016/j.buildenv.2026.114973",
    linkLabel: "Building and Environment paper",
    image: null,
  },
  {
    date: "Sep 2025",
    title: "Nature article by a SHINE mentee",
    desc: "A high school student I mentored through USC's SHINE program coauthored a Nature article on how mentoring shaped her interest in science.",
    link: "https://www.nature.com/articles/d41586-025-02706-4",
    linkLabel: "Read on Nature",
    image: null,
  },
  {
    date: "Mar 2025",
    title: "NSF Cyber-Physical Systems Rising Star",
    desc: "Selected as one of 30 Ph.D. students and postdocs nationwide, from more than 170 applicants, for the 2025 CPS Rising Stars Workshop at Vanderbilt.",
    link: "https://cps-vo.org/group/CPSRisingStarsWorkshop25",
    linkLabel: "Workshop page",
    image: null,
  },
  {
    date: "Nov 2024",
    title: "Palm City Transit Village panel at Greenbuild",
    desc: "Represented the USC research team with National CORE, Arup, and Studio E Architects on a 288-unit all-electric affordable housing community.",
    link: "https://streamly.video/video/palm-city-transit-village-reimagining-affordable-housing-s-carbon-constrained-future",
    linkLabel: "Watch the session",
    image: null,
  },
];
export const NEWS_SHOWN = 4; // how many show before "Show all"

// ---------- Beyond the lab ----------
// Leave PERSONAL_INTRO empty and photos without src to hide this block entirely.
export const PERSONAL_INTRO = "";
export const PERSONAL_PHOTOS = [
  // { src: "./images/personal/trip.jpg", caption: "Caption here" },
];

/* ===================================================================== */

// ---------- Current and past research (from CV Research Experience) ----------
export const RESEARCH = [
  {
    range: "2026–Present",
    role: "Principal Investigator",
    title: "Work Pattern Boundedness and Occupational Stress",
    tags: ["Wearables", "EMA", "Occupational health"],
    summary:
      "How do the boundaries of when and where people work relate to occupational stress? A person-centered, location-agnostic monitoring study that separates environmental, organizational, interpersonal, and personal stressors.",
    bullets: [
      "Conceived the study and wrote the funded NIOSH-supported pilot proposal; lead protocol, multimodal sensing, and EMA design",
      "14-day within-person study of 20 office workers with four devices (Empatica EmbracePlus, Atmotube PRO 2, Casella dBadge2, LYS) capturing physiology, air quality, noise, and circadian light",
      "EMA protocol targeting about 140 observations per participant, with momentary stress-source attribution",
    ],
    funding: "Southern California Education and Research Center Pilot Project Research Training Program, supported by NIOSH ($10,000, 2026–2027)",
  },
  {
    range: "2023–Present",
    role: "Co-Lead Researcher",
    title: "Longitudinal Study of Office Workers' Well-Being, Performance, and Comfort",
    tags: ["Field sensing", "Mixed-effects models", "Hybrid work"],
    summary:
      "How do environmental, physiological, behavioral, and contextual factors shape stress, workload, productivity, and well-being across home and office workspaces?",
    bullets: [
      "Five-cohort field study of 50 office workers across home and office workspaces for 2–4 months each, combining IEQ sensors, audio badges, wearables, EMA, and interviews (about 10 GB of raw data per participant)",
      "Context-aware sensor quality-control framework combining seven error-detection methods; multilevel framework spanning 348 workload mediation models",
      "Building and Environment (2026): higher mental, physical, and time demands in offices (|d| = 0.27–0.55) alongside higher performance for 83% of participants, with indirect pathways through CO₂, TVOCs, PM2.5, and humidity",
      "JOEM (2026): higher productivity in offices (|d| = 0.68), lower stress at home (|d| = 0.27), and residential air quality identified as a potential occupational health intervention target",
      "Now extending to individualized exposure-response models (sensory sensitivity and neurodivergence), multiscale environmental regime discovery, and privacy-utility trade-offs in passive sensing",
    ],
    funding: "NSF Smart and Connected Health program, Grant No. IIS-2204942",
  },
  {
    range: "2023–Present",
    role: "Lead Researcher",
    title: "Energy Affordability, Solar Benefits, and Grid Responsiveness in Affordable Housing",
    tags: ["Energy equity", "NILM", "Community-engaged"],
    summary:
      "Do the financial benefits of clean energy actually reach low-income residents? USC's research examines residents' real energy costs, how benefits are distributed, and how they can take part in energy management.",
    bullets: [
      "Mixed-methods research across four energy-efficient affordable housing properties: surveys, interviews, and a year of utility bills",
      "Energy and Buildings (2025): rooftop PV with CARE discounts and credits cut bills by up to 80%, while the California Utility Allowance Calculator diverged from tariff-based charges by up to 217% at one property",
      "Energy and Buildings (2024): 38% of residents reported bill increases averaging $81; residents with payment difficulties knew less about thermostat energy-saving features but were more willing to adopt automated control",
      "Resident evidence contributed to the design of Palm City Transit Village, a 288-unit all-electric community with a solar-and-storage microgrid, now under construction",
      "Current phase: circuit-level load monitoring in 107 units across multifamily, senior, and permanent supportive housing, toward an LLM-assisted energy education framework and a grid-responsive housing system (both in development)",
    ],
    funding: "California Energy Commission EPIC program (GFO-20-305), with National CORE, Arup, Studio E Architects, and Build Momentum",
  },
  {
    range: "2022–2024",
    role: "Lead Researcher",
    title: "Interactive Effects of IEQ on Cognitive Performance, Comfort, and Stress",
    tags: ["Controlled experiment", "Physiology"],
    summary:
      "How do temperature, lighting, and noise act together, rather than one at a time, on performance, comfort, and physiological stress?",
    bullets: [
      "2 × 2 × 2 factorial experiment with 52 young adults: 20/25 °C, 2700/6500 K, and 50/65 dB",
      "ECG-derived heart rate variability and electrodermal activity (Polar H10, Empatica E4) with cognitive tests and comfort surveys",
      "Building and Environment (2023): noise helped verbal creativity under cool-colored lighting but hurt it under warm-colored lighting",
      "Indoor and Built Environment (2026): physiological responses depended jointly on temperature, lighting, noise, and individual characteristics",
    ],
    funding: "NSF Grant Nos. CMMI-1763134 (GOALI) and IIS-2204942",
  },
  {
    range: "2021–2023",
    role: "Lead Researcher",
    title: "Equity in the Built Environment",
    tags: ["Systematic review", "Framework"],
    summary: "Whose needs does building research overlook?",
    bullets: [
      "Developed the Built Environment–Group–Need (BGN) framework, distinguishing distributional, recognitional, and procedural equity",
      "PRISMA systematic review in Building and Environment (2023): 6,731 records screened, 232 studies synthesized",
      "Identified underexamined areas, including water and energy infrastructure and people with cognitive or sensory disabilities",
    ],
    funding: "",
  },
  {
    range: "2022",
    role: "Workshop Participant and Co-Author",
    title: "Defining the Field of Human-Building Interaction",
    tags: ["HBI"],
    summary: "NSF-funded workshops with 25 interdisciplinary researchers establishing a shared framework for human-building interaction.",
    bullets: [
      "Coauthored the Scientific Reports (2022) paper defining the field and a Building and Environment ten-questions paper on trust, control, collaboration, privacy, equity, and sustainability in adaptive buildings",
    ],
    funding: "NSF Grant No. CMMI-2001742",
  },
];

// ---------- Earlier work (civil engineering roots) ----------
export const EARLIER = [
  {
    range: "2020–2021",
    title: "Resilience Assessment of the Tabriz Historic Bazaar",
    text: "GIS-based seismic vulnerability and resilience assessment of a UNESCO World Heritage site using five dimensions, 17 indicators, and 50 sub-indicators (Natural Hazards, 2023).",
  },
  {
    range: "2018–2019",
    title: "Structural Retrofit Designer and Researcher, Sharif University of Technology",
    text: "Structural assessments of aging residential buildings and seismic retrofit strategies.",
  },
  {
    range: "2016–2018",
    title: "M.Sc. Thesis: Structural Health Monitoring",
    text: "Inverse eigenvalue algorithms to identify damage location and severity in 2D and 3D shear models, including soil–structure interaction. Advisor: Prof. Kiarash Dolatshahi.",
  },
];

// ---------- Funding ----------
export const FUNDING = [
  { status: "Funded", title: "Work Pattern Boundedness and Occupational Stress", sponsor: "SCERC, NIOSH-supported pilot program (through UCLA)", amount: "$10,000", years: "2026–2027", role: "Principal Investigator" },
  { status: "Funded", title: "CEC EPIC Grant, Phase II (affordable housing energy)", sponsor: "California Energy Commission; prime recipient National CORE", amount: "$8,000,000 consortium award", years: "2023–2027", role: "Lead Researcher, USC research component" },
  { status: "Funded", title: "Embodied Intelligence in Smart Workspaces (NSF #2533498)", sponsor: "National Science Foundation, CMMI M3X", amount: "$540,000", years: "2025–2028", role: "Proposal contributor" },
  { status: "Under review", title: "Personalized Indoor Environmental Quality for Occupant Health and Well-being", sponsor: "Halton Foundation", amount: "$60,000 requested", years: "2027–2028", role: "Developed aims, analysis plan, and timeline" },
];

// ---------- Publications ----------
// first: true marks first-authored work (shown with a dot).
export const PUBLICATIONS = [
  { type: "Journal", status: "Published", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "How environmental conditions shape workload in hybrid work: a longitudinal mediation analysis", venue: "Building and Environment, 303, 114973", link: "https://doi.org/10.1016/j.buildenv.2026.114973" },
  { type: "Journal", status: "Published", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal exploration of productivity and well-being in hybrid work through ecological momentary assessment and environmental sensing", venue: "Journal of Occupational and Environmental Medicine (advance online)", link: "https://doi.org/10.1097/JOM.0000000000003833" },
  { type: "Journal", status: "Published", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Awada, Lucas, Roll", title: "Interaction effects of indoor environmental quality on stress among young adults: an experimental study", venue: "Indoor and Built Environment (advance online)", link: "https://doi.org/10.1177/1420326X261480440" },
  { type: "Journal", status: "Published", year: 2025, first: true, authors: "Seyedrezaei, Becerik-Gerber, Kohut", title: "Exploring energy consumption in energy-efficient, affordable housing in Southern California: behavioral insights and financial implications", venue: "Energy and Buildings, 331, 115369", link: "https://doi.org/10.1016/j.enbuild.2025.115369" },
  { type: "Journal", status: "Published", year: 2024, first: true, authors: "Seyedrezaei, Tak, Becerik-Gerber", title: "Consumption and conservation behaviors among affordable housing residents in Southern California", venue: "Energy and Buildings, 304, 113840", link: "https://doi.org/10.1016/j.enbuild.2023.113840" },
  { type: "Journal", status: "Published", year: 2023, first: true, authors: "Seyedrezaei, Becerik-Gerber, Awada, Contreras, Boeing", title: "Equity in the built environment: a systematic review", venue: "Building and Environment, 245, 110827", link: "https://doi.org/10.1016/j.buildenv.2023.110827" },
  { type: "Journal", status: "Published", year: 2023, first: true, authors: "Seyedrezaei, Awada, Becerik-Gerber, Lucas, Roll", title: "Interaction effects of indoor environmental quality factors on cognitive performance and perceived comfort of young adults in open-plan offices in North American Mediterranean climate", venue: "Building and Environment, 244, 110743", link: "https://doi.org/10.1016/j.buildenv.2023.110743" },
  { type: "Journal", status: "Published", year: 2023, authors: "Awada, Becerik-Gerber, Liu, Seyedrezaei, Lu, Xenakis, Lucas, Roll, Narayanan", title: "Ten questions concerning the impact of environmental stress on office workers", venue: "Building and Environment, 229, 109964", link: "https://doi.org/10.1016/j.buildenv.2022.109964" },
  { type: "Journal", status: "Published", year: 2023, authors: "Moaddab, Amini Hosseini, Seyedrezaei", title: "A holistic approach for evaluating system performance and earthquake resilience in historic-commercial urban fabrics", venue: "Natural Hazards, 116(1), 1261–1289", link: "https://doi.org/10.1007/s11069-022-05720-1" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al. (incl. Seyedrezaei)", title: "The field of human-building interaction for convergent research and innovation for intelligent built environments", venue: "Scientific Reports, 12, 22092", link: "https://doi.org/10.1038/s41598-022-25047-y" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al. (incl. Seyedrezaei)", title: "Ten questions concerning human-building interaction research for improving the quality of life", venue: "Building and Environment, 226, 109681", link: "https://doi.org/10.1016/j.buildenv.2022.109681" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Yang, Seyedrezaei, Becerik-Gerber, Kohut", title: "Similar predictions, different explanations: evaluating residential electricity consumption models in permanent supportive housing", venue: "Submitted to Advanced Engineering Informatics", link: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Reyes, Zang, Seyedrezaei, Liu, Becerik-Gerber, Lucas, Roll, Narayanan", title: "Sleep-work dynamics in naturalistic settings: a four-month longitudinal study", venue: "Submitted to Sleep Health", link: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Tajik, Varman, Seyedrezaei, Awada, Becerik-Gerber, et al.", title: "Charting the future of occupant-centric enabling technologies for well-being in buildings: challenges, gaps, and a research and application roadmap", venue: "Submitted to Building and Environment", link: "" },
  { type: "Journal", status: "In prep", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Unsupervised discovery of multiscale indoor environmental quality regimes and their links to occupant well-being", venue: "Manuscript in preparation", link: "" },
  { type: "Journal", status: "In prep", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Machine-learning re-identification risk in behavioral states inferred from indoor environmental sensing", venue: "Manuscript in preparation", link: "" },
  { type: "Journal", status: "In prep", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Beyond the average occupant: sensory sensitivity as a moderator of IEQ exposure–well-being relationships", venue: "Manuscript in preparation", link: "" },
  { type: "Journal", status: "In prep", year: 2026, first: true, authors: "Seyedrezaei, Yang, Becerik-Gerber", title: "From circuit-level load monitoring to personalized energy education: a data-driven resident archetype framework for affordable housing", venue: "Manuscript in preparation", link: "" },
  { type: "Conference", status: "Published", year: 2026, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Environmental comfort in hybrid work: a longitudinal preliminary field study of home and office workspaces", venue: "Proceedings of Indoor Air 2026, Singapore", link: "https://par.nsf.gov/biblio/10707203" },
  { type: "Conference", status: "Published", year: 2026, first: true, authors: "Seyedrezaei, Reyes, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal analysis of IEQ variability in office and home workspaces: insights for the future of hybrid work", venue: "Computing in Civil Engineering 2025, pp. 1058–1067, ASCE", link: "https://doi.org/10.1061/9780784486436.113" },
  { type: "Conference", status: "Published", year: 2025, first: true, authors: "Seyedrezaei, Becerik-Gerber", title: "Occupant satisfaction with building systems and thermostat usage in energy-efficient affordable housing in Southern California: preliminary findings", venue: "CIB Conferences, 1, Article 174", link: "https://doi.org/10.7771/3067-4883.1929" },
  { type: "Conference", status: "Published", year: 2025, first: true, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas", title: "A preliminary investigation for understanding temperature's associations with office workers' psychological well-being: a close look into anxiety, motivation, and concentration", venue: "Computing in Civil Engineering 2024, pp. 568–572, ASCE", link: "https://doi.org/10.1061/9780784486139.061" },
  { type: "Conference", status: "Published", year: 2024, authors: "Awada, Seyedrezaei, Becerik-Gerber, Lucas", title: "Investigating the interplay between indoor environmental quality and workers' health and productivity: preliminary results", venue: "Computing in Civil Engineering 2023, pp. 614–622, ASCE", link: "https://doi.org/10.1061/9780784485248.074" },
  { type: "Book", status: "Published", year: 2024, authors: "Seyedrezaei (Ed.)", title: "Iran Nationwide Flood", venue: "Lohe Fekr Publishing Agency; proceedings of the 2019 conference at Sharif University of Technology", link: "" },
];

// ---------- Talks and presentations ----------
export const TALKS = [
  { year: "2024", kind: "Panel", title: "Palm City Transit Village: Reimagining affordable housing's carbon-constrained future", venue: "Greenbuild International Conference and Expo, Philadelphia", link: "https://streamly.video/video/palm-city-transit-village-reimagining-affordable-housing-s-carbon-constrained-future" },
  { year: "2019", kind: "Panel (virtual)", title: "Iran nationwide floods: field experiences of relief volunteers", venue: "The Iran Circle, Harvard University", link: "https://www.irancircle.org/post/climate-change-iran" },
  { year: "2025", kind: "Talk", title: "Longitudinal analysis of IEQ variability in office and home workspaces", venue: "ASCE i3CE 2025, New Orleans", link: "" },
  { year: "2025", kind: "Talk", title: "Occupant satisfaction and thermostat usage in energy-efficient affordable housing", venue: "CIB World Building Congress 2025, Purdue University", link: "" },
  { year: "2025", kind: "Poster", title: "Personalized cyber-physical systems for health and well-being", venue: "NSF CPS Rising Stars Workshop, Vanderbilt University", link: "https://cps-vo.org/group/CPSRisingStarsWorkshop25" },
  { year: "2025", kind: "Poster", title: "A longitudinal study of indoor environmental quality in hybrid workspaces", venue: "SoCal Civil and Environmental Engineering Research Symposium", link: "https://cee.usc.edu/current-students/socal-ceers/" },
  { year: "2024", kind: "Talk", title: "Temperature and office workers' psychological well-being", venue: "ASCE i3CE 2024, Pittsburgh", link: "" },
  { year: "2024", kind: "Talk", title: "Interactive effects of IEQ factors on environmental stress", venue: "Future of the Building Industry and Ph.D. Symposium, University of Nebraska–Lincoln", link: "https://engineering.unl.edu/sites/unl.edu.engineering/files/media/file/2024-DSAEC-PhD-Symposium-Program.pdf" },
];

// ---------- Teaching ----------
export const TEACHING = [
  { range: "Spring 2026", title: "Invited Lecture, Lean Construction", org: "Georgia Southern University", detail: "About 40 construction students; 91% student satisfaction" },
  { range: "2021–2024", title: "Graduate Teaching Assistant", org: "University of Southern California", detail: "Overall student evaluation 4.23/5.00 across six offerings. CE 501 Construction Practices; CE 469 Sustainable Design and Construction; CE 334L Mechanical Behavior of Materials; CE 502 Construction Accounting, Finance, and Strategy; CE 573 Advanced Technologies in AEC Practices" },
  { range: "2015–2017", title: "Teaching Assistant", org: "Sharif University of Technology", detail: "Design of Steel Structures I and II; lectured on LRFD design of steel members and connections" },
];

export const COURSES = {
  undergrad: ["Building energy and systems", "Construction engineering and estimating", "Structural design (steel and concrete)"],
  grad: ["Data science for energy and buildings", "Building simulation", "Human-centered research methods for the built environment (new)", "Human-building interaction and occupant-aware digital twins (new)"],
};

// ---------- Mentoring ----------
export const MENTORSHIP = [
  { name: "Sue Young Choi", level: "Ph.D.", range: "2026–Present", note: "Intelligent built environments and neurodivergence; longitudinal EMA data" },
  { name: "Yuxin Yang", level: "Ph.D.", range: "2025–Present", note: "Explainable machine learning for residential electricity use; manuscript under review at Advanced Engineering Informatics" },
  { name: "Tao Zang", level: "Ph.D.", range: "2024–Present", note: "Environmental exposures and sick building syndrome; multimodal stress sensing. First-authored Indoor Environments (2026) and i3CE 2025 papers" },
  { name: "Antonin Brun", level: "Ph.D.", range: "2023–Present", note: "Stress archetypes and adaptive environmental interventions. First-authored ACM CHI Extended Abstracts (2025)" },
  { name: "Mireya Reyes", level: "Ph.D.", range: "2024–2026", note: "Sleep-work dynamics; first-authored manuscript submitted to Sleep Health" },
  { name: "Nathaniel Trujillo", level: "M.S.", range: "2026–Present", note: "Matrix profile methods for pattern discovery in IEQ time series" },
  { name: "Aadish Panchmia", level: "M.S.", range: "Summer 2024", note: "Utility bill data extraction for affordable housing research" },
  { name: "Haotong Fu", level: "B.Sc.", range: "Spring 2023", note: "ECG and EDA preprocessing for IEQ experiments" },
  { name: "Dylan Thai", level: "High school (SHINE)", range: "Summer 2024", note: "Predicting workplace productivity from indoor environmental data" },
  { name: "SHINE cohort, four students", level: "High school (SHINE)", range: "Summer 2023", note: "Resident-facing energy dashboards: gamification, sustainability, comfort, and cost transparency" },
];

// ---------- Service and leadership ----------
export const SERVICE = [
  "Journal reviewer, 51 reviews across 11 journals, including Building and Environment (19), Energy and Buildings (8), and ASCE OPEN (6)",
  "Conference reviewer, ASCE i3CE 2024 and 2025 (7 papers)",
  "Student Member, ASCE Visualization, Information Modeling, and Simulation (VIMS) Committee, 2025–Present",
  "Student Member, CIB W107 Construction in Developing Countries Committee, 2025–Present",
  "Student Member, ASHRAE, 2024–Present",
];

export const HUMANITARIAN = [
  {
    range: "2014–2022",
    title: "SOSA Poverty",
    role: "Volunteer leader (team leadership 2017–2021)",
    text: "Built and led multidisciplinary volunteer teams in humanitarian response, knowledge management, and educational planning for an international NGO with general consultative status at the UN Economic and Social Council.",
  },
  {
    range: "2019",
    title: "Iran nationwide floods",
    role: "Response organizer; conference chair and executive manager; editor",
    text: "Organized volunteer response teams and field assessments with affected communities, chaired a two-day national conference at Sharif University with more than 25 speakers, proposed “Green Relief” for the national flood report, and edited the proceedings (2024).",
  },
];

// ---------- Honors ----------
export const AWARDS = [
  "NSF Cyber-Physical Systems Rising Star, one of 30 selected nationwide from 170+ applicants, 2025",
  "Outstanding Research Assistant of the Year, USC Civil and Environmental Engineering, 2025",
  "Top Peer Reviewer, ASCE OPEN: Multidisciplinary Journal of Civil Engineering, 2025",
  "Professional Development Grant, USC Graduate Student Government, 2025",
  "USC Graduate School Fellowship, 2024–2025",
  "Das Family Travel Award, USC (three-time recipient), 2023–2025",
  "Selected Participant, Future of the Building Industry and Ph.D. Symposium, University of Nebraska–Lincoln, 2024",
  "First Place, Human-Building Interaction Online Hackathon (NSF-funded), 2022",
  "Exceptional Talent Admission, M.Sc. in Earthquake Engineering, Sharif University of Technology, 2016",
  "Top 0.1% of 260,000 participants, Iranian nationwide university entrance exam, 2012",
];

// ---------- Media ----------
export const MEDIA = [
  { year: "2025", title: "How a mentoring connection boosted my ambitions for a science career", outlet: "Nature", link: "https://www.nature.com/articles/d41586-025-02706-4" },
  { year: "2025", title: "Against the grain: research reinforces message that wood is good", outlet: "WorkTech Academy", link: "https://www.worktechacademy.com/against-the-grain-research-reinforces-message-that-wood-is-good/" },
  { year: "2024", title: "Palm City Transit Village, zero emission affordable housing design", outlet: "California Energy Commission", link: "https://www.energy.ca.gov/publications/2024/palm-city-transit-village-zero-emission-affordable-housing-design" },
  { year: "2023", title: "Mitigating on-the-job stress", outlet: "USC Chan Magazine", link: "https://chan.usc.edu/news/magazine/fall2023winter2024/mitigating-on-the-job-stress" },
  { year: "2023", title: "Stressed at work? USC researchers aim to change that", outlet: "USC Viterbi School of Engineering", link: "https://viterbischool.usc.edu/news/2023/03/stressed-at-work-usc-researchers-aim-to-change-that/" },
];

// ---------- Code ----------
// Add a real repository URL to href to show a link; empty href hides the link.
export const PROJECTS = [
  { title: "IEQ regime discovery", tag: "UMAP · HDBSCAN · HPC", desc: "Sliding-window clustering of multi-cohort indoor sensor data into recurring environmental regimes.", href: "" },
  { title: "CO₂ decomposition pipeline", tag: "Time series", desc: "Weekly-template decomposition with gap filling and drift correction at 1-minute resolution.", href: "" },
  { title: "Multilevel mediation analysis", tag: "R · brms", desc: "IEQ features as mediators between work location and NASA-TLX workload, with parallel sensitivity analyses.", href: "" },
  { title: "Resident archetype pipeline", tag: "Python · explainable ML", desc: "Circuit-level load data from affordable housing units reduced to household usage archetypes.", href: "" },
];
