const { icon } = require('./icons');
const { site, temas, IMG } = require('./content');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const temaUrl = (t) => `/tema/${t.slug}/`;
const subUrl = (t, s) => `/tema/${t.slug}/${s.slug}/`;
const cssVars = (t) => `--c:${t.c};--ct:${t.ct};--cd:${t.cd}`;
const imgUrl = (id) => IMG + id;

function ytEmbed(id, title) {
  return `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
function ytPoster(id, title) {
  return `<a class="videoposter" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="${esc(title)} (abrir en YouTube)" style="background-image:url('https://img.youtube.com/vi/${id}/hqdefault.jpg')">
      <span class="videoposter__shade"></span>
      <span class="videoposter__play">${icon('play', 34, 1.8)}</span>
      <span class="videoposter__label">Ver en YouTube ${icon('external', 15, 2)}</span>
    </a>`;
}
function platOf(url) {
  if (/wordwall/.test(url)) return { name: 'Wordwall', icon: 'puzzle' };
  if (/educaplay/.test(url)) return { name: 'Educaplay', icon: 'target' };
  if (/slideshare/.test(url)) return { name: 'SlideShare', icon: 'slides' };
  if (/scribd/.test(url)) return { name: 'Scribd', icon: 'doc' };
  if (/youtube|youtu\.be/.test(url)) return { name: 'YouTube', icon: 'yt' };
  return { name: 'Recurso', icon: 'external' };
}
function activityCard(url, title, sub) {
  const p = platOf(url);
  return `<a class="actcard" href="${url}" target="_blank" rel="noopener">
      <span class="actcard__icon">${icon(p.icon, 22, 1.8)}</span>
      <span class="actcard__t"><b>${esc(title)}</b><span>${esc(sub || p.name + ' · actividad interactiva')}</span></span>
      <span class="actcard__go">${icon('external', 18, 1.9)}</span>
    </a>`;
}

/* ---------- shared chrome ---------- */
function head(title, desc) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='10' fill='%232F6BFF'/%3E%3Cg fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M16 7v4M16 21v4M7 16h4M21 16h4'/%3E%3Ccircle cx='16' cy='16' r='3.4'/%3E%3C/g%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/chispa.css">
</head>`;
}

function nav() {
  const links = temas.map((t) => `<a class="nav__link" href="${temaUrl(t)}" style="--c:${t.c};--ct:${t.ct}"><span class="dot"></span>${esc(t.short)}</a>`).join('');
  const mobile = temas.map((t) => `<a class="mobile-item" href="${temaUrl(t)}" style="--c:${t.c};--cd:${t.cd}"><b>${t.n}</b><span>${esc(t.title)}</span></a>`).join('');
  return `<header class="nav">
  <div class="nav__inner">
    <a class="logo" href="/" aria-label="Inicio — Unidad 0">
      <span class="logo__mark">${icon('spark', 20, 1.9)}</span>
      <span class="logo__txt">Bio·U0</span>
    </a>
    <div class="nav__spacer"></div>
    <nav class="nav__links" aria-label="Temas">${links}</nav>
    <a class="nav__cta" href="/">Empezar</a>
    <button class="nav__burger" aria-label="Abrir menú" aria-expanded="false" data-burger>${icon('burger', 22, 1.8)}</button>
  </div>
  <div class="mobile-menu" data-mobile>${mobile}</div>
</header>`;
}

