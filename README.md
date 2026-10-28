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
- Diseño *mobile-first* con breakpoints en 480px, 768px, 1024px y 1200px.
- Internacionalización propia en inglés (idioma por defecto) y español.

## Secciones

| Sección | Ancla | Contenido |
| :--- | :--- | :--- |
| Header | `#header` | Logo, navegación con *scroll* suave, selector de idioma y botón **Subscribe**. |
| Overview | `#descripcion` | Propuesta de valor y tarjetas por segmento (productor y comercializador). |
| Benefits | `#objetivos` | Cuatro beneficios: monitoreo, inventario, alertas y estimaciones predictivas. |
| Pricing | `#precios` | Planes Básico, Profesional y Empresarial, cada uno con su botón de suscripción. |
| Impact | `#impacto` | Cifras del sector pisquero (Ministerio de la Producción, 2025). |
| Features | `#funcionalidades` | Funcionalidades en pestañas por perfil: Productor / Comercializador. |
| Product video | `#video` | Video de presentación del producto. |
| Testimonials | `#testimonios` | Testimonios ilustrativos de clientes. |
| About us | `#nosotros` | Equipo FuturosSeniors con fotos y video de presentación del equipo. |
| Footer | — | Navegación, enlaces legales y botón **Subscribe**. |

Páginas adicionales:

- `terms.html`: términos y condiciones.
- `privacy.html`: política de privacidad.

## Llamadas a la acción

Todos los botones **Subscribe** llevan a la Web Application:

| Botón | Destino |
| :--- | :--- |
| Header, Overview, bloque final y Footer | `https://destilatech-webapp.web.app` |
| Plan Básico | `https://destilatech-webapp.web.app/billing/plans?plan=basic` |
| Plan Profesional | `https://destilatech-webapp.web.app/billing/plans?plan=professional` |
| Plan Empresarial | `https://destilatech-webapp.web.app/billing/plans?plan=enterprise` |

## Estructura del proyecto

```
destilatech-website/
├── index.html              # Landing Page
├── terms.html              # Términos y condiciones
├── privacy.html            # Política de privacidad
├── css/
│   └── styles.css          # Estilos y breakpoints
├── js/
│   ├── i18n.js             # Textos EN/ES de la landing y cambio de idioma
│   ├── legal-i18n.js       # Textos EN/ES de las páginas legales
│   └── script.js           # Menú móvil, scroll suave, pestañas, fotos del equipo y videos
└── assets/img/
    ├── *.jpg               # Imágenes de las secciones
    └── team/               # Fotos del equipo
```

## Idiomas

Cada texto traducible tiene un atributo `data-i18n="clave"` (o `data-i18n-attrs` para atributos como `alt` y
`aria-label`). Las traducciones están en `js/i18n.js` y `js/legal-i18n.js`. La página abre en inglés y recuerda en el
navegador el idioma que elige el visitante.

Para agregar un texto nuevo, crea la misma clave en `es` y en `en`, y úsala en el HTML con `data-i18n`.

## Equipo y videos

- **Fotos:** van en `assets/img/team/`. Si una foto no carga, la tarjeta muestra las iniciales del integrante.
- **Videos:** la landing tiene dos espacios para video. Cuando estén grabados, súbelos a YouTube y pega el ID de cada
  uno (lo que va después de `watch?v=`) en el atributo `data-video-id` de su elemento en `index.html`. El video se
  inserta solo; mientras el atributo esté vacío se muestra el aviso *coming soon*.

| Video | Elemento en `index.html` |
| :--- | :--- |
| Video about the product | `<div class="video-frame" id="product-video" data-video-id="" ...>` |
| Video about the team | `<div class="video-frame" id="team-video" data-video-id="" ...>` |

## Ejecución local

No requiere instalación. Abre `index.html` en el navegador o, desde WebStorm, clic derecho en `index.html` →
**Open in → Browser**.

## Despliegue

La landing se publica con **GitHub Pages** desde la rama `main`. Cada `git push origin main` actualiza el sitio en uno o
dos minutos; el avance se ve en la pestaña **Actions** del repositorio.

## Equipo FuturosSeniors

| Integrante | Código |
| :--- | :--- |
| Fernandez Seer, Mario Alonso | U202317807 |
| Santiago Atanacio, Jairo Mathias | U202418755 |
| Almandroz Carbajal, Pierina Marysabel | U202316845 |
| Condor Sandoval, Jean Pierre | U202418405 |
