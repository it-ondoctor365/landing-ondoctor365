# OnDoctor365 — Style Reference

## Paleta de colores

### Colores de marca (Tailwind custom tokens)

| Token             | Hex       | Uso principal                              |
|-------------------|-----------|--------------------------------------------|
| `primary`         | `#2d418e` | Textos de título, fondo de hero/CTA, navbar activo |
| `accent`          | `#32b9cc` | Botones primarios, highlights, badges, links accent |
| `accent-dark`     | `#2aa3b5` | Hover de botones accent                    |
| `light-bg`        | `#FFFFFF` | Fondo de secciones alternas                |

### Colores de soporte (inline, no tokenizados)

| Hex        | Uso                                              |
|------------|--------------------------------------------------|
| `#1a2860`  | Orb oscuro en fondos de hero/CTA (complementa primary) |
| `#07111f`  | Texto sobre botón accent (casi negro, contraste máximo) |
| `#f8fafc`  | Fondo de cards (slate-50)                        |
| `#e2e8f0`  | Border de cards (slate-200)                      |
| `#64748b`  | Texto secundario / placeholders (slate-500)      |
| `#dcfce7`  | Fondo badge "Disponible" (green-100)             |
| `#16a34a`  | Texto badge "Disponible" (green-600)             |

### Opacidades de marca

```
accent + "12"  → fondo de badge sutil (hover/informativo)
accent + "18"  → fondo de badge sobre fondo oscuro
accent + "40"  → border de badge
accent + "50"  → border de badge sobre fondo oscuro
accent + "55"  → box-shadow de botón primario
accent + "30"  → border de avatar/imagen
```

---

## Tipografía

### Fuentes

| Familia     | Variable CSS        | Tailwind class   | Uso                                      |
|-------------|---------------------|------------------|------------------------------------------|
| Inter       | `"Inter", sans-serif` | `font-sans` (default) | Cuerpo, UI, nav, labels, descripciones |
| Fraunces    | `"Fraunces", serif` | `font-fraunces`  | Títulos H1/H2, números de stats         |

**Carga:** Google Fonts en `index.html`. Inter en pesos 400/500/600/700/800. Fraunces en optical size 9–144, pesos 100–900, normal e italic.

### Escala tipográfica en uso

| Elemento            | Clase Tailwind                          | Notas                        |
|---------------------|-----------------------------------------|------------------------------|
| H1 hero             | `text-4xl md:text-6xl font-fraunces font-bold` | Leading `leading-tight`  |
| H2 sección          | `text-3xl md:text-5xl font-fraunces font-extrabold` | Leading `leading-tight` |
| H2 sección (menor)  | `text-3xl md:text-4xl font-fraunces font-extrabold` | —                       |
| Subtítulo / bajada  | `text-sm` o `text-base`, `font-sans`    | `leading-relaxed`, color `text-white/70` o `text-gray-500` |
| Badge / label       | `text-[11px] font-bold tracking-[0.18em] uppercase` | — |
| Badge secundario    | `text-[10px] font-bold tracking-widest uppercase` | — |
| Body texto card     | `text-sm leading-relaxed`               | —                            |
| Body texto pequeño  | `text-xs leading-relaxed`               | —                            |
| Nombre en card      | `text-sm font-bold text-primary`        | —                            |
| Stat value          | `text-2xl font-fraunces font-bold`      | —                            |
| Stat label          | `text-xs text-white/60`                 | —                            |
| Dropdown label      | `text-xs font-semibold text-gray-400 uppercase tracking-wider` | — |
| Sección label       | `text-xs font-semibold text-gray-400`   | —                            |

---

## Espaciado

### Secciones

```
py-24        → padding vertical estándar de cada sección (96px arriba/abajo)
px-6         → padding horizontal del contenedor inner
max-w-7xl    → ancho máximo del contenedor (1280px)
mx-auto      → centrado
```

### Gaps y márgenes internos

```
gap-5        → entre cards del grid
gap-3        → entre botones CTA
gap-4        → entre elementos de nav y rows
gap-2        → entre items de filtros/badges
mb-14        → debajo del header de sección
mb-12        → debajo del header (variante compacta)
mb-10        → debajo de filtros
mt-4         → debajo de subtítulo
```

