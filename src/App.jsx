import { useState } from "react";

/* =====================================================================
   EDIT ZONE — News and Personal content live here so you can update
   them yourself without touching anything below. Add/remove objects
   freely; the layout handles any number of items.
   ===================================================================== */

const NEWS = [
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
    desc: "Short description of the update — a talk, award, new paper, or media mention. Replace this placeholder in the NEWS array in App.jsx.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: true,
  },
  {
    date: "",
    title: "Add a news item",
    desc: "Another open slot. Duplicate this object in the NEWS array and fill in date, title, desc, link, and image as needed.",
    link: "",
    linkLabel: "",
    image: null,
    placeholder: true,
  },
];

const PERSONAL_PHOTOS = [
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
  { src: null, caption: "Add a photo + caption" },
];

const PERSONAL_INTRO =
  "Outside the lab: replace this paragraph with a few sentences about your life outside research — hobbies, travel, family, whatever you want to share. This section is entirely yours to edit in the PERSONAL_INTRO constant.";

/* ===================================================================== */

const PUBLICATIONS = [
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

const EDUCATION = [
  { degree: "Ph.D. in Civil Engineering", org: "University of Southern California", detail: "Advisor: Prof. Burçin Becerik-Gerber · iLAB", year: "Expected 2027" },
  { degree: "M.S. in Computer Science", org: "University of Southern California", detail: "", year: "2026" },
  { degree: "M.S. in Sustainable Engineering", org: "University of Southern California", detail: "", year: "2025" },
  { degree: "M.S. in Civil Engineering (Earthquake Engineering)", org: "Sharif University of Technology, Tehran, Iran", detail: "Advisor: Prof. Kiarash Dolatshahi", year: "2018" },
  { degree: "B.S. in Civil Engineering", org: "Sharif University of Technology, Tehran, Iran", detail: "", year: "2016" },
];

const EXPERIENCE = [
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

const TEACHING = [
  { range: "Spring 2026", title: "Invited Lecture — Lean Construction", org: "Georgia Southern University", detail: "~40 construction students · 91% satisfaction rating" },
  { range: "2021–2024", title: "Graduate Teaching Assistant", org: "University of Southern California", detail: "6 course offerings · overall evaluation 4.23/5.00 — CE 501 Construction Practices, CE 469 Sustainable Design & Construction, CE 334L Mechanical Behavior of Materials, CE 502 Construction Accounting, Finance & Strategy, CE 573 Advanced Technologies in AEC Practices" },
  { range: "2015–2017", title: "Teaching Assistant", org: "Sharif University of Technology", detail: "Design of Steel Structures I & II" },
];

const MENTORSHIP = [
  { name: "Sue Young Choi", level: "Ph.D.", range: "2026–Present", note: "Intelligent built environments & neurodivergence; longitudinal EMA data processing" },
  { name: "Yuxin Yang", level: "Ph.D.", range: "2025–Present", note: "Explainable ML for residential electricity use; first-authored manuscript under review at Advanced Engineering Informatics" },
  { name: "Tao Zang", level: "Ph.D.", range: "2024–Present", note: "Multimodal occupational stress sensing; first-authored Indoor Environments (2026) and ASCE i3CE 2025" },
  { name: "Antonin Brun", level: "Ph.D.", range: "2023–Present", note: "Adaptive environmental interventions; first-authored ACM CHI Extended Abstracts (2025)" },
  { name: "Mireya Reyes", level: "Ph.D.", range: "2024–2026", note: "Sleep-work dynamics; first-authored manuscript submitted to Sleep Health" },
  { name: "Nathaniel Trujillo", level: "M.S.", range: "2026–Present", note: "Matrix profile methods for IEQ time-series pattern discovery" },
  { name: "Aadish Panchmia", level: "M.S.", range: "Summer 2024", note: "Residential utility data extraction; now Project Engineer, Moss & Associates" },
  { name: "Haotong Fu", level: "B.Sc.", range: "Spring 2023", note: "Physiological signal preprocessing; now M.S. student, Computer Science, USC" },
];

const AWARDS = [
  "NSF Cyber-Physical Systems (CPS) Rising Star — 1 of 30 selected nationwide from 170+ applicants, 2025",
  "USC CEE Outstanding Research Assistant of the Year, 2025",
  "Top Peer Reviewer, ASCE OPEN: Multidisciplinary Journal of Civil Engineering, 2025",
  "USC Graduate School Fellowship, 2024–2025",
  "Das Family Travel Award (three-time recipient), 2023, 2024, 2025",
  "USC GSG Professional Development Grant (ASHRAE Winter Conference), 2025",
  "First place, HBI Online Hackathon (NSF-funded), 2022",
  "Top 0.1% among 260,000 participants, Iranian nationwide university entrance exam, 2012",
];

const SERVICE = [
  "Journal reviewer: 51 reviews across 11 journals, including Building and Environment (19), Energy and Buildings (8), and ASCE OPEN (6)",
  "Conference reviewer, ASCE i3CE 2024 & 2025 (7 papers)",
  "Member, ASCE Visualization, Information Modeling, and Simulation (VIMS) Committee, 2025–Present",
  "Member, CIB W107 Construction in Developing Countries Committee, 2025–Present",
  "Student member, ASHRAE, 2024–Present",
];

const PROJECTS = [
  { title: "IEQ sliding-window clustering", tag: "UMAP / HDBSCAN", desc: "Multi-cohort Awair sensor data reduced to latent indoor-environment regimes, run on USC's CARC HPC.", href: "#" },
  { title: "CO₂ MSTL decomposition pipeline", tag: "Time series", desc: "Weekly-template decomposition with gap-filling and drift correction across a multi-workspace batch at 1-minute resolution.", href: "#" },
  { title: "Multilevel mediation analysis", tag: "R / brms", desc: "IEQ features as mediators between workspace location and NASA-TLX workload, with parallelized sensitivity analyses.", href: "#" },
  { title: "NILM resident archetype pipeline", tag: "Python / explainable ML", desc: "Circuit-level load data across 107 affordable-housing units reduced to household usage archetypes for personalized energy education.", href: "#" },
];

// Realistic good-office-day readings. TVOC corrected to ppb (not ppm).
const TICKER_ITEMS = ["TEMP 21.4°C", "CO₂ 612 PPM", "RH 44%", "PM2.5 6 µG/M³", "TVOC 120 PPB", "LIGHT 480 LX", "SAMPLING 1-MIN"];

function Badge({ status }) {
  const map = {
    Published: { bg: "#E1EEE7", fg: "#245045" },
    Submitted: { bg: "#F5E7D2", fg: "#7A4E12" },
    "In prep": { bg: "#E7E5DC", fg: "#57544A" },
  };
  const c = map[status] || map.Submitted;
  return (
    <span className="badge" style={{ background: c.bg, color: c.fg }}>
      {status}
    </span>
  );
}

function ImgSlot({ src, caption, tall }) {
  return (
    <div className="img-slot">
      <div className={"img-box" + (tall ? " tall" : "")}>
        {src ? <img src={src} alt={caption || ""} /> : <span className="img-ph">+ add photo</span>}
      </div>
      {caption && <div className="img-cap">{caption}</div>}
    </div>
  );
}

function fmtDate(d) {
  if (!d) return "TBD";
  const [y, m, day] = d.split("-").map(Number);
  const dt = new Date(y, m - 1, day);
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.type === filter);

  return (
    <div className="msite">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .msite {
          --paper: #F5F4EE;
          --paper-2: #EFEDE3;
          --ink: #1B211E;
          --teal: #3E6259;
          --teal-dark: #26433C;
          --amber: #B97A2C;
          --line: #DAD6C9;
          --slate: #6B6F66;
          font-family: 'IBM Plex Sans', sans-serif;
          background: var(--paper);
          color: var(--ink);
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }
        .msite * { box-sizing: border-box; }
        .msite h1, .msite h2, .msite h3 { font-family: 'Fraunces', serif; font-weight: 500; margin: 0; letter-spacing: -0.01em; }
        .msite a { color: inherit; text-decoration: none; }
        .msite .mono { font-family: 'IBM Plex Mono', monospace; }

        .nav {
          position: sticky; top: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 28px; background: rgba(245,244,238,0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
          flex-wrap: wrap; gap: 10px;
        }
        .nav-logo { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; }
        .nav-links { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
        .nav-links a { font-size: 13px; letter-spacing: 0.02em; color: var(--slate); }
        .nav-links a:hover { color: var(--teal-dark); }
        .nav-cv { border: 1px solid var(--ink); border-radius: 3px; padding: 6px 14px !important; font-size: 12px !important; color: var(--ink) !important; }
        .nav-cv:hover { background: var(--ink); color: var(--paper) !important; }

        .hero {
          padding: 72px 28px 0;
          max-width: 900px; margin: 0 auto;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 34px 34px;
          background-position: center top;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
        }
        .hero-inner { padding-bottom: 40px; }
        .eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.12em; color: var(--teal-dark); text-transform: uppercase; }
        .hero h1 { font-size: 46px; line-height: 1.05; margin: 10px 0 6px; }
        .hero .role { font-size: 17px; color: var(--slate); margin-bottom: 22px; }
        .hero p.statement { max-width: 640px; font-size: 15.5px; color: #33372F; }
        .cta-row { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
        .btn { font-size: 13px; padding: 9px 16px; border-radius: 3px; border: 1px solid var(--ink); }
        .btn-solid { background: var(--ink); color: var(--paper); }
        .btn-solid:hover { background: var(--teal-dark); border-color: var(--teal-dark); }
        .btn-line:hover { background: rgba(0,0,0,0.04); }

        .ticker-wrap {
          overflow: hidden; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
          background: var(--paper-2); margin-top: 36px;
        }
        .ticker { display: flex; gap: 40px; white-space: nowrap; padding: 9px 0; animation: scroll 32s linear infinite; width: max-content; }
        .ticker span { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--slate); letter-spacing: 0.03em; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .ticker { animation: none; } }

        section { max-width: 900px; margin: 0 auto; padding: 60px 28px; }
        .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 26px; border-bottom: 1px solid var(--line); padding-bottom: 14px; }
        .section-head h2 { font-size: 25px; }
        .section-head .count { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--slate); }

        /* Education strip */
        .edu-strip { display: flex; flex-direction: column; gap: 10px; }
        .edu-row { display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 10px 0; border-bottom: 1px dashed var(--line); font-size: 13.5px; }
        .edu-row:last-child { border-bottom: none; }
        .edu-row .deg { font-weight: 600; }
        .edu-row .org { color: var(--slate); }
        .edu-row .detail { color: var(--slate); font-size: 12.5px; display: block; }
        .edu-row .yr { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: var(--teal-dark); white-space: nowrap; }

        /* News */
        .news-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .news-card { border: 1px solid var(--line); border-radius: 6px; padding: 16px 18px; background: #FBFAF5; display: flex; flex-direction: column; gap: 10px; }
        .news-card.placeholder { border-style: dashed; background: transparent; }
        .news-img { width: 100%; height: 120px; border-radius: 4px; background: var(--paper-2); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .news-img img { width: 100%; height: 100%; object-fit: cover; }
        .news-img span { font-size: 12px; color: var(--slate); font-family: 'IBM Plex Mono', monospace; }
        .news-date { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--amber); text-transform: uppercase; letter-spacing: 0.04em; }
        .news-card h3 { font-size: 16px; }
        .news-card p { font-size: 13.5px; color: #40453A; margin: 0; }
        .news-link { font-size: 12px; color: var(--teal-dark); border-top: 1px dashed var(--line); padding-top: 8px; margin-top: auto; }

        .research-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .r-card { border: 1px solid var(--line); border-radius: 6px; padding: 20px 22px; background: #FBFAF5; }
        .r-card .tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--amber); letter-spacing: 0.06em; text-transform: uppercase; }
        .r-card h3 { font-size: 19px; margin: 8px 0 8px; }
        .r-card p { font-size: 14px; color: #40453A; margin: 0 0 10px; }
        .r-card .stat { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--teal-dark); border-top: 1px dashed var(--line); padding-top: 8px; }

        .tabs { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
        .tab { font-size: 12px; padding: 6px 13px; border-radius: 20px; border: 1px solid var(--line); color: var(--slate); cursor: pointer; }
        .tab.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }

        .pub { display: grid; grid-template-columns: 52px 1fr auto; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .pub:last-child { border-bottom: none; }
        .pub .yr { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: var(--slate); padding-top: 2px; }
        .pub .title { font-size: 15px; margin-bottom: 3px; }
        .pub .meta { font-size: 12.5px; color: var(--slate); }
        .pub .meta .venue { font-style: italic; }
        .pub a.doi { font-size: 11.5px; color: var(--teal-dark); font-family: 'IBM Plex Mono', monospace; }
        .badge { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; padding: 3px 8px; border-radius: 3px; white-space: nowrap; height: fit-content; }

        .xp-row { display: grid; grid-template-columns: 110px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .xp-row:last-child { border-bottom: none; }
        .xp-row .range { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: var(--slate); padding-top: 3px; }
        .xp-row h3 { font-size: 17px; margin-bottom: 2px; }
        .xp-row .role { font-size: 13px; color: var(--amber); margin-bottom: 8px; }
        .xp-row ul { margin: 0; padding-left: 18px; font-size: 14px; color: #383D33; }
        .xp-row li { margin-bottom: 5px; }
        .xp-row .funding { font-size: 12px; color: var(--slate); margin-top: 8px; font-style: italic; }

        /* Teaching + mentorship */
        .t-row { display: grid; grid-template-columns: 110px 1fr; gap: 18px; padding: 14px 0; border-bottom: 1px dashed var(--line); font-size: 13.5px; }
        .t-row:last-child { border-bottom: none; }
        .t-row .range { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--slate); }
        .t-row .ttitle { font-weight: 600; }
        .t-row .torg { color: var(--slate); font-size: 12.5px; }
        .t-row .tdetail { font-size: 12.5px; color: #40453A; margin-top: 3px; }

        .mentor-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 18px; }
        .m-card { border: 1px solid var(--line); border-radius: 6px; padding: 12px 14px; background: #FBFAF5; }
        .m-card .mname { font-weight: 600; font-size: 13.5px; }
        .m-card .mlevel { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--amber); margin-left: 6px; }
        .m-card .mrange { font-size: 11.5px; color: var(--slate); margin-bottom: 4px; }
        .m-card .mnote { font-size: 12.5px; color: #40453A; }

        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .p-card { border: 1px solid var(--line); border-radius: 6px; padding: 18px 20px; background: #FBFAF5; }
        .p-card .tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--teal-dark); }
        .p-card h3 { font-size: 16px; margin: 6px 0 6px; }
        .p-card p { font-size: 13.5px; color: #40453A; margin: 0 0 12px; }
        .p-card .link { font-size: 12px; color: var(--slate); border-top: 1px dashed var(--line); padding-top: 8px; display: block; }

        /* Personal */
        .personal-intro { font-size: 14.5px; color: #33372F; max-width: 640px; margin-bottom: 24px; }
        .img-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .img-slot { display: flex; flex-direction: column; gap: 6px; }
        .img-box { aspect-ratio: 1 / 1; border: 1px dashed var(--line); border-radius: 6px; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--paper-2); }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        .img-box.tall { aspect-ratio: 3 / 4; }
        .img-ph { font-size: 11px; color: var(--slate); font-family: 'IBM Plex Mono', monospace; }
        .img-cap { font-size: 11.5px; color: var(--slate); text-align: center; }

        .bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .bottom-grid h3 { font-size: 16px; margin-bottom: 12px; }
        .bottom-grid ul { margin: 0; padding-left: 16px; font-size: 13.5px; color: #383D33; }
        .bottom-grid li { margin-bottom: 6px; }

        footer { border-top: 1px solid var(--line); padding: 40px 28px; }
        .foot-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; }
        .foot-links { display: flex; gap: 18px; flex-wrap: wrap; }
        .foot-links a { font-size: 13px; color: var(--slate); }
        .foot-links a:hover { color: var(--teal-dark); }
        .copyright { font-size: 12px; color: var(--slate); font-family: 'IBM Plex Mono', monospace; }

        @media (max-width: 700px) {
          .research-grid, .proj-grid, .bottom-grid, .news-grid, .mentor-grid { grid-template-columns: 1fr; }
          .img-grid { grid-template-columns: repeat(2, 1fr); }
          .xp-row, .t-row, .edu-row { grid-template-columns: 1fr; }
          .hero h1 { font-size: 32px; }
          .pub { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className="nav">
        <span className="nav-logo">MS</span>
        <div className="nav-links">
          <a href="#news">News</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#teaching">Teaching</a>
          <a href="#projects">Projects</a>
          <a href="#personal">Personal</a>
          <a href="#contact">Contact</a>
          <a className="nav-cv" href="./CV_Mirmahdi_Seyedrezaei.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Ph.D. Candidate · Civil &amp; Environmental Engineering · USC</div>
          <h1>Mirmahdi Seyedrezaei</h1>
          <div className="role">Human-centered AI, multimodal sensing, and longitudinal methods for occupational health and the built environment</div>
          <p className="statement">
            I study how built environments shape health, safety and well-being, combining human-centered AI, multimodal
            physiological and environmental sensing, and longitudinal, hierarchical, and machine-learning methods to model
            human states. My work spans environmental and cognitive ergonomics, occupational health and performance in
            hybrid and mobile work, and human-building interaction in energy systems &mdash; always oriented toward
            rigorous, deployable methods that make buildings and work environments adaptive to the people in them.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="./CV_Mirmahdi_Seyedrezaei.pdf" target="_blank" rel="noreferrer">Download CV</a>
            <a className="btn btn-line" href="https://scholar.google.com/citations?user=O6CRJkMAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="btn btn-line" href="https://orcid.org/0000-0003-4169-200X" target="_blank" rel="noreferrer">ORCID</a>
            <a className="btn btn-line" href="https://www.linkedin.com/in/mirmahdi-seyedrezaei/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-line" href="mailto:seyedrez@usc.edu">seyedrez@usc.edu</a>
          </div>
        </div>
      </div>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <section id="education" style={{ paddingBottom: 0 }}>
        <div className="section-head">
          <h2>Education</h2>
          <span className="count">5 degrees</span>
        </div>
        <div className="edu-strip">
          {EDUCATION.map((e, i) => (
            <div className="edu-row" key={i}>
              <div>
                <span className="deg">{e.degree}</span>
                <span className="org"> &mdash; {e.org}</span>
                {e.detail && <span className="detail">{e.detail}</span>}
              </div>
              <div className="yr">{e.year}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="news">
        <div className="section-head">
          <h2>News</h2>
          <span className="count">edit the NEWS array in App.jsx</span>
        </div>
        <div className="news-grid">
          {NEWS.map((n, i) => (
            <div className={"news-card" + (n.placeholder ? " placeholder" : "")} key={i}>
              <div className="news-img">
                {n.image ? <img src={n.image} alt={n.title} /> : <span>+ add image</span>}
              </div>
              <div className="news-date">{n.placeholder ? "Add date" : fmtDate(n.date)}</div>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              {n.link && (
                <a className="news-link" href={n.link} target="_blank" rel="noreferrer">
                  {n.linkLabel || "Read more"} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="research">
        <div className="section-head">
          <h2>Research</h2>
          <span className="count">3 threads</span>
        </div>
        <div className="research-grid">
          <div className="r-card">
            <div className="tag">Human-Centered AI &amp; Sensing</div>
            <h3>Multimodal sensing of well-being in hybrid work</h3>
            <p>Longitudinal, multimodal studies linking indoor air quality, thermal conditions, and lighting to workload, mood, stress, and cognitive performance at home and in the office.</p>
            <div className="stat">5-COHORT STUDY · 60 PARTICIPANTS · 109 WORKSPACES</div>
          </div>
          <div className="r-card">
            <div className="tag">Energy Equity</div>
            <h3>Affordable housing &amp; energy burden</h3>
            <p>Behavioral, financial, and circuit-level analyses of energy use in low-income housing, informing solar benefit allocation and demand-response participation.</p>
            <div className="stat">$8M CEC PROJECT · 107 UNITS MONITORED</div>
          </div>
          <div className="r-card">
            <div className="tag">Equity Framework</div>
            <h3>The Built Environment–Group–Need model</h3>
            <p>A systematic-review-derived framework mapping how built environments serve, or fail, vulnerable populations across physical, social, and procedural dimensions.</p>
            <div className="stat">6,731 STUDIES SCREENED → 232 INCLUDED</div>
          </div>
        </div>
      </section>

      <section id="publications">
        <div className="section-head">
          <h2>Publications</h2>
          <span className="count">{PUBLICATIONS.length} total</span>
        </div>
        <div className="tabs">
          {["All", "Journal", "Conference", "Book"].map((t) => (
            <div key={t} className={"tab" + (filter === t ? " active" : "")} onClick={() => setFilter(t)}>
              {t}
            </div>
          ))}
        </div>
        <div>
          {filtered.map((p, i) => (
            <div className="pub" key={i}>
              <div className="yr">{p.year}</div>
              <div>
                <div className="title">{p.title}</div>
                <div className="meta">{p.authors} &mdash; <span className="venue">{p.venue}</span></div>
                {p.link && <a className="doi" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel}</a>}
              </div>
              <Badge status={p.status} />
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="section-head">
          <h2>Experience</h2>
          <span className="count">selected roles</span>
        </div>
        {EXPERIENCE.map((x, i) => (
          <div className="xp-row" key={i}>
            <div className="range">{x.range}</div>
            <div>
              <h3>{x.org}</h3>
              <div className="role">{x.role}</div>
              <ul>
                {x.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {x.funding && <div className="funding">{x.funding}</div>}
            </div>
          </div>
        ))}
      </section>

      <section id="teaching">
        <div className="section-head">
          <h2>Teaching &amp; mentorship</h2>
          <span className="count">USC &amp; Sharif</span>
        </div>
        {TEACHING.map((t, i) => (
          <div className="t-row" key={i}>
            <div className="range">{t.range}</div>
            <div>
              <div className="ttitle">{t.title}</div>
              <div className="torg">{t.org}</div>
              <div className="tdetail">{t.detail}</div>
            </div>
          </div>
        ))}
        <div className="mentor-grid">
          {MENTORSHIP.map((m, i) => (
            <div className="m-card" key={i}>
              <span className="mname">{m.name}</span>
              <span className="mlevel">{m.level}</span>
              <div className="mrange">{m.range}</div>
              <div className="mnote">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="section-head">
          <h2>Projects &amp; code</h2>
          <span className="count">links pending</span>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div className="p-card" key={i}>
              <div className="tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="link" href={p.href} title="Replace with real GitHub repo link">github.com/placeholder &mdash; add link</a>
            </div>
          ))}
        </div>
      </section>

      <section id="personal">
        <div className="section-head">
          <h2>Beyond the lab</h2>
          <span className="count">edit PERSONAL_INTRO &amp; PERSONAL_PHOTOS</span>
        </div>
        <p className="personal-intro">{PERSONAL_INTRO}</p>
        <div className="img-grid">
          {PERSONAL_PHOTOS.map((p, i) => (
            <ImgSlot key={i} src={p.src} caption={p.caption} />
          ))}
        </div>
      </section>

      <section>
        <div className="bottom-grid">
          <div>
            <h3>Awards &amp; honors</h3>
            <ul>
              {AWARDS.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Service</h3>
            <ul>
              {SERVICE.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="foot-inner">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h3 style={{ marginTop: 8 }}>seyedrez@usc.edu</h3>
          </div>
          <div className="foot-links">
            <a href="https://scholar.google.com/citations?user=O6CRJkMAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://orcid.org/0000-0003-4169-200X" target="_blank" rel="noreferrer">ORCID</a>
            <a href="https://www.linkedin.com/in/mirmahdi-seyedrezaei/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" title="Add real GitHub URL">GitHub</a>
          </div>
          <div className="copyright">© 2026 Mirmahdi Seyedrezaei</div>
        </div>
      </footer>
    </div>
  );
}
