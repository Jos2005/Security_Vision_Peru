# Security Vision

Sitio web corporativo para **Security Vision Pro**, enfocado en soluciones de videovigilancia inteligente en Sullana y Perú.

## Descripción

Este proyecto es una web estática con enfoque comercial que presenta:

- Servicios de seguridad electrónica.
- Catálogo de productos y páginas informativas.
- Secciones de impacto, marcas, testimonios y contacto.
- Animaciones visuales y experiencia responsive para móvil y escritorio.

## Vista previa

![Vista previa de Security Vision](img/content/preview.png)

## Tecnologías usadas

- HTML5
- CSS3 (modularizado en varios archivos)
- JavaScript (vanilla)
- Remix Icon (CDN)
- Google Fonts (Jost, Orbitron, Public Sans)

## Estructura del proyecto

```text
Security Vision/
├── index.html
├── script.js
├── styles.css
├── css/
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── sections.css
│   └── responsive.css
├── img/
│   ├── brand/
│   ├── brands/
│   ├── content/
│   ├── industria/
│   ├── products/
│   └── testimonials/
└── pages/
    ├── contacto.html
    ├── nosotros.html
    ├── productos.html
    └── servicios.html
```

## Cómo ejecutar en local

1. Abre la carpeta del proyecto en VS Code.
2. Ejecuta un servidor local (recomendado con la extensión **Live Server**).
3. Abre `index.html` en tu navegador.

Alternativa rápida sin extensiones:

- Haz doble clic en `index.html` para abrirlo directamente en el navegador.

## Funcionalidades destacadas

- Loader de página al iniciar.
- Header fijo con efecto al hacer scroll.
- Menú responsive para dispositivos móviles.
- Scroll suave en anclas internas.
- Animaciones al aparecer en viewport (Intersection Observer).
- Contadores animados de métricas.
- Sistema de partículas en el hero.
- Toast de confirmación en formulario de contacto.

## SEO y marca

La página principal incluye:

- `title`, `meta description` y `meta keywords`.
- Favicon de marca.
- Contenido orientado a posicionamiento local en Sullana y Perú.

## Estado del proyecto

Proyecto funcional de presentación corporativa, preparado para:

- despliegue en hosting estático,
- mejoras de conversión (formularios conectados a backend),
- y optimización SEO adicional.

## Autor

Desarrollado para **Security Vision Pro**.