---

## Border Radius

| Forma        | Clase Tailwind  | Uso                                           |
|--------------|-----------------|-----------------------------------------------|
| Píldora completa | `rounded-full`  | Botones CTA de navbar, badges de sección, filtros activos |
| XL grande    | `rounded-3xl`   | Cards de especialistas/profesionales, hero floating card |
| XL           | `rounded-2xl`   | Botones primarios/secundarios en hero y CTA final |
| L            | `rounded-xl`    | Dropdown de navbar, botón "Reservar turno" en card |
| M            | `rounded-lg`    | NavLinks hover, items de dropdown mobile      |
| Imagen avatar | `rounded-2xl`  | Avatar rectangular en cards de especialistas  |
| Imagen avatar | `rounded-full` | Avatar circular en cards de testimonios/profesionales |

---

## Botones

### Botón primario (accent)

```css
background: #32b9cc
color: #07111f
font-weight: 700 (bold)
font-size: text-sm (14px)
padding: px-5 py-2 (navbar) | px-6 py-3 (hero) | px-8 py-3.5 (CTA final)
border-radius: rounded-full (navbar) | rounded-2xl (hero, CTA final)
box-shadow: 0 10px 36px #32b9cc55
```

**Hover state:**
```css
/* Navbar */
background: #2aa3b5   (accent-dark)
transition: colors 200ms

/* Hero / CTA final */
scale: 1.03
translateY: -2px
transition: 200ms Framer Motion
```

### Botón secundario (ghost sobre fondo oscuro)

```css
background: transparent
border: 1px solid rgba(255,255,255,0.25)
color: rgba(255,255,255,0.85)
font-weight: 600
border-radius: rounded-2xl
padding: px-6 py-3 | px-8 py-3.5
```

**Hover state:**
```css
scale: 1.03
translateY: -2px
```

### Filtros de especialidad

```css
/* Inactivo */
background: #fff
border: 1px solid #e2e8f0
color: #64748b
border-radius: rounded-full
padding: px-4 py-1.5
font-size: text-xs
font-weight: 600

/* Activo */
background: #2d418e
border: 1px solid #2d418e
color: #fff
```

### Botón "Reservar turno" (card)

```css
background: linear-gradient(135deg, #2d418e, #32b9cc)
color: #fff
border-radius: rounded-xl
padding: py-2.5 w-full
font-size: text-xs
font-weight: 700
transition: opacity 200ms, box-shadow 200ms
hover: opacity-90, shadow-lg
```

---

## Degradados

### Gradiente principal de botón

```css
background: linear-gradient(135deg, #2d418e, #32b9cc)
```

### Divider line en cards

```css
background: linear-gradient(90deg, #32b9cc40, transparent)
height: 1px
```

### Dot grid (patrón de fondo)

```css
background-image: radial-gradient(circle, #2d418e18 1px, transparent 1px);
background-size: 32px 32px;

/* Sobre fondo oscuro */
background-image: radial-gradient(circle, #ffffff0a 1px, transparent 1px);
background-size: 32px 32px;
```

---

## Fondos de sección

| Sección                        | Fondo                   |
|--------------------------------|-------------------------|
| Hero (Pacientes, Profesionales, Empresas) | `#2d418e` (primary) |
| CTA Final                      | `#2d418e` (primary)     |
| Secciones de contenido (par)   | `bg-white` (`#FFFFFF`)  |
| Secciones de contenido (impar) | `bg-gray-50` (`#f9fafb`) |
| Cards                          | `#f8fafc` (slate-50)    |
| Cards sobre bg-gray-50         | `bg-white`              |

### Orbs de ambient light

Siempre van en `absolute inset-0 pointer-events-none` con `blur-[140px]` o `blur-[120px]`:

