/* Build estático: genera /dist con las 30 páginas + assets */
const fs = require('fs');
const path = require('path');
const { temas } = require('./lib/content');
const { home, temaPage, subPage } = require('./lib/render');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const GEN = __dirname;

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function ensure(p) { fs.mkdirSync(p, { recursive: true }); }
function write(rel, html) {
  const full = path.join(DIST, rel);
  ensure(path.dirname(full));
  fs.writeFileSync(full, html, 'utf8');
  return rel;
}
function copyDir(src, dst) {
  ensure(dst);
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

rmrf(DIST);
ensure(DIST);

// assets
copyDir(path.join(GEN, 'assets'), path.join(DIST, 'assets'));

const pages = [];
pages.push(write('index.html', home()));

for (const t of temas) {
  pages.push(write(path.join('tema', t.slug, 'index.html'), temaPage(t)));
  t.subs.forEach((s, i) => {
    pages.push(write(path.join('tema', t.slug, s.slug, 'index.html'), subPage(t, s, i)));
  });
}

// 404 simple (Vercel sirve 404.html para no encontrados)
write('404.html', home().replace('<title>', '<title>404 · '));

console.log('Generadas ' + pages.length + ' páginas:');
pages.forEach((p) => console.log('  /' + p.replace(/\\/g, '/')));
console.log('Salida: ' + DIST);
