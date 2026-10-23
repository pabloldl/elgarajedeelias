# El Garaje de Elías

Web estática independiente en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code. No necesita instalación, compilación ni servicios externos para visualizar sus recursos. No se ha realizado ningún despliegue.

## Contenido y verificación

Datos facilitados: El Garaje de Elías; Polígono Industrial Huerto Blanquillo, 27-A, 11670 El Bosque, Cádiz; 691 417 831.

Consulta pública realizada el 23 de octubre de 2026: [ficha Cylex](https://www.cylex.es/el-bosque-cadiz-andalucia/el-garaje-de-el%C3%ADas-garaje-13503779.html). Coincide con nombre, dirección y teléfono. La ficha de un directorio no constituye confirmación suficiente de prestaciones específicas. Se mantiene el tipo genérico `LocalBusiness` y no se anuncian servicios, horarios, precios, opiniones, marcas ni garantías.

Google Maps abre una búsqueda de la dirección proporcionada; no se atribuyen coordenadas ni un marcador exacto. Los enlaces de llamada usan `tel:+34691417831`. Copiar teléfono escribe `691417831`; si el navegador impide el portapapeles, se ofrece un campo seleccionable. No hay formularios ni recogida de datos.

## Fotografías y licencias

Fotografías reales de banco, **ilustrativas del sector**. No representan instalaciones, personal ni trabajos del negocio. Se advierte también en la página. Se han convertido localmente a WebP, con compresión de calidad 85; el CSS adapta el encuadre y reduce la saturación. No se utilizan imágenes generadas.

| Archivo | Autor y original | Licencia |
| --- | --- | --- |
| `img/manos-motor.webp` | Anna Shvets, [Person in Black Jacket Working on the Engine of the Car](https://www.pexels.com/photo/person-in-black-jacket-working-on-the-engine-of-the-car-4315575/) | [Pexels License](https://www.pexels.com/license/), uso comercial y modificación permitidos; no implica respaldo del autor o de personas fotografiadas |
| `img/detalle-motor.webp` | Artem Podrez, [Close-up of Fixing an Engine](https://www.pexels.com/photo/close-up-of-fixing-an-engine-8985510/) | [Pexels License](https://www.pexels.com/license/), mismas condiciones |

Fuentes locales: Bricolage Grotesque (titulares, peso 700) y Asap (texto, peso 400), obtenidas de Google Fonts. Licencias SIL Open Font License 1.1 incluidas en `fonts/`. Favicon e identidad gráfica creados para esta propuesta.

## Diseño y comparación

Se inspeccionaron los HTML de las 21 landings disponibles y sus declaraciones tipográficas; se profundizó en CSS de Ferretería Corrales, Fontanería Londro y Taxi 9 Plazas, y en las estructuras de El Bosque Informática, Pintor José Luis e Isaac Phoenix. Comparación de código, sin revisión en navegador de esos proyectos.

La propuesta utiliza una cabecera con monograma compacto, fotografía desplazada bajo el nombre, segunda fotografía de escala diferente y una única composición práctica que integra dirección y contacto. Evita el catálogo industrial de Corrales, la señalética del taxi, los esquemas de Londro, los controles de software de Informática y las tipografías serif de los proyectos editoriales. Las fuentes seleccionadas no aparecen en las declaraciones tipográficas revisadas. Botones con una esquina de radio asimétrico y desplazamiento corto al pulsar. Animación de apertura horizontal de la fotografía, sin parallax ni fade-up. Footer compacto con identidad y año en un mismo bloque. No se reutilizó código de los proyectos anteriores.

## Comprobaciones

Pruebas con Chrome headless y Playwright disponible en el entorno, en 375, 768, 1440 y 1920 px. Capturas completas guardadas localmente en `.qa/` (ignorado en Git). Comprobados: ausencia de scroll horizontal, carga de las imágenes, destinos de anclas, enlaces telefónicos, copia real al portapapeles y alternativa cuando no está disponible, JSON-LD válido y ausencia de errores JavaScript. Revisión visual de las capturas en los cuatro tamaños. Se corrigió la separación entre el teléfono de portada y la fotografía secundaria tras la primera revisión.

Navegación con enlaces y botones nativos, foco visible, enlace para saltar al contenido, textos alternativos y avisos de copia mediante `role="status"`. La preferencia de movimiento reducido desactiva animaciones y desplazamiento suave. No se ha realizado una auditoría con lector de pantalla ni se han efectuado llamadas telefónicas. Se verificó la URL de búsqueda de Maps, sin comprobar físicamente el acceso al establecimiento.

SEO: título y descripción locales, Open Graph, HTML semántico y `LocalBusiness` con datos confirmados. Open Graph usa la ruta relativa de imagen solicitada; algunas plataformas de previsualización requieren una URL absoluta cuando exista un dominio definitivo. No se inventa un dominio ni una URL canónica.

Todos los archivos creados o modificados pertenecen a `el-garaje-de-elias/`. Sin frameworks, configuraciones Netlify ni herramientas de compilación.

## Auditoría de conservación del diseño — 23 de octubre de 2026

La landing cumple su propósito con los datos disponibles: identificar el negocio, mostrar dirección y facilitar llamada y ubicación. Se conservan estructura, textos, fotografías, tipografías, botones y animaciones; no se añaden secciones. No hay eslóganes genéricos ni servicios anunciados sin verificar.

Nueva comparación de código de navegación, tipografías y footer con las landings disponibles, con revisión específica de los estilos e interacciones de Ferretería Corrales y Fontanería Londro. Los nombres habituales de enlaces y el patrón de contacto telefónico son coincidencias funcionales; la composición, las fuentes, la geometría de los botones y el tratamiento fotográfico son distintos. No se detectaron similitudes importantes que justifiquen alterar la dirección artística. Esta comparación no incluye una revisión visual en navegador de las otras webs.

Correcciones aplicadas:

- `tabindex="-1"` en el contenido principal: el enlace «Saltar al contenido» ahora transfiere el foco al destino, sin añadir una parada a la tabulación normal.
- Foco rojo en el enlace del footer: el ámbar anterior tenía contraste 1,83:1 sobre blanco cálido; el rojo ofrece 4,81:1. No cambia el aspecto del enlace en reposo.
- Altura mínima de 44 px para los enlaces de ubicación en portada y teléfono de portada y footer: facilita su pulsación manteniendo la disposición existente.

Validación ejecutada con Chrome headless: 13 anchuras (320, 360, 375, 390, 600, 601, 768, 1024, 1050, 1051, 1280, 1440 y 1920 px). Sin desbordamientos horizontales, solapamientos entre botones, colisiones entre cabecera y marca ni controles fuera de pantalla. Capturas completas de 375, 768, 1440 y 1920 px revisadas visualmente. Verificados carga de fuentes e imágenes, anclas, teléfono en los cinco enlaces, URL de Maps con la dirección completa, JSON-LD, foco del salto al contenido, copia mediante teclado, portapapeles y alternativa manual con selección del número. Sin errores JavaScript ni respuestas HTTP fallidas de recursos locales. La página conserva llamada e imágenes con JavaScript desactivado; movimiento reducido desactiva la animación y el scroll suave.

Revisión de rendimiento limitada a recursos y carga local: imágenes WebP, fuentes locales, segunda imagen con carga diferida, script diferido y ausencia de frameworks o peticiones externas al cargar la página. No se han medido Core Web Vitals de usuarios reales ni rendimiento en red móvil. Se mantienen los metadatos y el esquema genérico correctos; la imagen Open Graph relativa sigue pendiente de dominio definitivo para los servicios que requieran URL absoluta. No se realizaron llamadas ni se comprobó físicamente la ubicación, y no se hizo auditoría con lector de pantalla. Evidencias locales en `.qa/audit-results.json` y `.qa/audit-*.png`.
