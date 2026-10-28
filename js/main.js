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
      <article class="card vpanel spot" style="--c:${v.color}">
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
          <ul class="vpanel__list">${v.highlights.map((h, j) => `<li style="--i:${j}">${esc(h)}</li>`).join("")}</ul>
          <div class="vpanel__metrics">${v.metrics.map(([n, l], j) => `<div style="--i:${j}"><b>${esc(n)}</b><small>${esc(l)}</small></div>`).join("")}</div>
        </div>
        ${v.link ? `<a class="vpanel__link" href="${v.link}"${ext(v.link)}>${esc(v.linkLabel)} <span aria-hidden="true">↗</span></a>` : ""}
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
    <article class="card cap spot reveal">
      <span class="cap__icon" aria-hidden="true">${capIcons[i % capIcons.length]}</span>
      <div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>
    </article>`).join("");

  // Work
  $("#filters").innerHTML = D.filters.map((f, i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${f.id}" aria-pressed="${i === 0}">${esc(f.label)}</button>`).join("");
  $("#projects").innerHTML = D.projects.map((p) => `
    <article class="card project spot reveal" data-cat="${p.cat.join(" ")}">
      <span class="project__org">${esc(p.org)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="project__foot">
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="project__links">
          ${p.live ? `<a href="${p.live}"${ext(p.live)}>${esc(p.liveLabel || "Live")} ↗</a>` : ""}
          ${p.repo ? `<a href="${ghUrl(p.repo)}"${ext(ghUrl(p.repo))}>Source ↗</a>` : ""}
          ${!p.live && !p.repo ? `<span class="nda">Proprietary</span>` : ""}
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
  $("#timeline").innerHTML = D.experience.map((x, i) => `
    <li class="${/present/i.test(x.period) ? "now" : ""}" style="--i:${i}">
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

    // Split the name so each letter can blur in
    const nameEl = $("#introName");
    nameEl.innerHTML = [...nameEl.textContent].map((ch, i) =>
      ch === " " ? '<span class="sp"></span>' : `<span class="ch" style="--i:${i}">${esc(ch)}</span>`).join("");

    const quick = root.classList.contains("intro-quick");
    const minTime = quick ? 500 : 3000;
    const ring = $("#introRing"), pct = $("#introPct"), status = $("#introStatus"), comet = $("#introComet");
    const R = 86, RING = 2 * Math.PI * R, TICKS = 60;

    // Watch-dial ticks just outside the ring; every fifth one is longer
    const SVGNS = "http://www.w3.org/2000/svg";
    const ticks = [...Array(TICKS)].map((_, i) => {
      const a = (i / TICKS) * Math.PI * 2, major = i % 5 === 0;
      const r1 = 93, r2 = major ? 103 : 98;
      const l = document.createElementNS(SVGNS, "line");
      l.setAttribute("x1", 100 + r1 * Math.cos(a)); l.setAttribute("y1", 100 + r1 * Math.sin(a));
      l.setAttribute("x2", 100 + r2 * Math.cos(a)); l.setAttribute("y2", 100 + r2 * Math.sin(a));
      if (major) l.classList.add("major");
      $("#introTicks").appendChild(l);
      return l;
    });
    let litTicks = 0;
    const paintDial = (p) => {
      ring.style.strokeDashoffset = RING * (1 - p);
      const a = p * Math.PI * 2;
      comet.setAttribute("cx", 100 + R * Math.cos(a));
      comet.setAttribute("cy", 100 + R * Math.sin(a));
      const lit = Math.floor(p * TICKS + 0.0001);
      for (; litTicks < Math.min(lit + (p >= 1 ? 1 : 0), TICKS); litTicks++) ticks[litTicks].classList.add("on");
    };
    const steps = [[0, "Initialising"], [25, "Loading ventures"], [55, "Preparing systems"], [85, "Almost there"], [100, "Welcome"]];
    const t0 = performance.now();
    let real = 0, shown = 0, done = false;

    // Real progress: fonts, portrait and full page load each count for a third
    const track = (p) => p.catch(() => {}).then(() => { real += 1 / 3; });
    track(document.fonts ? document.fonts.ready : Promise.resolve());
    const img = $(".profile__photo img");
    track(img.decode ? img.decode() : Promise.resolve());
    track(document.readyState === "complete" ? Promise.resolve() : new Promise((r) => addEventListener("load", r, { once: true })));

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      root.classList.remove("is-morphing");
      requestAnimationFrame(() => root.classList.remove("is-leaving", "intro-quick"));
    };
    const finish = () => {
      if (done) return;
      done = true;
      try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
      paintDial(1);
      pct.textContent = "100";
      comet.classList.remove("live");
      scrollTo(0, 0);
      root.classList.add("is-leaving");
      root.classList.remove("is-loading");
      heroReveal();
      setTimeout(cleanup, 2200); // in case animation events never fire (e.g. a backgrounded tab)

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
      // rAF timestamps can predate t0 by a frame, so clamp at zero
      const timeP = Math.min(1, Math.max(0, (now - t0) / minTime));
      const target = Math.min(timeP, real >= 0.99 ? 1 : real * 0.92 + 0.05);
      shown += (target - shown) * 0.1;
      if (target === 1 && shown > 0.995) shown = 1;
      const p = Math.round(shown * 100);
      paintDial(shown);
      if (shown > 0.01) comet.classList.add("live");
      pct.textContent = String(p).padStart(2, "0");
      status.textContent = (steps.filter(([at]) => p >= at).pop() || steps[0])[1];
      if (shown >= 1) return setTimeout(finish, quick ? 120 : 450);
      requestAnimationFrame(tick);
    };
    ring.style.strokeDasharray = RING;
    requestAnimationFrame(tick);
    setTimeout(finish, 7000); // never block the page on a slow network
  };

  /* ---------- Motion ---------- */
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Split headings into words so they can rise one by one
  const splitWords = (el) => {
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    let n = 0;
    const walk = (node) => [...node.childNodes].forEach((c) => {
      if (c.nodeType === 1) return walk(c);
      if (c.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.append(" ");
        const w = document.createElement("span"), wi = document.createElement("span");
        w.className = "w"; w.setAttribute("aria-hidden", "true");
        wi.className = "wi"; wi.style.setProperty("--w", n++); wi.textContent = part;
        w.append(wi); frag.append(w);
      });
      c.replaceWith(frag);
    });
    walk(el);
    el.classList.add("wsplit");
  };
  $$(".hero__title, .section__head h2, .contact__title").forEach(splitWords);

  // Spotlight on static cards too
  $$(".backers, .about__side .panel, .expertise__col").forEach((el) => el.classList.add("spot"));
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest(".spot, .profile");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });

  if (fine && !reduced) {
    // Profile card tilt
    const profile = $(".profile");
    profile.addEventListener("mousemove", (e) => {
      if (root.classList.contains("is-loading") || root.classList.contains("is-leaving")) return;
      const r = profile.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      profile.classList.add("tilting");
      profile.style.transform = `perspective(1000px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg)`;
    });
    profile.addEventListener("mouseleave", () => {
      profile.classList.remove("tilting");
      profile.style.transform = "";
    });

    // Hero glow follows the cursor
    const hero = $(".hero");
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--gx", ((e.clientX - r.left) / r.width - 0.5) * 140 + "px");
      hero.style.setProperty("--gy", ((e.clientY - r.top) / r.height - 0.5) * 100 + "px");
    });

    // Primary buttons lean towards the cursor
    $$(".btn--primary").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      b.addEventListener("mouseleave", () => { b.style.transform = ""; });
    });
  }

  // Nav pill that glides to the active link
  const pill = document.createElement("span");
  pill.className = "nav__pill";
  pill.setAttribute("aria-hidden", "true");
  $("#navLinks").prepend(pill);
  const movePill = () => {
    const a = $(".nav__links a.active");
    if (!a) { pill.style.opacity = "0"; return; }
    pill.style.opacity = "1";
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  addEventListener("resize", movePill);

  // Statement: split into words that light up with scroll progress
  const statement = $("#statement");
  const stWords = [];
  (function wrap(node) {
    [...node.childNodes].forEach((c) => {
      if (c.nodeType === 1) return wrap(c);
      if (c.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.append(" ");
        const s = document.createElement("span");
        s.className = "sw"; s.textContent = part;
        stWords.push(s); frag.append(s);
      });
      c.replaceWith(frag);
    });
  })(statement);
  const paintStatement = () => {
    if (reduced) { stWords.forEach((w) => w.classList.add("lit")); return; }
    const r = statement.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.82 - r.top) / (innerHeight * 0.55)));
    const lit = Math.round(p * stWords.length);
    stWords.forEach((w, i) => w.classList.toggle("lit", i < lit));
  };

  // Ghost numerals behind section headings
  const heads = $$(".section__head").map((h) => {
    const num = ($(".kicker", h)?.textContent.match(/^\d+/) || [""])[0];
    if (!num) return null;
    const g = document.createElement("span");
    g.className = "ghost-num"; g.setAttribute("aria-hidden", "true"); g.textContent = num;
    h.prepend(g);
    return g;
  }).filter(Boolean);
  const paintGhosts = () => {
    if (reduced) return;
    heads.forEach((g) => {
      const r = g.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      g.style.setProperty("--gy", ((r.top - innerHeight * 0.5) * 0.14).toFixed(1) + "px");
    });
  };

  // Kicker labels decode from random glyphs when they appear
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/%&*";
  const decode = (el) => {
    if (reduced || el.dataset.decoded) return;
    el.dataset.decoded = "1";
    const final = el.textContent, t0 = performance.now(), dur = 700;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const upto = Math.floor(p * final.length);
      el.textContent = [...final].map((ch, i) => (i < upto || /[\s—·&]/.test(ch) ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
      if (p < 1) requestAnimationFrame(step); else el.textContent = final;
    };
    requestAnimationFrame(step);
  };

  // Footer wordmark: fit to the container width, rise in when visible
  const wordmark = $("#wordmark");
  const fitWordmark = () => {
    wordmark.style.fontSize = "";
    const avail = wordmark.clientWidth, need = wordmark.scrollWidth;
    if (need > avail) wordmark.style.fontSize = parseFloat(getComputedStyle(wordmark).fontSize) * (avail / need) * 0.98 + "px";
  };
  fitWordmark();
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fitWordmark);
  addEventListener("resize", fitWordmark);
  new IntersectionObserver(([e]) => { if (e.isIntersecting) wordmark.classList.add("in"); }, { threshold: 0.3 }).observe(wordmark);

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.closest(".hero")) return io.unobserve(el); // the intro plays the hero entrance
      const sibs = $$(":scope > .reveal", el.parentElement);
      el.style.transitionDelay = Math.min(Math.max(sibs.indexOf(el), 0), 5) * 70 + "ms";
      el.classList.add("in");
      const k = $(".kicker", el) || (el.classList.contains("kicker") ? el : null);
      if (k) decode(k);
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
    if (y < innerHeight * 1.2) $(".hero").style.setProperty("--py", y * 0.25 + "px");
    paintStatement();
    paintGhosts();
    let current = "";
    sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.35) current = s.id; });
    $$(".nav__links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    movePill();
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