function footer() {
  const a = site.autor;
  const ftemas = temas.map((t) => `<a class="ftema" href="${temaUrl(t)}" style="--c:${t.c}"><span class="sq"></span>${esc(t.title)}</a>`).join('');
  return `<footer class="footer">
  <div class="footer__inner">
    <div class="footer__grid">
      <div>
        <div class="footer__brand"><span class="logo__mark">${icon('spark', 20, 1.9)}</span><span class="logo__txt">Bio·U0</span></div>
        <p>Recurso de estudio para 2.º BGU.</p>
      </div>
      <div class="fcol">
        <div class="fcol__label">Docente</div>
        <b class="name">${esc(a.nombre)}</b>
        <div class="role">${esc(a.rol)} · ${esc(a.curso.replace('Curso: ', ''))}</div>
        <ul class="fcontact">
          <li>${icon('mail', 16, 1.8)}<a class="lk" href="mailto:${a.email}">${esc(a.email)}</a></li>
          <li>${icon('phone', 16, 1.8)}<span>${esc(a.tel)}</span></li>
        </ul>
      </div>
      <div class="fcol">
        <div class="fcol__label">Temas</div>
        <div class="ftemas">${ftemas}</div>
      </div>
      <div class="fcol">
        <div class="fcol__label">Hora en Ecuador</div>
        <div class="clock" data-clock>--:--:--</div>
        <div class="clock-tz">GMT-5 · America/Guayaquil</div>
        <div class="socials">
          <a class="social" href="#" aria-label="YouTube">${icon('yt', 20, 1.8)}</a>
          <a class="social" href="#" aria-label="Instagram">${icon('ig', 20, 1.8)}</a>
          <a class="social" href="mailto:${a.email}" aria-label="Correo">${icon('mail', 20, 1.8)}</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom"><span>© 2026 · Unidad 0 — Biología 2.º BGU</span><span>Hecho para estudiar mejor</span></div>
  </div>
</footer>`;
}

function shell(title, desc, bodyClass, bodyVars, inner, opts = {}) {
  return `${head(title, desc)}
<body class="${bodyClass}"${bodyVars ? ` style="${bodyVars}"` : ''}>
<a class="skip" href="#main">Saltar al contenido</a>
${nav()}
${inner}
${footer()}
${opts.pinterest ? '<script async defer src="https://assets.pinterest.com/js/pinit.js"></script>' : ''}
<script src="/assets/js/app.js"></script>
</body>
</html>`;
}

/* ---------- HOME ---------- */
function home() {
  const shapes = [['#2F6BFF', 16, -8, 'origen'], ['#E0379E', 27, 6, 'celula'], ['#22A55B', 16, -4, 'biomoleculas'], ['#F59E0B', 27, 8, 'funciones']]
    .map((d, i) => `<span class="shape" style="border-radius:${d[1]}px;background:${d[0]};transform:rotate(${d[2]}deg);--r:${d[2]}deg;animation-duration:${4 + i * 0.5}s;animation-delay:${i * 0.3}s">${icon(d[3], 26, 2)}</span>`).join('');

  const cards = temas.map((t, i) => `<a class="topic pop" href="${temaUrl(t)}" style="${cssVars(t)};animation-delay:${(i * 0.06).toFixed(2)}s">
      <span class="topic__b1"></span><span class="topic__b2"></span>
      <div class="topic__top">
        <span class="topic__icon">${icon(t.icon, 26, 1.8)}</span>
        <span class="topic__numwrap"><span class="topic__kicker">Tema</span><span class="topic__num">${t.n}</span></span>
      </div>
      <div class="topic__body">
        <h3 class="topic__title">${esc(t.title)}</h3>
        <p class="topic__blurb">${esc(t.blurb)}</p>
        <div class="chips"><span class="chip">${t.subs.length} retos</span><span class="chip">quiz</span></div>
      </div>
    </a>`).join('');

  const resRows = site.recursos.map((r) => {
    const t = temas[r.tema];
    return `<a class="res-row" href="${r.url}" target="_blank" rel="noopener" style="--c:${t.c};--cd:${t.cd}">
        <span class="res-row__icon">${icon(r.icon, 22, 1.8)}</span>
        <span class="res-row__t"><b>${esc(r.title)}</b><span>${esc(r.meta)}</span></span>
        <span class="res-row__dl">${icon('external', 18, 1.8)}</span>
      </a>`;
  }).join('');

  const inner = `<main id="main">
  <section class="hero">
    <div class="shape-row">${shapes}</div>
    <h1 class="hero__title">${esc(site.heroTitleA)}<span class="u">${esc(site.heroTitleU)}<svg viewBox="0 0 220 12" preserveAspectRatio="none"><path d="M2 8C44 2 176 2 218 7" fill="none" stroke="var(--primary)" stroke-width="4.5" stroke-linecap="round"/></svg></span></h1>
    <p class="hero__lead">${esc(site.heroLead)}</p>
    <a class="hero__start" href="#temas">Empieza a aprender ${icon('chevdown', 20, 2.4)}</a>
  </section>

  <section class="temas" id="temas">
    <div class="temas__grid">${cards}</div>
  </section>

  <section class="homevideo">
    <div class="homevideo__inner">
      <div class="eyebrow homevideo__eyebrow">Video introductorio</div>
      <h2 class="homevideo__title">Empieza con una mirada general</h2>
      <div class="video">${ytEmbed(site.homeVideo, 'Video introductorio de la unidad')}</div>
    </div>
  </section>

  <section class="resources">
    <div class="resources__panel">
      <span class="resources__b1"></span><span class="resources__b2"></span>
      <div class="resources__grid">
        <div>
          <div class="eyebrow resources__eyebrow">Información · Recursos</div>
          <h2>Presentaciones para repasar</h2>
          <p class="resources__lead">Material visual de la unidad, listo para proyectar en clase o estudiar en casa.</p>
        </div>
        <div class="res-list">${resRows}</div>
      </div>
    </div>
  </section>
  </main>`;

  return shell(`${site.unidad} · ${site.heroTitleU} — Biología 2.º BGU`, site.heroLead, 'home', '', inner);
}

