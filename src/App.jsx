import { useState } from "react";

const PUBLICATIONS = [
  { type: "Journal", status: "Published", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "How environmental conditions shape workload in hybrid work: a longitudinal mediation analysis", venue: "Building and Environment", doi: "10.1016/j.buildenv.2026.114973" },
  { type: "Journal", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Kohut", title: "Exploring energy consumption in energy-efficient, affordable housing in Southern California: behavioral insights and financial implications", venue: "Energy and Buildings", doi: "10.1016/j.enbuild.2025.115369" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Awada, Contreras, Becerik-Gerber, Boeing", title: "Equity in the built environment: a systematic review", venue: "Building and Environment", doi: "10.1016/j.buildenv.2023.110827" },
  { type: "Journal", status: "Published", year: 2024, authors: "Seyedrezaei, Tak, Becerik-Gerber", title: "Consumption and conservation behaviors among affordable housing residents in Southern California", venue: "Energy and Buildings", doi: "10.1016/j.enbuild.2023.113840" },
  { type: "Journal", status: "Published", year: 2023, authors: "Seyedrezaei, Awada, Becerik-Gerber, Lucas, Roll", title: "Interaction effects of indoor environmental quality factors on cognitive performance and perceived comfort of young adults in open-plan offices", venue: "Building and Environment", doi: "10.1016/j.buildenv.2023.110743" },
  { type: "Journal", status: "Published", year: 2023, authors: "Awada, Becerik-Gerber, Liu, Seyedrezaei, et al.", title: "Ten questions concerning the impact of environmental stress on office workers", venue: "Building and Environment", doi: "10.1016/j.buildenv.2022.109964" },
  { type: "Journal", status: "Published", year: 2023, authors: "Moaddab, Amini Hosseini, Seyedrezaei", title: "A holistic approach for evaluating the system performance and earthquake resilience in historic-commercial urban fabrics", venue: "Natural Hazards", doi: "10.1007/s11069-022-05720-1" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al.", title: "The field of human building interaction for convergent research and innovation for intelligent built environments", venue: "Scientific Reports", doi: "10.1038/s41598-022-25047-y" },
  { type: "Journal", status: "Published", year: 2022, authors: "Becerik-Gerber, Lucas, Aryal, Awada, et al.", title: "Ten questions concerning human-building interaction research for improving the quality of life", venue: "Building and Environment", doi: "10.1016/j.buildenv.2022.109681" },
  { type: "Journal", status: "Accepted", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal exploration of productivity and well-being in hybrid work through ecological momentary assessment and environmental sensing", venue: "Journal of Occupational and Environmental Medicine", doi: "" },
  { type: "Journal", status: "Accepted", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Awada, Lucas, Roll", title: "Interaction effects of indoor environmental quality on stress in offices", venue: "Indoor and Built Environment", doi: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Reyes, Zang, Seyedrezaei, Liu, Becerik-Gerber, Lucas, Roll, Narayanan", title: "Sleep-work dynamics in naturalistic settings: a four-month longitudinal study", venue: "Sleep Health (submitted)", doi: "" },
  { type: "Journal", status: "Submitted", year: 2026, authors: "Tajik, Varman, Seyedrezaei, Awada, Becerik-Gerber, et al.", title: "Charting the future of occupant-centric enabling technologies for well-being in buildings", venue: "Building Simulation (submitted)", doi: "" },
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Multi-scale regimes of indoor environmental quality and their links to occupant well-being", venue: "In preparation", doi: "" },
  { type: "Journal", status: "In prep", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Privacy-utility trade-offs and re-identification risk in behavioral state sequences derived from indoor environmental sensing", venue: "In preparation", doi: "" },
  { type: "Conference", status: "Published", year: 2026, authors: "Seyedrezaei, Reyes, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Longitudinal analysis of IEQ variability in office and home workspaces: insights for the future of hybrid work", venue: "ASCE i3CE", doi: "10.1061/9780784486436.113" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber", title: "Occupant satisfaction with building systems and thermostat usage in energy-efficient affordable housing in Southern California", venue: "CIB Conferences", doi: "10.7771/3067-4883.1929" },
  { type: "Conference", status: "Published", year: 2025, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas", title: "A preliminary investigation for understanding temperature's associations with office workers' psychological well-being", venue: "ASCE i3CE", doi: "10.1061/9780784486139.061" },
  { type: "Conference", status: "Published", year: 2024, authors: "Awada, Seyedrezaei, Becerik-Gerber, Lucas", title: "Investigating the interplay between indoor environmental quality and workers' health and productivity", venue: "ASCE i3CE", doi: "10.1061/9780784485248.074" },
  { type: "Conference", status: "Accepted", year: 2026, authors: "Seyedrezaei, Becerik-Gerber, Roll, Lucas, Narayanan", title: "Daily IAQ and performance in hybrid work: a longitudinal comparison of home and office", venue: "Indoor Air 2026", doi: "" },
  { type: "Book", status: "Published", year: 2024, authors: "Seyedrezaei (Ed.)", title: "Iran Nationwide Flood", venue: "Lohe Fekr Publishing Agency \u2014 edited conference proceedings, Sharif University", doi: "" },
];

const EXPERIENCE = [
  {
    range: "2026\u2013Present",
    role: "Co-Lead Researcher",
    org: "Behavioral Inference, Privacy Governance & BIM-Informed Operational Intelligence in Building Digital Twins",
    bullets: [
      "Leading observational studies on the GCS digital shadow platform: 252 BAS-connected devices, 1,000+ sensors across seven floors, matched to architectural, mechanical and structural BIM",
      "Developing a five-level HVAC-native behavioral inference hierarchy, a BIM privacy floor concept, and a revealed-preference human-subjects study (n=60\u201380) for building data governance standards",
      "Comparing graph neural networks, transformers, Gaussian processes and regularized linear models, with and without BIM-encoded topology, for zone-level thermal and airflow forecasting",
    ],
    funding: "In preparation for NSF SaTC 2.0 and CEC EPIC 5",
  },
  {
    range: "2026\u2013Present",
    role: "Principal Investigator",
    org: "Dynamic Workstyles and Worker Health: A Continuous Feasibility Study",
    bullets: [
      "Independently authored the funded proposal, study protocol and instruments",
      "Designed a four-device sensor suite (physiological, lighting, noise, air quality) paired with EMA for person-centered, location-agnostic continuous monitoring and stress source-attribution",
      "Leading recruitment, data collection and analysis for a two-week continuous monitoring study of 20 knowledge workers",
    ],
    funding: "SCERC Pilot Project Research Training Program, NIOSH \u2014 $10,000",
  },
  {
    range: "2023\u2013Present",
    role: "Co-Lead Researcher",
    org: "Longitudinal Study of Office Workers' Well-Being, Performance and Comfort",
    bullets: [
      "Coordinating a 3-year, 60-participant study across five cohorts integrating Awair sensors, audio badges, Fitbit wearables and EMA",
      "Led a mediation analysis in Building and Environment linking office days to workload and performance via indoor air quality",
      "Leading regime-discovery work on IEQ time series (matrix profiles, HMM/ARHMM, LSTM, change-point detection) and a privacy-utility investigation of behavioral state sequences",
    ],
    funding: "NSF Grant No. IIS-2204942",
  },
  {
    range: "2022\u20132024",
    role: "Lead Researcher",
    org: "Interactive Effects of IEQ on Cognitive Performance, Comfort and Stress",
    bullets: [
      "Designed a mixed-design controlled experiment (52 participants) crossing temperature, lighting color temperature and noise",
      "Found warm, high-noise conditions reduced performance and comfort, especially among males and healthy-BMI participants",
    ],
    funding: "NSF Grant Nos. CMMI-1763134 and IIS-2204942",
  },
  {
    range: "2023\u2013Present",
    role: "Lead Researcher",
    org: "Energy Efficiency in Affordable Housing Settings",
    bullets: [
      "Surveys, interviews and utility-bill analysis across four properties; found 82% adopted efficiency behaviors to save money and PV plus subsidies cut bills up to 80%",
      "Leading deployment of circuit-level NILM devices across 107+ units for a grid-responsive housing operations framework",
    ],
    funding: "California Energy Commission Grant No. GFO-20-305 ($8M, Phase 2)",
  },
  {
    range: "2021\u20132023",
    role: "Lead Researcher",
    org: "Equity in the Built Environment",
    bullets: [
      "PRISMA systematic review screening 6,731 studies down to 232 on distributional, recognitional and procedural inequity",
      "Developed the Built Environment\u2013Group\u2013Need (BGN) framework, identifying neglected settings and underrepresented groups in the literature",
    ],
    funding: "",
  },
];

const AWARDS = [
  "NSF CPS Rising Star, 2025",
  "USC CEE Outstanding Research Assistant of the Year, 2025",
  "USC Graduate School Fellowship, 2024\u20132025",
  "Top Peer Reviewer, ASCE OPEN, 2025",
  "Das Family Travel Award, 2023, 2024, 2025",
  "First place, HBI Online Hackathon (NSF-funded), 2022",
];

const PROJECTS = [
  { title: "IEQ sliding-window clustering", tag: "UMAP / HDBSCAN", desc: "Multi-cohort Awair sensor data reduced to latent indoor-environment regimes, run on USC's CARC HPC.", href: "#" },
  { title: "CO\u2082 MSTL decomposition pipeline", tag: "Time series", desc: "Weekly-template decomposition with gap-filling and drift correction across a 33-workspace batch at 1-minute resolution.", href: "#" },
  { title: "Multilevel mediation analysis", tag: "R / brms", desc: "IEQ features as mediators between workspace location and NASA-TLX workload, with parallelized sensitivity analyses.", href: "#" },
  { title: "BIM-informed zone forecasting", tag: "GNN / transformer", desc: "Structural BIM priors compared across four model classes for zone-level thermal and airflow forecasting.", href: "#" },
];

const TICKER_ITEMS = ["TEMP 21.4\u00b0C", "CO\u2082 612 PPM", "RH 44%", "PM2.5 6 \u00b5G/M\u00b3", "OCCUPANCY: HYBRID", "TVOC 0.31 PPM", "LIGHT 480 LX"];

function Badge({ status }) {
  const map = {
    Published: { bg: "#E1EEE7", fg: "#245045" },
    Accepted: { bg: "#F5E7D2", fg: "#7A4E12" },
    Submitted: { bg: "#E7E5DC", fg: "#57544A" },
    "In prep": { bg: "#E7E5DC", fg: "#57544A" },
  };
  const c = map[status] || map.Submitted;
  return (
    <span className="badge" style={{ background: c.bg, color: c.fg }}>
      {status}
    </span>
  );
}

export default function Portfolio() {
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
        }
        .nav-logo { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; }
        .nav-links { display: flex; gap: 22px; align-items: center; }
        .nav-links a { font-size: 13px; letter-spacing: 0.02em; color: var(--slate); }
        .nav-links a:hover { color: var(--teal-dark); }
        .nav-cv { border: 1px solid var(--ink); border-radius: 3px; padding: 6px 14px !important; font-size: 12px !important; color: var(--ink) !important; }
        .nav-cv:hover { background: var(--ink); color: var(--paper) !important; }

        .hero {
          padding: 72px 28px 0;
          max-width: 880px; margin: 0 auto;
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
        .hero p.statement { max-width: 620px; font-size: 15.5px; color: #33372F; }
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

        section { max-width: 880px; margin: 0 auto; padding: 64px 28px; }
        .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 28px; border-bottom: 1px solid var(--line); padding-bottom: 14px; }
        .section-head h2 { font-size: 26px; }
        .section-head .count { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--slate); }

        .research-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .r-card { border: 1px solid var(--line); border-radius: 6px; padding: 20px 22px; background: #FBFAF5; }
        .r-card .tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--amber); letter-spacing: 0.06em; text-transform: uppercase; }
        .r-card h3 { font-size: 19px; margin: 8px 0 8px; }
        .r-card p { font-size: 14px; color: #40453A; margin: 0 0 10px; }
        .r-card .stat { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--teal-dark); border-top: 1px dashed var(--line); padding-top: 8px; }

        .tabs { display: flex; gap: 8px; margin-bottom: 20px; }
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

        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .p-card { border: 1px solid var(--line); border-radius: 6px; padding: 18px 20px; background: #FBFAF5; }
        .p-card .tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--teal-dark); }
        .p-card h3 { font-size: 16px; margin: 6px 0 6px; }
        .p-card p { font-size: 13.5px; color: #40453A; margin: 0 0 12px; }
        .p-card .link { font-size: 12px; color: var(--slate); border-top: 1px dashed var(--line); padding-top: 8px; display: block; }

        .bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .bottom-grid h3 { font-size: 16px; margin-bottom: 12px; }
        .bottom-grid ul { margin: 0; padding-left: 16px; font-size: 13.5px; color: #383D33; }
        .bottom-grid li { margin-bottom: 6px; }

        footer { border-top: 1px solid var(--line); padding: 40px 28px; }
        .foot-inner { max-width: 880px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; }
        .foot-links { display: flex; gap: 18px; }
        .foot-links a { font-size: 13px; color: var(--slate); }
        .foot-links a:hover { color: var(--teal-dark); }
        .copyright { font-size: 12px; color: var(--slate); font-family: 'IBM Plex Mono', monospace; }

        @media (max-width: 700px) {
          .research-grid, .proj-grid, .bottom-grid { grid-template-columns: 1fr; }
          .xp-row { grid-template-columns: 1fr; }
          .hero h1 { font-size: 32px; }
          .pub { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className="nav">
        <span className="nav-logo">MS</span>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="nav-cv" href="#" title="Replace with hosted CV PDF">Download CV</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Ph.D. Candidate \u00b7 Civil &amp; Environmental Engineering \u00b7 USC</div>
          <h1>Mirmahdi Seyedrezaei</h1>
          <div className="role">Human-building interaction, indoor environmental sensing, and digital twins for adaptive buildings</div>
          <p className="statement">
            I study how built environments shape health, safety and well-being, and how intelligent systems can make that
            relationship adaptive rather than indifferent. My work combines environmental sensing, wearable physiology and
            machine learning across hybrid workplaces, affordable housing and building digital twins &mdash; and extends into
            BIM-informed graph and transformer models for forecasting building automation behavior and detecting design-to-operations
            drift.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#" title="Replace with hosted CV PDF">Download CV</a>
            <a className="btn btn-line" href="#" title="Add real Google Scholar URL">Google Scholar</a>
            <a className="btn btn-line" href="#" title="Add real LinkedIn URL">LinkedIn</a>
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

      <section id="research">
        <div className="section-head">
          <h2>Research</h2>
          <span className="count">4 threads</span>
        </div>
        <div className="research-grid">
          <div className="r-card">
            <div className="tag">IEQ / Human-Building Interaction</div>
            <h3>Sensing well-being in hybrid work</h3>
            <p>Longitudinal, multimodal studies linking indoor air quality, thermal conditions and lighting to workload, mood and cognitive performance at home and in the office.</p>
            <div className="stat">3-YR STUDY \u00b7 60 PARTICIPANTS \u00b7 5 COHORTS</div>
          </div>
          <div className="r-card">
            <div className="tag">Building Digital Twins</div>
            <h3>BIM-informed operational intelligence</h3>
            <p>Graph neural networks and transformers using BIM-encoded structural priors to forecast HVAC behavior, detect design-to-operations drift, and set data governance standards.</p>
            <div className="stat">252 BAS DEVICES \u00b7 1,000+ SENSORS \u00b7 7 FLOORS</div>
          </div>
          <div className="r-card">
            <div className="tag">Energy Equity</div>
            <h3>Affordable housing &amp; energy burden</h3>
            <p>Behavioral, financial and circuit-level analyses of energy use in low-income housing, informing demand-response and solar interventions.</p>
            <div className="stat">$8M CEC PROJECT \u00b7 107+ UNITS MONITORED</div>
          </div>
          <div className="r-card">
            <div className="tag">Equity Framework</div>
            <h3>The Built Environment\u2013Group\u2013Need model</h3>
            <p>A systematic-review-derived framework mapping how built environments serve, or fail, vulnerable populations across physical, social and procedural dimensions.</p>
            <div className="stat">6,731 STUDIES SCREENED \u2192 232 INCLUDED</div>
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
                {p.doi && <a className="doi" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">doi.org/{p.doi}</a>}
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
              <li>Reviewer for Building and Environment, Energy and Buildings, Journal of Building Engineering, Cities, Journal of Environmental Psychology and others</li>
              <li>Reviewer, ASCE International Conference on Computing in Civil Engineering (i3CE)</li>
              <li>Member, ASCE Visualization, Information Modeling and Simulation Committee</li>
              <li>Mentoring four Ph.D. students across sensing, IRB, and manuscript development</li>
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
            <a href="#" title="Add real Google Scholar URL">Google Scholar</a>
            <a href="#" title="Add real LinkedIn URL">LinkedIn</a>
            <a href="#" title="Add real GitHub URL">GitHub</a>
          </div>
          <div className="copyright">\u00a9 2026 Mirmahdi Seyedrezaei</div>
        </div>
      </footer>
    </div>
  );
}