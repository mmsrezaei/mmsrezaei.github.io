/* =====================================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   Edit text, add news items, swap photos here — App.jsx never needs to change.
   Images/files go in the /public folder and are referenced as "./images/..."
   ===================================================================== */

// Your profile photo. Put the file at public/images/profile.jpg, then set:
//   export const PROFILE_PHOTO = "./images/profile.jpg";
export const PROFILE_PHOTO = "../public/images/profile.jpg";
export const PROFILE_ALT = "Portrait of Mirmahdi Seyedrezaei";

export const MOTTOS = {
  first: { before: "We are", big: "bigger", mid: "than our", small: "problems", after: "." },
  second: "This too shall pass.",
  verse: {
    fa: "دائم یکسان نباشد حال دوران، غم مخور",
    translit: "Dā’em yeksān nabāshad hāl-e dowrān, gham makhor",
    en: "The state of the world never stays the same. Do not grieve.",
  },
};

// Humanitarian roots — drawn from the CV (volunteer, service, and resilience work).
export const HUMANITARIAN = [
  {
    range: "2014–2022",
    title: "SOSA Poverty",
    role: "Social-environmental activist and volunteer; voluntary leadership (2017–2021)",
    text: "Built and led multidisciplinary volunteer teams in humanitarian response, knowledge management, and educational planning for an international NGO with general consultative status at the UN ECOSOC.",
  },
  {
    range: "2019",
    title: "Iran nationwide floods",
    role: "Response team organizer; conference executive manager; editor",
    text: "Organized the NGO's response teams, ran the Iran Nationwide Flood Conference at Sharif University, contributed to the national flood report (proposing “Green Relief” for post-disaster activities), and edited the proceedings.",
  },
  {
    range: "2021–2022",
    title: "Tabriz Historic Bazaar",
    role: "Research assistant, seismic resilience assessment",
    text: "Assessed the resilience of a UNESCO World Heritage site across cultural, physical, socioeconomic, and organizational dimensions: 5 dimensions, 17 indicators, 50 sub-indicators, with GIS mapping of vulnerability.",
  },
];

export const NEWS = [
  {
    date: "2025-09-15",
    title: "Nature feature on a SHINE mentoring connection",
    desc: "A high-school mentee I supervised in USC's SHINE program co-authored a Nature piece on how the mentorship shaped her path into science.",
    link: "https://www.nature.com/articles/d41586-025-02706-4",
    linkLabel: "Read on Nature",
    image: null,
    placeholder: false,
  },
  {
    date: "2024-11-01",
    title: "Palm City Transit Village presented at GreenBuild",
    desc: "Represented the USC research team on a panel with National CORE, Arup, and Studio E Architects discussing a 288-unit all-electric affordable housing development.",
    link: "https://streamly.video/video/palm-city-transit-village-reimagining-affordable-housing-s-carbon-constrained-future",
    linkLabel: "Watch the session",
    image: null,
    placeholder: false,
  },
  {
    date: "2023-03-01",
    title: "USC Viterbi feature on workplace stress research",
    desc: "Coverage of the NSF Smart and Connected Health-funded project using sensing and AI to understand and mitigate job stress.",
    link: "https://viterbischool.usc.edu/news/2023/03/stressed-at-work-usc-researchers-aim-to-change-that/",
    linkLabel: "Read the feature",
    image: null,
    placeholder: false,
  },
  {
    date: "",
    title: "Add a news item",
    desc: "Short description of the update — a talk, award, new paper, or media mention. Replace this placeholder in the NEWS array in data.js.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: true,
  },
  {
    date: "",
    title: "Add a news item",
    desc: "Another open slot. Duplicate this object in the NEWS array and fill in date, title, desc, link, and image as needed (images go in public/images/news).",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: true,
  },
];

export const PERSONAL_PHOTOS = [
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
];

export const PERSONAL_INTRO =
  "Outside the lab: replace this paragraph with a few sentences about your life outside research — hobbies, travel, family, whatever you want to share. This section is entirely yours to edit in the PERSONAL_INTRO constant.";

/* ===================================================================== */

