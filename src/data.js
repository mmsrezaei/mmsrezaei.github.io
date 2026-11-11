/* =====================================================================
   ALL SITE CONTENT LIVES IN THIS FILE.
   Edit text, add news items, swap photos here — App.jsx never needs to change.
   Images/files go in the /public folder and are referenced as "./images/..."
   ===================================================================== */

// Your profile photo: the file lives at public/images/profile.jpeg
export const PROFILE_PHOTO = "./images/profile.jpeg";
export const PROFILE_ALT = "Portrait of Mirmahdi Seyedrezaei";

// Line typed out at the top of the page.
export const TYPED_LINE = "This too shall pass.";

export const INTERESTS = [
  "Occupant health, comfort, and well-being in buildings",
  "Multimodal sensing and human-state modeling",
  "Person-centered digital twins and transferable occupant models",
  "Human-AI negotiation in physically adaptive spaces",
  "Habitability as life support",
  "Energy affordability, demand flexibility, and equity in housing",
];

// Humanitarian roots, drawn from the CV (volunteer leadership and service).
export const HUMANITARIAN = [
  {
    range: "2014–2022",
    title: "SOSA Poverty",
    role: "Social-environmental activist and volunteer leader",
    text: "Built and led multidisciplinary volunteer teams (2017–2021) supporting humanitarian response, knowledge management, project documentation, and educational planning for an international NGO with general consultative status at the UN ECOSOC.",
  },
  {
    range: "2019",
    title: "Iran nationwide floods",
    role: "Conference chair and executive manager; response team organizer",
    text: "Organized volunteer response teams and field assessments with affected communities, chaired a two-day, nine-session conference with 25+ speakers at Sharif University of Technology, proposed “Green Relief” in the national flood report, and edited the proceedings (Lohe Fekr, 2024).",
  },
];

/* NEWS: newest first. Each item can have:
   date       "YYYY-MM-DD" (shown as e.g. Mar 12, 2025)
   dateLabel  optional text shown INSTEAD of date, e.g. "2026" or "Fall 2025"
   image      e.g. "./images/news/my-photo.jpg" (file goes in public/images/news)
   placeholder: true  shows a dashed "template" card; delete it when you don't need it */
export const NEWS = [
  {
    date: "",
    dateLabel: "2026",
    title: "NIOSH-supported pilot grant funded",
    desc: "My proposal on work-pattern boundedness and occupational stress was funded through the SCERC Pilot Project Research Training Program, supported by NIOSH ($10,000, 2026–2027). I serve as Principal Investigator.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: false,
  },
  {
    date: "",
    dateLabel: "2025",
    title: "Named Outstanding Research Assistant of the Year",
    desc: "Recognized by the USC Sonny Astani Department of Civil and Environmental Engineering.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: false,
  },
  {
    date: "",
    dateLabel: "2025",
    title: "Recognized as a Top Peer Reviewer by ASCE OPEN",
    desc: "Named a Top Peer Reviewer for ASCE OPEN: Multidisciplinary Journal of Civil Engineering.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: false,
  },
  {
    date: "2025",
    dateLabel: "",
    title: "NSF M3X award funded: Embodied Intelligence in Smart Workspaces",
    desc: "A $540,000 NSF award (CMMI, M3X program, 2025–2028) led by Prof. Burçin Becerik-Gerber with Prof. Gale Lucas and Prof. Yasser Khan as co-PIs. I contributed to the methodology and proposal, drawing on our NSF-funded longitudinal hybrid-work study.",
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2533498",
    linkLabel: "View the NSF award",
    image: null,
    placeholder: false,
  },
  {
    date: "2025",
    dateLabel: "",
    title: "Selected as an NSF CPS Rising Star",
    desc: "One of 30 Ph.D. students and postdocs chosen nationwide from 170+ applicants for the 2025 CPS Rising Stars Workshop at Vanderbilt University, where I presented a poster on personalized cyber-physical systems for health and well-being.",
    link: "https://cps-vo.org/group/CPSRisingStarsWorkshop25",
    linkLabel: "See the workshop",
    image: null,
    placeholder: false,
  },
  {
    date: "2024",
    dateLabel: "",
    title: "Palm City Transit Village presented at Greenbuild 2024",
    desc: "Represented the USC research team on a panel with National CORE, Arup, and Studio E Architects about a 288-unit all-electric affordable housing development with a solar-and-storage microgrid.",
    link: "https://streamly.video/video/palm-city-transit-village-reimagining-affordable-housing-s-carbon-constrained-future",
    linkLabel: "Watch the session",
    image: null,
    placeholder: false,
  },
  {
    date: "2024",
    dateLabel: "",
    title: "CEC EPIC Phase II funded",
    desc: "The California Energy Commission funded Phase II of the EPIC affordable-housing project, an $8M consortium award led by National CORE (2023–2027). I lead USC's research on resident engagement, energy-use monitoring, and household energy affordability and demand flexibility.",
    link: "https://nationalcore.org/national-core-partners-to-pioneer-next-generation-of-sustainable-affordable-housing-with-8-million-state-grant/",
    linkLabel: "Read the announcement",
    image: null,
    placeholder: false,
  },
];


