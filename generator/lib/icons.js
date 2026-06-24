// Íconos SVG del diseño "Chispa" (line, viewBox 24, stroke currentColor)
const M = {
  origen: `<circle cx="12" cy="12" r="2.3"/><ellipse cx="12" cy="12" rx="10" ry="4.3"/><ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)"/>`,
  biomoleculas: `<path d="M12 3.6l6.4 3.7v7.4L12 18.4l-6.4-3.7V7.3z"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="3.6" r="1.4"/><circle cx="18.4" cy="14.7" r="1.4"/><circle cx="5.6" cy="14.7" r="1.4"/>`,
  evolucion: `<path d="M4 20c5 0 5-6 9-9"/><path d="M11 12c4-2 4-6 9-8"/><circle cx="20" cy="4" r="1.6" fill="currentColor" stroke="none"/><circle cx="13" cy="11" r="1.5"/><circle cx="4" cy="20" r="1.6"/>`,
  diversidad: `<path d="M12 21c-5-4-6-11-1-17 5 6 4 13-1 17z"/><path d="M12 21V8"/><path d="M6 14C4.6 11 5.6 8 7.6 6"/><path d="M18 14c1.4-3 .4-6-1.6-8"/>`,
  celula: `<circle cx="12" cy="12" r="9"/><circle cx="13.5" cy="10.5" r="3"/><circle cx="8" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="9.5" cy="8.5" r=".8" fill="currentColor" stroke="none"/>`,
  funciones: `<path d="M5 12a7 7 0 0 1 11.7-5.1"/><path d="M19 12a7 7 0 0 1-11.7 5.1"/><path d="M17.2 3.4V6.9h-3.5"/><path d="M6.8 20.6V17.1h3.5"/>`,
  spark: `<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><circle cx="12" cy="12" r="3"/>`,
  doc: `<path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 13h6"/><path d="M9 17h4"/>`,
  slides: `<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>`,
  pdf: `<path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4"/><path d="M9 14h2a1.5 1.5 0 0 1 0 3H9zM9 17v-3"/>`,
  download: `<path d="M12 4v10"/><path d="M8 11l4 4 4-4"/><path d="M5 19h14"/>`,
  play: `<path d="M9 7.5v9l7-4.5z" fill="currentColor" stroke="none"/>`,
  check: `<path d="M5 12.5l4 4L19 6"/>`,
  bulb: `<path d="M9.5 17.5h5"/><path d="M10 20.5h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1 .9 1.6h5.2c0-.6.3-1.1.9-1.6A6 6 0 0 0 12 3z"/>`,
  info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>`,
  ig: `<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>`,
  yt: `<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.5v5l4-2.5z" fill="currentColor" stroke="none"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>`,
  phone: `<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>`,
  burger: `<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>`,
  arrow: `<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>`,
  tiktok: `<path d="M16 4c.5 2.5 2 4 4.5 4.2V11c-1.8 0-3.3-.5-4.5-1.4V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 2 2.6V4z"/>`,
  chevdown: `<path d="M6 9l6 6 6-6"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>`,
  external: `<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>`,
  puzzle: `<path d="M10 4h4a1 1 0 0 1 1 1v2a1.6 1.6 0 1 0 3 0V5h2a1 1 0 0 1 1 1v3h-2a1.6 1.6 0 1 0 0 3h2v3a1 1 0 0 1-1 1h-3v-2a1.6 1.6 0 1 0-3 0v2H5a1 1 0 0 1-1-1v-4h2a1.6 1.6 0 1 0 0-3H4V5a1 1 0 0 1 1-1h5"/>`,
  pinterest: `<circle cx="12" cy="12" r="9"/><path d="M9.5 17l1.6-6.4M9.6 11.2c-.2-.8-.1-2 .7-2.7 1-1 2.8-.9 3.5.3.7 1.2.2 3-1 3.6-.8.4-1.7.1-1.9-.6"/>`,
};

function icon(key, size = 26, sw = 1.7) {
  const inner = M[key] || '';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

module.exports = { icon };
