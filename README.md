# Biología 2.º BGU — Unidad 0

Sitio educativo: **El origen de la vida y las biomoléculas orgánicas**.
Docente: Lic. Xavier Martínez Chamorro.

Rediseño moderno (dirección visual **Chispa**) del recurso original. Sitio estático, sin dependencias, generado con Node.

## Estructura

- `generator/` — generador estático
  - `lib/content.js` — **todo el contenido** (30 páginas) en un solo archivo
  - `lib/render.js` — plantillas (home, tema, subtema)
  - `lib/icons.js` — íconos SVG
  - `assets/css/chispa.css` — diseño
  - `assets/js/app.js` — interacciones (menú, reloj, etc.)
  - `build.js` — genera el sitio en `dist/`
- `content/` — contenido fuente de referencia (Markdown)
- `dist/` — salida generada (no se versiona; la genera Vercel)

## Desarrollo

```bash
node generator/build.js          # genera dist/
npx serve dist                   # (o cualquier servidor estático) para previsualizar
```

## Despliegue (Vercel)

El repositorio está listo para Vercel: build `node generator/build.js`, salida `dist/`
(configurado en `vercel.json`). Cada push a la rama principal vuelve a desplegar.

## Editar contenido

Para cambiar textos, imágenes, videos o quizzes, edita `generator/lib/content.js`
y vuelve a hacer `node generator/build.js` (o solo haz push: Vercel reconstruye).
