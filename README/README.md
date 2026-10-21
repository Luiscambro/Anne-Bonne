# Evaluación y mejoras del sitio de Anne Bonny

**Fecha:** 21 de octubre de 2026
**Proyecto evaluado:** sitio biográfico de Anne Bonny.

> Este documento explica oportunidades de mejora y cambios que están implementados en el código actual. No se incluyen puntajes ni se atribuyen hallazgos específicos a Lighthouse porque no se adjuntó el informe de auditoría.

## 4. Problemas identificados y soluciones

### 1. Recursos que pueden retrasar la carga inicial — Performance

- **Problema:** la imagen principal y las fuentes externas pueden tardar en descargarse. Si la imagen principal aparece tarde o las fuentes bloquean el renderizado, el usuario espera más para ver el contenido.
- **Por qué corregirlo:** mejorar la carga percibida permite que el contenido principal aparezca antes y reduce la espera inicial.
- **Solución implementada:** se solicita anticipadamente la imagen principal con prioridad alta y la hoja de estilos. También se establecen conexiones anticipadas con Google Fonts y se difiere la activación de las fuentes para no bloquear el renderizado inicial; se incluye una alternativa para cuando JavaScript está desactivado.
- **Evidencia:** [index.html](../index.html), etiquetas `preload`, `preconnect`, carga de fuentes y bloque `noscript`.

### 2. Falta de descripción para resultados de búsqueda — SEO

- **Problema:** sin una descripción de la página, los buscadores pueden generar un fragmento menos claro o menos representativo del contenido.
- **Por qué corregirlo:** una descripción pertinente ayuda a que los buscadores y las personas comprendan el tema de la página antes de abrirla.
- **Solución implementada:** se agregó una etiqueta `meta description` que resume la biografía, las batallas y el legado de Anne Bonny.
- **Evidencia:** [index.html](../index.html), sección `<head>`.

### 3. El botón de historia no llevaba a la biografía — Usabilidad e interacción

- **Problema:** el botón «Conoce su historia» solo resaltaba la biografía y no llevaba a las personas hasta ella.
- **Por qué corregirlo:** un botón que promete conocer la historia debe facilitar el acceso a la información relacionada, sin obligar a buscarla manualmente.
- **Solución implementada:** al hacer clic, la página se desplaza suavemente hasta la biografía y la resalta por tres segundos. Si se vuelve a pulsar, el resaltado permanece durante tres segundos desde la última activación. La interacción solo se registra cuando existen el botón y la biografía.
- **Evidencia:** [script.js](../js/script.js), desplazamiento, resaltado temporal y comprobación de los elementos; [styles.css](../css/styles.css), transición y estilo del resaltado.

## Mejora adicional: diseño responsive

- **Problema:** en pantallas pequeñas, el encabezado, la navegación, la presentación y las secciones en dos columnas podían quedar apretados o requerir desplazamiento horizontal.
- **Por qué corregirlo:** el sitio debe ser legible y fácil de navegar en teléfonos y tabletas, además de computadoras.
- **Solución implementada:** se añadieron puntos de adaptación para tabletas (hasta 768 px) y teléfonos (hasta 600 px). La navegación puede ocupar varias líneas, la presentación ajusta su imagen y contenido, y las secciones pasan de dos columnas a una sola en pantallas pequeñas. También se ajustaron tamaños, márgenes, formularios y línea de tiempo, y se desactivó el ajuste obligatorio del scroll en móviles.
- **Evidencia:** [styles.css](../css/styles.css), bloques `@media (max-width: 768px)` y `@media (max-width: 600px)`.

## Evidencia y archivos del proyecto

- [Página principal](../index.html)
- [Página de contacto](../contacto.html)
- [Hoja de estilos](../css/styles.css)
- [JavaScript de la interacción](../js/script.js)
- La evidencia de puntajes debe tomarse de la auditoría Lighthouse realizada en el navegador. Para comparar resultados, ejecutar Lighthouse nuevamente con las mejoras y guardar ambas capturas.

Para comprobar la interacción, abre la página principal y pulsa «Conoce su historia»: la biografía debe quedar centrada en la pantalla y resaltada brevemente.

Para comprobar el diseño responsive, abre el sitio en un teléfono o reduce el ancho de la ventana del navegador; la navegación debe ajustarse y el contenido debe mostrarse en una sola columna en pantallas pequeñas.

## Conclusión

El sitio ya cuenta con ajustes de carga, una descripción para buscadores, un botón que conduce a la biografía con una señal visual temporal y estilos adaptados a pantallas pequeñas. Estas mejoras atienden aspectos de rendimiento, SEO y usabilidad; el efecto en los puntajes debe confirmarse ejecutando Lighthouse antes y después en las mismas condiciones.
