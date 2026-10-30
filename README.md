# Destilatech Landing Page

Landing Page de **Destilatech**, plataforma SaaS B2B de la startup **FuturosSeniors** para el ecosistema peruano del
pisco: monitoreo IoT de la producción, trazabilidad de lotes, gestión de inventario, pedidos y alertas de reposición para
**productores** y **comercializadores**.

Curso: Aplicaciones Web (1ASI0730) — UPC, ciclo 2026-20.

| Recurso | Enlace |
| :--- | :--- |
| Landing Page (GitHub Pages) | https://upc-pre-202620-1asi0730-2620-8084-desti.github.io/destilatech-website/ |
| Web Application (Firebase Hosting) | https://destilatech-webapp.web.app |
| Repositorio de la Web Application | [destilatech-webapp](https://github.com/upc-pre-202620-1ASI0730-2620-8084-desti/destilatech-webapp) |
| Reporte del proyecto | [destilatech-report](https://github.com/upc-pre-202620-1ASI0730-2620-8084-desti/destilatech-report) |

## Tecnologías

- HTML5 semántico, CSS3 y JavaScript vanilla, sin frameworks ni dependencias.
- Google Fonts: Poppins (títulos) e Inter (texto).
- Diseño *mobile-first* con breakpoints en 480px, 768px, 1024px y 1280px.
- Header y footer como *partials* (`_header.html` y `_footer.html`) compartidos por todas las páginas.
- Internacionalización propia en inglés (idioma por defecto) y español.

## Secciones

| Sección | Ancla | Contenido |
| :--- | :--- | :--- |
| Header | — (`_header.html`) | Logo, navegación con *scroll* suave, selector de idioma y botón **Subscribe**. |
| Overview | `#overview` | Propuesta de valor y tarjetas por segmento (productor y comercializador). |
| Benefits | `#benefits` | Cuatro beneficios: monitoreo, inventario, alertas y estimaciones predictivas. |
| Pricing | `#pricing` | Planes Básico, Profesional y Empresarial, cada uno con su botón de suscripción. |
| Impact | `#impact` | Cifras del sector pisquero (Ministerio de la Producción, 2025). |
| Features | `#features` | Funcionalidades en pestañas por perfil: Productor / Comercializador. |
| About the product | `#about-the-product` | Video de presentación del producto. |
| Testimonials | `#testimonials` | Testimonios ilustrativos de clientes. |
| About us | `#about-us` | Equipo FuturosSeniors con fotos y video de presentación del equipo. |
| Footer | — (`_footer.html`) | Navegación, enlaces legales y botón **Subscribe**. |

Páginas adicionales:

- `public/terms.html`: términos y condiciones.
- `public/privacy.html`: política de privacidad.

## Llamadas a la acción

Todos los botones **Subscribe** llevan a la Web Application:

| Botón | Destino |
| :--- | :--- |
| Header, Overview, bloque final y Footer | `https://destilatech-webapp.web.app` |
| Plan Básico | `https://destilatech-webapp.web.app/billing/plans?plan=basic` |
| Plan Profesional | `https://destilatech-webapp.web.app/billing/plans?plan=professional` |
| Plan Empresarial | `https://destilatech-webapp.web.app/billing/plans?plan=enterprise` |

## Estructura del proyecto

La carpeta `public/` es el sitio web estático: las páginas completas van en su raíz y los recursos en `assets/`,
organizados por tipo.

```
destilatech-website/
├── .github/workflows/
│   └── deploy-pages.yml           # Publica la carpeta public/ en GitHub Pages
├── public/
│   ├── index.html                 # Landing Page
│   ├── terms.html                 # Términos y condiciones
│   ├── privacy.html               # Política de privacidad
│   ├── _header.html               # Partial: header compartido
│   ├── _footer.html               # Partial: footer compartido
│   └── assets/
│       ├── images/                # hero-copper-stills.jpg, impact-vineyard.jpg, segment-*.jpg
│       │   └── team/              # Fotos del equipo
│       ├── scripts/
│       │   ├── i18n.js            # Textos EN/ES de la landing y cambio de idioma
│       │   ├── legal-i18n.js      # Textos EN/ES de las páginas legales
│       │   └── main.js            # Carga de partials, menú móvil, scroll, pestañas y videos
│       └── styles/
│           └── styles.css         # Estilos y breakpoints
└── README.md
```

### Partials

El header y el footer se escriben una sola vez en `_header.html` y `_footer.html`. Cada página tiene dos contenedores
vacíos que `main.js` reemplaza con el contenido del partial al cargar:

```html
<div id="header-placeholder"></div>
...
<div id="footer-placeholder"></div>
```

Al modificar un partial se actualizan todas las páginas que lo usan. Los enlaces del menú apuntan a
`index.html#seccion`, por lo que funcionan igual desde la landing y desde las páginas legales.

### Convenciones de nombres

Todo en inglés: archivos de imágenes (`segment-producer.jpg`), identificadores y anclas (`#pricing`), clases CSS con BEM
(`price-card__badge`) y claves de traducción (`segProducer.title`).

## Idiomas

Cada texto traducible tiene un atributo `data-i18n="clave"` (o `data-i18n-attrs` para atributos como `alt` y
`aria-label`). Las traducciones están en `public/assets/scripts/i18n.js` y `public/assets/scripts/legal-i18n.js`. La
página abre en inglés y recuerda en el navegador el idioma que elige el visitante.

Para agregar un texto nuevo, crea la misma clave en `es` y en `en`, y úsala en el HTML con `data-i18n`.

## Equipo y videos

- **Fotos:** van en `public/assets/images/team/`. Si una foto no carga, la tarjeta muestra las iniciales del integrante.
- **Videos:** la landing tiene dos espacios para video. Cuando estén grabados, súbelos a YouTube y pega el ID de cada
  uno (lo que va después de `watch?v=`) en el atributo `data-video-id` de su elemento en `public/index.html`. El video
  se inserta solo; mientras el atributo esté vacío se muestra el aviso *coming soon*.

| Video | Elemento en `public/index.html` |
| :--- | :--- |
| Video about the product | `<div class="video-frame" id="product-video" data-video-id="" ...>` |
| Video about the team | `<div class="video-frame" id="team-video" data-video-id="" ...>` |

## Ejecución local

Los partials se cargan con `fetch`, así que la página debe abrirse desde un servidor y no con doble clic sobre el
archivo (`file://`). En WebStorm: clic derecho en `public/index.html` → **Open in → Browser**, que usa el servidor
integrado del IDE.

## Despliegue

La landing se publica en **GitHub Pages** con el workflow `.github/workflows/deploy-pages.yml`, que sube solo la carpeta
`public/`. Cada `git push origin main` actualiza el sitio en uno o dos minutos; el avance se ve en la pestaña **Actions**
del repositorio.

Configuración única del repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Equipo FuturosSeniors

| Integrante | Código |
| :--- | :--- |
| Fernandez Seer, Mario Alonso | U202317807 |
| Santiago Atanacio, Jairo Mathias | U202418755 |
| Almandroz Carbajal, Pierina Marysabel | U202316845 |
| Condor Sandoval, Jean Pierre | U202418405 |
