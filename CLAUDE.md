# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Reglas de trabajo

1. **Contexto primero** — leer archivos relevantes antes de escribir codigo. Si no hay contexto suficiente, preguntar.
2. **Respuestas cortas** — 1-3 oraciones. Sin preambulos ni resumen final. No repetir lo que dijo el usuario.
3. **Edit > Write** — usar Edit (reemplazo parcial) para archivos existentes. Write solo si el cambio es >80% del archivo.
4. **No releer** — si ya se leyo un archivo en la conversacion, no volver a leerlo salvo que haya cambiado.
5. **Validar antes de declarar hecho** — compilar o verificar que funciona antes de decir "listo".
6. **Sin adulacion** — no decir "Excelente pregunta", "Gran idea", etc. Ir directo al trabajo.
7. **Minimo viable** — implementar solo lo que resuelve el problema. Sin abstracciones, helpers ni features no pedidos.
8. **No debatir** — si el usuario dice "hazlo asi", hacerlo. Mencionar concerns en 1 oracion y proceder.
9. **Leer solo lo necesario** — usar offset/limit en archivos grandes. Si se conoce la ruta, usar Read directo sin Glob+Grep previo.
10. **No narrar el plan** — no anunciar lo que se va a hacer. Solo hacerlo (el usuario ve los tool calls).
11. **Paralelizar tool calls** — leer multiples archivos independientes en un solo mensaje.
12. **No duplicar codigo en respuesta** — si se edito un archivo, no copiarlo en texto. El usuario ve el diff.
13. **Agent solo para busquedas amplias** — para una funcion o archivo especifico, usar Grep o Glob directo.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Project Overview

**OnDoctor365** is a telemedicine SaaS marketing website with three distinct landing pages targeting different user segments: patients (pacientes), healthcare providers (profesionales), and corporate clients (empresas).

Stack: React 19, React Router DOM 7, Vite, Tailwind CSS 3, Framer Motion, Lucide React.

## Architecture

### Routing

`App.jsx` defines three routes, each mapping to a page in `src/pages/`:

| Route | Page | Audience |
|---|---|---|
| `/pacientes` | `Pacientes.jsx` | Consumers seeking online consultations |
| `/profesionales` | `Profesionales.jsx` | Doctors/specialists offering services |
| `/empresas` | `Empresas.jsx` | HR/corporate clients offering employee benefits |

Each page is a composition of section components from its corresponding `src/components/<segment>/` folder.

### Component Structure

```
src/components/
├── layout/          # Navbar (sticky, 3 routes), Footer
├── ui/              # AnimatedSection — reusable scroll-triggered animation wrapper
├── pacientes/       # 9 section components for the patient landing page
├── profesionales/   # 5 section components for the provider landing page
└── empresas/        # 6 section components for the corporate landing page
```

Some components are shared across pages (e.g., `TestimoniosSection`, `FAQSection`, `CTAFinal` appear in both pacientes and empresas).

### Animation System

`AnimatedSection` wraps Framer Motion with an Intersection Observer. Variants: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`. `StaggerContainer` / `StaggerItem` are used for list animations. Apply these wrappers to new sections for visual consistency.

### Styling Conventions

Custom Tailwind theme in `tailwind.config.js`:
- **Primary color:** `#2d418e` (dark blue) — used as `bg-primary`, `text-primary`
- **Accent color:** `#32b9cc` (teal) — used as `bg-accent`, `text-accent`
- **Fonts:** `Inter` (sans-serif body), `Fraunces` (serif headings) — loaded via Google Fonts in `index.html`

### Content Pattern

All section content (testimonials, FAQs, pricing plans, stats, feature lists) is defined as plain JS arrays/objects directly inside each component file — there is no separate CMS or data layer.
