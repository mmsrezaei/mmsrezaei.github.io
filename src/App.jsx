import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  PROFILE_PHOTO, PROFILE_ALT, TYPED_LINE, INTERESTS, HUMANITARIAN, NEWS, PERSONAL_PHOTOS, PERSONAL_INTRO,
  PUBLICATIONS, EDUCATION, EXPERIENCE, TEACHING, MENTORSHIP, AWARDS, SERVICE, PROJECTS,
} from "./data.js";

const SCHOLAR = "https://scholar.google.com/citations?user=O6CRJkMAAAAJ&hl=en";
const ORCID = "https://orcid.org/0000-0003-4169-200X";
const LINKEDIN = "https://www.linkedin.com/in/mirmahdi-seyedrezaei/";

const pad = (n) => String(n).padStart(2, "0");

/* The page is one day, 06:00 to 18:00. Scroll position sets the sun's place
   (--p, 0 to 1) and a daylight color temperature readout. */
function useDayCycle(siteRef, readoutRef) {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (siteRef.current) {
        siteRef.current.style.setProperty("--p", p.toFixed(4));
        siteRef.current.dataset.dusk = p > 0.965 ? "on" : "off";
      }
      if (readoutRef.current) {
        const mins = 6 * 60 + p * 12 * 60;
        const cct = Math.round((3000 + 3500 * Math.sin(Math.PI * p)) / 100) * 100;
        readoutRef.current.textContent = `${pad(Math.floor(mins / 60))}:${pad(Math.floor(mins % 60))}  ${cct} K`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [siteRef, readoutRef]);
}

/* Types a line out letter by letter on load. Reduced-motion users get the full line at once. */
function useTyping(text, speed = 95, delay = 500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(text.length); return; }
    let i = 0, t;
    const tick = () => { i += 1; setN(i); if (i < text.length) t = setTimeout(tick, speed + Math.random() * 55); };
    t = setTimeout(tick, delay);
    return () => clearTimeout(t);
  }, [text, speed, delay]);
  return n;
}

