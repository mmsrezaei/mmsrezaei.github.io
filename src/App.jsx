import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  PROFILE, PROFILE_PHOTO, PROFILE_ALT, HERO, FIELDS, VISION, MOTTOS,
  NEWS, NEWS_SHOWN, PERSONAL_INTRO, PERSONAL_PHOTOS, RESEARCH, EARLIER, FUNDING,
  PUBLICATIONS, TALKS, TEACHING, COURSES, MENTORSHIP, SERVICE, HUMANITARIAN,
  AWARDS, MEDIA, PROJECTS,
} from "./data";

const NAV = [
  ["vision", "Vision"],
  ["research", "Research"],
  ["publications", "Publications"],
  ["teaching", "Teaching"],
  ["service", "Service"],
  ["news", "News"],
  ["contact", "Contact"],
];

const BADGE = { Published: "ok", Submitted: "sub", "In prep": "prep", Funded: "ok", "Under review": "sub" };

function Section({ id, title, note, children, className = "" }) {
  return (
    <section id={id} className={"sec " + className}>
      <div className="sec-head">
        <h2>{title}</h2>
        {note && <span className="note">{note}</span>}
      </div>
      {children}
    </section>
  );
}

function Ext({ href, children, className }) {
  if (!href) return null;
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

/* Small line icons for the three thrusts, matching Figure 1 of the research statement */
function ThrustIcon({ i }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (i === 0)
    return (
      <svg viewBox="0 0 36 28" width="36" height="28" aria-hidden="true">
        <circle cx="9" cy="7" r="4.5" {...p} />
        <path d="M1 26v-6q0-7 8-7t8 7v6" {...p} />
        <path d="M22 4q5 7 0 14M27 1q7 10 0 20" {...p} />
      </svg>
    );
  if (i === 1)
    return (
      <svg viewBox="0 0 38 28" width="38" height="28" aria-hidden="true">
        <circle cx="7" cy="7" r="4" {...p} />
        <path d="M0 26v-6q0-6 7-6t7 6v6" {...p} />
        <circle cx="31" cy="7" r="4" {...p} />
        <path d="M24 26v-6q0-6 7-6t7 6v6" {...p} />
        <path d="M19 2v24" {...p} strokeWidth="2.2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 38 28" width="38" height="28" aria-hidden="true">
      <path d="M1 27V15L12 6l11 9v12z" {...p} />
      <path d="M28 24q3-3 0-6t0-6M33 24q3-3 0-6t0-6" {...p} />
    </svg>
  );
}

/* Footer art: a habitat under a night sky, its windows lit and a sensor pulsing. Earth to beyond. */
function Habitat() {
  const stars = [[40,30],[120,70],[210,22],[300,58],[390,18],[470,80],[560,34],[640,64],[720,20],[810,48],[900,26],[980,72],[1060,40],[1140,16],[1210,60],[160,110],[620,108],[1000,112],[260,130],[860,124]];
  return (
    <svg className="habitat" viewBox="0 0 1240 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {stars.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 ? 1 : 1.6} className={"star s" + (i % 4)} />)}
      <path d="M0 220 Q620 120 1240 220 Z" className="ground" />
      <path d="M0 220 Q620 120 1240 220" className="horizon" />
      <g transform="translate(560 154)">
        <path d="M0 26 A60 50 0 0 1 120 26 Z" className="dome" />
        <path d="M20 26 A40 34 0 0 1 100 26 M60 -24 V26" className="rib" />
        <rect x="34" y="8" width="12" height="9" rx="2" className="win" />
        <rect x="74" y="8" width="12" height="9" rx="2" className="win w2" />
        <line x1="96" y1="-14" x2="104" y2="-30" className="rib" />
        <circle cx="104" cy="-31" r="2.4" className="node" />
        <circle cx="104" cy="-31" r="7" className="node-ring" />
      </g>
    </svg>
  );
}

export default function App() {
  const siteRef = useRef(null);
  const readRef = useRef(null);
  const [pubType, setPubType] = useState("All");
  const [firstOnly, setFirstOnly] = useState(false);
  const [allPubs, setAllPubs] = useState(false);
  const [allNews, setAllNews] = useState(false);
  const [open, setOpen] = useState({ 0: true });

  // Scroll progress drives the sun rail and the light beam on the photo.
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      if (siteRef.current) {
        siteRef.current.style.setProperty("--p", p.toFixed(3));
        siteRef.current.dataset.dusk = p > 0.92 ? "on" : "off";
      }
      if (readRef.current) {
        // A building's day: 06:00 to 21:00, with daylight rising and falling
        const mins = 360 + Math.round(p * 900);
        const hh = String(Math.floor(mins / 60)).padStart(2, "0");
        const mm = String(mins % 60).padStart(2, "0");
        const lux = Math.round(40 + 860 * Math.sin(Math.PI * p));
        readRef.current.textContent = `${hh}:${mm}\n${lux} lx`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let pubs = PUBLICATIONS.filter((p) => pubType === "All" || p.type === pubType);
  if (firstOnly) pubs = pubs.filter((p) => p.first);
  const shownPubs = allPubs ? pubs : pubs.slice(0, 8);
  const news = allNews ? NEWS : NEWS.slice(0, NEWS_SHOWN);
  const hasPersonal = PERSONAL_INTRO || PERSONAL_PHOTOS.some((p) => p.src);

  return (
    <div className="site" ref={siteRef}>
      <a className="skip" href="#vision">Skip to content</a>

      {/* Sun rail: a small sun travels down as you scroll */}
      <div className="rail" aria-hidden="true">
        <div className="rail-track"><div className="rail-sun" /></div>
        <div className="rail-read" ref={readRef} />
      </div>

      <nav className="nav" aria-label="Main">
        <a className="nav-mark" href="#top">{PROFILE.name}</a>
        <div className="nav-links">
          {NAV.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
          <a className="nav-cv" href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>

      {/* ---------------- Hero ---------------- */}
      <header className="hero" id="top">
        <div>
          <div className="eyebrow">{HERO.eyebrow}</div>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <p className="hero-role">{PROFILE.role}</p>
          <p className="hero-line">{HERO.headline}</p>
          <p className="lede">{HERO.lede}</p>
          {HERO.note && <p className="hero-note">{HERO.note}</p>}
          <p className="hero-status">{HERO.status}</p>
          <div className="cta-row">
            <a className="btn solid" href={PROFILE.cv} target="_blank" rel="noreferrer">Download CV</a>
            {PROFILE.links.map((l) => (
              <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        </div>
        <figure className="window">
          <div className="arch-box">
            <div className="arch-outer" />
            <div className="arch">
              {PROFILE_PHOTO ? (
                <img src={PROFILE_PHOTO} alt={PROFILE_ALT} />
              ) : (
                <div className="photo-ph"><span>Your photo</span><code>public/images/profile.jpeg</code></div>
              )}
              <div className="beam" />
            </div>
          </div>
          <div className="sill" />
        </figure>
      </header>

      {/* ---------------- Fields ---------------- */}
      <div className="fields" aria-label="Research areas">
        {FIELDS.map((f) => (
          <div className="field" key={f.label}>
            <strong>{f.label}</strong>
            <span>{f.note}</span>
          </div>
        ))}
      </div>


      {/* ---------------- Vision ---------------- */}
      <Section id="vision" title="Research vision" note="three connected thrusts">
        <p className="vision-intro">{VISION.intro}</p>
        <div className="thrusts">
          {VISION.thrusts.map((t, i) => (
            <article className="thrust" key={t.num}>
              <div className="thrust-top">
                <span className="thrust-icon"><ThrustIcon i={i} /></span>
                <span className="thrust-num">{t.num}</span>
                <span className="thrust-verb">{t.verb}</span>
              </div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
        <div className="foundation">
          <b>Shared foundation</b>
          {VISION.foundation.map((f) => <span key={f}>{f}</span>)}
        </div>
      </Section>

      {/* ---------------- News ---------------- */}
      <Section id="news" title="News">
        <div className="cards three">
          {news.map((n, i) => (
            <article className="card" key={i}>
              {n.image && <div className="news-img"><img src={n.image} alt="" /></div>}
              <span className="tag">{n.date}</span>
              <h3>{n.title}</h3>
              <p>{n.desc}</p>
              <Ext className="more-link" href={n.link}>{(n.linkLabel || "Read more") + " →"}</Ext>
            </article>
          ))}
        </div>
        {NEWS.length > NEWS_SHOWN && (
          <button className="more" onClick={() => setAllNews(!allNews)}>
            {allNews ? "Show less" : `Show all ${NEWS.length}`}
          </button>
        )}
      </Section>

      {/* ---------------- Research ---------------- */}
      <Section id="research" title="Research" note="projects and findings">
        {RESEARCH.map((r, i) => (
          <article className="xp" key={r.title}>
            <div className="range">{r.range}</div>
            <div>
              <h3>{r.title}</h3>
              <p className="role">{r.role}</p>
              <div className="chips">{r.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <p className="xp-sum">{r.summary}</p>
              {open[i] && (
                <>
                  <ul>{r.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                  {r.funding && <p className="funding">{r.funding}</p>}
                </>
              )}
              <button className="toggle" aria-expanded={!!open[i]} onClick={() => setOpen({ ...open, [i]: !open[i] })}>
                {open[i] ? "Hide details" : "Methods and findings"}
              </button>
            </div>
          </article>
        ))}

        <h3 className="sub-h">Civil engineering roots</h3>
        {EARLIER.map((e) => (
          <div className="row" key={e.title}>
            <div className="range">{e.range}</div>
            <div>
              <h3 className="row-h">{e.title}</h3>
              <p className="small-text">{e.text}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* ---------------- Funding ---------------- */}
      <Section id="funding" title="Funding" note="funded and under review">
        {FUNDING.map((f) => (
          <div className="row" key={f.title}>
            <div className="range">{f.years}</div>
            <div>
              <h3 className="row-h">{f.title} <span className={"badge " + BADGE[f.status]}>{f.status}</span></h3>
              <p className="small-text">{f.sponsor} · {f.amount}</p>
              <p className="role">{f.role}</p>
            </div>
          </div>
        ))}
      </Section>

      {/* ---------------- Publications ---------------- */}
      <Section id="publications" title="Publications" note="● first-authored">
        <div className="tabs" role="group" aria-label="Filter publications">
          {["All", "Journal", "Conference", "Book"].map((t) => (
            <button key={t} className={"tab" + (pubType === t ? " on" : "")} onClick={() => { setPubType(t); setAllPubs(false); }}>
              {t}
            </button>
          ))}
          <button className={"tab" + (firstOnly ? " on" : "")} onClick={() => { setFirstOnly(!firstOnly); setAllPubs(false); }}>
            First-authored only
          </button>
        </div>
        {shownPubs.map((p, i) => (
          <div className="pub" key={i}>
            <span className="yr">{p.year}</span>
            <div>
              <h3>{p.first && <span className="first" title="First-authored">● </span>}{p.title}</h3>
              <p className="meta">{p.authors} · <i>{p.venue}</i></p>
              <Ext className="doi" href={p.link}>{p.link.replace("https://", "")}</Ext>
            </div>
            <span className={"badge " + BADGE[p.status]}>{p.status}</span>
          </div>
        ))}
        {pubs.length > 8 && (
          <button className="more" onClick={() => setAllPubs(!allPubs)}>
            {allPubs ? "Show fewer" : `Show all ${pubs.length}`}
          </button>
        )}
      </Section>

      {/* ---------------- Talks ---------------- */}
      <Section id="talks" title="Talks and panels">
        {TALKS.map((t) => (
          <div className="row" key={t.title}>
            <div className="range">{t.year}</div>
            <div>
              <h3 className="row-h">{t.title}</h3>
              <p className="small-text">{t.kind} · {t.venue} <Ext className="inline-link" href={t.link}>link</Ext></p>
            </div>
          </div>
        ))}
      </Section>

      {/* ---------------- Teaching and mentoring ---------------- */}
      <Section id="teaching" title="Teaching and mentoring">
        {TEACHING.map((t) => (
          <div className="row" key={t.title}>
            <div className="range">{t.range}</div>
            <div>
              <h3 className="row-h">{t.title}</h3>
              <p className="role">{t.org}</p>
              <p className="small-text">{t.detail}</p>
            </div>
          </div>
        ))}

        <div className="courses">
          <div>
            <h3 className="sub-h">Ready to teach (undergraduate)</h3>
            <ul>{COURSES.undergrad.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div>
            <h3 className="sub-h">Ready to teach (graduate)</h3>
            <ul>{COURSES.grad.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>

        <h3 className="sub-h">Students I mentor and have mentored</h3>
        <div className="cards two mentees">
          {MENTORSHIP.map((m) => (
            <div className="card slim" key={m.name}>
              <h3>{m.name}<span className="lvl">{m.level}</span></h3>
              <p className="range-s">{m.range}</p>
              <p>{m.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Service, leadership, honors ---------------- */}
      <Section id="service" title="Service, leadership, and honors">
        <div className="trio">
          <div>
            <h3>Service to the field</h3>
            <ul>{SERVICE.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3>Community leadership</h3>
            <ul className="plain">
              {HUMANITARIAN.map((h) => (
                <li key={h.title}>
                  <strong>{h.title} · {h.range}</strong>
                  <span>{h.role}</span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Honors</h3>
            <ul>{AWARDS.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </Section>

      {/* ---------------- Media and code ---------------- */}
      <Section id="media" title="In the media and code">
        <div className="courses">
          <div>
            <ul className="plain-list">
              {MEDIA.map((m) => (
                <li key={m.title}>
                  <a href={m.link} target="_blank" rel="noreferrer">{m.title}</a>
                  <span>{m.outlet}, {m.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="plain-list">
              {PROJECTS.map((p) => (
                <li key={p.title}>
                  {p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.title}</a> : <b>{p.title}</b>}
                  <span>{p.tag}. {p.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ---------------- Mottos ---------------- */}
      <section className="sec mottos" aria-label="Mottos">
        <p className="motto-1">
          {MOTTOS.first.before} <span className="big">{MOTTOS.first.big}</span> {MOTTOS.first.mid}{" "}
          <span className="small">{MOTTOS.first.small}</span>{MOTTOS.first.after}
        </p>
        <div className="motto-row">
          <div className="motto-2"><p>{MOTTOS.second}</p></div>
          <div>
            <p className="fa" lang="fa" dir="rtl">{MOTTOS.verse.fa}</p>
            <p className="translit">{MOTTOS.verse.translit}</p>
            <p className="trans">{MOTTOS.verse.en}</p>
          </div>
        </div>
      </section>

      {hasPersonal && (
        <Section id="personal" title="Beyond the lab">
          {PERSONAL_INTRO && <p className="personal-intro">{PERSONAL_INTRO}</p>}
          <div className="photos">
            {PERSONAL_PHOTOS.filter((p) => p.src).map((p, i) => (
              <figure key={i}>
                <div className="photo-box"><img src={p.src} alt={p.caption} /></div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- Footer ---------------- */}
      <footer className="foot" id="contact">
        <Habitat />
        <div className="foot-in">
          <p className="foot-motto">Let's talk about people and buildings.</p>
          <a className="foot-mail" href={"mailto:" + PROFILE.email}>{PROFILE.email}</a>
          <div className="foot-links">
            {PROFILE.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
            <a href={PROFILE.cv} target="_blank" rel="noreferrer">CV</a>
          </div>
          <p className="copy">© {new Date().getFullYear()} {PROFILE.name}</p>
        </div>
      </footer>
    </div>
  );
}
