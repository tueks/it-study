# IT Study — Fronteras entre contenido y diseño

## 1. Identificación y propósito

- **Proyecto:** IT Study.
- **Documento:** Fronteras entre contenido y diseño.
- **Ruta oficial:** `docs/06-design-boundaries.md`.
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`;
  5. `docs/03-content-model.md`;
  6. `docs/04-editorial-guidelines.md`;
  7. `docs/05-relationship-rules.md`.
- **Estado:** aprobado el 2026-07-20; constituye la fuente de autoridad vigente para las fronteras entre contenido, navegación y presentación, y no un diseño UX/UI ni una arquitectura técnica ejecutable.
- **Fecha:** 2026-07-20.
- **Fecha de aprobación:** 2026-07-20.

### 1.1 Propósito

Este documento formaliza las fronteras obligatorias entre contenido educativo, taxonomía, relaciones semánticas, gobierno editorial, lógica de aplicación, navegación y presentación visual. Su finalidad es preservar el significado, la clasificación y la estructura aprobados aunque cambien por completo la interfaz, el canal de publicación, el dispositivo, el framework o el producto consumidor.

Estas fronteras permiten que ChatGPT Trabajo produzca contenido sin decisiones visuales, que los revisores distingan semántica de apariencia y que Codex implemente consumidores, validadores y presentaciones intercambiables sin reinterpretar decisiones editoriales.

### 1.2 Alcance

Este documento define:

- responsabilidades y dependencias permitidas entre capas;
- datos semánticos que una interfaz puede interpretar;
- propiedades visuales prohibidas en contenido;
- separación entre contenido educativo, microcopy, configuración, gobierno y curaduría;
- límites de navegación, URLs, IDs, orden, activos y visualizaciones;
- responsabilidades de accesibilidad, responsive design, temas, búsqueda, filtros y localización;
- tratamiento de contenido fuente y artefactos generados;
- facultades y prohibiciones de Codex;
- validaciones conceptuales, pruebas de sustitución y escenarios de incumplimiento.

### 1.3 Audiencia

Está dirigido al chat coordinador, ChatGPT Trabajo, revisores humanos, responsables editoriales, diseñadores UX/UI, Codex, futuros agentes y mantenedores de la aplicación o de otros productos que consuman IT Study.

### 1.4 Decisiones que define

Define la autoridad de cada capa, el sentido permitido de sus dependencias, la ubicación de decisiones de presentación y navegación, el tratamiento de agrupaciones editoriales, la independencia entre IDs y URLs, y los criterios para comprobar que el contenido pueda reutilizarse sin reescritura.

### 1.5 Asuntos reservados

Quedan reservados:

- capacidades, cobertura y cantidades del MVP: `docs/07-mvp-definition.md`;
- organización y secuencia de lotes: `docs/08-production-batches.md`;
- severidades, umbrales y aceptación medible: `docs/09-quality-criteria.md`;
- excepciones y cambios materiales: `docs/10-decision-log.md`;
- instrucciones operativas: documentos de `work/`;
- arquitectura técnica, generador estático, búsqueda concreta y despliegue: fase técnica posterior;
- investigación, flujos, componentes, layouts, tipografía, colores e interacción concreta: fase UX/UI posterior.

## 2. Principio fundamental

Una ficha educativa debe conservar completamente su significado sin depender de página, URL, ruta, componente, tarjeta, color, icono, posición, tamaño, tema, animación, interacción, dispositivo, framework o lenguaje de programación.

El contenido fuente debe poder leerse, validarse y transformarse sin conocer la interfaz que lo publicará. Debe ser posible reemplazar toda la capa visual, generar otro formato o construir otro producto sin modificar definiciones, clasificaciones, relaciones, IDs ni metadatos editoriales.

La interfaz puede seleccionar, ordenar y representar información autorizada; no puede convertir sus decisiones en significado canónico. Si retirar un color, una tarjeta, una página o una interacción cambia lo que una ficha afirma, la separación ha fallado.

## 3. Capas del sistema

### 3.1 Contenido educativo

Contiene títulos, nombres, aliases, definiciones, resúmenes, propósito, problema resuelto, ejemplos, ventajas, limitaciones, contexto profesional, explicaciones, comparaciones semánticas, escenarios, rutas y fuentes. Responde qué significa el conocimiento y cómo debe comprenderse.

No contiene instrucciones de interfaz, estilos, ubicación de pantalla ni decisiones de renderizado.

### 3.2 Taxonomía y clasificación

Contiene dominios, subdominios, disciplinas transversales, tipos, subtipos, pertenencia, dominio principal, dominios secundarios, prioridad, profundidad y estabilidad. Su autoridad procede de `docs/02-taxonomy.md` y `docs/03-content-model.md`.

La jerarquía canónica es exclusivamente `domain > subdomain`. `discipline` es transversal y `area` es una agrupación editorial opcional, no un nivel taxonómico.

### 3.3 Relaciones semánticas

Contiene exclusivamente los campos relacionales y el catálogo aprobado en `docs/05-relationship-rules.md`. Las relaciones persistidas, derivadas e inversas conservan allí su dirección, compatibilidad, cardinalidad y autoridad. Una necesidad de navegación o visualización no autoriza una relación nueva.

### 3.4 Gobierno editorial

Contiene estados, fechas, responsables, lotes, vigencia, verificación, revisión, deprecación, sustitución, versiones de contrato, decisiones y notas de revisión. Describe el ciclo de vida y la trazabilidad del contenido; no determina cómo se muestra.

### 3.5 Lógica de aplicación

Comprende carga y transformación de fuentes, validación, generación de formatos derivados, búsqueda, filtrado, ordenamiento, índices, resolución de IDs, aliases y `legacyIds`, cálculo de relaciones derivadas e inversas, y detección de referencias rotas.

Puede leer contratos semánticos y configuración del producto. No puede editar silenciosamente fuentes, inventar significado ni tratar datos generados como autoridad.

### 3.6 Navegación

Comprende rutas de consulta, exploración por dominio, glosario, búsqueda, filtros, recorridos, colecciones y enlaces entre entradas. Es una proyección de contenido, taxonomía, relaciones, estructuras editoriales y configuración; no constituye taxonomía ni contenido fuente.

### 3.7 Presentación visual

Comprende componentes, layouts, tipografía, colores, iconografía, espaciado, temas, responsive design, animaciones y estados visuales. Decide cómo representar la información disponible sin cambiar su semántica ni persistir apariencia dentro de una ficha.

### 3.8 Dependencias permitidas y prohibidas

| Capa consumidora | Puede depender de | Dependencias prohibidas |
|---|---|---|
| Contenido educativo | Taxonomía, modelo, relaciones aprobadas y fuentes | Navegación, URLs, componentes, estilos, dispositivo o framework |
| Taxonomía y clasificación | Decisiones taxonómicas y modelo aprobados | Menús, páginas, popularidad, layout o necesidades de una vista |
| Relaciones semánticas | IDs, tipos, taxonomía, campos de autoridad y evidencia | Líneas de un grafo, enlaces deseados, proximidad visual o coaparición |
| Gobierno editorial | Identidad, flujo, evidencia y decisiones | Color de estado, visibilidad de un componente o posición de portada |
| Lógica de aplicación | Contenido, contratos, gobierno y configuración | Reescribir fuentes para simplificar una vista o convertir resultados en autoridad |
| Navegación | Taxonomía, aliases, relaciones, estructuras editoriales, búsqueda y configuración | Crear pertenencia, cambiar IDs o afirmar relaciones nuevas |
| Presentación visual | Datos semánticos, navegación y configuración | Modificar fuentes, reclasificar, alterar relaciones o convertir estilo en metadato editorial |

El sentido general de dependencia es desde los consumidores hacia las fuentes de autoridad: presentación consume navegación; navegación consume semántica y configuración; lógica transforma fuentes bajo contratos. Ninguna capa consumidora escribe de regreso decisiones propias como si fueran contenido.

## 4. Matriz de responsabilidades

| Decisión | Responsabilidad principal | Observación |
|---|---|---|
| Nombre de un dominio | Modelo/taxonomía | Es significado canónico; no lo decide un menú. |
| Color de un dominio | Presentación/configuración | Nunca se almacena en la entidad de dominio. |
| Icono de un concepto | Presentación/activos | Puede asignarse externamente; no define el concepto. |
| Orden de una ruta de aprendizaje | Contenido editorial | `learning-path.entries[].order` expresa progresión pedagógica. |
| Dominio principal | Modelo/taxonomía | `primaryDomain` es autoridad semántica. |
| Relación de prerrequisito | Relaciones/modelo | `prerequisites` es autoridad de `requires`; no procede del orden visual. |
| Texto de una definición | Contenido educativo | Debe conservar sentido fuera de la interfaz. |
| URL pública | Lógica/configuración/despliegue | Pertenece a la aplicación; no sustituye el ID. |
| Posición de una tarjeta | Presentación | No se persiste en la ficha. |
| Prioridad editorial | Modelo/gobierno editorial | Usa `essential`, `important`, `specialized` o `emerging`. |
| Estado de revisión | Gobierno editorial | Usa el vocabulario aprobado de `editorialStatus`. |
| Etiqueta visible de un filtro | Microcopy/configuración de interfaz | Puede localizarse; no renombra el campo canónico. |
| Ordenamiento alfabético | Lógica/configuración | Se calcula para una vista o locale. |
| Versión del contrato | Modelo/documento de gobierno | `contractVersion` no es versión visual ni versión de una página. |
| Peso de búsqueda | Configuración/lógica | No se incorpora a fichas individuales. |
| Colección temporal de portada | Configuración/estructura editorial | No cambia clasificación ni prioridad. |
| Texto alternativo educativo de un diagrama | Contenido o recurso educativo | Describe significado; no equivale a ubicación o tamaño. |
| Contraste, foco y orden de tabulación | Presentación/implementación | Responsabilidad técnica de accesibilidad. |

Cuando una decisión pertenezca a más de una columna, debe existir una autoridad inequívoca: el contenido aporta significado; la configuración decide políticas del producto; la presentación decide apariencia; el gobierno registra ciclo y aprobación.

## 5. Datos semánticos permitidos

La interfaz puede interpretar `type`, `subtype`, `primaryDomain`, `subdomains`, `secondaryDomains`, `disciplines`, `priority`, `knowledgeLevel`, `stability`, `editorialStatus`, relaciones, complejidad de escenarios, secuencia de rutas, vigencia, verificación y deprecación.

Esta interpretación permite, por ejemplo, escoger una representación compatible, habilitar filtros, generar avisos de vigencia o conservar un orden pedagógico. No permite:

- cambiar el valor semántico;
- persistir una elección visual en la entrada;
- asumir que prioridad implica tamaño o posición;
- convertir estado editorial en estado de interacción;
- añadir una clasificación porque una vista la necesita;
- sustituir un ID por título, slug o URL.

## 6. Propiedades visuales prohibidas en contenido

Quedan prohibidos en frontmatter, cuerpo educativo y estructuras editoriales los campos o instrucciones de apariencia siguientes, incluidas variantes equivalentes:

- `color`, `backgroundColor`, `textColor`;
- `icon`, `emoji`;
- `imagePosition`;
- `layout`, `column`, `row`;
- `cardStyle`, `component`, `template`;
- `theme`;
- `font`, `fontSize`;
- `cssClass`;
- `animation`, `breakpoint`;
- `displayOrder` cuando exprese posición visual;
- `featured` cuando no tenga significado editorial definido;
- HTML de presentación, estilos inline o clases CSS;
- instrucciones como “mostrar a la derecha”, “usar tarjeta azul”, “ocultar en móvil” o “colocar arriba”.

Un nombre coincidente solo es admisible cuando posee significado semántico independiente de cualquier interfaz, está aprobado por el modelo y su interpretación no depende de apariencia. Por ejemplo, `order` es válido en pasos de un escenario, dimensiones de una comparación o entradas de una ruta porque expresa secuencia o correspondencia; no es válido para elegir la columna o posición de una tarjeta.

Una propiedad excepcional requiere demostrar significado autónomo, necesidad transversal, compatibilidad con otras salidas y aprobación mediante `docs/10-decision-log.md`. Una necesidad de diseño no cumple esa prueba.

## 7. Contenido frente a configuración de presentación

### 7.1 Ubicación de responsabilidades

| Información | Ubicación correcta |
|---|---|
| Definiciones, resúmenes, ejemplos y fuentes | Contenido educativo canónico |
| Nombres canónicos de dominios, tipos y entradas | Taxonomía/modelo/contenido |
| Nombres visibles de secciones educativas | Estructura editorial o renderer semántico, según si expresan contenido o convención de lectura |
| Textos de interfaz, mensajes vacíos y etiquetas de botones | Catálogo de microcopy/localización |
| Navegación global | Configuración y lógica de navegación |
| Temas e iconos | Presentación y activos |
| Configuración de búsqueda y filtros | Configuración del producto y lógica |
| Límites de resultados | Configuración del producto |
| Orden visual y distribución | Presentación |
| Agrupaciones de portada | Configuración o estructuras curatoriales |
| Contenido destacado temporal | Curaduría con criterio, periodo y responsable |
| Prioridad educativa estable | Contenido/modelo editorial |

### 7.2 Distinciones

- **Contenido educativo:** explica el conocimiento y conserva validez en cualquier salida.
- **Microcopy de interfaz:** orienta una interacción concreta y puede variar por producto o idioma.
- **Configuración del producto:** establece políticas operativas como límites, facetas, rutas públicas o agrupaciones visibles.
- **Decisión editorial:** define significado, clasificación, prioridad, estado, vigencia o estructura pedagógica.
- **Curaduría temporal:** selecciona contenido para una audiencia, contexto o periodo sin alterar sus fichas.

La reutilización de un título educativo como texto visible no convierte todo el microcopy en contenido. La aplicación referencia o deriva el título; no lo duplica como autoridad.

## 8. Área editorial y navegación

`area` es una agrupación editorial opcional. Puede reunir dominios o entradas para orientación, planificación o recorrido, pero no forma parte de `domain > subdomain`, no concede `primaryDomain` y no crea `belongs-to-domain`.

Puede utilizarse en navegación si:

- declara un criterio curatorial comprensible;
- referencia IDs existentes;
- no repite definiciones;
- se presenta como agrupación o recorrido, no como nivel canónico;
- su ausencia no impide localizar las entradas por taxonomía, búsqueda o IDs.

La interfaz debe evitar etiquetas o jerarquías que hagan parecer que un área contiene taxonómicamente a un dominio. Una agrupación puede cambiar añadiendo o retirando referencias en su estructura editorial o configuración, sin migrar fichas, dominios ni relaciones.

Las colecciones y recorridos deben representarse como `area`, `collection`, `journey` o `learning-path` solo conforme a los contratos aprobados y al propósito curatorial correspondiente. Sus criterios, audiencia, orden curado y vigencia permanecen fuera de las entidades referenciadas.

## 9. Navegación derivada

La aplicación puede generar navegación a partir de:

- dominios y subdominios;
- tipos y subtipos;
- nombres, aliases y acrónimos;
- relaciones directas, inversas o derivadas autorizadas;
- rutas de aprendizaje;
- comparaciones y escenarios;
- prioridad editorial, cuando exista una política de producto explícita;
- orden curado dentro de estructuras editoriales.

Reglas obligatorias:

- la ubicación visual no cambia la clasificación;
- aparecer en una página no implica pertenencia;
- un menú no constituye taxonomía;
- una URL no constituye identidad;
- la ausencia de un término en una vista no implica exclusión del contenido;
- una relación mostrada debe existir en una fuente aprobada o derivarse conforme al catálogo;
- el orden de resultados no se convierte en orden pedagógico;
- una ruta de navegación no se escribe de regreso como jerarquía semántica.

## 10. URLs, rutas e IDs

- Los IDs son globales, estables, semánticos, inmutables y no reutilizables conforme a `docs/03-content-model.md`.
- Las URLs, rutas públicas y rutas internas pertenecen a la aplicación.
- Las rutas pueden cambiar por arquitectura, localización, SEO, despliegue o rediseño.
- Las referencias internas entre fuentes usan exclusivamente IDs canónicos.
- Los archivos no se enlazan mediante rutas relativas como contrato semántico.
- Cambiar una URL no debe exigir modificar fichas, relaciones, taxonomía ni estructuras que referencian IDs.
- Los redirects y la resolución de URLs antiguas pertenecen a aplicación o despliegue.
- El slug visible puede derivarse del título, nombre, idioma o política del producto, pero no sustituye el ID ni tiene que ser permanente.
- Un `legacyId` resuelve una identidad histórica; no es URL, slug ni relación.

Una aplicación puede mantener una tabla `ID -> URL` o resolverla de manera determinista. Esa proyección es reconstruible y no se convierte en fuente editorial.

## 11. Ordenamiento

| Clase de orden | Significado y autoridad |
|---|---|
| Semántico | Orden inherente a una estructura con significado; reside en la fuente correspondiente. |
| Pedagógico | Progresión necesaria o curada para aprender; reside en rutas o prerrequisitos aprobados. |
| Editorial | Selección y secuencia deliberada para una colección o recorrido; reside en la estructura curatorial. |
| Alfabético | Cálculo por nombre y locale; pertenece a lógica/configuración. |
| Por relevancia | Resultado de política o algoritmo; pertenece a búsqueda/configuración. |
| Visual | Posición o distribución en una vista; pertenece a presentación. |
| Temporal | Orden por fecha o vigencia; se calcula desde metadatos salvo que una narrativa exija secuencia. |
| Generado por búsqueda | Ranking contextual de una consulta; no se persiste como semántica. |

Debe persistirse orden cuando perderlo alteraría significado, por ejemplo:

- `events[].order` en un escenario;
- `entries[].order` en una ruta;
- dimensiones y correspondencia de valores en una comparación;
- pasos de un proceso cuando el contrato del proceso declare secuencia.

Debe residir en configuración, lógica o presentación el orden de tarjetas, la posición en portada, el orden de filtros, la distribución en columnas, el ranking de resultados y el orden por dispositivo.

## 12. Iconos e imágenes

Los iconos y las imágenes decorativas no determinan significado, clasificación, estado ni prioridad. Pertenecen a presentación o a un inventario externo de activos y no son requisitos obligatorios de cada ficha. Pueden asignarse por tipo, dominio, contexto o configuración, siempre que exista alternativa accesible y que no sean el único medio para comunicar información.

Una imagen sí puede ser contenido educativo cuando es necesaria para explicar, demostrar o documentar el tema, por ejemplo:

- diagrama con significado propio;
- ilustración conceptual;
- figura procedente de una fuente;
- captura necesaria para explicar una interfaz.

En esos casos se trata como artefacto o recurso educativo con identidad o referencia, propósito, descripción, texto alternativo educativo, fuente, derechos, vigencia y relaciones aplicables. No se almacena como decoración ni como instrucción de layout. Retirar el activo debe dejar disponible una explicación textual suficiente.

## 13. Tablas, diagramas y visualizaciones

- **Datos semánticos:** hechos, dimensiones, valores, relaciones y secuencias que constituyen la fuente.
- **Visualización generada:** representación intercambiable de esos datos.
- **Texto alternativo:** equivalente accesible de la información relevante.
- **Descripción educativa:** explicación del significado, límites y lectura de los datos.
- **Configuración visual:** apariencia, escala, orientación, colores, layout e interacción.

Un grafo de relaciones representa relaciones aprobadas; no es su fuente. Una tabla comparativa consume `dimensions[]` y valores; no crea dimensiones por cómo se dibuja. Un mapa de dominios proyecta la taxonomía; no la modifica. Un diagrama puede reemplazarse o retirarse sin cambiar las fuentes semánticas.

El contenido debe seguir siendo comprensible sin la visualización. Cuando una visualización contenga información educativa no disponible en otro lugar, esa información debe modelarse como datos, descripción o recurso canónico antes de representarse.

## 14. Estados editoriales frente a estados visuales

Los estados editoriales aprobados son `planned`, `draft`, `in-review`, `approved`, `needs-update`, `deprecated` y `rejected`. Expresan el ciclo de vida del contenido y pertenecen al gobierno editorial.

Estados como seleccionado, expandido, activo, `hover`, `loading`, `disabled` o error visual pertenecen a la interfaz. No se almacenan en fichas, no forman parte de `editorialStatus` y no cambian aprobación o vigencia.

La presentación puede mostrar un estado editorial con texto, icono u otro tratamiento accesible, pero no puede renombrarlo de forma que altere su significado, inferirlo desde apariencia ni escribir un estado visual de regreso en la fuente.

## 15. Prioridad editorial frente a prominencia visual

`essential`, `important`, `specialized` y `emerging` representan prioridad educativa. No significan automáticamente mayor tamaño, color, ubicación superior, orden de portada o frecuencia de aparición.

Toda prominencia visual pertenece a presentación o curaduría y debe declarar la política que la produce. Una portada curada no cambia `priority`. Popularidad, tráfico, patrocinio, disponibilidad comercial o preferencia del diseñador no modifican la prioridad editorial.

## 16. Accesibilidad

### 16.1 Responsabilidad del contenido

El contenido debe aportar títulos y descripciones significativos, orden pedagógico cuando sea inherente, lenguaje claro, expansión de acrónimos, alternativas textuales educativas para recursos y ausencia de referencias que dependan solo de color o posición.

### 16.2 Responsabilidad de implementación

La interfaz debe aportar estructura y roles semánticos, nombres accesibles, navegación mediante teclado, foco visible y predecible, contraste suficiente, orden de lectura coherente, adaptación a dispositivos pequeños, reducción de movimiento, anuncios accesibles de cambios y compatibilidad con lectores de pantalla.

Un texto alternativo que explica el contenido de un diagrama puede pertenecer al recurso educativo. Su tamaño, posición, forma de ocultamiento visual o mecanismo de expansión pertenecen al diseño. La accesibilidad no autoriza duplicar fichas para tecnologías de asistencia; exige que la misma fuente pueda representarse correctamente.

## 17. Responsive design

Las fichas no pueden contener instrucciones específicas para desktop, tablet, móvil, columnas, breakpoints ni orden de bloques por dispositivo.

El responsive design puede reorganizar, apilar, resumir visualmente o cambiar la interacción siempre que conserve:

- significado y contenido disponible;
- jerarquía taxonómica;
- relaciones;
- orden pedagógico obligatorio;
- identificadores y referencias;
- estados y avisos semánticos;
- accesibilidad y orden de lectura.

Una versión móvil no es otra ficha. Si una vista muestra inicialmente menos detalle, debe existir una forma accesible de consultar el contenido autorizado y la omisión no puede presentarse como inexistencia semántica.

## 18. Temas claro y oscuro

Los temas pertenecen exclusivamente a presentación. El contenido no almacena colores por tema, no requiere un tema y no cambia su disponibilidad o semántica según el modo visual.

Los diagramas e imágenes educativas deben conservar legibilidad, contar con alternativas textuales y, si necesitan variantes técnicas para distintos fondos, resolverlas en activos o presentación. Las variantes no crean fichas nuevas ni convierten colores en metadatos educativos.

## 19. Búsqueda

### 19.1 Información semántica indexable

Puede indexarse:

- `title`, `canonicalName`, `englishName`, aliases y acrónimos;
- `summary`, `definition` y otros campos educativos pertinentes;
- `type`, `subtype`, dominios y disciplinas;
- relaciones aprobadas y sus destinos resueltos;
- términos confundibles y contextos de polisemia;
- vigencia y estado publicable cuando la política lo permita.

### 19.2 Configuración de búsqueda

Pesos, tokenización, tolerancia, límite de resultados, resaltado, algoritmo, ranking, historial, sinónimos operativos y comportamiento de sugerencias pertenecen a lógica y configuración.

La configuración no se introduce en fichas individuales salvo que una propiedad semántica aprobada sea legítimamente indexable. Un mayor peso de búsqueda no cambia prioridad editorial, y una ausencia en resultados no elimina ni reclasifica contenido.

## 20. Filtros y facetas

Los filtros pueden derivarse de vocabularios aprobados como dominio, subdominio, tipo, subtipo, prioridad, profundidad, estabilidad, estado publicable y disciplina. También pueden consumir vigencia o deprecación cuando exista una política de producto definida.

No deben generarse filtros desde campos visuales, clases CSS, colores, posiciones, etiquetas libres no gobernadas ni términos extraídos sin contrato. La existencia de un filtro no convierte un atributo en categoría taxonómica; solo ofrece una forma de consulta.

La etiqueta visible, orden, selección inicial, combinación y cantidad de facetas pertenecen a microcopy, configuración, lógica y presentación.

## 21. Comparaciones, escenarios y rutas

### 21.1 Comparaciones

`comparedEntries`, `comparisonReason`, dimensiones, criterios y valores son contenido. Tabla, tarjetas, gráfico, orden visual y controles son presentación. Cambiar de una tabla a otra representación no puede alterar dimensiones ni introducir un ganador general.

### 21.2 Escenarios

Contexto, objetivo, participantes, secuencia, decisiones, consecuencias y resultado son contenido. Timeline, diagrama, pasos desplegables o interacción son presentación. La ocultación o reordenamiento visual no puede cambiar la causalidad ni convertir una narrativa en procedimiento obligatorio.

### 21.3 Rutas

Audiencia, objetivo, prerrequisitos, orden, opcionalidad, checkpoints y criterios de finalización son contenido. Progreso visual, líneas, tarjetas, mapas y controles son presentación. La posición en una ruta no se convierte automáticamente en relación global `requires` o `recommended-before`.

## 22. Contenido destacado y portada

IT Study distingue:

- **prioridad editorial estable:** `priority` aprobada por valor educativo;
- **selección temporal de portada:** decisión curatorial con contexto y vigencia;
- **recomendación curatorial:** colección o ruta para una audiencia u objetivo;
- **popularidad calculada:** métrica derivada de uso, si se adopta posteriormente;
- **promoción comercial:** prohibida.

Términos destacados, colecciones, rutas recomendadas, dominios prioritarios, novedades y contenido emergente deben residir en configuración o estructuras editoriales con criterio, responsable y, cuando corresponda, periodo. No se usa un campo visual `featured` en cada entrada.

La portada puede cambiar sin alterar fichas, relaciones, taxonomía o prioridad. Novedad no equivale a importancia; `emerging` expresa prioridad y consolidación educativa, no campaña promocional.

## 23. Microcopy de interfaz

Textos como “Buscar”, “Ver más”, “Volver”, “Sin resultados”, “Cargar más”, “Filtrar” o “Tema oscuro” no forman parte de las fichas educativas. Deben residir en un catálogo de mensajes o recursos de localización de la aplicación.

El microcopy debe mantener consistencia, tono general profesional, nombres accesibles, claridad de acción y compatibilidad con futura localización. Puede reutilizar nombres canónicos cuando corresponda, pero no duplicarlos como otra fuente. Este documento no fija el inventario ni la redacción final de mensajes.

## 24. Localización futura

La separación debe permitir:

- traducción independiente de interfaz y contenido;
- aliases multilingües con código de idioma;
- IDs invariantes entre idiomas;
- URLs localizadas como proyección de aplicación;
- contenido parcial por idioma con estado verificable;
- fallback explícito sin mezclar silenciosamente idiomas;
- búsqueda y orden alfabético sensibles al locale.

La traducción no crea otro significado ni otro ID salvo que exista una acepción realmente incompatible conforme al modelo. El diseño no debe asumir que todos los textos tienen la misma longitud ni que siglas, plurales, orden de palabras o slugs son equivalentes entre idiomas.

## 25. Contenido generado frente a contenido fuente

Son fuentes canónicas los archivos editoriales aprobados, taxonomía, estructuras, fuentes normalizadas y documentos de gobierno correspondientes. Son artefactos generados los índices, páginas, JSON derivado, mapas de relaciones, feeds, índices de búsqueda, tablas de navegación, URLs resueltas y otras proyecciones reconstruibles.

Los artefactos generados:

- no se editan manualmente como fuente;
- pueden eliminarse y reconstruirse;
- no sustituyen archivos canónicos;
- no introducen significado ausente en las fuentes;
- registran procedencia o versión de construcción cuando sea necesario;
- no se usan para corregir silenciosamente errores editoriales.

Si una representación generada descubre una inconsistencia, la corrección se realiza en la fuente autorizada mediante el flujo correspondiente y luego se regenera.

## 26. Integración con Codex

### 26.1 Codex puede implementar sin reinterpretación

- consumidores de contratos y renderers por tipo;
- layouts y presentaciones intercambiables;
- índices y formatos derivados;
- búsqueda, filtros y navegación derivada;
- resolución de IDs, aliases, `legacyIds`, URLs e inversas;
- temas, responsive design y accesibilidad técnica;
- validaciones de separación y referencias;
- generación reproducible de páginas, JSON, feeds, grafos y glosarios.

### 26.2 Codex no puede

- añadir campos visuales a fichas;
- modificar una definición para adaptarla a un componente;
- cambiar relaciones para mejorar un grafo;
- reclasificar contenido;
- usar URLs, slugs, títulos o rutas como IDs;
- fusionar contenido por conveniencia de UI;
- inventar categorías, relaciones o aliases semánticos;
- duplicar fichas para dispositivos, páginas o productos;
- ocultar errores editoriales mediante presentación;
- escribir cambios derivados de vuelta en fuentes sin autorización editorial.

Cuando un contrato impida una representación deseada, Codex debe informar el conflicto y proponer un cambio en lógica, configuración o presentación. No puede alterar semántica para hacer pasar la implementación.

## 27. Validaciones de separación

### 27.1 Errores conceptuales

- propiedad visual en contenido;
- HTML de presentación o estilo inline;
- clase CSS;
- ruta visual o relativa almacenada como referencia semántica;
- título, alias o slug utilizado en lugar de ID;
- posición de pantalla en una ficha;
- icono obligatorio dentro de una entidad;
- URL usada como identidad;
- taxonomía derivada de menús;
- orden visual almacenado como orden pedagógico;
- duplicación de contenido para una vista o dispositivo;
- texto dependiente de “arriba”, “abajo”, “izquierda”, “derecha”, forma o color;
- componente que modifica contenido fuente;
- contenido generado tratado como fuente oficial;
- relación creada para dibujar una línea o habilitar un enlace;
- omisión que altera el significado en un breakpoint o tema.

### 27.2 Advertencias conceptuales

- propiedad con posible significado visual o nombre ambiguo;
- etiqueta libre utilizada como filtro;
- contenido destacado sin criterio editorial, vigencia o responsable;
- imagen educativa sin descripción o alternativa;
- relación creada principalmente para navegación;
- exceso de microcopy dentro de contenido;
- orden persistido sin justificación semántica, pedagógica o editorial;
- dependencia de una estructura concreta de página;
- slug, URL o nombre de archivo repetido en campos educativos;
- representación que oculta sistemáticamente contenido autorizado.

### 27.3 Recomendaciones

- mover configuración a presentación o configuración del producto;
- convertir una agrupación temporal en colección o área editorial;
- derivar navegación desde metadatos y relaciones;
- añadir alternativa textual;
- separar recurso educativo de decoración;
- sustituir ruta, título o URL por ID;
- convertir orden visual en una regla de renderer;
- registrar una curaduría fuera de las entidades.

Los umbrales, severidades definitivas, excepciones aceptables y condiciones de bloqueo corresponden a `docs/09-quality-criteria.md`.

## 28. Pruebas conceptuales de sustitución

| Prueba | Archivos o capas que pueden cambiar | Fuentes que no deberían cambiar |
|---|---|---|
| 1. Cambiar completamente el tema visual | Presentación, activos decorativos y configuración de tema | Fichas, taxonomía, relaciones, gobierno y estructuras editoriales |
| 2. Reemplazar tarjetas por una lista | Renderers, layout y estilos | Contenido, IDs, clasificación, relaciones y orden pedagógico |
| 3. Generar una versión imprimible | Renderer de salida, estilos de impresión y artefactos generados | Fuentes canónicas y contratos semánticos |
| 4. Generar un glosario alfabético | Lógica de índice, locale, configuración y salida generada | Fichas, `primaryDomain`, relaciones y prioridad |
| 5. Crear una aplicación móvil | Código, navegación, presentación y configuración del nuevo consumidor | Fichas, IDs, taxonomía, relaciones y gobierno |
| 6. Cambiar URLs | Router, tabla ID→URL, redirects, despliegue y salidas generadas | Referencias internas, IDs y contenido educativo |
| 7. Reorganizar la portada | Configuración curatorial, colección y presentación | Prioridad, clasificación, definiciones y relaciones |
| 8. Añadir un idioma | Recursos de localización, variantes lingüísticas aprobadas, búsqueda y rutas localizadas | IDs, relaciones y significado canónico; textos existentes salvo traducción aprobada |
| 9. Generar un grafo | Transformación, índice relacional, renderer y configuración visual | Relaciones fuente, campos de autoridad y taxonomía |
| 10. Retirar una visualización | Presentación, navegación y activos; puede añadirse alternativa técnica | Datos, descripción educativa y relaciones que la visualización representaba |

Una prueba falla si obliga a duplicar fichas, cambiar IDs, reclasificar, crear relaciones, modificar definiciones o persistir decisiones visuales.

## 29. Escenarios de incumplimiento

| Escenario | Problema | Capa incorrecta | Corrección | Validación preventiva |
|---|---|---|---|---|
| Diseño acoplado al contenido | La ficha contiene `cardStyle: wide`. | Contenido/presentación | Mover la regla al renderer o configuración. | Rechazar campos no aprobados y nombres visuales. |
| Contenido duplicado para móvil | Existen dos definiciones del mismo ID por dispositivo. | Contenido/responsive | Conservar una fuente y adaptar la presentación. | Unicidad global de ID y detección de duplicación semántica. |
| Icono almacenado como significado | `icon: shield` define que algo es seguridad. | Contenido/presentación | Conservar dominio o disciplina por ID; asignar icono externamente. | Prohibir iconos en entidades y exigir texto accesible. |
| Dominio definido por menú | Un término cambia de dominio al moverse de sección. | Navegación/taxonomía | Mantener `primaryDomain`; regenerar el menú. | Comparar navegación contra campos taxonómicos. |
| Definición que menciona una tarjeta | “La tarjeta muestra las ventajas abajo”. | Contenido/presentación | Redactar una explicación autónoma. | Detectar referencias espaciales o a componentes. |
| Orden de ruta confundido con orden visual | `entries[].order` se usa como columna de portada. | Contenido/presentación | Preservar orden pedagógico solo en la ruta; configurar portada aparte. | Exigir propósito del orden persistido. |
| Color usado como estado | “Rojo significa deprecated” sin texto. | Presentación/accesibilidad | Mostrar el estado editorial con nombre accesible; color solo complementario. | Prueba de significado sin color. |
| Producto destacado por campo promocional | `featured: true` altera visibilidad permanente. | Contenido/curaduría | Crear selección temporal con criterio y vigencia. | Prohibir `featured` no semántico. |
| URL utilizada como referencia | Una relación apunta a `/conceptos/http`. | Aplicación/relaciones | Usar `entity-http` y resolver la URL al generar. | Validar patrón de ID en toda referencia. |
| Relación inventada para dibujar una línea | Se añade `related-to` para completar un grafo. | Presentación/relaciones | Retirar la arista o justificar una relación aprobada real. | Exigir pregunta semántica, nota y evidencia según catálogo. |

## 30. Lista de revisión

- [ ] ¿El contenido mantiene significado sin la interfaz?
- [ ] ¿La propiedad expresa semántica, gobierno o apariencia?
- [ ] ¿La referencia utiliza un ID canónico?
- [ ] ¿La navegación puede derivarse de fuentes aprobadas?
- [ ] ¿El orden es semántico, pedagógico, editorial o solo visual?
- [ ] ¿La imagen es educativa o decorativa?
- [ ] ¿El estado es editorial o de interfaz?
- [ ] ¿La prioridad se confunde con prominencia?
- [ ] ¿La relación existe por significado o por conveniencia visual?
- [ ] ¿La URL puede cambiar sin romper contenido?
- [ ] ¿La ficha podría publicarse en web, impresión, móvil o texto plano?
- [ ] ¿La interfaz está modificando la fuente?
- [ ] ¿La agrupación es taxonómica o editorial?
- [ ] ¿El contenido depende de color, forma o posición?
- [ ] ¿La configuración está fuera de las fichas?
- [ ] ¿Un artefacto generado puede reconstruirse desde fuentes canónicas?
- [ ] ¿La representación conserva accesibilidad y orden pedagógico?
- [ ] ¿Una excepción está identificada, justificada y trazable?

## 31. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento de estas fronteras |
|---|---|
| `docs/07-mvp-definition.md` | Podrá elegir capacidades y vistas, pero no acoplar fichas ni convertir navegación en taxonomía. |
| `docs/08-production-batches.md` | Deberá impedir propiedades visuales, duplicación por vista y relaciones creadas por presentación. |
| `docs/09-quality-criteria.md` | Definirá severidades, umbrales, pruebas y aceptación de las validaciones de separación. |
| `work/WORK-INSTRUCTIONS.md` | Convertirá estas fronteras en instrucciones para investigar y producir sin diseño. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Exigirá fuentes canónicas, IDs y entregables sin configuración visual. |
| `work/REVIEW-CHECKLIST.md` | Verificará independencia, accesibilidad del contenido y ausencia de acoplamiento. |
| `examples/` | Demostrará contratos sin introducir campos de apariencia. |
| `inventories/` | Registrará IDs, tipos y estados; no rutas, iconos ni posiciones. |
| `AGENTS.md` | Obligará a Codex a consumir contratos, generar derivados y no reinterpretar semántica. |
| Futura arquitectura técnica | Separará fuentes, transformación, configuración, navegación, presentación y salidas generadas. |
| Implementación UX/UI | Diseñará interfaces a partir del modelo y validará sustitución, accesibilidad y responsive design. |

## 32. Decisiones y pendientes

### 32.1 Límites adoptados

- El significado es independiente de página, ruta, URL, componente, tema, dispositivo y tecnología.
- Contenido, taxonomía, relaciones, gobierno, lógica, navegación y presentación son responsabilidades diferenciadas.
- Las capas consumidoras no escriben sus decisiones de regreso como semántica.
- El contenido fuente es único y reutilizable; las salidas generadas son reconstruibles.

### 32.2 Responsabilidades por capa

- Contenido explica; taxonomía clasifica; relaciones conectan; gobierno controla ciclo y trazabilidad.
- Lógica carga, valida, transforma y resuelve.
- Navegación proyecta rutas de consulta.
- Presentación decide apariencia e interacción.
- Configuración conserva políticas del producto y curaduría no canónica.

### 32.3 Propiedades prohibidas

Se prohíben propiedades visuales, HTML de presentación, clases CSS, iconos obligatorios, instrucciones espaciales, breakpoints, componentes, temas y órdenes visuales dentro de fichas. `featured` y `displayOrder` solo serían admisibles con significado editorial independiente, contrato aprobado y ubicación fuera de las entidades cuando correspondan.

### 32.4 Navegación derivada

La navegación puede derivarse de taxonomía, tipos, aliases, relaciones, comparaciones, escenarios, rutas y estructuras curatoriales. Menús, páginas, filtros y coaparición no crean pertenencia ni relaciones.

### 32.5 URLs e IDs

Los IDs son la identidad estable y las referencias usan IDs. URLs, slugs, rutas y redirects pertenecen a la aplicación, pueden cambiar y se generan o configuran sin modificar contenido.

### 32.6 Imágenes, diagramas y visualizaciones

Los activos decorativos pertenecen a presentación. Los recursos con significado educativo se modelan con metadatos propios y alternativa textual. Grafos, tablas, mapas y diagramas representan datos; no los gobiernan.

### 32.7 Asuntos reservados para MVP

- vistas y capacidades incluidas;
- composición y cobertura;
- alcance de búsqueda, filtros, rutas, comparaciones y escenarios;
- cantidades y criterios de terminación.

### 32.8 Asuntos reservados para calidad

- severidades operativas;
- umbrales de detección;
- tolerancias y excepciones automatizables;
- evidencia de pruebas de sustitución y accesibilidad;
- política publicable de estados y vigencia.

### 32.9 Asuntos reservados para arquitectura técnica

- generador estático y framework;
- estructura concreta de módulos y configuración;
- esquema ejecutable y validadores;
- motor e índices de búsqueda;
- estrategia de build, cache, redirects, despliegue y localización.

### 32.10 Asuntos reservados para UX/UI

- arquitectura de información concreta;
- flujos, componentes, layouts e interacción;
- sistema visual, tipografía, colores, iconografía y motion;
- representación específica de grafos, tablas, rutas y estados;
- comportamiento responsive y pruebas de usabilidad.

### 32.11 Excepciones que requieren `docs/10-decision-log.md`

Requieren decisión registrada: introducir una propiedad con posible efecto visual en el modelo; permitir contenido dependiente de un canal; cambiar autoridad entre capas; convertir un artefacto generado en fuente; persistir una URL como identidad; añadir una relación por navegación; duplicar contenido por producto o idioma; o aceptar una excepción que impida alguna prueba de sustitución.

Las excepciones puntuales también deben documentar motivo, alcance, alternativa descartada, impacto en reutilización, responsable, vigencia y plan de retiro.

### 32.12 Contradicciones encontradas

No se encontraron contradicciones materiales entre los siete documentos de autoridad. Todos establecen separación entre contenido y presentación, referencias mediante IDs, navegación derivada y prohibición de inventar clasificación o relaciones por necesidades visuales.

Se conserva como tensión de evolución ya registrada en `docs/05-relationship-rules.md` la coexistencia temporal de `related` y `relations[]`; esta frontera no modifica el modelo ni autoriza a la interfaz a persistir relaciones. También permanece reservada la representación física de relaciones simétricas y de configuración, sin afectar su semántica aprobada.

No se definen en este documento pantallas, componentes, colores, tipografías, layouts, cantidades del MVP, tecnología de implementación ni relaciones adicionales.
