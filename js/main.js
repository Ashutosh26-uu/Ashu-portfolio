(() => {
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (href) => (href.startsWith("http") ? ' target="_blank" rel="noopener"' : "");
  const ghUrl = (repo) => `https://github.com/${D.github}/${repo}`;

  const ICONS = {
    brain: '<svg viewBox="0 0 24 24"><path d="M9 3a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 9.3a3 3 0 0 0 .6 5A3 3 0 0 0 9 18.6V21M15 3a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 2.8 3 3 0 0 1-.6 5A3 3 0 0 1 15 18.6V21M9 3h6M12 3v18"/></svg>',
    heal: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/><path d="M12 8v8M8 12h8"/></svg>',
    nodes: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="3" width="6" height="6" rx="1.5"/><rect x="9" y="15" width="6" height="6" rx="1.5"/><path d="M6 9v3h12V9M12 12v3"/></svg>'
  };

  /* ---------- Render ---------- */
  $("#creds").innerHTML = D.credentials.map((c) => `<li>${esc(c)}</li>`).join("");

  $("#figures").innerHTML = D.figures.map((f) => `
    <div class="figure reveal">
      <div class="figure__n"><span class="count" data-count="${f.n}">0</span>${f.suffix ? `<sup>${esc(f.suffix)}</sup>` : ""}</div>
      <p class="figure__l">${esc(f.label)}</p>
    </div>`).join("");

  // Ventures — tabs + detail panel
  const tabs = $("#ventureTabs"), panel = $("#venturePanel");
  tabs.innerHTML = D.ventures.map((v, i) => `
    <button class="vtab" role="tab" id="tab-${v.id}" aria-controls="venturePanel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-i="${i}" style="--c:${v.color}">
      <span class="vtab__mark">${esc(v.mark)}</span>
      <span><b>${esc(v.name)}</b><small>${esc(v.role)}</small></span>
      <span class="vtab__arrow" aria-hidden="true">→</span>
    </button>`).join("");
  const showVenture = (i) => {
    const v = D.ventures[i];
    $$(".vtab", tabs).forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
    panel.setAttribute("aria-labelledby", `tab-${v.id}`);
    panel.innerHTML = `
      <article class="card vpanel" style="--c:${v.color}">
        <div class="vpanel__top">
          <div>
            <p class="vpanel__sector">${esc(v.sector)}</p>
            <h3>${esc(v.name)}</h3>
            <p class="vpanel__legal">${esc(v.legal)}${v.since ? ` · ${esc(v.since)}` : ""}</p>
          </div>
          <div class="vpanel__badges">
            <span class="badge">${esc(v.role)}</span>
            <span class="badge badge--live"><span class="status-dot"></span>${esc(v.stage)}</span>
          </div>
        </div>
        <p class="vpanel__summary">${esc(v.summary)}</p>
        <div class="vpanel__grid">
          <ul class="vpanel__list">${v.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          <div class="vpanel__metrics">${v.metrics.map(([n, l]) => `<div><b>${esc(n)}</b><small>${esc(l)}</small></div>`).join("")}</div>
        </div>
        <a class="vpanel__link" href="${v.link}"${ext(v.link)}>${esc(v.linkLabel)} <span aria-hidden="true">↗</span></a>
      </article>`;
  };
  showVenture(0);
  tabs.addEventListener("click", (e) => { const t = e.target.closest(".vtab"); if (t) showVenture(+t.dataset.i); });
  tabs.addEventListener("keydown", (e) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const cur = $$(".vtab", tabs).findIndex((t) => t.getAttribute("aria-selected") === "true");
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (cur + dir + D.ventures.length) % D.ventures.length;
    showVenture(next);
    $$(".vtab", tabs)[next].focus();
  });

  // Technology
  $("#flow").innerHTML = D.flow.map((f, i) => `
    <div class="flow__step${i === 2 ? " is-twin" : ""}${i === D.flow.length - 1 ? " is-live" : ""}">
      <span class="flow__n">${String(i + 1).padStart(2, "0")}</span>
      <b>${esc(f.t)}</b>
      <small>${esc(f.d)}</small>
      <span class="flow__bar" aria-hidden="true"><i style="--i:${i}"></i></span>
    </div>`).join("");

  const capIcons = [ICONS.brain, ICONS.heal, ICONS.nodes];
  $("#capabilities").innerHTML = D.capabilities.map((c, i) => `
    <article class="card cap reveal">
      <span class="cap__icon" aria-hidden="true">${capIcons[i % capIcons.length]}</span>
      <div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>
    </article>`).join("");

  // Work
  $("#filters").innerHTML = D.filters.map((f, i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${f.id}" aria-pressed="${i === 0}">${esc(f.label)}</button>`).join("");
  $("#projects").innerHTML = D.projects.map((p) => `
    <article class="card project reveal" data-cat="${p.cat.join(" ")}">
      <span class="project__org">${esc(p.org)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="project__foot">
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="project__links">
          ${p.live ? `<a href="${p.live}"${ext(p.live)}>Live ↗</a>` : ""}
          ${p.repo ? `<a href="${ghUrl(p.repo)}"${ext(ghUrl(p.repo))}>Source ↗</a>` : ""}
          ${!p.live && !p.repo ? `<span class="nda">Confidential</span>` : ""}
        </div>
      </div>
    </article>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $$("#filters button").forEach((b) => { b.classList.toggle("active", b === btn); b.setAttribute("aria-pressed", b === btn); });
    const f = btn.dataset.filter;
    $$(".project").forEach((p) => {
      const show = f === "all" || p.dataset.cat.split(" ").includes(f);
      p.classList.toggle("hide", !show);
      if (show) p.classList.add("in");
    });
  });

  // Track record
  $("#awards").innerHTML = D.awards.map((a, i) => `
    <li class="award reveal${i === 0 ? " award--top" : ""}">
      <span class="award__no">${String(i + 1).padStart(2, "0")}</span>
      <div><h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p></div>
      <span class="award__result">${esc(a.result)}</span>
    </li>`).join("");
  $("#backers").innerHTML = D.backers.map((b) => `<li>${esc(b)}</li>`).join("");

  // About
  $("#principles").innerHTML = D.principles.map((p, i) => `
    <div class="principle"><span>0${i + 1}</span><div><b>${esc(p.t)}</b><p>${esc(p.d)}</p></div></div>`).join("");
  $("#timeline").innerHTML = D.experience.map((x) => `
    <li class="${/present/i.test(x.period) ? "now" : ""}">
      <b>${esc(x.role)}</b>
      <span class="org">${esc(x.org)}</span>${x.period ? `<span class="period">${esc(x.period)}</span>` : ""}
      <p>${esc(x.desc)}</p>
    </li>`).join("");
  $("#education").innerHTML = `<b>${esc(D.education.degree)}</b><span>${esc(D.education.school)} · ${esc(D.education.note)}</span>`;
  $("#expBusiness").innerHTML = D.expertise.business.map((t) => `<li>${esc(t)}</li>`).join("");
  $("#expTech").innerHTML = D.expertise.technology.map((t) => `<li>${esc(t)}</li>`).join("");
  $("#stack").innerHTML = D.stack.map((t) => `<span>${esc(t)}</span>`).join("");

  // Contact
  $("#contactLinks").innerHTML = D.contact.map((c) => `
    <li><a href="${c.href}"${ext(c.href)}>
      <span><small>${esc(c.label)}</small><strong>${esc(c.value)}</strong></span>
      <span class="arr" aria-hidden="true">↗</span>
    </a></li>`).join("");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Intro ---------- */
  const root = document.documentElement;
  const heroReveal = () => $$(".hero .reveal").forEach((el, i) => {
    el.style.transitionDelay = (el.classList.contains("profile") ? 150 : 250 + i * 110) + "ms";
    el.classList.add("in");
  });
  const intro = () => {
    if (!root.classList.contains("is-loading")) return heroReveal();
    $("#introYear").textContent = new Date().getFullYear();

    // Split the name so each letter can blur in
    const nameEl = $("#introName");
    nameEl.innerHTML = [...nameEl.textContent].map((ch, i) =>
      ch === " " ? '<span class="sp"></span>' : `<span class="ch" style="--i:${i}">${esc(ch)}</span>`).join("");

    const quick = root.classList.contains("intro-quick");
    const minTime = quick ? 500 : 2600;
    const ring = $("#introRing"), pct = $("#introPct"), status = $("#introStatus");
    const RING = 2 * Math.PI * 88;
    const steps = [[0, "Initialising"], [25, "Loading ventures"], [55, "Preparing systems"], [85, "Almost there"], [100, "Welcome"]];
    const t0 = performance.now();
    let real = 0, shown = 0, done = false;

    // Real progress: fonts, portrait and full page load each count for a third
    const track = (p) => p.catch(() => {}).then(() => { real += 1 / 3; });
    track(document.fonts ? document.fonts.ready : Promise.resolve());
    const img = $(".profile__photo img");
    track(img.decode ? img.decode() : Promise.resolve());
    track(document.readyState === "complete" ? Promise.resolve() : new Promise((r) => addEventListener("load", r, { once: true })));

    const cleanup = () => {
      root.classList.remove("is-morphing");
      requestAnimationFrame(() => root.classList.remove("is-leaving", "intro-quick"));
    };
    const finish = () => {
      if (done) return;
      done = true;
      try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
      ring.style.strokeDashoffset = 0;
      pct.textContent = "100";
      scrollTo(0, 0);
      root.classList.add("is-leaving");
      root.classList.remove("is-loading");
      heroReveal();

      // Fly the portrait into the hero photo when that photo is on screen
      const photo = $("#introPhoto"), target = $(".hero .profile__photo");
      const src = photo.getBoundingClientRect(), dst = target.getBoundingClientRect();
      const visible = dst.width > 0 && dst.top < innerHeight - 80 && dst.bottom > 0;
      photo.style.animation = "none";
      photo.style.clipPath = "none";
      if (visible && photo.animate) {
        root.classList.add("is-morphing");
        const sx = dst.width / src.width, sy = dst.height / src.height;
        const dx = dst.left - src.left, dy = dst.top - src.top;
        const radius = parseFloat(getComputedStyle(target).borderTopLeftRadius) || 16;
        photo.style.transformOrigin = "0 0";
        photo.animate([
          { transform: "translate(0, 0) scale(1)", borderRadius: "50%" },
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, borderRadius: `${radius / sx}px / ${radius / sy}px` }
        ], { duration: quick ? 600 : 1150, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" }).onfinish = cleanup;
      } else {
        photo.animate
          ? photo.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(0.7)" }],
              { duration: 600, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" }).onfinish = cleanup
          : cleanup();
      }
    };
    const tick = (now) => {
      if (done) return;
      const timeP = Math.min(1, (now - t0) / minTime);
      const target = Math.min(timeP, real >= 0.99 ? 1 : real * 0.92 + 0.05);
      shown += (target - shown) * 0.1;
      if (target === 1 && shown > 0.995) shown = 1;
      const p = Math.round(shown * 100);
      ring.style.strokeDashoffset = RING * (1 - shown);
      pct.textContent = String(p).padStart(2, "0");
      status.textContent = steps.filter(([at]) => p >= at).pop()[1];
      if (shown >= 1) return setTimeout(finish, quick ? 120 : 450);
      requestAnimationFrame(tick);
    };
    ring.style.strokeDasharray = RING;
    requestAnimationFrame(tick);
    setTimeout(finish, 7000); // never block the page on a slow network
  };

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.closest(".hero")) return io.unobserve(el); // the intro plays the hero entrance
      const sibs = $$(":scope > .reveal", el.parentElement);
      el.style.transitionDelay = Math.min(Math.max(sibs.indexOf(el), 0), 5) * 70 + "ms";
      el.classList.add("in");
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
  intro();

  /* ---------- Counters ---------- */
  const countUp = (el) => {
    const target = +el.dataset.count;
    if (reduced) { el.textContent = target.toLocaleString("en-IN"); return; }
    const t0 = performance.now(), dur = 1400;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString("en-IN");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } }), { threshold: 0.6 });
  $$(".count").forEach((el) => cio.observe(el));

  /* ---------- Engine log ---------- */
  const logEl = $("#engineLog");
  let logStarted = false;
  const runLog = () => {
    logEl.innerHTML = "";
    let li = 0;
    const next = () => {
      if (li >= D.engineLog.length) return setTimeout(runLog, 4500);
      const [cls, text] = D.engineLog[li++];
      logEl.insertAdjacentHTML("beforeend", `<span class="${cls}">${esc(text)}</span>\n`);
      setTimeout(next, reduced ? 0 : 380 + Math.random() * 320);
    };
    next();
  };
  if (reduced) { logEl.innerHTML = D.engineLog.map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join("\n"); }
  else new IntersectionObserver(([e]) => { if (e.isIntersecting && !logStarted) { logStarted = true; runLog(); } }, { threshold: 0.3 }).observe(logEl);

  /* ---------- Navigation ---------- */
  const nav = $("#nav"), burger = $("#burger");
  const sections = $$("main section[id]");
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 8);
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#progress").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    let current = "";
    sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.35) current = s.id; });
    $$(".nav__links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const setMenu = (open) => { nav.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $$(".nav__links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Theme ---------- */
  const currentTheme = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  $("#themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Clock ---------- */
  const clock = () => { $("#clock").textContent = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }); };
  clock(); setInterval(clock, 15000);

  /* ---------- Console (press /) ---------- */
  const term = $("#term"), body = $("#termBody"), input = $("#termInput");
  const print = (html) => { body.insertAdjacentHTML("beforeend", html + "\n"); body.scrollTop = body.scrollHeight; };
  const cmds = {
    help: () => ["about", "ventures", "experience", "awards", "stack", "contact", "clear", "exit"]
      .map((c) => `<span class="v">${c}</span>`).join("  "),
    about: () => `Ashutosh Mishra — entrepreneur and systems engineer.
Founder & CEO of ReasonateAI (also CTO), Sehatra and EduTech.
Incubated at TBIF – IIT Ropar · enterprise pilots with Samsung R&D and Tata Elxsi.`,
    ventures: () => D.ventures.map((v) => `<span class="c">▸</span> ${esc(v.name).padEnd(13)}<span class="d">${esc(v.role)} — ${esc(v.sector)}</span>`).join("\n"),
    experience: () => D.experience.map((x) => `<span class="c">▸</span> ${esc(x.role)} <span class="d">· ${esc(x.org)}</span>`).join("\n"),
    awards: () => D.awards.map((a) => `<span class="c">▸</span> ${esc(a.title)} <span class="d">— ${esc(a.result)}</span>`).join("\n"),
    stack: () => D.stack.map(esc).join(", "),
    contact: () => D.contact.map((c) => `<span class="v">${esc(c.label).padEnd(10)}</span><a href="${c.href}"${ext(c.href)}>${esc(c.value)}</a>`).join("\n"),
    clear: () => { body.innerHTML = ""; return null; },
    exit: () => { toggleTerm(false); return null; }
  };
  const toggleTerm = (show) => {
    term.classList.toggle("open", show);
    term.setAttribute("aria-hidden", String(!show));
    if (show) {
      if (!body.childNodes.length) print(`<span class="c">ashutosh@reasonate</span> <span class="d">— type</span> <span class="v">help</span>`);
      setTimeout(() => input.focus(), 50);
    }
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
  $("#termClose").addEventListener("click", () => toggleTerm(false));
  term.addEventListener("click", (e) => { if (e.target === term) toggleTerm(false); });
  addEventListener("keydown", (e) => {
    const typing = /input|textarea/i.test(document.activeElement.tagName);
    if (e.key === "/" && !typing) { e.preventDefault(); toggleTerm(true); }
    if (e.key === "Escape") { toggleTerm(false); setMenu(false); }
  });
})();
