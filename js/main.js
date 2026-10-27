(() => {
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const ghUrl = (repo) => `https://github.com/${D.github}/${repo}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Render content ---------- */
  $("#marquee").innerHTML = [...D.marquee, ...D.marquee].map((t) => `<span>${esc(t)}</span>`).join("");

  $("#venturesList").innerHTML = D.ventures.map((v, i) => `
    <a class="venture reveal" href="${v.link}" target="_blank" rel="noopener">
      <span class="venture__idx mono">0${i + 1}</span>
      <div>
        <span class="venture__tag mono">${esc(v.tag)}</span>
        <h3>${esc(v.name)}</h3>
        <span class="venture__role mono muted">${esc(v.role)}</span>
      </div>
      <p class="muted">${esc(v.desc)}</p>
      <span class="venture__arrow">↗</span>
    </a>`).join("");

  const counts = Object.fromEntries(D.filters.map((f) => [f.id, f.id === "all" ? D.projects.length : D.projects.filter((p) => p.cat.includes(f.id)).length]));
  $("#filters").innerHTML = D.filters.map((f, i) =>
    `<button class="${i === 0 ? "active" : ""}" data-filter="${f.id}">${esc(f.label)}<sup>${counts[f.id]}</sup></button>`).join("");

  $("#projects").innerHTML = D.projects.map((p, i) => `
    <article class="card project reveal ${p.featured ? "featured" : ""}" data-spotlight data-tilt data-cat="${p.cat.join(" ")}">
      <div class="project__top mono">
        <span class="project__num">${String(i + 1).padStart(2, "0")}</span>
        ${p.featured ? `<span class="project__badge">Featured</span>` : p.live ? `<span class="project__badge">Live</span>` : ""}
      </div>
      <div>
        <span class="project__sub mono">${esc(p.subtitle)}</span>
        <h3 class="project__title">${esc(p.title)}</h3>
      </div>
      <p class="project__desc">${esc(p.desc)}</p>
      <div class="project__tags mono">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="project__links">
        ${p.live ? `<a class="live" href="${p.live}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}
        <a href="${ghUrl(p.repo)}" target="_blank" rel="noopener">Source code ↗</a>
      </div>
    </article>`).join("");

  $("#stackList").innerHTML = D.stack.map((g) => `
    <div class="stack__row reveal">
      <h3>${esc(g.group)}</h3>
      <div class="stack__items">${g.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div>`).join("");

  $("#process").innerHTML = D.process.map((s, i) => `
    <article class="card step reveal" data-spotlight>
      <span class="step__n">0${i + 1}</span>
      <div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>
    </article>`).join("");

  $("#contactLinks").innerHTML = D.contact.map((c) => `
    <a class="contact__link" href="${c.href}" target="_blank" rel="noopener" data-magnetic>
      <span class="mono muted">${esc(c.label)}</span>
      <strong>${esc(c.value)} <span>↗</span></strong>
    </a>`).join("");

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Filters ---------- */
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $$("#filters button").forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    $$(".project").forEach((p) => {
      const show = f === "all" || p.dataset.cat.split(" ").includes(f);
      p.classList.toggle("hide", !show);
      if (show) p.classList.add("in");
    });
  });

  /* ---------- Loader ---------- */
  $$(".loader__name span").forEach((s, i) => s.style.setProperty("--i", i));
  document.body.classList.add("loading");
  let pct = 0;
  const finish = () => {
    $("#loader").classList.add("done");
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
    revealHero();
  };
  if (reduced) { pct = 100; finish(); }
  else {
    const tick = () => {
      pct = Math.min(100, pct + Math.random() * 9 + 3);
      $("#loaderCount").textContent = Math.floor(pct);
      $("#loaderBar").style.width = pct + "%";
      if (pct < 100) setTimeout(tick, 45);
      else setTimeout(finish, 300);
    };
    tick();
  }

  function revealHero() {
    $$(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("in"), 500 + i * 120));
  }

  /* ---------- Scroll reveal & counters ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.closest(".hero")) return;
      const siblings = $$(".reveal", el.parentElement);
      el.style.transitionDelay = Math.min(siblings.indexOf(el), 6) * 70 + "ms";
      el.classList.add("in");
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  const animateCount = (el) => {
    const target = +el.dataset.count;
    const start = performance.now();
    const dur = 1600;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.5 });
  $$(".count").forEach((el) => cio.observe(el));

  // Live repo count from GitHub (falls back to the static number)
  fetch(`https://api.github.com/users/${D.github}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((u) => { if (u && u.public_repos) { const el = $("#repoCount"); el.dataset.count = u.public_repos; if (el.textContent !== "0") el.textContent = u.public_repos; } })
    .catch(() => {});

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  let lastY = 0;
  const sections = $$("main section[id]");
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 40);
    nav.classList.toggle("hidden", y > lastY && y > 400 && !nav.classList.contains("open"));
    lastY = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    let current = "";
    sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
    $$(".nav__links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#burger").addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav__links a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  /* ---------- Typed roles ---------- */
  const typed = $("#typed");
  let ri = 0, ci = D.roles[0].length, deleting = true;
  const typeLoop = () => {
    const word = D.roles[ri];
    if (deleting) {
      ci--;
      if (ci <= 0) { deleting = false; ri = (ri + 1) % D.roles.length; }
    } else {
      ci++;
      if (ci >= D.roles[ri].length) { deleting = true; typed.textContent = D.roles[ri]; return setTimeout(typeLoop, 1800); }
    }
    typed.textContent = (deleting ? word : D.roles[ri]).slice(0, ci);
    setTimeout(typeLoop, deleting ? 45 : 85);
  };
  if (!reduced) setTimeout(typeLoop, 3200);

  /* ---------- Clock ---------- */
  const clock = () => {
    $("#clock").textContent = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
  };
  clock(); setInterval(clock, 15000);

  /* ---------- Cursor, magnetic, spotlight, tilt ---------- */
  if (fine && !reduced) {
    const cur = $("#cursor"), dot = $("#cursorDot");
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; });
    (function loop() {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      cur.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", (e) => cur.classList.toggle("hover", !!e.target.closest("a, button, .chip")));

    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transition = "transform .5s cubic-bezier(.22,1,.36,1)"; el.style.transform = ""; setTimeout(() => (el.style.transition = ""), 500); });
    });

    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest("[data-spotlight]");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  });

  /* ---------- Hero particle network ---------- */
  const canvas = $("#hero-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 }, running = true;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.floor((W * H) / 14000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.4 }));
  };
  resize();
  addEventListener("resize", resize);
  canvas.parentElement.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  canvas.parentElement.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) draw(); }).observe(canvas);
  const LINK = 130;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      if (!reduced) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 160 && d > 0) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) { ctx.strokeStyle = `rgba(198,255,61,${(1 - d / LINK) * 0.18})`; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 200) { ctx.strokeStyle = `rgba(124,92,255,${(1 - md / 200) * 0.5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      ctx.fillStyle = "rgba(242,240,234,0.7)";
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (running && !reduced) requestAnimationFrame(draw);
  }
  draw();

  /* ---------- Terminal easter egg ---------- */
  const term = $("#term"), body = $("#termBody"), input = $("#termInput");
  const print = (html) => { body.insertAdjacentHTML("beforeend", html + "\n"); body.scrollTop = body.scrollHeight; };
  const banner = () => print(`<span class="c">
   ___   __  ___
  / _ | /  |/  /   Ashutosh Mishra
 / __ |/ /|_/ /    Founder & CEO, Reasonate AI
/_/ |_/_/  /_/     </span><span class="d">type 'help' to begin</span>`);
  const cmds = {
    help: () => `<span class="v">about</span>      who am I
<span class="v">ventures</span>   companies I'm building
<span class="v">projects</span>   things I've shipped
<span class="v">stack</span>      my toolkit
<span class="v">contact</span>    reach out
<span class="v">github</span>     open my GitHub
<span class="v">clear</span>      clear screen
<span class="v">exit</span>       close terminal`,
    about: () => `Ashutosh Mishra — Founder & CEO of Reasonate AI Pvt. Ltd.
Prayagraj, India. Full-stack engineer, AI builder, startup builder.
Building across health-tech, defence-AI, mobility and ed-tech.`,
    ventures: () => D.ventures.map((v) => `<span class="c">▸</span> ${esc(v.name)} <span class="d">— ${esc(v.role)}</span>`).join("\n"),
    projects: () => D.projects.map((p) => `<span class="c">▸</span> ${esc(p.title).padEnd(28)}<span class="d">${esc(p.subtitle)}</span>`).join("\n"),
    stack: () => D.stack.map((g) => `<span class="v">${esc(g.group).padEnd(13)}</span>${g.items.map(esc).join(", ")}`).join("\n"),
    contact: () => D.contact.map((c) => `<span class="v">${esc(c.label).padEnd(13)}</span><a href="${c.href}" target="_blank" rel="noopener">${esc(c.value)}</a>`).join("\n"),
    github: () => { open(`https://github.com/${D.github}`, "_blank", "noopener"); return "opening github…"; },
    whoami: () => "a visitor with great taste in portfolios 😉",
    "sudo hire-me": () => `<span class="c">[sudo] access granted.</span> Let's build something tagda → scroll to contact.`,
    ls: () => "about  ventures  projects  stack  contact",
    clear: () => { body.innerHTML = ""; return null; },
    exit: () => { toggleTerm(false); return null; }
  };
  const toggleTerm = (show) => {
    term.classList.toggle("open", show);
    term.setAttribute("aria-hidden", String(!show));
    if (show) { if (!body.childNodes.length) banner(); setTimeout(() => input.focus(), 50); }
  };
  $("#termForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value.trim(); input.value = "";
    if (!v) return;
    print(`<span class="c">❯</span> ${esc(v)}`);
    const fn = cmds[v.toLowerCase()];
    const out = fn ? fn() : `command not found: ${esc(v)} — try <span class="v">help</span>`;
    if (out !== null) print(out);
  });
  $("#termOpen").addEventListener("click", () => toggleTerm(true));
  $("#termClose").addEventListener("click", () => toggleTerm(false));
  term.addEventListener("click", (e) => { if (e.target === term) toggleTerm(false); });
  addEventListener("keydown", (e) => {
    const typing = /input|textarea/i.test(document.activeElement.tagName);
    if (e.key === "/" && !typing) { e.preventDefault(); toggleTerm(true); }
    if (e.key === "Escape") toggleTerm(false);
  });
})();