export const PUBLICATIONS = [
  // ---- Journal: Published ----
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "How environmental conditions shape workload in hybrid work: a longitudinal mediation analysis", venue: "Building and Environment, 303, 114973", link: "https://doi.org/10.1016/j.buildenv.2026.114973", linkLabel: "doi.org/10.1016/j.buildenv.2026.114973" },
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal exploration of productivity and well-being in hybrid work through ecological momentary assessment and environmental sensing", venue: "Journal of Occupational and Environmental Medicine (advance online)", link: "https://doi.org/10.1097/JOM.0000000000003833", linkLabel: "doi.org/10.1097/JOM.0000000000003833" },
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Awada, Lucas, Roll", title: "Interaction effects of indoor environmental quality on stress among young adults: an experimental study", venue: "Indoor and Built Environment (advance online)", link: "https://doi.org/10.1177/1420326X261480440", linkLabel: "doi.org/10.1177/1420326X261480440" },
  { type: "Journal", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Kohut", title: "Exploring energy consumption in energy-efficient, affordable housing in Southern California: behavioral insights and financial implications", venue: "Energy and Buildings, 331, 115369", link: "https://doi.org/10.1016/j.enbuild.2025.115369", linkLabel: "doi.org/10.1016/j.enbuild.2025.115369" },
  { type: "Journal", status: "Published", year: 2024, authors: "Seyedrezaei, Tak, Becerik-Gerber", title: "Consumption and conservation behaviors among affordable housing residents in Southern California", venue: "Energy and Buildings, 304, 113840", link: "https://doi.org/10.1016/j.enbuild.2023.113840", linkLabel: "doi.org/10.1016/j.enbuild.2023.113840" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Becerik-Gerber, Awada, Contreras, Boeing", title: "Equity in the built environment: a systematic review", venue: "Building and Environment, 245, 110827", link: "https://doi.org/10.1016/j.buildenv.2023.110827", linkLabel: "doi.org/10.1016/j.buildenv.2023.110827" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Awada, Becerik-Gerber, Lucas, Roll", title: "Interaction effects of indoor environmental quality factors on cognitive performance and perceived comfort of young adults in open-plan offices in a North American Mediterranean climate", venue: "Building and Environment, 244, 110743", link: "https://doi.org/10.1016/j.buildenv.2023.110743", linkLabel: "doi.org/10.1016/j.buildenv.2023.110743" },
  { type: "Journal", status: "Published", year: 2023, authors: "Awada, Becerik-Gerber, Liu, Seyedrezaei, et al.", title: "Ten questions concerning the impact of environmental stress on office workers", venue: "Building and Environment, 229, 109964", link: "https://doi.org/10.1016/j.buildenv.2022.109964", linkLabel: "doi.org/10.1016/j.buildenv.2022.109964" },
  { type: "Journal", status: "Published", year: 2023, authors: "Moaddab, Amini Hosseini, Seyedrezaei", title: "A holistic approach for evaluating system performance and earthquake resilience in historic-commercial urban fabrics", venue: "Natural Hazards, 116(1), 1261–1289", link: "https://doi.org/10.1007/s11069-022-05720-1", linkLabel: "doi.org/10.1007/s11069-022-05720-1" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al.", title: "The field of human-building interaction for convergent research and innovation for intelligent built environments", venue: "Scientific Reports, 12, 22092", link: "https://doi.org/10.1038/s41598-022-25047-y", linkLabel: "doi.org/10.1038/s41598-022-25047-y" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al.", title: "Ten questions concerning human-building interaction research for improving the quality of life", venue: "Building and Environment, 226, 109681", link: "https://doi.org/10.1016/j.buildenv.2022.109681", linkLabel: "doi.org/10.1016/j.buildenv.2022.109681" },
  // ---- Journal: Submitted ----
  { type: "Journal", status: "Submitted", year: 2026, authors: "Yang, Seyedrezaei, Becerik-Gerber, Kohut", title: "Similar predictions, different explanations: evaluating residential electricity consumption models in permanent supportive housing", venue: "Submitted to Advanced Engineering Informatics", link: "", linkLabel: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Reyes, Zang, Seyedrezaei, Liu, Becerik-Gerber, Lucas, Roll, Narayanan", title: "Sleep-work dynamics in naturalistic settings: a four-month longitudinal study", venue: "Submitted to Sleep Health", link: "", linkLabel: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Tajik, Varman, Seyedrezaei, Awada, Becerik-Gerber, et al.", title: "Charting the future of occupant-centric enabling technologies for well-being in buildings: challenges, gaps, and a research and application roadmap", venue: "Submitted to Building and Environment", link: "", linkLabel: "" },
  // ---- Journal: In preparation ----
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Unsupervised discovery of multiscale indoor environmental quality regimes and their links to occupant well-being", venue: "Manuscript in preparation", link: "", linkLabel: "" },
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Machine-learning re-identification risk in behavioral states inferred from indoor environmental sensing", venue: "Manuscript in preparation", link: "", linkLabel: "" },
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Beyond the average occupant: sensory sensitivity as a moderator of IEQ exposure–well-being relationships", venue: "Manuscript in preparation", link: "", linkLabel: "" },
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Yang, Becerik-Gerber", title: "From circuit-level load monitoring to personalized energy education: a data-driven resident archetype framework for affordable housing", venue: "Manuscript in preparation", link: "", linkLabel: "" },
  // ---- Conference: Published ----
  { type: "Conference", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Environmental comfort in hybrid work: a longitudinal preliminary field study of home and office workspaces", venue: "Proceedings of Indoor Air 2026, Singapore (presented by B. Becerik-Gerber)", link: "https://par.nsf.gov/biblio/10707203", linkLabel: "NSF PAR" },
  { type: "Conference", status: "Published", year: 2026, authors: "Seyedrezaei, Reyes, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal analysis of IEQ variability in office and home workspaces: insights for the future of hybrid work", venue: "Computing in Civil Engineering 2025, pp. 1058–1067, ASCE", link: "https://doi.org/10.1061/9780784486436.113", linkLabel: "doi.org/10.1061/9780784486436.113" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber", title: "Occupant satisfaction with building systems and thermostat usage in energy-efficient affordable housing in Southern California: preliminary findings", venue: "CIB Conferences, 1, Article 174", link: "https://doi.org/10.7771/3067-4883.1929", linkLabel: "doi.org/10.7771/3067-4883.1929" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas", title: "A preliminary investigation for understanding temperature's associations with office workers' psychological well-being: a close look into anxiety, motivation, and concentration", venue: "Computing in Civil Engineering 2024, pp. 568–572, ASCE", link: "https://doi.org/10.1061/9780784486139.061", linkLabel: "doi.org/10.1061/9780784486139.061" },
  { type: "Conference", status: "Published", year: 2024, authors: "Awada, Seyedrezaei, Becerik-Gerber, Lucas", title: "Investigating the interplay between indoor environmental quality and workers' health and productivity: preliminary results", venue: "Computing in Civil Engineering 2023, pp. 614–622, ASCE", link: "https://doi.org/10.1061/9780784485248.074", linkLabel: "doi.org/10.1061/9780784485248.074" },
  // ---- Book ----
  { type: "Book", status: "Published", year: 2024, authors: "Seyedrezaei (Ed.)", title: "Iran Nationwide Flood", venue: "Lohe Fekr Publishing Agency — proceedings of the 2019 conference, Sharif University of Technology", link: "", linkLabel: "" },
];

export const EDUCATION = [
  { degree: "Ph.D. in Civil Engineering", org: "University of Southern California", detail: "Advisor: Prof. Burçin Becerik-Gerber · iLAB", year: "Expected 2027" },
  { degree: "M.S. in Computer Science", org: "University of Southern California", detail: "", year: "2026" },
  { degree: "M.S. in Sustainable Engineering", org: "University of Southern California", detail: "", year: "2025" },
  { degree: "M.S. in Civil Engineering (Earthquake Engineering)", org: "Sharif University of Technology, Tehran, Iran", detail: "Advisor: Prof. Kiarash Dolatshahi", year: "2018" },
  { degree: "B.S. in Civil Engineering", org: "Sharif University of Technology, Tehran, Iran", detail: "", year: "2016" },
];

export const EXPERIENCE = [
  {
    range: "2026–Present",
    role: "Principal Investigator",
    org: "Work Pattern Boundedness and Occupational Stress: A Pilot Study",
    bullets: [
      "Independently authored the funded NIOSH-supported pilot proposal and lead study implementation, protocol, and EMA design",
      "Designed a 14-day within-person study of 20 office workers using four wearable and environmental devices (Empatica EmbracePlus, Atmotube PRO 2, Casella dBadge2, LYS)",
      "Built an EMA protocol targeting ~140 observations per participant, including momentary stress-source attribution",
    ],
    funding: "SCERC Pilot Project Research Training Program, NIOSH — $10,000 (2026–2027)",
  },
  {
    range: "2023–Present",
    role: "Co-Lead Researcher",
    org: "Longitudinal Study of Office Workers' Well-Being, Performance, and Comfort",
    bullets: [
      "Co-leading a 5-cohort, 60-participant field study across 109 home and office workspaces (~10 GB of raw data per participant)",
      "Developed a 7-method sensor quality-control framework and a multilevel analysis framework spanning 348 workload mediation models",
      "Building and Environment (2026): higher workload in offices (|d| = 0.27–0.55) alongside higher performance for 83% of participants, mediated by CO₂, TVOCs, PM2.5, and humidity",
      "JOEM (2026): higher office productivity (|d| = 0.68) and lower at-home stress (|d| = 0.27); residential air quality flagged as an occupational health intervention target",
    ],
    funding: "NSF Smart and Connected Health program, Grant No. IIS-2204942",
  },
  {
    range: "2023–Present",
    role: "Lead Researcher",
    org: "Energy Affordability, Solar Benefits, and Grid Responsiveness in Affordable Housing",
    bullets: [
      "Mixed-methods research across four properties combining surveys, interviews, and a year of utility bills",
      "Energy and Buildings (2025): rooftop PV with CARE discounts and credits cut bills by up to 80%; CUAC estimates diverged from tariff-based charges by up to 217% at one property",
      "Energy and Buildings (2024): 38% of residents reported bill increases (avg. $81); payment-difficulty residents were less aware of thermostat savings features but more willing to adopt automation",
      "Leading deployment of circuit-level NILM monitoring across 107 units to build household usage archetypes and an LLM-assisted energy education framework",
    ],
    funding: "California Energy Commission EPIC program (GFO-20-305)",
  },
  {
    range: "2022–2024",
    role: "Lead Researcher",
    org: "Interactive Effects of IEQ on Cognitive Performance, Comfort, and Stress",
    bullets: [
      "Designed and led a 2×2×2 factorial experiment (52 participants) crossing temperature, lighting color temperature, and background noise",
      "Building and Environment (2023): noise improved verbal creativity under cool-colored lighting but impaired it under warm-colored lighting, with gender- and BMI-dependent effects",
      "Indoor and Built Environment (2026): electrodermal stress responses depended jointly on temperature, lighting, noise, and individual characteristics",
    ],
    funding: "NSF Grant Nos. CMMI-1763134 (GOALI) and IIS-2204942",
  },
  {
    range: "2021–2023",
    role: "Lead Researcher",
    org: "Equity in the Built Environment",
    bullets: [
      "Developed the Built Environment–Group–Need (BGN) framework distinguishing distributional, recognitional, and procedural equity",
      "PRISMA systematic review (Building and Environment, 2023) screening 6,731 records and synthesizing 232 studies",
      "Identified underexamined infrastructure domains (water, energy) and populations (cognitive and sensory disabilities)",
    ],
    funding: "",
  },
  {
    range: "2022",
    role: "Workshop Participant & Co-Author",
    org: "Defining the Field of Human-Building Interaction (HBI)",
    bullets: [
      "Participated in workshops with 25 interdisciplinary researchers through the NSF-funded IN2WIBE network",
      "Co-authored the field-defining Scientific Reports (2022) paper and a Building and Environment \"ten questions\" paper",
    ],
    funding: "NSF Grant No. CMMI-2001742",
  },
];

export const TEACHING = [
  { range: "Spring 2026", title: "Invited Lecture — Lean Construction", org: "Georgia Southern University", detail: "~40 construction students · 91% satisfaction rating" },
  { range: "2021–2024", title: "Graduate Teaching Assistant", org: "University of Southern California", detail: "6 course offerings · overall evaluation 4.23/5.00 — CE 501 Construction Practices, CE 469 Sustainable Design & Construction, CE 334L Mechanical Behavior of Materials, CE 502 Construction Accounting, Finance & Strategy, CE 573 Advanced Technologies in AEC Practices" },
  { range: "2015–2017", title: "Teaching Assistant", org: "Sharif University of Technology", detail: "Design of Steel Structures I & II" },
];

export const MENTORSHIP = [
  { name: "Sue Young Choi", level: "Ph.D.", range: "2026–Present", note: "Intelligent built environments & neurodivergence; longitudinal EMA data processing" },
  { name: "Yuxin Yang", level: "Ph.D.", range: "2025–Present", note: "Explainable ML for residential electricity use; first-authored manuscript under review at Advanced Engineering Informatics" },
  { name: "Tao Zang", level: "Ph.D.", range: "2024–Present", note: "Multimodal occupational stress sensing; first-authored Indoor Environments (2026) and ASCE i3CE 2025" },
  { name: "Antonin Brun", level: "Ph.D.", range: "2023–Present", note: "Adaptive environmental interventions; first-authored ACM CHI Extended Abstracts (2025)" },
  { name: "Mireya Reyes", level: "Ph.D.", range: "2024–2026", note: "Sleep-work dynamics; first-authored manuscript submitted to Sleep Health" },
  { name: "Nathaniel Trujillo", level: "M.S.", range: "2026–Present", note: "Matrix profile methods for IEQ time-series pattern discovery" },
  { name: "Aadish Panchmia", level: "M.S.", range: "Summer 2024", note: "Residential utility data extraction; now Project Engineer, Moss & Associates" },
  { name: "Haotong Fu", level: "B.Sc.", range: "Spring 2023", note: "Physiological signal preprocessing; now M.S. student, Computer Science, USC" },
];

export const AWARDS = [
  "NSF Cyber-Physical Systems (CPS) Rising Star — 1 of 30 selected nationwide from 170+ applicants, 2025",
  "USC CEE Outstanding Research Assistant of the Year, 2025",
  "Top Peer Reviewer, ASCE OPEN: Multidisciplinary Journal of Civil Engineering, 2025",
  "USC Graduate School Fellowship, 2024–2025",
  "Das Family Travel Award (three-time recipient), 2023, 2024, 2025",
  "USC GSG Professional Development Grant (ASHRAE Winter Conference), 2025",
  "First place, HBI Online Hackathon (NSF-funded), 2022",
  "Top 0.1% among 260,000 participants, Iranian nationwide university entrance exam, 2012",
];

export const SERVICE = [
  "Journal reviewer: 51 reviews across 11 journals, including Building and Environment (19), Energy and Buildings (8), and ASCE OPEN (6)",
  "Conference reviewer, ASCE i3CE 2024 & 2025 (7 papers)",
  "Member, ASCE Visualization, Information Modeling, and Simulation (VIMS) Committee, 2025–Present",
  "Member, CIB W107 Construction in Developing Countries Committee, 2025–Present",
  "Student member, ASHRAE, 2024–Present",
];

export const PROJECTS = [
  { title: "IEQ sliding-window clustering", tag: "UMAP / HDBSCAN", desc: "Multi-cohort Awair sensor data reduced to latent indoor-environment regimes, run on USC's CARC HPC.", href: "#" },
  { title: "CO₂ MSTL decomposition pipeline", tag: "Time series", desc: "Weekly-template decomposition with gap-filling and drift correction across a multi-workspace batch at 1-minute resolution.", href: "#" },
  { title: "Multilevel mediation analysis", tag: "R / brms", desc: "IEQ features as mediators between workspace location and NASA-TLX workload, with parallelized sensitivity analyses.", href: "#" },
  { title: "NILM resident archetype pipeline", tag: "Python / explainable ML", desc: "Circuit-level load data across 107 affordable-housing units reduced to household usage archetypes for personalized energy education.", href: "#" },
];

