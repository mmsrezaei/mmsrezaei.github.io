import { useEffect, useRef } from "react";

/*
  A quiet, living background: a floor plan of a building that senses and responds to people.
  - Thin plan lines and a dot grid: the built environment.
  - Small sensor nodes at room corners: the cyber-physical layer.
  - Soft warm glows drifting through rooms: occupants. Your cursor is one of them.
  - When a person is near, nearby sensors light up and link to them, and the room warms:
    the building noticing and adapting.
  - The light shifts from dawn to golden hour as you scroll (a building's day).
  Respects prefers-reduced-motion (draws one still frame) and pauses when the tab is hidden.
*/

const LAPIS = [35, 64, 122];
const TURQ = [27, 127, 134];
// Room tint through the day: dawn rose -> noon cool -> golden hour
const DAY = [
  [243, 196, 176],
  [196, 222, 236],
  [245, 205, 140],
];

const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
function dayTint(p) {
  return p < 0.5 ? mix(DAY[0], DAY[1], p / 0.5) : mix(DAY[1], DAY[2], (p - 0.5) / 0.5);
}

// Seeded random so the plan is stable between visits
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// Split the viewport into rooms like a floor plan (binary space partition)
function makeRooms(w, h, rand) {
  const rooms = [];
  const min = Math.max(150, Math.min(w, h) / 4.2);
  (function split(x, y, rw, rh, depth) {
    const canW = rw > min * 2, canH = rh > min * 2;
    if (depth > 5 || (!canW && !canH)) { rooms.push({ x, y, w: rw, h: rh, warm: 0 }); return; }
    const vertical = canW && (!canH || rw > rh * (0.9 + rand() * 0.4));
    const t = 0.35 + rand() * 0.3;
    if (vertical) {
      const a = Math.round(rw * t);
      split(x, y, a, rh, depth + 1); split(x + a, y, rw - a, rh, depth + 1);
    } else {
      const a = Math.round(rh * t);
      split(x, y, rw, a, depth + 1); split(x, y + a, rw, rh - a, depth + 1);
    }
  })(0, 0, w, h, 0);
  return rooms;
}

export default function LivingBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, rooms = [], sensors = [], people = [], raf = 0, running = true;
    const pointer = { x: -9999, y: -9999, active: false, last: 0 };

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const rand = rng(20270);
      rooms = makeRooms(w, h, rand);
      // Sensors: one per room, placed near a corner, plus a few ceiling nodes in big rooms
      sensors = [];
      rooms.forEach((r) => {
        const inset = 14;
        const cx = rand() < 0.5 ? r.x + inset : r.x + r.w - inset;
        const cy = rand() < 0.5 ? r.y + inset : r.y + r.h - inset;
        sensors.push({ x: cx, y: cy, phase: rand() * 6.28, glow: 0 });
        if (r.w * r.h > 90000) sensors.push({ x: r.x + r.w / 2, y: r.y + r.h / 2, phase: rand() * 6.28, glow: 0 });
      });
      // Occupants wander slowly between rooms
      const n = Math.max(3, Math.min(6, Math.round((w * h) / 260000)));
      people = Array.from({ length: n }, (_, i) => ({
        x: rand() * w, y: rand() * h,
        tx: rand() * w, ty: rand() * h,
        speed: 0.12 + rand() * 0.12,
        r: 70 + rand() * 50,
        hue: i % 2,
      }));
    }

    function scrollP() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      return max > 0 ? Math.min(1, el.scrollTop / max) : 0;
    }

    function step(t) {
      const p = scrollP();
      const tint = dayTint(p);
      ctx.clearRect(0, 0, w, h);

      // Move occupants toward their targets; pick a new target on arrival
      people.forEach((o) => {
        const dx = o.tx - o.x, dy = o.ty - o.y, d = Math.hypot(dx, dy);
        if (d < 8) { o.tx = Math.random() * w; o.ty = Math.random() * h; }
        else if (!reduce) { o.x += (dx / d) * o.speed; o.y += (dy / d) * o.speed; }
      });
      const bodies = people.map((o) => ({ x: o.x, y: o.y, r: o.r, hue: o.hue }));
      if (pointer.active && t - pointer.last < 4000) bodies.push({ x: pointer.x, y: pointer.y, r: 110, hue: 2 });

      // Dot grid
      ctx.fillStyle = rgba(LAPIS, 0.07);
      for (let gx = 16; gx < w; gx += 32) for (let gy = 16; gy < h; gy += 32) ctx.fillRect(gx, gy, 1.2, 1.2);

      // Rooms: warm up when occupied (the building responding), then cool down
      rooms.forEach((r) => {
        const occupied = bodies.some((b) => b.x > r.x && b.x < r.x + r.w && b.y > r.y && b.y < r.y + r.h);
        r.warm += ((occupied ? 1 : 0) - r.warm) * (reduce ? 1 : 0.02);
        if (r.warm > 0.01) {
          ctx.fillStyle = rgba(tint, 0.16 * r.warm);
          ctx.fillRect(r.x + 3, r.y + 3, r.w - 6, r.h - 6);
        }
        ctx.strokeStyle = rgba(LAPIS, 0.07);
        ctx.lineWidth = 1;
        ctx.strokeRect(r.x + 0.5, r.y + 0.5, r.w, r.h);
        // a door gap on one wall, as a plan would show
        ctx.clearRect(r.x + r.w * 0.42, r.y - 1, 26, 3);
      });

      // Occupants as soft glows
      bodies.forEach((b) => {
        const col = b.hue === 2 ? [231, 161, 43] : b.hue === 1 ? [231, 150, 120] : [240, 180, 90];
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, rgba(col, 0.22));
        g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.283); ctx.fill();
      });

      // Sensors notice nearby people and link to them
      sensors.forEach((s) => {
        let near = 0;
        bodies.forEach((b) => {
          const d = Math.hypot(b.x - s.x, b.y - s.y);
          const reach = 230;
          if (d < reach) {
            const k = 1 - d / reach;
            near = Math.max(near, k);
            ctx.strokeStyle = rgba(TURQ, 0.28 * k);
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 5]);
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            ctx.setLineDash([]);
          }
        });
        s.glow += (near - s.glow) * (reduce ? 1 : 0.08);
        const pulse = reduce ? 0.5 : 0.5 + 0.5 * Math.sin(t / 900 + s.phase);
        const a = 0.18 + 0.5 * s.glow + 0.08 * pulse;
        ctx.fillStyle = rgba(TURQ, a);
        ctx.beginPath(); ctx.arc(s.x, s.y, 2.2 + 1.6 * s.glow, 0, 6.283); ctx.fill();
        if (s.glow > 0.05) {
          ctx.strokeStyle = rgba(TURQ, 0.25 * s.glow);
          ctx.beginPath(); ctx.arc(s.x, s.y, 6 + 10 * s.glow * pulse, 0, 6.283); ctx.stroke();
        }
      });

      if (!reduce && running) raf = requestAnimationFrame(step);
    }

    const onResize = () => { build(); if (reduce) step(0); };
    const onMove = (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; pointer.last = performance.now(); };
    const onLeave = () => { pointer.active = false; };
    const onVis = () => {
      running = !document.hidden;
      if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(step); }
    };
    const onScroll = () => { if (reduce) step(0); };

    build();
    if (reduce) step(0); else raf = requestAnimationFrame(step);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="living-bg" aria-hidden="true" />;
}