export const PERSONAL_PHOTOS = [
  { src: "./images/palos-verdes.jpeg", caption: "Pacific Coast, Palos Verdes, California" },
  { src: "./images/glacier.jpeg", caption: "Glacier National Park, Montana" },
  { src: "./images/san-juan.jpeg", caption: "San Juan, Puerto Rico" },
  { src: "./images/chicago.jpeg", caption: "Chicago, Illinois" },
    { src: "./images/washingtonDC.jpeg", caption: "Washington, DC" },
  { src: "./images/yellowstone.jpeg", caption: "Yellowstone National Park, Montana" },
  { src: "./images/sedona.jpeg", caption: "Sedona, Arizona" },
  { src: "./images/neworleans.jpeg", caption: "New Orleans , Louisiana" },
];

export const PERSONAL_INTRO =
  "Away from the lab, I spend my time with my partner and our kittens. We bike along the Pacific Coast, hike, chase sunsets, and take road trips. I also love to travel, visit attractions, and unwind with a good TV show or movie.";

/* ===================================================================== */

export const PUBLICATIONS = [
  // ---- Journal: Published ----
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "How environmental conditions shape workload in hybrid work: a longitudinal mediation analysis", venue: "Building and Environment, 303, 114973", link: "https://doi.org/10.1016/j.buildenv.2026.114973", linkLabel: "doi.org/10.1016/j.buildenv.2026.114973" },
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal exploration of productivity and well-being in hybrid work through ecological momentary assessment and environmental sensing", venue: "Journal of Occupational and Environmental Medicine (advance online)", link: "https://doi.org/10.1097/JOM.0000000000003833", linkLabel: "doi.org/10.1097/JOM.0000000000003833" },
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Awada, Lucas, Roll", title: "Interaction effects of indoor environmental quality on stress among young adults: an experimental study", venue: "Indoor and Built Environment (advance online)", link: "https://doi.org/10.1177/1420326X261480440", linkLabel: "doi.org/10.1177/1420326X261480440" },
  { type: "Journal", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Kohut", title: "Exploring energy consumption in energy-efficient, affordable housing in Southern California: behavioral insights and financial implications", venue: "Energy and Buildings, 331, 115369", link: "https://doi.org/10.1016/j.enbuild.2025.115369", linkLabel: "doi.org/10.1016/j.enbuild.2025.115369" },
  { type: "Journal", status: "Published", year: 2024, authors: "Seyedrezaei, Tak, Becerik-Gerber", title: "Consumption and conservation behaviors among affordable housing residents in Southern California", venue: "Energy and Buildings, 304, 113840", link: "https://doi.org/10.1016/j.enbuild.2023.113840", linkLabel: "doi.org/10.1016/j.enbuild.2023.113840" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Becerik-Gerber, Awada, Contreras, Boeing", title: "Equity in the built environment: a systematic review", venue: "Building and Environment, 245, 110827", link: "https://doi.org/10.1016/j.buildenv.2023.110827", linkLabel: "doi.org/10.1016/j.buildenv.2023.110827" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Awada, Becerik-Gerber, Lucas, Roll", title: "Interaction effects of indoor environmental quality factors on cognitive performance and perceived comfort of young adults in open-plan offices in North American Mediterranean climate", venue: "Building and Environment, 244, 110743", link: "https://doi.org/10.1016/j.buildenv.2023.110743", linkLabel: "doi.org/10.1016/j.buildenv.2023.110743" },
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
  { type: "Conference", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Lucas, Roll, Narayanan", title: "Environmental comfort in hybrid work: a longitudinal preliminary field study of home and office workspaces", venue: "Proceedings of Indoor Air 2026, Singapore (presented by B. Becerik-Gerber)", link: "https://par.nsf.gov/biblio/10707203", linkLabel: "NSF PAR" },
  { type: "Conference", status: "Published", year: 2026, authors: "Seyedrezaei, Reyes, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal analysis of IEQ variability in office and home workspaces: insights for the future of hybrid work", venue: "Computing in Civil Engineering 2025, pp. 1058–1067, ASCE", link: "https://doi.org/10.1061/9780784486436.113", linkLabel: "doi.org/10.1061/9780784486436.113" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber", title: "Occupant satisfaction with building systems and thermostat usage in energy-efficient affordable housing in Southern California: preliminary findings", venue: "CIB Conferences, 1, Article 174", link: "https://doi.org/10.7771/3067-4883.1929", linkLabel: "doi.org/10.7771/3067-4883.1929" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas", title: "A preliminary investigation for understanding temperature's associations with office workers' psychological well-being: a close look into anxiety, motivation, and concentration", venue: "Computing in Civil Engineering 2024, pp. 568–572, ASCE", link: "https://doi.org/10.1061/9780784486139.061", linkLabel: "doi.org/10.1061/9780784486139.061" },
  { type: "Conference", status: "Published", year: 2024, authors: "Awada, Seyedrezaei, Becerik-Gerber, Lucas", title: "Investigating the interplay between indoor environmental quality and workers' health and productivity: preliminary results", venue: "Computing in Civil Engineering 2023, pp. 614–622, ASCE", link: "https://doi.org/10.1061/9780784485248.074", linkLabel: "doi.org/10.1061/9780784485248.074" },
  // ---- Book ----
  { type: "Book", status: "Published", year: 2024, authors: "Seyedrezaei (Ed.)", title: "Iran Nationwide Flood", venue: "Lohe Fekr Publishing Agency — proceedings of the 2019 conference, Sharif University of Technology", link: "", linkLabel: "" },
];

export const EDUCATION = [
  { degree: "Ph.D. in Civil Engineering", org: "University of Southern California", detail: "Advisor: Prof. Burçin Becerik-Gerber · iLAB", thesis: "Dissertation: Multidomain Analysis of Indoor Environmental Quality: Insights on Office Workers’ Stress, Mood, Productivity, Cognitive Functioning, and Comfort", year: "Expected 2027" },
  { degree: "M.S. in Computer Science", org: "University of Southern California", detail: "", year: "2026" },
  { degree: "M.S. in Sustainable Engineering", org: "University of Southern California", detail: "", year: "2025" },
  { degree: "M.S. in Civil Engineering (Earthquake Engineering)", org: "Sharif University of Technology, Tehran, Iran", detail: "Advisor: Prof. Kiarash Dolatshahi", year: "2018" },
  { degree: "B.S. in Civil Engineering", org: "Sharif University of Technology, Tehran, Iran", detail: "", year: "2016" },
];

export const EXPERIENCE = [
  {
    range: "2026–Present",
    role: "Principal Investigator and Lead Researcher",
    org: "Work Pattern Boundedness and Occupational Stress",
    bullets: [
      "Independently conceived the research and authored the funded $10,000 NIOSH-supported pilot proposal as Principal Investigator; lead study implementation, protocol development, multimodal sensing, and EMA design",
      "Designed a 14-day within-person study of 20 office workers, stratified by work-pattern boundedness, using four wearable and environmental devices (Empatica EmbracePlus, Atmotube PRO 2, Casella dBadge2, LYS)",
      "Built an EMA protocol targeting ~140 observations per participant, including momentary stress-source attribution",
    ],
    funding: "SCERC Pilot Project Research Training Program, NIOSH — $10,000 (2026–2027)",
  },
  {
    range: "2023–Present",
    role: "Co-Lead Researcher",
    org: "Longitudinal Study of Office Workers' Well-Being, Performance, and Comfort",
    bullets: [
      "Co-leading a five-cohort longitudinal field study of 50 office workers across their home and office workspaces (2–4 months per participant), combining IEQ sensors, audio badges, physiological wearables, EMA, and qualitative methods (~10 GB of raw data per participant)",
      "Developed a context-aware, seven-method sensor quality-control framework and a multilevel analysis framework spanning 348 workload mediation models",
      "Building and Environment (2026): higher mental, physical, and time demands in offices (|d| = 0.27–0.55) alongside higher performance for 83% of participants; indirect pathways linked work location to workload through CO₂, TVOCs, PM2.5, and humidity",
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
      "Contributed resident evidence to the design of Palm City Transit Village, a 288-unit all-electric affordable housing development with a solar-and-storage microgrid, now under construction; presented the design study at Greenbuild 2024",
      "Leading the current phase across multifamily, senior, and permanent supportive housing: circuit-level NILM monitoring in 107 units plus resident surveys to build household usage archetypes, an LLM-assisted energy education framework, and an agentic-AI cyber-physical system for grid-responsive housing (both in development)",
    ],
    funding: "California Energy Commission EPIC program (GFO-20-305); prime recipient National CORE",
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

// Kept generic on purpose: no names, only the kinds of students and projects.
export const MENTORSHIP = [
  { title: "Doctoral students", level: "Ph.D.", range: "2023–Present", note: "Mentored five Ph.D. students on intelligent built environments, explainable machine learning for residential electricity use, multimodal occupational stress sensing, adaptive environmental interventions, and sleep-work dynamics. Several have led first-authored papers and conference abstracts." },
  { title: "Master’s students", level: "M.S.", range: "2024–Present", note: "Guided projects on matrix profile methods for IEQ time-series pattern discovery and on residential utility data extraction." },
  { title: "Undergraduate researchers", level: "B.Sc.", range: "2023", note: "Supervised research on physiological signal preprocessing for occupant-state models." },
  { title: "USC SHINE high-school students", level: "High school", range: "2023–2024", note: "Guided a productivity-prediction project built on IEQ data (2024) and a four-student cohort building resident-facing energy dashboards for affordable housing (2023). One mentee co-authored a Nature article (2025) on the experience." },
];

export const AWARDS = [
  "NSF Cyber-Physical Systems (CPS) Rising Star — 1 of 30 selected nationwide from 170+ applicants, 2025",
  "USC CEE Outstanding Research Assistant of the Year, 2025",
  "Top Peer Reviewer, ASCE OPEN: Multidisciplinary Journal of Civil Engineering, 2025",
  "USC Graduate School Fellowship, 2024–2025",
  "Das Family Travel Award (three-time recipient), 2023, 2024, 2025",
  "USC GSG Professional Development Grant (ASHRAE Winter Conference), 2025",
  "Selected participant, Future of the Building Industry and Ph.D. Symposium, University of Nebraska–Lincoln, 2024",
  "First place, HBI Online Hackathon (NSF-funded), 2022",
  /* "Qualified member, Iranian National Elites Foundation, 2016–present",*/
  /*"Top 0.1% among 260,000 participants, Iranian nationwide university entrance exam, 2012",*/
];

export const SERVICE = [
  "Journal reviewer: 51 reviews across 11 journals, including Building and Environment (19), Energy and Buildings (8), and ASCE OPEN (6)",
  "Conference reviewer, ASCE i3CE 2024 & 2025 (7 papers)",
  "Student member, ASCE Visualization, Information Modeling, and Simulation (VIMS) Committee, 2025–Present",
  "Student member, CIB W107 Construction in Developing Countries Committee, 2025–Present",
  "Student member, ASHRAE, 2024–Present",
];

// href: "" shows "Coming soon". When a repo is ready, paste its URL into href.
export const PROJECTS = [
  { title: "Bayesian change-point detection for IEQ", tag: "Bayesian / time series", desc: "Pattern recognition and regime discovery in indoor environmental quality time series, finding where an indoor environment shifts into a new regime.", href: "" },
  { title: "Hidden Markov models for IEQ states", tag: "HMM / time series", desc: "Latent-state models that describe how indoor environmental time series move between recurring conditions.", href: "" },
  { title: "Point-anomaly cleaning pipeline for IEQ data", tag: "Python / data quality", desc: "A pipeline that detects and removes point anomalies from indoor environmental sensor data before analysis.", href: "" },
];