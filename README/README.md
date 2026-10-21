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

### 3. Interacción dependiente de elementos de una sola página — Best Practices

- **Problema:** el botón «Conoce su historia» y el bloque de biografía no están presentes en todas las páginas. Intentar registrar la interacción sin comprobar esos elementos puede producir un error de JavaScript.
- **Por qué corregirlo:** validar los elementos antes de usarlos evita errores innecesarios y hace que el mismo archivo JavaScript pueda coexistir de forma segura con páginas que no contienen esa interacción.
- **Solución implementada:** se comprueba que ambos elementos existan antes de registrar el evento. Al hacer clic, se añade temporalmente el efecto visual y se retira después de tres segundos.
- **Evidencia:** [script.js](../js/script.js), comprobación de elementos y evento del botón.

## Evidencia y archivos del proyecto

- [Página principal](../index.html)
- [Página de contacto](../contacto.html)
- [Hoja de estilos](../css/styles.css)
- [JavaScript de la interacción](../js/script.js)
- La evidencia de puntajes debe tomarse de la auditoría Lighthouse realizada en el navegador. Para comparar resultados, ejecutar Lighthouse nuevamente con las mejoras y guardar ambas capturas.

## Conclusión

El sitio ya cuenta con ajustes de carga, una descripción para buscadores y una interacción JavaScript protegida ante la ausencia de elementos. Estas mejoras atienden aspectos de rendimiento, SEO y buenas prácticas; el efecto en los puntajes debe confirmarse ejecutando Lighthouse antes y después en las mismas condiciones.