```css
/* Orb primario (teal) */
width: 700px; height: 700px;
border-radius: 50%;
filter: blur(140px);
background: #32b9cc;
opacity: 0.07–0.15   /* más opaco en fondo oscuro */

/* Orb secundario (azul oscuro) */
width: 500px; height: 500px;
filter: blur(120px);
background: #2d418e o #1a2860;
opacity: 0.06–0.8
```

---

## Z-Index

| Elemento              | Clase Tailwind | Valor | Descripción                          |
|-----------------------|----------------|-------|--------------------------------------|
| Navbar / header       | `z-50`         | 50    | Sticky, siempre encima del contenido |
| Contenido de sección  | `z-10` (relative) | 10 | Posicionado sobre orbs/grid de fondo |
| Orbs / dot grid       | `inset-0` (sin z) | 0  | Detrás de todo contenido             |
| Modales (ConsultaModal, RegistroModal) | — | implícito alto | Por encima de navbar |

---

## Sombras

```css
/* Navbar */
box-shadow: shadow-sm  → 0 1px 2px rgba(0,0,0,0.05)

/* Cards hover / dropdown */
shadow-lg  → 0 10px 15px rgba(0,0,0,0.1)

/* Botón primario accent */
box-shadow: 0 10px 36px #32b9cc55

/* Botón reservar hover */
hover:shadow-lg

/* Floating card hero */
shadow-xl  → 0 20px 25px rgba(0,0,0,0.1)
backdrop-filter: blur(12px)
```

---

## Navbar

```
height: h-16 (64px)
position: sticky top-0
background: bg-white
shadow: shadow-sm
z-index: z-50

NavLink activo:   color text-primary (#2d418e)
NavLink inactivo: color text-gray-600, hover: text-primary + bg-gray-50
Dropdown:         bg-white, rounded-xl, shadow-lg, border border-gray-100
```

---

## Animaciones (Framer Motion)

### Easing global

```js
ease: [0.22, 1, 0.36, 1]   // cubic-bezier tipo spring suave
```

### AnimatedSection variants

| Variant      | Hidden                     | Visible              | Duración default |
|--------------|----------------------------|----------------------|------------------|
| `fadeInUp`   | opacity:0, y:40            | opacity:1, y:0       | 0.5s             |
| `fadeInLeft` | opacity:0, x:-40           | opacity:1, x:0       | 0.5s             |
| `fadeInRight`| opacity:0, x:40            | opacity:1, x:0       | 0.5s             |
| `fadeIn`     | opacity:0                  | opacity:1            | 0.5s             |
| `scaleIn`    | opacity:0, scale:0.92      | opacity:1, scale:1   | 0.5s             |

Trigger: `useInView` con `margin: "-80px"` y `once: true`.

### Stagger de cards

```js
delay: i * 0.1    // delay escalonado entre cards (cap a 0.4s en grillas grandes)
duration: 0.42
initial: { opacity: 0, y: 22 }
```

### Badge de sección (scale in)

```js
initial: { opacity: 0, scale: 0.9 }
whileInView: { opacity: 1, scale: 1 }
duration: 0.4
```

### Botones (micro-interacción)

```js
whileHover: { scale: 1.03, y: -2 }
whileTap:   { scale: 0.97 }
```

### Hero copy (stagger manual)

```js
custom={i}   // i = 0..4
delay: i * 0.1
duration: 0.6
```

---

## Responsive breakpoints (Tailwind default)

| Breakpoint | Width  | Uso principal                              |
|------------|--------|--------------------------------------------|
| `sm`       | 640px  | Grid 2 columnas (cards)                    |
| `md`       | 768px  | Navbar desktop, hero layout 2 columnas, texto md: |
| `lg`       | 1024px | Grid 3 columnas (cards)                    |
| `xl`       | 1280px | Grid 4 columnas (BuscarEspecialista)       |

---

## Jerarquía visual de componentes

```
1. Hero         → fondo primary + texto blanco + orbs + dot grid
2. Contenido    → bg-white o bg-gray-50 alternados
3. Cards        → bg-white o #f8fafc, border slate-200, corner glow accent
4. Badges       → accent translúcido, texto accent, border accent
5. CTA Final    → fondo primary (igual que hero para bookending visual)
```
