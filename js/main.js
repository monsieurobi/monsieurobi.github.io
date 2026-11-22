(() => {
  const D = window.PORTFOLIO, P = D.profil;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const G = window.gsap;
  if (G && window.ScrollTrigger) G.registerPlugin(ScrollTrigger);
  const wa = (t = "") => `https://wa.me/${P.whatsapp}${t ? "?text=" + encodeURIComponent(t) : ""}`;

  const ICONS = {
    facebook: '<path d="M14 8V6.5c0-.8.2-1.3 1.4-1.3H17V2.1C16.6 2 15.5 2 14.3 2 11.8 2 10 3.5 10 6.3V8H7v3.6h3V22h4v-10.4h3l.5-3.6z"/>',
    tiktok: '<path d="M16.6 2h-3.4v13.5a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.4 6.4 0 1 0 5.4 6.3V8.7a8 8 0 0 0 4.6 1.5V6.8a4.7 4.7 0 0 1-4.6-4.8z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>',
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3z"/>',
    mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3zM5.3 7l6.7 4.1L18.7 7z"/>',
  };
  const svg = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ""}</svg>`;

  /* =====================================================
     1. CIEL ÉTOILÉ + ÉTOILES FILANTES
     ===================================================== */
  const sky = $("#sky"), sctx = sky.getContext("2d");
  let stars = [], meteors = [], W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2);
  function sizeSky() {
    W = innerWidth; H = innerHeight;
    sky.width = W * dpr; sky.height = H * dpr; sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round(W * H / 5200) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.2 + .2, a: Math.random(), s: Math.random() * .02 + .004, z: Math.random() * .6 + .1 }));
  }
  sizeSky(); addEventListener("resize", sizeSky);
  let lastMeteor = 0, mx = W / 2, my = H / 2;
  function drawSky(t) {
    sctx.clearRect(0, 0, W, H);
    const sy = scrollY;
    for (const s of stars) {
      s.a += s.s; const al = .35 + Math.sin(s.a) * .35;
      const px = s.x + (mx - W / 2) * s.z * -.02, py = ((s.y - sy * s.z * .15) % H + H) % H;
      sctx.fillStyle = `rgba(200,220,255,${al})`;
      sctx.beginPath(); sctx.arc(px, py, s.r, 0, 6.283); sctx.fill();
    }
    if (!reduce && t - lastMeteor > 2200 + Math.random() * 2500) {
      lastMeteor = t;
      meteors.push({ x: Math.random() * W * .8 + W * .2, y: Math.random() * H * .4, l: 120 + Math.random() * 120, v: 9 + Math.random() * 6, life: 1 });
    }
    meteors = meteors.filter(m => m.life > 0);
    for (const m of meteors) {
      m.x -= m.v; m.y += m.v * .55; m.life -= .012;
      const g = sctx.createLinearGradient(m.x, m.y, m.x + m.l, m.y - m.l * .55);
      g.addColorStop(0, `rgba(220,235,255,${m.life})`); g.addColorStop(1, "rgba(220,235,255,0)");
      sctx.strokeStyle = g; sctx.lineWidth = 1.4;
      sctx.beginPath(); sctx.moveTo(m.x, m.y); sctx.lineTo(m.x + m.l, m.y - m.l * .55); sctx.stroke();
    }
    requestAnimationFrame(drawSky);
  }
  requestAnimationFrame(drawSky);

  /* =====================================================
     2. CURSEUR
     ===================================================== */
  const cdot = $("#cdot"), cring = $("#cring");
  let rx = mx, ry = my;
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; cdot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; }, { passive: true });
  (function ring() { rx += (mx - rx) * .18; ry += (my - ry) * .18; cring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(ring); })();
  document.addEventListener("pointerover", e => cring.classList.toggle("hover", !!e.target.closest("a,button,.badge,.folder,.reel,.card,.tech")));

  /* =====================================================
     3. CHARGEMENT « MONSIEUR OBI » + POURCENTAGE
     ===================================================== */
  const GLYPHS = "01<>/{}#$%&*+=?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function scramble(el, dur = 1400) {
    const final = el.dataset.text; const t0 = performance.now();
    return new Promise(res => {
      (function f(t) {
        const p = Math.min((t - t0) / dur, 1); const fixed = Math.floor(p * final.length);
        el.textContent = final.split("").map((c, i) => i < fixed ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("");
        p < 1 ? requestAnimationFrame(f) : res();
      })(t0);
    });
  }
  function runLoader() {
    setTimeout(() => { const l = $("#loader"); if (l) { l.remove(); document.body.classList.remove("loading"); } }, 9000);
    const loader = $("#loader"), pct = $("#pct"), bar = $("#bar");
    $$(".ln-word").forEach((w, i) => setTimeout(() => scramble(w, 1300), i * 250));
    let v = 0;
    return new Promise(res => {
      const tick = () => {
        v = Math.min(100, v + Math.random() * 12 + 4);
        pct.textContent = Math.round(v); bar.style.width = v + "%";
        if (v >= 100) { $("#loaderTxt").textContent = "Bienvenue."; return setTimeout(res, 380); }
        setTimeout(tick, 70 + Math.random() * 90);
      };
      if (reduce) { pct.textContent = 100; return res(); }
      setTimeout(tick, 250);
    }).then(() => new Promise(res => {
      if (G && !reduce) {
        G.timeline({ onComplete: res })
          .to("#loaderName,.loader-pct,.loader-bar,.loader-txt", { y: -30, opacity: 0, duration: .5, stagger: .06, ease: "power2.in" })
          .to(loader, { clipPath: "inset(0 0 100% 0)", duration: .8, ease: "power4.inOut" }, "-=.1");
      } else { loader.style.display = "none"; res(); }
    })).then(() => { loader.remove(); document.body.classList.remove("loading"); });
  }

  /* =====================================================
     4. HERO : textes, typing, réseaux
     ===================================================== */
  $("#heroSocial").innerHTML = D.reseaux.slice(0, 4).map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.nom)}">${svg(r.icone)}</a>`).join("");
  function typer() {
    const el = $("#typed"); let r = 0, i = 0, del = false;
    if (reduce) { el.textContent = P.roles[0]; return; }
    (function step() {
      const w = P.roles[r]; el.textContent = w.slice(0, i);
      if (!del && i === w.length) { del = true; return setTimeout(step, 1700); }
      if (del && i === 0) { del = false; r = (r + 1) % P.roles.length; }
      i += del ? -1 : 1; setTimeout(step, del ? 30 : 70);
    })();
  }
  function heroIn() {
    typer();
    if (!G || reduce) return;
    G.timeline()
      .from(".hero-hello", { y: 20, opacity: 0, duration: .6, ease: "power3.out" })
      .from(".hero-title .row>span", { yPercent: 110, rotate: 3, duration: 1, stagger: .12, ease: "power4.out" }, "-=.3")
      .from(".hero-role,.hero-desc", { y: 24, opacity: 0, duration: .7, stagger: .1, ease: "power3.out" }, "-=.6")
      .from(".hero-cta .btn,.findme", { y: 20, opacity: 0, duration: .6, stagger: .08, ease: "power3.out" }, "-=.4")
      .from(".pill", { y: -40, opacity: 0, duration: .8, ease: "back.out(1.6)" }, "-=.9");
  }

  /* =====================================================
     5. BADGE SUSPENDU — physique (verlet) + retournement 3D
     ===================================================== */
  const lan = $("#lanyard"), badge = $("#badge"), inner = $("#badgeInner"), strap = $("#strapPath"), strapDash = $("#strapText");
  const phys = { ax: 0, ay: -60, L: 260, x: 0, y: -500, px: 0, py: -500, drag: false, ox: 0, oy: 0, rotY: 0, rotYv: 0, target: 0, moved: 0, dropped: false };
  function layoutBadge() {
    const r = lan.getBoundingClientRect();
    phys.ax = r.width * (innerWidth < 980 ? .5 : .55);
    phys.ay = -60;
    phys.L = Math.max(160, Math.min(300, r.height * .42));
    if (!phys.dropped) { phys.x = phys.px = phys.ax + 40; phys.y = phys.py = -420; }
  }
  layoutBadge(); addEventListener("resize", layoutBadge);
  const local = e => { const r = lan.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  badge.addEventListener("pointerdown", e => {
    badge.setPointerCapture(e.pointerId);
    const p = local(e); phys.drag = true; phys.moved = 0; phys.ox = p.x - phys.x; phys.oy = p.y - phys.y;
  });
  badge.addEventListener("pointermove", e => {
    if (!phys.drag) return;
    const p = local(e); const nx = p.x - phys.ox, ny = p.y - phys.oy;
    phys.moved += Math.abs(nx - phys.x) + Math.abs(ny - phys.y);
    phys.x = nx; phys.y = ny;
  });
  const release = () => { if (!phys.drag) return; phys.drag = false; if (phys.moved < 6) flip(); };
  badge.addEventListener("pointerup", release); badge.addEventListener("pointercancel", release);
  badge.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
    if (e.key === "ArrowLeft") phys.px += 18; if (e.key === "ArrowRight") phys.px -= 18;
  });
  function flip() { phys.target = phys.target ? 0 : 180; }
  function stepBadge() {
    const p = phys;
    if (!p.drag) {
      const cl = v => Math.max(-28, Math.min(28, v));
      const vx = cl((p.x - p.px) * .975), vy = cl((p.y - p.py) * .975);
      p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + .9;
    } else { p.px += (p.x - p.px) * .5; p.py += (p.y - p.py) * .5; }
    // contrainte de la corde (inextensible)
    let dx = p.x - p.ax, dy = p.y - p.ay, d = Math.hypot(dx, dy);
    if (d > p.L) { const k = p.L / d; p.x = p.ax + dx * k; p.y = p.ay + dy * k; if (p.drag) { p.ox += 0; } dx = p.x - p.ax; dy = p.y - p.ay; d = p.L; }
    if (p.y > p.ay + 20) p.dropped = true;
    const vxNow = p.x - p.px;
    // rotation Y : ressort vers la face cible + torsion selon la vitesse
    p.rotYv += ((p.target - p.rotY) * .06) - p.rotYv * .18 + vxNow * .35;
    p.rotY += p.rotYv;
    const ang = Math.atan2(dx, dy) * 180 / Math.PI;
    badge.style.transform = `translate(${p.x}px,${p.y}px) rotate(${-ang * .9}deg)`;
    inner.style.transform = `rotateY(${p.rotY}deg)`;
    badge.style.setProperty("--shine", `${-120 + ((p.rotY % 360) + 360) % 360 / 1.5 + ang * 4}%`);
    $(".badge-front", badge).style.setProperty("--shine", `${-140 + (ang + 30) * 5}%`);
    // sangle : courbe qui se détend si la corde est lâche
    const slack = Math.max(0, p.L - Math.hypot(p.x - p.ax, p.y - p.ay));
    const cx = (p.ax + p.x) / 2 + vxNow * 2, cy = (p.ay + p.y) / 2 + slack * .9;
    const path = `M${p.ax} ${p.ay} Q${cx} ${cy} ${p.x} ${p.y - 4}`;
    strap.setAttribute("d", path); strapDash.setAttribute("d", path);
    requestAnimationFrame(stepBadge);
  }
  requestAnimationFrame(stepBadge);
  try { new QRCode($("#qr"), { text: wa("Bonjour Monsieur Obi, je viens de votre badge !"), width: 260, height: 260, colorDark: "#0a1430", colorLight: "#ffffff" }); }
  catch (e) { $("#qr").innerHTML = '<p style="color:#0a1430;font-size:.7rem;text-align:center">wa.me/24162727974</p>'; }

  /* =====================================================
     6. NAVIGATION : indicateur glissant
     ===================================================== */
  const pillLinks = $$(".pill a"), ind = $("#pillInd");
  function moveInd(a) { if (!a) return; ind.style.left = a.offsetLeft + "px"; ind.style.width = a.offsetWidth + "px"; pillLinks.forEach(l => l.classList.toggle("active", l === a)); }
  function spy() {
    let cur = pillLinks[0];
    pillLinks.forEach(a => { const s = $("#" + a.dataset.sec); if (s && s.getBoundingClientRect().top < innerHeight * .45) cur = a; });
    moveInd(cur);
  }
  addEventListener("scroll", spy, { passive: true }); addEventListener("resize", spy);

  /* =====================================================
     7. À PROPOS : photo révélée au curseur
     ===================================================== */
  const rp = $("#reveal"), rc = $("#revealCanvas"), rctx = rc.getContext("2d");
  const top = new Image(); top.src = "img/obi-pro.jpg";
  let trail = [];
  function sizeReveal() { const r = rp.getBoundingClientRect(); rc.width = r.width * dpr; rc.height = r.height * dpr; }
  sizeReveal(); addEventListener("resize", sizeReveal);
  const addTrail = e => { const r = rc.getBoundingClientRect(); trail.push({ x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr, life: 1 }); rp.classList.add("touched"); };
  rp.addEventListener("pointermove", addTrail);
  rp.addEventListener("pointerdown", addTrail);
  function drawReveal() {
    const w = rc.width, h = rc.height;
    if (top.complete && w) {
      rctx.globalCompositeOperation = "source-over"; rctx.clearRect(0, 0, w, h);
      const s = Math.max(w / top.width, h / top.height), iw = top.width * s, ih = top.height * s;
      rctx.drawImage(top, (w - iw) / 2, (h - ih) / 2, iw, ih);
      rctx.globalCompositeOperation = "destination-out";
      trail = trail.filter(p => (p.life -= .012) > 0);
      for (const p of trail) {
        const rad = 70 * dpr * (0.6 + p.life * .4);
        const g = rctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        g.addColorStop(0, `rgba(0,0,0,${p.life})`); g.addColorStop(.7, `rgba(0,0,0,${p.life * .6})`); g.addColorStop(1, "rgba(0,0,0,0)");
        rctx.fillStyle = g; rctx.beginPath(); rctx.arc(p.x, p.y, rad, 0, 6.283); rctx.fill();
      }
    }
    requestAnimationFrame(drawReveal);
  }
  requestAnimationFrame(drawReveal);

  const short = s => s.split(/\s+/).filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  $("#eduList").innerHTML = D.formations.map(f => `<div class="item"><span class="item-ic">${/anthropic/i.test(f.titre) ? "AI" : short(f.titre)}</span><span><b>${esc(f.titre)}</b><small>${esc(f.lieu)}</small><span class="when">${esc(f.periode)}</span></span></div>`).join("");
  $("#expList").innerHTML = D.experiences.map(e => `<div class="item"><span class="item-ic">${short(e.structure)}</span><span><b>${esc(e.poste)}</b><small>${esc(e.structure)}</small><span class="when">${esc(e.periode)}</span></span></div>`).join("");
  const statsData = [
    { ic: "‹/›", n: D.projets.length, t: "PROJETS", s: "En préparation" },
    { ic: "✪", n: D.certifications.length, t: "CERTIFICATIONS", s: "Badges Anthropic" },
    { ic: "▶", n: D.contenus.length, t: "CONTENUS", s: "Reels publiés" },
  ];
  $("#stats").innerHTML = statsData.map(s => `<div class="stat"><span class="stat-ic">${s.ic}</span><span class="stat-n" data-count="${s.n}">0</span><b>${s.t}</b><small>${s.s}</small></div>`).join("");

  /* =====================================================
     8. PORTFOLIO : onglets, projets, certifs, stack, dossiers
     ===================================================== */
  const tabs = $$("#tabs button"), tabInd = $("#tabInd");
  function placeTab(b) { tabInd.style.left = b.offsetLeft + "px"; tabInd.style.top = b.offsetTop + "px"; tabInd.style.width = b.offsetWidth + "px"; tabInd.style.height = b.offsetHeight + "px"; }
  function selectTab(b) {
    tabs.forEach(t => t.setAttribute("aria-selected", t === b));
    placeTab(b);
    $$(".panel").forEach(p => p.hidden = p.id !== "p-" + b.dataset.tab);
    const panel = $("#p-" + b.dataset.tab);
    if (G && !reduce) G.fromTo(panel.querySelectorAll(".card,.tech,.folders-wrap"), { y: 40, opacity: 0, filter: "blur(8px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: .7, stagger: .05, ease: "power3.out", clearProps: "filter" });
    if (b.dataset.tab === "dossiers") layoutFolders(false);
  }
  tabs.forEach(b => b.onclick = () => selectTab(b));
  addEventListener("resize", () => placeTab($('#tabs [aria-selected="true"]')));

  const fake = (c, t) => `<div class="fake" style="--c:${c}"><div class="fake-bar"><i></i><i></i><i></i></div><div class="fake-body"><div class="fake-side"><i></i><i></i><i></i><i></i></div><div class="fake-main"><b>${esc(t)}</b><div class="fake-chart">${[45, 70, 55, 85, 62, 92, 74].map(h => `<span style="height:${h}%"></span>`).join("")}</div></div></div></div>`;
  let projects = [...D.projets], certs = [...D.certifications];
  const urls = new Map();
  function renderProjects() {
    const admin = document.body.classList.contains("admin");
    $("#projectCards").innerHTML = projects.map((p, i) => {
      let vis = fake(p.couleur || "#2563eb", p.titre);
      if (p.media && p.type === "image") vis = `<img src="${esc(p.media)}" alt="">`;
      if (p.media && p.type === "video") vis = `<video src="${esc(p.media)}#t=1" muted playsinline preload="metadata"></video>`;
      return `<article class="card" data-i="${i}">
        <div class="card-vis">${vis}<span class="badge-soon">${esc(p.statut || "Nouveau")}</span></div>
        <div class="card-body"><h3>${esc(p.titre)}</h3><p>${esc(p.description || "")}</p>
        <div class="card-foot"><span class="mono small muted">${esc(p.categorie)}</span><button class="btn btn-dark" data-open="${i}">Détails →</button></div></div>
        ${admin && p.local ? `<button class="del" data-id="${esc(p.id)}">Supprimer</button>` : ""}</article>`;
    }).join("");
    $$("[data-open]").forEach(b => b.onclick = () => openProject(projects[+b.dataset.open]));
    $$("#projectCards .del").forEach(b => b.onclick = async () => { if (confirm("Supprimer ce projet ?")) { await dbDel("projets", b.dataset.id); await loadLocal(); } });
    tilt($$("#projectCards .card"));
  }
  function renderCerts() {
    const admin = document.body.classList.contains("admin");
    $("#certCards").innerHTML = certs.map(c => `<article class="card cert-card"><div class="card-vis"><div><div class="cert-seal">✪</div><div class="cert-t">${esc(c.titre)}</div><div class="small">${esc(c.emetteur || "")} · ${esc(c.date || "")}</div></div></div>
      <div class="card-body"><h3>${esc(c.titre)}</h3><p>${esc(c.note || c.emetteur || "")}</p><div class="card-foot"><span class="mono small muted">${esc(c.date || "")}</span>${c.url ? `<a class="btn btn-dark" href="${esc(c.url)}" target="_blank" rel="noopener">Vérifier ↗</a>` : ""}</div></div>
      ${admin && c.local ? `<button class="del" data-cid="${esc(c.id)}">Supprimer</button>` : ""}</article>`).join("");
    $$("[data-cid]").forEach(b => b.onclick = async () => { await dbDel("certs", b.dataset.cid); await loadLocal(); });
    tilt($$("#certCards .card"));
  }
  $("#stackGrid").innerHTML = D.stack.map(s => `<div class="tech">${s.slug ? `<i style="--c:${s.couleur};--m:url(https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${s.slug}.svg)"></i>` : `<b class="tech-txt" style="color:${s.couleur}">${esc(s.nom.slice(0, 2))}</b>`}<span>${esc(s.nom)}</span></div>`).join("");

  function openProject(p) {
    let media = fake(p.couleur || "#2563eb", p.titre);
    if (p.media && p.type === "image") media = `<img src="${esc(p.media)}" alt="">`;
    if (p.media && p.type === "video") media = `<video src="${esc(p.media)}" controls autoplay playsinline></video>`;
    if (p.media && p.type === "pdf") media = `<iframe src="${esc(p.media)}" title="${esc(p.titre)}" style="width:100%;height:100%;border:0;background:#fff"></iframe>`;
    $("#viewerBody").className = "viewer";
    $("#viewerBody").innerHTML = `<p class="crumbs">← Projets / <b>${esc(p.titre)}</b></p>
      <div><h3>${esc(p.titre)}</h3><p>${esc(p.description || "")}</p>
      ${p.stack ? `<p class="mono small" style="color:var(--text)">‹/› Technologies</p><div class="chips">${p.stack.map(s => `<span>${esc(s)}</span>`).join("")}</div>` : ""}
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">${p.lien ? `<a class="btn btn-blue" href="${esc(p.lien)}" target="_blank" rel="noopener">Voir le projet ↗</a>` : `<span class="btn btn-dark">Lien bientôt disponible</span>`}
      <a class="btn btn-dark" href="${wa("Bonjour, j'ai vu « " + p.titre + " » sur votre portfolio.")}" target="_blank" rel="noopener">Un projet similaire ?</a></div></div>
      <div class="media">${media}</div>`;
    $("#viewer").showModal();
  }
  function tilt(els) {
    if (!fine || reduce) return;
    els.forEach(el => {
      el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`; });
      el.addEventListener("pointerleave", () => el.style.transform = "");
    });
  }

  /* --- Dossiers glissables --- */
  const fWrap = $("#folders"), FC = ["#2563eb", "#0ea5e9", "#4f46e5", "#0891b2", "#1d4ed8", "#6366f1", "#0284c7"];
  let order = D.competences.map((_, i) => i);
  fWrap.innerHTML = D.competences.map((c, i) => `<div class="folder" data-i="${i}" style="--fc:${FC[i % FC.length]}">
    <div class="folder-tab">▤ ${esc(c.code)}</div>
    <div class="folder-body"><h3>${esc(c.nom)}</h3><ul>${c.items.map(it => `<li>${esc(it)}</li>`).join("")}</ul>
    <div class="folder-meter"><div><span>MAÎTRISE</span><span>${c.niveau}%</span></div><i style="--w:${c.niveau}%"></i></div></div></div>`).join("");
  const folders = $$(".folder", fWrap);
  function layoutFolders(anim = true) {
    order.forEach((idx, k) => {
      const el = folders[idx];
      const t = k > 3 ? `translate(0px,${-3 * 16}px) scale(${1 - 3 * .06})` : `translate(${k * 10}px,${-k * 16}px) scale(${1 - k * .06}) rotate(${k * 1.5}deg)`;
      el.style.transition = anim ? "transform .6s cubic-bezier(.2,.75,.1,1),opacity .4s" : "none";
      el.style.transform = t; el.style.zIndex = 50 - k; el.style.opacity = k > 3 ? 0 : 1; el.style.pointerEvents = k ? "none" : "auto";
    });
    $("#fCount").textContent = `${String(order[0] + 1).padStart(2, "0")} / ${String(order.length).padStart(2, "0")}`;
  }
  function nextFolder(dir = 1) {
    const topEl = folders[order[0]];
    topEl.style.transition = "transform .45s cubic-bezier(.5,0,.75,0),opacity .45s";
    topEl.style.transform = `translate(${dir * 520}px,-40px) rotate(${dir * 24}deg)`; topEl.style.opacity = 0;
    setTimeout(() => { order.push(order.shift()); layoutFolders(); }, 330);
  }
  function prevFolder() { order.unshift(order.pop()); const el = folders[order[0]]; el.style.transition = "none"; el.style.transform = "translate(-520px,-40px) rotate(-24deg)"; el.style.opacity = 0; requestAnimationFrame(() => requestAnimationFrame(() => layoutFolders())); }
  layoutFolders(false);
  $("#fNext").onclick = () => nextFolder(1); $("#fPrev").onclick = prevFolder;
  fWrap.addEventListener("keydown", e => { if (e.key === "ArrowRight") nextFolder(1); if (e.key === "ArrowLeft") prevFolder(); });
  folders.forEach(el => {
    let sx = 0, sy = 0, dx = 0, on = false;
    el.addEventListener("pointerdown", e => { on = true; sx = e.clientX; sy = e.clientY; dx = 0; el.setPointerCapture(e.pointerId); el.style.transition = "none"; });
    el.addEventListener("pointermove", e => { if (!on) return; dx = e.clientX - sx; const dy = (e.clientY - sy) * .3; el.style.transform = `translate(${dx}px,${dy}px) rotate(${dx / 14}deg)`; });
    const end = () => { if (!on) return; on = false; Math.abs(dx) > 90 ? nextFolder(Math.sign(dx)) : layoutFolders(); };
    el.addEventListener("pointerup", end); el.addEventListener("pointercancel", end);
  });

  /* =====================================================
     9. RÉSEAUX : reels glissables
     ===================================================== */
  const reels = $("#reels");
  reels.innerHTML = D.contenus.map((c, i) => `<article class="reel" data-i="${i}"><img src="${esc(c.poster)}" alt="" loading="lazy"><span class="reel-play">▶</span><div class="reel-meta"><span>${esc(c.reseau)}</span><b>${esc(c.titre)}</b></div></article>`).join("");
  let rDown = false, rX = 0, rS = 0, rMoved = 0;
  reels.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; rDown = true; rX = e.clientX; rS = reels.scrollLeft; rMoved = 0; reels.classList.add("drag"); });
  addEventListener("pointermove", e => { if (!rDown) return; const d = e.clientX - rX; rMoved = Math.abs(d); reels.scrollLeft = rS - d; });
  addEventListener("pointerup", () => { rDown = false; reels.classList.remove("drag"); });
  $$(".reel", reels).forEach(el => {
    const c = D.contenus[+el.dataset.i];
    if (fine && !reduce) {
      let v;
      el.addEventListener("pointerenter", () => { v = document.createElement("video"); Object.assign(v, { src: c.media, muted: true, loop: true, playsInline: true, autoplay: true }); el.insertBefore(v, el.children[1]); });
      el.addEventListener("pointerleave", () => v && v.remove());
    }
    el.addEventListener("click", () => {
      if (rMoved > 8) return;
      $("#viewerBody").className = "viewer vertical";
      $("#viewerBody").innerHTML = `<div class="media"><video src="${esc(c.media)}" poster="${esc(c.poster)}" controls autoplay playsinline></video></div>
        <div><p class="crumbs">Réseaux / <b>${esc(c.titre)}</b></p><h3>${esc(c.titre)}</h3><p>Publié sur ${esc(c.reseau)}.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">${c.lien ? `<a class="btn btn-blue" href="${esc(c.lien)}" target="_blank" rel="noopener">Voir la publication ↗</a>` : ""}
        ${D.reseaux.slice(0, 2).map(r => `<a class="btn btn-dark" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nom)} ↗</a>`).join("")}</div></div>`;
      $("#viewer").showModal();
    });
  });

  /* =====================================================
     10. CONTACT, FOOTER
     ===================================================== */
  $("#findList").innerHTML = D.reseaux.map(r => `<a class="find" href="${esc(r.url)}" target="_blank" rel="noopener"><span class="ic">${svg(r.icone)}</span><span><b>${esc(r.nom)}</b><small>${esc(r.detail)}</small></span><span class="go">›</span></a>`).join("");
  $("#waFloat").href = wa("Bonjour Monsieur Obi, je viens de votre portfolio."); $("#waFloat").innerHTML = svg("whatsapp");
  $$(".choices").forEach(g => g.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; $$("button", g).forEach(x => x.classList.toggle("on", x === b)); }));
  const projectText = () => { const f = $("#projectForm"); const type = $('[data-name="type"] .on', f)?.textContent || "à préciser"; return `Bonjour Monsieur Obi, je suis ${f.nom.value || "…"}.\nProjet : ${type}\n${f.msg.value}`; };
  $("#projectForm").onsubmit = e => { e.preventDefault(); window.open(wa(projectText()), "_blank", "noopener"); };
  $("#mailLink").href = `mailto:${P.email}`;
  $("#mailLink").onclick = () => { $("#mailLink").href = `mailto:${P.email}?subject=${encodeURIComponent("Projet depuis votre portfolio")}&body=${encodeURIComponent(projectText())}`; };
  $("#year").textContent = new Date().getFullYear();
  $("#footTrack").innerHTML = Array(8).fill('<span>MONSIEUR OBI</span>').join("");
  $$("dialog").forEach(d => {
    d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
    d.addEventListener("close", () => $$("video", d).forEach(v => v.pause()));
  });

  /* =====================================================
     11. MODE GESTION (IndexedDB)
     ===================================================== */
  let db = null;
  const openDB = () => new Promise(res => { try { const r = indexedDB.open("portfolio-obi", 1); r.onupgradeneeded = () => { r.result.createObjectStore("projets", { keyPath: "id" }); r.result.createObjectStore("certs", { keyPath: "id" }); }; r.onsuccess = () => { db = r.result; res(); }; r.onerror = () => res(); } catch (e) { res(); } });
  const store = (n, m = "readonly") => db.transaction(n, m).objectStore(n);
  const dbAll = n => new Promise(res => { if (!db) return res([]); const r = store(n).getAll(); r.onsuccess = () => res(r.result || []); r.onerror = () => res([]); });
  const dbPut = (n, v) => new Promise(res => { if (!db) return res(); const r = store(n, "readwrite").put(v); r.onsuccess = r.onerror = () => res(); });
  const dbDel = (n, id) => new Promise(res => { if (!db) return res(); const r = store(n, "readwrite").delete(id); r.onsuccess = r.onerror = () => res(); });
  async function loadLocal() {
    const [ps, cs] = await Promise.all([dbAll("projets"), dbAll("certs")]);
    projects = [...ps.sort((a, b) => b.ajoute - a.ajoute).map(p => {
      if (p.blob && !urls.has(p.id)) urls.set(p.id, URL.createObjectURL(p.blob));
      const type = p.blob ? (p.blob.type.startsWith("video") ? "video" : p.blob.type === "application/pdf" ? "pdf" : "image") : null;
      return { ...p, local: true, type, media: urls.get(p.id), statut: "Livré" };
    }), ...D.projets];
    certs = [...D.certifications, ...cs.map(c => ({ ...c, local: true }))];
    renderProjects(); renderCerts();
    const n = $$(".stat-n"); if (n[0]) { n[0].textContent = projects.length; n[1].textContent = certs.length; }
  }
  function setAdmin(on) { document.body.classList.toggle("admin", on); $("#adminBar").hidden = !on; renderProjects(); renderCerts(); if (on) $("#portfolio").scrollIntoView({ behavior: "smooth" }); }
  $("#openAdmin").onclick = () => setAdmin(true); $("#quitAdmin").onclick = () => setAdmin(false);
  $("#addWork").onclick = () => $("#uploadDlg").showModal(); $("#addCert").onclick = () => $("#certDlg").showModal();
  $("#uploadForm").onsubmit = async e => { e.preventDefault(); const f = e.target; await dbPut("projets", { id: "p" + Date.now(), titre: f.titre.value, categorie: f.categorie.value, description: f.description.value, lien: f.lien.value, blob: f.fichier.files[0] || null, ajoute: Date.now() }); f.reset(); $("#uploadDlg").close(); await loadLocal(); };
  $("#certForm").onsubmit = async e => { e.preventDefault(); const f = e.target; await dbPut("certs", { id: "c" + Date.now(), titre: f.titre.value, emetteur: f.emetteur.value, date: f.date.value, url: f.url.value }); f.reset(); $("#certDlg").close(); await loadLocal(); };
  $("#exportBtn").onclick = async () => {
    const toData = b => new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(b); });
    const ps = await dbAll("projets"), cs = await dbAll("certs");
    const out = { projets: await Promise.all(ps.map(async p => ({ ...p, blob: undefined, fichier: p.blob ? { nom: p.blob.name, type: p.blob.type, data: await toData(p.blob) } : null }))), certifications: cs };
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 2)], { type: "application/json" })); a.download = "portfolio-ajouts.json"; a.click();
  };

  /* =====================================================
     12. MOTION AU SCROLL (GSAP)
     ===================================================== */
  function countUp(el) { const end = +el.dataset.count; const o = { v: 0 }; G ? G.to(o, { v: end, duration: 1.4, ease: "power2.out", onUpdate: () => el.textContent = Math.round(o.v) }) : el.textContent = end; }
  function scrollMotion() {
    if (!G || !window.ScrollTrigger || reduce) { $$("[data-count]").forEach(el => el.textContent = el.dataset.count); return; }
    // Titres : entrée puis écrasement sous la barre de navigation
    $$("[data-title]").forEach(t => {
      G.from(t, { y: 80, opacity: 0, scale: .85, filter: "blur(10px)", duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: t, start: "top 88%" } });
      G.to(t, { scaleX: 1.55, scaleY: .3, y: -30, opacity: 0, filter: "blur(3px)", ease: "none", scrollTrigger: { trigger: t, start: "top 120", end: "top -40", scrub: true } });
    });
    // Hero qui s'éloigne
    G.to(".hero-text", { y: -80, opacity: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    // Révélations en cascade
    ScrollTrigger.batch(".about-hi,.reveal-photo,.about-txt,.item,.stat,.col-title,.glass,.reel,.social-lead", {
      start: "top 88%", once: true,
      onEnter: els => G.from(els, { y: 50, opacity: 0, filter: "blur(6px)", duration: .9, stagger: .08, ease: "power3.out", clearProps: "filter,transform" }),
    });
    ScrollTrigger.batch(".stat", { start: "top 90%", once: true, onEnter: els => els.forEach(el => countUp($(".stat-n", el))) });
    G.from(".reveal-photo", { clipPath: "inset(100% 0 0 0 round 24px)", duration: 1.3, ease: "power4.inOut", scrollTrigger: { trigger: ".reveal-photo", start: "top 85%" } });
    ScrollTrigger.create({ trigger: "#portfolio", start: "top 80%", once: true, onEnter: () => selectTab($('#tabs [aria-selected="true"]')) });
    // Reels qui défilent légèrement au scroll
    G.fromTo("#reels", { x: 120 }, { x: -60, ease: "none", scrollTrigger: { trigger: "#reseaux", start: "top bottom", end: "bottom top", scrub: true } });
    // Bandeau du footer
    G.to("#footTrack", { xPercent: -50, ease: "none", duration: 30, repeat: -1 });
  }

  /* Boutons magnétiques */
  if (fine && !reduce) $$(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .2}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
    b.addEventListener("pointerleave", () => { b.style.transition = "transform .5s cubic-bezier(.2,.75,.1,1)"; b.style.transform = ""; setTimeout(() => b.style.transition = "", 500); });
  });

  /* =====================================================
     DÉMARRAGE
     ===================================================== */
  renderProjects(); renderCerts();
  openDB().then(() => { loadLocal(); if (new URLSearchParams(location.search).has("admin")) setAdmin(true); });
  const Q = new URLSearchParams(location.search);
  if (Q.has("capture")) {
    // Mode capture (pour les vidéos de présentation) : pas de chargement, tout est visible.
    $("#loader").remove(); document.body.classList.remove("loading"); document.body.classList.add("capture");
    $$('img[loading="lazy"]').forEach(i => i.loading = "eager");
    $("#typed").textContent = P.roles[+Q.get("role") || 0];
    $$("[data-count]").forEach(el => el.textContent = el.dataset.count);
    phys.dropped = true; phys.x = phys.px = phys.ax; phys.y = phys.py = phys.ay + phys.L;
    if (Q.get("flip")) { phys.target = 180; phys.rotY = 180; }
    const tb = $(`#tabs [data-tab="${Q.get("tab") || "projets"}"]`);
    spy(); selectTab(tb); placeTab(tb);
  } else {
    runLoader().then(() => {
      heroIn(); spy(); placeTab(tabs[0]); scrollMotion();
      phys.dropped = true; phys.y = phys.py = -260; // le badge tombe
    });
  }
})();