/* Well-being, sustainability and resilience as three pillars, joined to each other and to equity at the core. */
function PillarsDiagram() {
  const nodes = [
    { x: 200, y: 52, w: 128, label: "Well-being", c: "var(--turq)" },
    { x: 66, y: 292, w: 128, label: "Sustainability", c: "var(--lapis)" },
    { x: 334, y: 292, w: 128, label: "Resilience", c: "var(--amber-text)" },
  ];
  const core = { x: 200, y: 210 };
  return (
    <svg className="pillars" viewBox="0 0 400 340" role="img"
      aria-label="Three pillars, well-being, sustainability and resilience, connected to each other and to equity at the core">
      <polygon points="200,52 66,292 334,292" className="pl-tri" />
      {nodes.map((n) => (
        <line key={n.label} x1={core.x} y1={core.y} x2={n.x} y2={n.y} className="pl-spoke" />
      ))}
      <circle cx={core.x} cy={core.y} r="52" className="pl-halo" />
      <circle cx={core.x} cy={core.y} r="40" className="pl-core" />
      <text x={core.x} y={core.y + 5} textAnchor="middle" className="pl-core-t">Equity</text>
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x - n.w / 2} y={n.y - 22} width={n.w} height="44" rx="22" fill={n.c} />
          <text x={n.x} y={n.y + 5} textAnchor="middle" className="pl-t">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

function Badge({ status }) {
  const cls = status === "Published" ? "ok" : status === "Submitted" ? "sub" : "prep";
  return <span className={"badge " + cls}>{status}</span>;
}

function fmtDate(d) {
  if (!d) return "Add date";
  const [y, m, day] = d.split("-").map(Number);
  return new Date(y, m - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function SectionHead({ id, title, note }) {
  return (
    <div className="sec-head">
      <h2 id={id}>{title}</h2>
      {note && <span className="note">{note}</span>}
    </div>
  );
}

export default function App() {
  const siteRef = useRef(null);
  const readoutRef = useRef(null);
  useDayCycle(siteRef, readoutRef);

  const [filter, setFilter] = useState("All");
  const [showAllPubs, setShowAllPubs] = useState(false);

  const filtered = filter === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.type === filter);
  const pubs = showAllPubs ? filtered : filtered.slice(0, 8);
  const typed = TYPED_LINE.slice(0, useTyping(TYPED_LINE));

  return (
    <div className="site" ref={siteRef}>
      {/* Sun rail: shows where the light is as you move down the page */}
      <aside className="rail" aria-hidden="true">
        <div className="rail-track">
          <div className="rail-sun" />
        </div>
        <div className="rail-read" ref={readoutRef}>06:00  3000 K</div>
        <div className="rail-motto">this too shall pass</div>
      </aside>

      <nav className="nav" aria-label="Main">
        <a className="nav-mark" href="#top">Mirmahdi Seyedrezaei</a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#roots">Roots</a>
          <a href="#news">News</a>
          <a href="#teaching">Teaching</a>
          <a href="#personal">Personal</a>
        </div>
      </nav>

      <div className="type-band" role="heading" aria-level="2" aria-label={TYPED_LINE}>
        <span className="type-ghost" aria-hidden="true">{TYPED_LINE}</span>
        <span className="type-live" aria-hidden="true">{typed}<i className="caret" /></span>
      </div>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Ph.D. candidate · Civil Engineering · University of Southern California</p>
          <h1>Buildings that listen to the people inside them.</h1>
          <p className="lede">
            I’m Mirmahdi Seyedrezaei. I study how built environments shape health, safety, and well-being, using
            multimodal sensing, human-state modeling, and longitudinal machine learning. The goal is rigorous,
            deployable work that helps homes, offices, and affordable housing adapt to the people in them, especially
            those who can least afford a bad building.
          </p>
          <div className="cta-row">
            <a className="btn solid" href={SCHOLAR} target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="btn" href={ORCID} target="_blank" rel="noreferrer">ORCID</a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="mailto:seyedrez@usc.edu">seyedrez@usc.edu</a>
          </div>
        </div>

        <figure className="window">
          <div className="arch-box">
          <div className="arch-outer" />
          <div className="arch">
            {PROFILE_PHOTO ? (
              <img src={PROFILE_PHOTO} alt={PROFILE_ALT} />
            ) : (
              <div className="photo-ph">
                <span>Add profile photo</span>
                <code>public/images/profile.jpg</code>
                <code>then set PROFILE_PHOTO in data.js</code>
              </div>
            )}
            <div className="beam" />
          </div>
          <div className="sill" />
          </div>
        </figure>
      </header>

      {/* ---------- Research ---------- */}
      <section className="sec" aria-labelledby="research">
        <SectionHead id="research" title="Research" note="three threads, one question: who is the building for?" />
        <div className="pillars-wrap">
          <PillarsDiagram />
          <div className="pillars-copy">
            <p className="tag">The frame I work in</p>
            <ul>
              <li><strong>Well-being.</strong> Health, comfort, stress, and sleep of the people inside buildings.</li>
              <li><strong>Sustainability.</strong> Energy affordability and demand flexibility that do not shift cost onto residents.</li>
              <li><strong>Resilience.</strong> Habitability as life support.</li>
              <li><strong>Equity, at the core.</strong> Each pillar is judged by who it serves and who it leaves out.</li>
            </ul>
          </div>
        </div>
        <ul className="chips" aria-label="Research interests">
          {INTERESTS.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="cards three">
          <article className="card">
            <p className="tag">Human-centered AI and sensing</p>
            <h3>Well-being in hybrid work</h3>
            <p>Longitudinal, multimodal studies linking air quality, temperature, and lighting to workload, mood, stress, and performance at home and in the office.</p>
            <p className="for">For workers whose home air we almost never measure.</p>
            <p className="stat">5 cohorts · 50 office workers</p>
          </article>
          <article className="card">
            <p className="tag">Energy equity</p>
            <h3>Affordable housing and energy burden</h3>
            <p>Behavioral, financial, and circuit-level analyses of energy use in low-income housing, informing how solar benefits and demand response reach residents.</p>
            <p className="for">For residents who pay the bill and had no say in the design.</p>
            <p className="stat">$8M CEC consortium project · 107 units monitored</p>
          </article>
          <article className="card">
            <p className="tag">Equity framework</p>
            <h3>The Built Environment–Group–Need model</h3>
            <p>A systematic-review framework mapping how built environments serve, or fail, vulnerable populations across distributional, recognitional, and procedural dimensions.</p>
            <p className="for">For the groups the literature has overlooked.</p>
            <p className="stat">6,731 studies screened · 232 included</p>
          </article>
        </div>
      </section>

      {/* ---------- Publications ---------- */}
      <section className="sec" aria-labelledby="publications">
        <SectionHead id="publications" title="Publications" />
        <div className="tabs" role="tablist" aria-label="Filter publications">
          {["All", "Journal", "Conference", "Book"].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              className={"tab" + (filter === t ? " on" : "")}
              onClick={() => { setFilter(t); setShowAllPubs(false); }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="pubs">
          {pubs.map((p, i) => (
            <article className="pub" key={p.title + i}>
              <span className="yr">{p.year}</span>
              <div>
                <h3>{p.title}</h3>
                <p className="meta">{p.authors} — <em>{p.venue}</em></p>
                {p.link && <a className="doi" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel}</a>}
              </div>
              <Badge status={p.status} />
            </article>
          ))}
        </div>
        {filtered.length > 8 && (
          <button className="more" onClick={() => setShowAllPubs(!showAllPubs)}>
            {showAllPubs ? "Show fewer" : `Show all ${filtered.length}`}
          </button>
        )}
      </section>

      {/* ---------- Experience ---------- */}
      <section className="sec" aria-labelledby="experience">
        <SectionHead id="experience" title="Experience" note="selected research roles" />
        <div className="timeline">
          {EXPERIENCE.map((x, i) => (
            <article className="xp" key={i}>
              <span className="range">{x.range}</span>
              <div>
                <h3>{x.org}</h3>
                <p className="role">{x.role}</p>
                <ul>{x.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                {x.funding && <p className="funding">{x.funding}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Humanitarian roots ---------- */}
      <section className="sec roots" aria-labelledby="roots">
        <SectionHead id="roots" title="Humanitarian roots" />
        <div className="cards two">
          {HUMANITARIAN.map((h, i) => (
            <article className="card" key={i}>
              <p className="tag">{h.range}</p>
              <h3>{h.title}</h3>
              <p className="role">{h.role}</p>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- News ---------- */}
      <section className="sec" aria-labelledby="news">
        <SectionHead id="news" title="News" />
        <div className="cards two">
          {NEWS.map((n, i) => (
            <article className={"card news" + (n.placeholder ? " ph" : "")} key={i}>
              {(n.image || n.placeholder) && (
                <div className="news-img">
                  {n.image ? <img src={n.image} alt="" /> : <span>Add image</span>}
                </div>
              )}
              <p className="tag">{n.dateLabel || fmtDate(n.date)}</p>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              {n.link && (
                <a className="more-link" href={n.link} target="_blank" rel="noreferrer">
                  {n.linkLabel || "Read more"} →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Teaching and mentorship ---------- */}
      <section className="sec" aria-labelledby="teaching">
        <SectionHead id="teaching" title="Teaching and mentorship" />
        <div className="rows">
          {TEACHING.map((t, i) => (
            <div className="row" key={i}>
              <span className="range">{t.range}</span>
              <div>
                <h3>{t.title}</h3>
                <p className="role">{t.org}</p>
                <p className="small-text">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cards two mentees">
          {MENTORSHIP.map((mm, i) => (
            <article className="card slim" key={i}>
              <h3>{mm.title} <span className="lvl">{mm.level}</span></h3>
              <p className="range-s">{mm.range}</p>
              <p className="small-text">{mm.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="sec" aria-labelledby="projects">
        <SectionHead id="projects" title="Projects and code" />
        <div className="cards three">
          {PROJECTS.map((p, i) => (
            <article className="card" key={i}>
              <p className="tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.href ? (
                <a className="more-link" href={p.href} target="_blank" rel="noreferrer">View on GitHub →</a>
              ) : (
                <span className="soon">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Personal ---------- */}
      <section className="sec" aria-labelledby="personal">
        <SectionHead id="personal" title="Beyond the lab" />
        <p className="personal-intro">{PERSONAL_INTRO}</p>
        <div className="photos">
          {PERSONAL_PHOTOS.map((p, i) => (
            <figure key={i}>
              <div className="photo-box">
                {p.src ? <img src={p.src} alt={p.caption} /> : <span>Add photo</span>}
              </div>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- Education, awards, service ---------- */}
      <section className="sec">
        <div className="trio">
          <div>
            <h3>Education</h3>
            <ul className="plain">
              {EDUCATION.map((e, i) => (
                <li key={i}>
                  <strong>{e.degree}</strong>
                  <span>{e.org} · {e.year}</span>
                  {e.thesis && <span className="thesis">{e.thesis}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Awards and honors</h3>
            <ul>{AWARDS.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </div>
          <div>
            <h3>Service</h3>
            <ul>{SERVICE.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      <footer className="foot" id="contact">
        <div className="foot-in">
          <p className="foot-motto">This too shall pass.</p>
          <a className="foot-mail" href="mailto:seyedrez@usc.edu">seyedrez@usc.edu</a>
          <div className="foot-links">
            <a href={SCHOLAR} target="_blank" rel="noreferrer">Google Scholar</a>
            <a href={ORCID} target="_blank" rel="noreferrer">ORCID</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" title="Add your GitHub URL">GitHub</a>
          </div>
          <p className="copy">© 2026 Mirmahdi Seyedrezaei</p>
        </div>
      </footer>
    </div>
  );
}