/* ---------- TEMA INDEX ---------- */
function temaPage(t) {
  const retos = t.subs.map((s, i) => `<a class="reto pop" href="${subUrl(t, s)}" style="animation-delay:${(i * 0.05).toFixed(2)}s">
      <span class="reto__num">${String(i + 1).padStart(2, '0')}</span>
      <span class="reto__name">${esc(s.title)}</span>
      <span class="reto__arrow">${icon('arrow', 18, 1.9)}</span>
    </a>`).join('');

  const videoBlock = t.video ? `<div class="vqvideo">
      <div class="vq__label">Video introductorio</div>
      ${t.videoNoEmbed
      ? ytPoster(t.video, 'Video introductorio: ' + t.title)
      : `<div class="video">${ytEmbed(t.video, 'Video introductorio: ' + t.title)}</div>`}
    </div>` : '';

  const quizCards = (t.quizzes || []).map((q, i) => activityCard(q, `Quiz ${i + 1}`)).join('');
  const infoCard = t.infoExtra ? activityCard(t.infoExtra, 'Información extra', platOf(t.infoExtra).name + ' · material de apoyo') : '';

  const inner = `<main id="main">
  <section class="thero">
    <div class="thero__panel pop">
      <span class="thero__b1"></span><span class="thero__b2"></span>
      <nav class="crumbs thero__crumbs" aria-label="Ruta"><a href="/">Inicio</a><span class="sep">/</span><span>${esc(t.title)}</span></nav>
      <div class="thero__grid">
        <div>
          <div class="thero__num">Tema ${t.n}</div>
          <h1 class="thero__title">${esc(t.title)}</h1>
          <p class="thero__intro">${esc(t.intro)}</p>
        </div>
        <div class="thero__big"><span class="thero__bigicon">${icon(t.icon, 64, 1.6)}</span></div>
      </div>
    </div>
  </section>

  <section class="retos">
    <h2>Retos del tema</h2>
    <p class="retos__sub">Avanza en orden o elige el que quieras repasar.</p>
    <div class="retos__grid">${retos}</div>
  </section>

  <section class="vq" id="actividades">
    ${videoBlock}
    <div class="refuerza" id="refuerza">
      <div class="vq__label">Refuerza tus conocimientos</div>
      <h2 class="refuerza__h2">Actividades del tema</h2>
      <p class="retos__sub">Pon a prueba lo aprendido jugando con estas actividades interactivas.</p>
      <div class="actgrid">${quizCards}${infoCard}</div>
    </div>
  </section>
  </main>`;

  return shell(`Tema ${t.n} · ${t.title} — Biología 2.º BGU`, t.intro, 'tema', cssVars(t), inner);
}

