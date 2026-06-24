# Prompt maestro para Claude Design — Biología 2 BGU · Unidad 0

Copia y pega TODO lo que está dentro del bloque de abajo en Claude Design.

---

Eres un director de arte y diseñador de producto de nivel "Awwwards / agencia premium". Tu tarea es diseñar el **rediseño visual completo** de un sitio web educativo de Biología (ya existente, hoy en Wix con un diseño genérico y de bajo contraste). Quiero un diseño **profesional, moderno y memorable**, manteniendo EXACTAMENTE el mismo contenido. No es un sitio corporativo: es material didáctico para estudiantes de secundaria, así que la legibilidad y el atractivo para jóvenes son críticos.

## Contexto del proyecto
- Sitio: **"Unidad 0 — El origen de la vida y las biomoléculas orgánicas"**, Biología de 2.º BGU (Bachillerato, Ecuador).
- Autor (docente): Lic. Xavier Martínez Chamorro. Audiencia: estudiantes de 15–17 años.
- Es un recurso de estudio: textos explicativos, diagramas, videos, presentaciones y quizzes de refuerzo.
- Idioma: **español**. Toda la interfaz y los textos van en español.

## Dirección estética (elegida)
**"Cuaderno científico moderno"**: base CLARA tipo papel cálido, máxima legibilidad, acentos científicos vibrantes, ilustraciones de líneas de biología (ADN, células, moléculas), jerarquía editorial y mucho aire. Premium pero amigable.
> Quiero que me presentes **2 o 3 variantes** de esta dirección que difieran sobre todo en **tipografía y paleta**, para yo elegir. Mantén todas dentro del espíritu "claro, legible, científico-editorial".

## Sistema tipográfico (propón opciones)
- Empareja una **tipografía display con carácter** (titulares) + una **sans muy legible** (cuerpo) + opcionalmente una **mono** para etiquetas/números ("Tema 01", microetiquetas).
- Sugerencias de partida (puedes proponer otras de Google Fonts): display → Fraunces / Bricolage Grotesque / Instrument Serif / Clash Display; cuerpo → Hanken Grotesk / Plus Jakarta Sans / Outfit / Geist; mono → Space Mono / JetBrains Mono.
- PROHIBIDO: Arial, Helvetica, Roboto, Open Sans, Inter, fuentes de sistema por defecto. Nada genérico.
- Para cada variante, muéstrame la escala tipográfica (display, h1, h2, h3, cuerpo, etiqueta) con tamaños, pesos, interletrado e interlineado.

## Sistema de color
- Base: blanco/crema cálido tipo papel; tinta (texto) casi negra cálida con buen contraste (WCAG AA mínimo).
- **Código de color por tema** (6 acentos armónicos, cada uno reconocible). Punto de partida que puedes refinar:
  1. Origen de la vida → índigo/violeta (primordial/cósmico)
  2. Biomoléculas orgánicas → ámbar/miel (energía)
  3. Evolución → verde-azulado/teal
  4. Diversidad → verde
  5. La célula → magenta/fucsia
  6. Nutrición, relación y reproducción → coral/naranja
- Define para cada acento: color fuerte, tinte claro (fondos) y tono oscuro (texto sobre tinte). Sombras tintadas, nunca negro puro.

## Estructura y componentes a diseñar
El sitio tiene 3 tipos de página. Diseña mockups de alta fidelidad de los tres:

### A) Home
Secciones: nav superior pegajoso (logo + menú de los 6 temas con desplegables) · hero con titular display + intro + CTAs + ilustración de biología · grilla de **6 tarjetas de tema** (numeradas, con color, icono, mini-etiquetas de "subtemas/video/quiz") · sección de recursos (presentaciones) · footer con autor, contacto, **reloj "Hora en Ecuador"** y redes.

### B) Índice de tema (ej. Tema 1)
Hero del tema (con su color) + breadcrumb + título + intro · grilla de tarjetas de subtemas · bloque de **video introductorio** (YouTube embebido) · CTA de **"Refuerza tus conocimientos"** (quiz) · footer.

### C) Página de subtema (plantilla de contenido)
Breadcrumb + título · bloques de contenido con etiquetas: **Definición**, **Importancia** (lista), **Características** (lista), y dos destacados tipo callout: **Idea principal** y **Dato importante** · figura/diagrama lateral · navegación anterior/siguiente + "Volver" · footer.

## Contenido real de muestra (úsalo en los mockups, NO uses lorem ipsum)
**Home — intro:** "El origen de la vida y las biomoléculas orgánicas estudian cómo surgieron los primeros seres vivos en la Tierra y las sustancias fundamentales que forman y permiten el funcionamiento de los organismos vivos."
**6 temas:** 1) Origen de la vida · 2) Biomoléculas orgánicas · 3) Evolución de los seres vivos · 4) Diversidad de los seres vivos · 5) La célula · 6) Nutrición, relación y reproducción.

**Tema 1 — intro:** "El origen de la vida estudia cómo aparecieron los primeros seres vivos en la Tierra hace millones de años. Existen diferentes teorías que intentan explicar este proceso…"
**Subtemas del Tema 1:** Teoría creacionista · Generación espontánea · Teoría de la panspermia · Teoría de Oparin y Haldane · Experimento de Miller y Urey.

**Subtema de ejemplo — "Teoría creacionista":**
- Definición: "La teoría creacionista sostiene que el origen de la vida y del universo fue creado por un ser divino o superior."
- Importancia: Fue una de las primeras explicaciones sobre el origen de la vida · Está basada en creencias religiosas y culturales · Influyó en muchas sociedades y religiones del mundo.
- Características: Explica que la vida fue creada de manera inmediata · Se basa en la fe y en textos sagrados · Considera que los seres vivos fueron creados tal como existen.
- Idea principal: "Un ser supremo creó el universo, la Tierra y todos los seres vivos."
- Dato importante: "No es una teoría científica porque no puede comprobarse mediante experimentos."

## Requisitos de calidad (obligatorios)
- **Legibilidad y accesibilidad primero**: contraste alto, foco visible, jerarquía clara, ancho de lectura ~65–70 caracteres.
- **Responsive impecable** (móvil → escritorio). Móvil con menú hamburguesa.
- **Micro-interacciones con gusto**: hover en tarjetas/botones, revelados suaves al hacer scroll, transiciones con curvas personalizadas (no `linear`).
- **Profundidad sutil**: tarjetas tipo "doble bisel", radios generosos, sombras tintadas suaves, mucho espacio en blanco.
- **Motivos de biología** como detalle (líneas de ADN, células, enlaces moleculares) — sutiles, nunca recargados.
- Iconografía de **línea fina y consistente** (Phosphor/Tabler/Lucide line), no iconos gruesos genéricos.

## PROHIBIDO (esto hace que el diseño se vea "hecho por IA")
Gradientes morado-sobre-blanco genéricos · 3 columnas iguales aburridas sin aire · fuentes genéricas (Inter/Arial/Roboto) · todo centrado y simétrico · sombras negras duras (`shadow-md`) · "Title Case" en todo · transiciones instantáneas · emojis como iconos · texto de bajo contraste · lorem ipsum.

## Entregable
1. Un **sistema de diseño** (tipografía, paleta por tema, espaciado, componentes, estados).
2. Mockups de alta fidelidad de las **3 páginas** (Home, Índice de tema, Subtema), idealmente como **artefacto HTML/CSS interactivo y navegable** y responsive.
3. Preséntame **2–3 variantes** (sobre todo tipográficas y cromáticas) para que elija una.

Hazlo excepcional. Comprométete con una visión clara y ejecútala con precisión de agencia.
