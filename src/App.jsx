import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  PROFILE_PHOTO, PROFILE_ALT, MOTTOS, HUMANITARIAN, NEWS, PERSONAL_PHOTOS, PERSONAL_INTRO,
  PUBLICATIONS, EDUCATION, EXPERIENCE, TEACHING, MENTORSHIP, AWARDS, SERVICE, PROJECTS,
} from "./data.js";

const SCHOLAR = "https://scholar.google.com/citations?user=O6CRJkMAAAAJ&hl=en";
const ORCID = "https://orcid.org/0000-0003-4169-200X";
const LINKEDIN = "https://www.linkedin.com/in/mirmahdi-seyedrezaei/";
const CV = "./CV_Mirmahdi_Seyedrezaei.pdf";

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
  const [showAllMentees, setShowAllMentees] = useState(false);

  const filtered = filter === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.type === filter);
  const pubs = showAllPubs ? filtered : filtered.slice(0, 8);
  const mentees = showAllMentees ? MENTORSHIP : MENTORSHIP.slice(0, 4);
  const m = MOTTOS;

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
          <a href="#mottos">Mottos</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#roots">Roots</a>
          <a href="#news">News</a>
          <a href="#teaching">Teaching</a>
          <a href="#personal">Personal</a>
          <a className="nav-cv" href={CV} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Ph.D. candidate · Civil Engineering · University of Southern California</p>
          <h1>Buildings that listen to the people inside them.</h1>
          <p className="lede">
            I’m Mirmahdi Seyedrezaei. I study how built environments shape health, safety, and well-being, using
            human-centered AI, multimodal physiological and environmental sensing, and longitudinal machine-learning
            methods. The goal is rigorous, deployable work that makes homes, offices, and housing for those who can least
            afford a bad building adapt to the people in them.
          </p>
          <div className="cta-row">
            <a className="btn solid" href={CV} target="_blank" rel="noreferrer">Download CV</a>
            <a className="btn" href={SCHOLAR} target="_blank" rel="noreferrer">Google Scholar</a>
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
          <figcaption>The light crossing this window follows you down the page.</figcaption>
        </figure>
      </header>

      {/* ---------- Mottos ---------- */}
      <section className="sec mottos" aria-labelledby="mottos">
        <SectionHead id="mottos" title="Three lines I keep" />
        <p className="motto-1">
          {m.first.before} <span className="big">{m.first.big}</span> {m.first.mid}{" "}
          <span className="small">{m.first.small}</span>
          {m.first.after}
        </p>
        <div className="motto-row">
          <div className="motto-2">
            <p>{m.second}</p>
            <span className="cap">The light on this page moves as you scroll.</span>
          </div>
          <div className="motto-3">
            <p className="fa" lang="fa" dir="rtl">{m.verse.fa}</p>
            <p className="translit">{m.verse.translit}</p>
            <p className="trans">{m.verse.en}</p>
            <span className="cap">A line of Persian verse</span>
          </div>
        </div>
      </section>

      {/* ---------- Research ---------- */}
      <section className="sec" aria-labelledby="research">
        <SectionHead id="research" title="Research" note="three threads, one question: who is the building for?" />
        <div className="cards three">
          <article className="card">
            <p className="tag">Human-centered AI and sensing</p>
            <h3>Well-being in hybrid work</h3>
            <p>Longitudinal, multimodal studies linking air quality, temperature, and lighting to workload, mood, stress, and performance at home and in the office.</p>
            <p className="for">For workers whose home air we almost never measure.</p>
            <p className="stat">5 cohorts · 60 participants · 109 workspaces</p>
          </article>
          <article className="card">
            <p className="tag">Energy equity</p>
            <h3>Affordable housing and energy burden</h3>
            <p>Behavioral, financial, and circuit-level analyses of energy use in low-income housing, informing how solar benefits and demand response reach residents.</p>
            <p className="for">For residents who pay the bill and had no say in the design.</p>
            <p className="stat">$8M CEC project · 107 units monitored</p>
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
        <SectionHead id="publications" title="Publications" note={`${PUBLICATIONS.length} total`} />
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
        <SectionHead id="roots" title="Humanitarian roots" note="before the sensors, there were floods and earthquakes" />
        <div className="cards three">
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
        <SectionHead id="news" title="News" note="edit NEWS in data.js" />
        <div className="cards two">
          {NEWS.map((n, i) => (
            <article className={"card news" + (n.placeholder ? " ph" : "")} key={i}>
              <div className="news-img">
                {n.image ? <img src={n.image} alt="" /> : <span>Add image</span>}
              </div>
              <p className="tag">{fmtDate(n.date)}</p>
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
          {mentees.map((mm, i) => (
            <article className="card slim" key={i}>
              <h3>{mm.name} <span className="lvl">{mm.level}</span></h3>
              <p className="range-s">{mm.range}</p>
              <p className="small-text">{mm.note}</p>
            </article>
          ))}
        </div>
        {MENTORSHIP.length > 4 && (
          <button className="more" onClick={() => setShowAllMentees(!showAllMentees)}>
            {showAllMentees ? "Show fewer" : `Show all ${MENTORSHIP.length} mentees`}
          </button>
        )}
      </section>

      {/* ---------- Projects ---------- */}
      <section className="sec" aria-labelledby="projects">
        <SectionHead id="projects" title="Projects and code" note="repo links pending" />
        <div className="cards two">
          {PROJECTS.map((p, i) => (
            <article className="card" key={i}>
              <p className="tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a className="more-link" href={p.href} title="Replace with the real GitHub repo link">github.com/your-username/repo →</a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Personal ---------- */}
      <section className="sec" aria-labelledby="personal">
        <SectionHead id="personal" title="Beyond the lab" note="edit PERSONAL_INTRO and PERSONAL_PHOTOS in data.js" />
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