/* ---------- block rendering (subtema) ---------- */
function renderList(b) {
  const cls = b.kind === 'check' ? 'clist' : 'ilist';
  const marker = b.kind === 'check' ? `<span class="ck">${icon('check', 17, 2.2)}</span>` : `<span class="sq"></span>`;
  const items = b.items.map((it) => `<li>${marker}${esc(it)}</li>`).join('');
  return `<div class="infocard"><div class="infocard__label">${esc(b.label)}</div><ul class="${cls}">${items}</ul></div>`;
}

function renderBlock(b) {
  switch (b.t) {
    case 'def':
      return `<div class="block def"><div class="block__label">Definición</div><p>${esc(b.text)}</p></div>`;
    case 'prose': {
      const lab = b.label ? `<h3 class="sec">${esc(b.label)}</h3>` : '';
      const body = b.paras ? b.paras.map((p) => `<p>${esc(p)}</p>`).join('') : `<p>${esc(b.text)}</p>`;
      return `<div class="block prose">${lab}${body}</div>`;
    }
    case 'concepts': {
      const cards = b.items.map((c) => `<div class="concept">${c.img ? `<div class="concept__media"><img src="${imgUrl(c.img)}" alt="${esc(c.name)}" loading="lazy"></div>` : ''}<h4>${esc(c.name)}</h4><p>${esc(c.desc)}</p>${c.ex ? `<div class="ex">${esc(c.ex)}</div>` : ''}</div>`).join('');
      return `<div class="block">${b.label ? `<div class="block__label">${esc(b.label)}</div>` : ''}<div class="concepts">${cards}</div></div>`;
    }
    case 'timeline': {
      const steps = b.steps.map((st, i) => `<li class="tstep">
        <div class="tstep__node">${i + 1}</div>
        <div class="tstep__card"><div class="tstep__head"><b>${esc(st.name)}</b>${st.tag ? `<span class="tstep__tag">${esc(st.tag)}</span>` : ''}</div><p>${esc(st.desc)}</p></div>
      </li>`).join('');
      return `<div class="block">${b.label ? `<div class="block__label">${esc(b.label)}</div>` : ''}<ol class="timeline">${steps}</ol></div>`;
    }
    case 'pinterest': {
      const frames = b.pins.map((id) => `<a data-pin-do="embedPin" data-pin-width="medium" href="https://www.pinterest.com/pin/${id}/" class="pin">Ver video en Pinterest</a>`).join('');
      return `<div class="block"><div class="block__label">${esc(b.label)}</div><div class="pins">${frames}</div></div>`;
    }
    case 'embed':
      return `<div class="block"><div class="block__label">${esc(b.label)}</div><a class="reto" href="${b.url}" target="_blank" rel="noopener" style="max-width:420px"><span class="reto__num">${icon('tiktok', 22, 1.8)}</span><span class="reto__name">${esc(b.text)}</span><span class="reto__arrow">${icon('external', 18, 1.9)}</span></a></div>`;
    default:
      return '';
  }
}

function renderBlocks(blocks) {
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.t === 'list') {
      const run = [];
      while (i < blocks.length && blocks[i].t === 'list') { run.push(blocks[i]); i++; }
      out.push(`<div class="cards2">${run.map((x) => renderList(x)).join('')}</div>`);
      continue;
    }
    if (b.t === 'idea' || b.t === 'dato') {
      const run = [];
      while (i < blocks.length && (blocks[i].t === 'idea' || blocks[i].t === 'dato')) { run.push(blocks[i]); i++; }
      const callouts = run.map((x) => x.t === 'idea'
        ? `<div class="callout--idea"><span class="b"></span><div class="callout__label">${icon('bulb', 16, 1.8)} Idea principal</div><p>${esc(x.text)}</p></div>`
        : `<div class="callout--dato"><div class="callout__label">${icon('info', 16, 1.8)} Dato importante</div><p>${esc(x.text)}</p></div>`).join('');
      out.push(`<div class="callouts">${callouts}</div>`);
      continue;
    }
    out.push(renderBlock(b));
    i++;
  }
  return out.join('\n');
}

/* ---------- SUBTEMA ---------- */
function subPage(t, s, idx) {
  const n = t.subs.length;
  const prev = t.subs[(idx - 1 + n) % n];
  const next = t.subs[(idx + 1) % n];
  const num = String(idx + 1).padStart(2, '0');
  const isFirst = idx === 0;
  const isLast = idx === n - 1;

  const prevHref = isFirst ? temaUrl(t) : subUrl(t, prev);
  const prevLabel = isFirst ? 'Volver al tema' : prev.title;
  const nextHref = isLast ? (temaUrl(t) + '#refuerza') : subUrl(t, next);
  const nextLabel = isLast ? 'Comenzar los quiz' : next.title;
  const nextKicker = isLast ? 'Actividades' : 'Siguiente';

  const bigImage = s.bigImage
    ? `<figure class="bigimg"><img src="${imgUrl(s.bigImage)}" alt="Esquema: ${esc(s.title)}" loading="lazy"><figcaption>${esc(s.title)} — esquema explicativo</figcaption></figure>`
    : '';

  // aside
  let asideTop = '';
  if (s.tiktok) {
    asideTop = `<div class="tk"><div class="tk__frame"><iframe src="https://www.tiktok.com/embed/v2/${s.tiktok}" title="Video de TikTok" loading="lazy" allow="encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe></div><figcaption class="tk__cap">Video en TikTok</figcaption></div>`;
  } else if (!s.noFigure && !s.bigImage) {
    const figInner = s.img
      ? `<div class="figure__media"><img src="${imgUrl(s.img)}" alt="Ilustración: ${esc(s.title)}" loading="lazy"></div>`
      : `<div class="figure__media"><span class="figure__b1"></span><span class="figure__b2"></span><span class="figure__icon">${icon(t.icon, 64, 1.6)}</span></div>`;
    asideTop = `<figure class="figure">${figInner}<figcaption>Fig. ${t.n}.${idx + 1} — ${esc(s.title)}</figcaption></figure>`;
  }

  const intemaList = t.subs.map((x, xi) => `<a class="intema__item${xi === idx ? ' active' : ''}" href="${subUrl(t, x)}"><span class="nm">${String(xi + 1).padStart(2, '0')}</span>${esc(x.title)}</a>`).join('');

  const hasPinterest = s.blocks.some((b) => b.t === 'pinterest');

  const inner = `<main id="main" class="sub">
  <nav class="crumbs sub__crumbs" aria-label="Ruta"><a href="/">Inicio</a><span class="sep">/</span><a href="${temaUrl(t)}">${esc(t.title)}</a><span class="sep">/</span><span class="cur">${esc(s.title)}</span></nav>
  <div class="sub__grid">
    <article class="sub__article pop">
      <div class="badge">Tema ${t.n} · Reto ${num}</div>
      <h1 class="sub__title">${esc(s.title)}</h1>
      ${bigImage}
      ${renderBlocks(s.blocks)}
      <div class="subnav">
        <a class="subnav__prev" href="${prevHref}"><span class="ar">${icon('arrow', 18, 1.9)}</span><span class="t"><span class="kk">${isFirst ? 'Atrás' : 'Anterior'}</span><span class="nn">${esc(prevLabel)}</span></span></a>
        <a class="subnav__next" href="${nextHref}"><span class="t"><span class="kk">${nextKicker}</span><span class="nn">${esc(nextLabel)}</span></span>${icon(isLast ? 'target' : 'arrow', 18, 1.9)}</a>
      </div>
    </article>
    <aside class="aside">
      ${asideTop}
      <div class="intema"><div class="intema__label">En este tema</div><div class="intema__list">${intemaList}</div></div>
    </aside>
  </div>
  </main>`;

  return shell(`${s.title} · Tema ${t.n} — Biología 2.º BGU`, s.blocks.find((b) => b.t === 'def' || b.t === 'prose')?.text || s.title, 'sub', cssVars(t), inner, { pinterest: hasPinterest });
}

module.exports = { home, temaPage, subPage, temaUrl, subUrl };
