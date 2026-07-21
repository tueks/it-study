# IT Study — Acta y visión del proyecto

## 1. Identificación del documento

- **Proyecto:** IT Study
- **Documento:** Acta y visión del proyecto
- **Ruta oficial:** `docs/00-project-charter.md`
- **Fuente principal:** `00-bootstrap-brief.md`
- **Estado:** Aprobado
- **Fecha de aprobación:** 2026-07-20
- **Autoridad de aprobación:** Responsable del proyecto, mediante instrucción explícita registrada.
- **Alcance de la aprobación:** Se aprueba el documento; las decisiones expresamente señaladas como pendientes no se aceptan por esta transición y conservan su tratamiento en los documentos especializados o en `docs/10-decision-log.md`.

## 2. Resumen del proyecto

IT Study es una iniciativa educativa orientada a la alfabetización integral en Tecnologías de la Información. Su producto inicial será una plataforma web estática de consulta que funcione como mapa de conocimiento y glosario contextual del ecosistema de IT.

El proyecto busca ofrecer una visión amplia, organizada y conectada de las principales áreas, disciplinas, roles, conceptos, principios, metodologías, prácticas, arquitecturas, protocolos, estándares, herramientas, artefactos, métricas y demás tipos de conocimiento relevantes. Su finalidad no es sustituir cursos especializados ni enseñar implementaciones paso a paso, sino permitir que una persona reconozca términos, comprenda por qué existen, identifique dónde encajan y pueda seguir conversaciones técnicas fuera de su especialidad.

La información educativa deberá mantenerse estructuralmente separada de la presentación visual. El contenido, su modelo, las relaciones, la lógica de navegación y el diseño se tratarán como responsabilidades diferenciadas para facilitar la reutilización, la evolución y la validación del producto.

## 3. Problema que se busca resolver

El conocimiento de IT se encuentra distribuido entre numerosas disciplinas y suele presentarse de forma fragmentada, especializada o dependiente de productos concretos. Esto dificulta que estudiantes y profesionales construyan un mapa mental general del sector.

Una persona puede dominar una especialidad y, aun así, no comprender adecuadamente términos utilizados en seguridad, redes, datos, infraestructura, producto, experiencia de usuario, soporte, gobierno, inteligencia artificial u otras áreas. Además, numerosos recursos existentes presentan listas sin relaciones, mezclan conceptos con herramientas comerciales, confunden clasificaciones distintas o enseñan implementación antes de proporcionar contexto.

IT Study atenderá este problema mediante explicaciones claras y técnicamente correctas, clasificación explícita, relaciones verificables, comparaciones entre términos similares y escenarios que muestren la colaboración entre diferentes disciplinas.

## 4. Visión del producto

Construir una plataforma educativa de referencia que permita comprender el panorama general de IT y desenvolverse con mayor claridad en conversaciones técnicas multidisciplinarias, sin exigir que el usuario domine la implementación de cada tema.

La visión es que cualquier término relevante pueda consultarse dentro de un contexto que permita responder, al menos, qué es, a qué dominio pertenece, qué tipo de elemento representa, qué problema resuelve, por qué existe, quién lo utiliza, en qué escenarios profesionales aparece, qué conocimientos previos facilitan su comprensión, con qué se relaciona y con qué suele confundirse.

A largo plazo, IT Study deberá evolucionar como un mapa de conocimiento mantenible, trazable y ampliable por lotes, sin perder claridad ni convertir la cobertura transversal en una colección desordenada de definiciones.

## 5. Propósito

El propósito de IT Study es reducir la barrera de comprensión entre disciplinas tecnológicas mediante una base de conocimiento transversal, contextual y navegable.

El proyecto pretende ayudar al usuario a:

- reconocer vocabulario técnico;
- ubicar cada término dentro del ecosistema de IT;
- comprender su propósito y contexto de uso;
- identificar relaciones, diferencias y dependencias conceptuales;
- ampliar su cultura tecnológica general;
- explorar áreas profesionales antes de iniciar una especialización.

## 6. Usuario objetivo

El usuario principal es una persona que trabaja, estudia o colabora en entornos de IT y desea ampliar su comprensión general de la industria.

Los perfiles representativos incluyen:

- desarrolladores que necesitan comprender áreas fuera de su especialidad;
- líderes técnicos que colaboran con equipos y disciplinas diversas;
- estudiantes que requieren construir un mapa mental de IT;
- analistas, diseñadores y responsables de producto o proyectos;
- profesionales que escuchan términos técnicos en reuniones y necesitan interpretarlos correctamente;
- personas que exploran posibles rutas profesionales sin buscar todavía formación especializada.

El nivel de entrada no deberá asumir dominio transversal previo. El lenguaje deberá ser accesible, pero conservar precisión técnica y terminología profesional.

## 7. Propuesta de valor

IT Study ofrecerá una visión conectada de IT, en lugar de una colección aislada de definiciones.

Su propuesta de valor se sostiene en los siguientes elementos:

- cobertura transversal de las principales áreas de IT;
- profundidad centrada en reconocimiento y comprensión contextual;
- clasificación explícita de cada elemento;
- relaciones navegables entre términos y dominios;
- comparaciones que reduzcan confusiones frecuentes;
- escenarios que expliquen cómo colaboran distintas disciplinas;
- neutralidad frente a productos comerciales cuando se expliquen capacidades generales;
- contenido estructurado, reutilizable e independiente del diseño;
- evolución incremental mediante lotes pequeños, revisables y verificables.

## 8. Objetivo general

Crear una plataforma web estática que funcione como mapa integral y glosario contextual de Tecnologías de la Información, permitiendo al usuario reconocer términos, comprender su función y ubicarlos correctamente dentro del ecosistema tecnológico.

## 9. Objetivos específicos

1. Definir y mantener una taxonomía amplia y coherente de IT, sin declarar definitiva la propuesta candidata antes de su validación formal.
2. Identificar los conceptos, roles y demás elementos esenciales de cada dominio priorizado.
3. Explicar cada término con lenguaje accesible, precisión técnica y profundidad controlada.
4. Establecer relaciones comprensibles y verificables entre dominios, conceptos, roles, prácticas y otros tipos de contenido.
5. Crear comparaciones que permitan distinguir términos similares o frecuentemente confundidos.
6. Representar escenarios que conecten varias disciplinas a lo largo del ciclo de vida tecnológico.
7. Facilitar búsqueda, filtrado y navegación por múltiples criterios.
8. Mantener el contenido independiente de la presentación visual y de componentes específicos de interfaz.
9. Organizar la investigación, producción, revisión e integración de contenido mediante lotes pequeños.
10. Definir contratos y validaciones que permitan detectar inconsistencias estructurales, IDs duplicados y relaciones inválidas.
11. Conservar las decisiones aprobadas, la documentación y el historial del proyecto en el repositorio oficial.

## 10. Principios rectores

### 10.1 Contexto antes que implementación

Cada tema deberá explicar primero por qué existe, qué problema atiende y dónde encaja. La implementación práctica no forma parte de la profundidad principal del producto.

### 10.2 Relaciones antes que listas

Los términos deberán integrarse en un mapa de conocimiento. La cobertura no se considerará suficiente cuando solo exista una enumeración de conceptos sin relaciones relevantes.

### 10.3 Claridad con precisión técnica

El contenido deberá ser comprensible para personas no especializadas en el tema, sin sacrificar exactitud conceptual ni utilizar simplificaciones engañosas.

### 10.4 Neutralidad tecnológica

Las capacidades, conceptos y prácticas generales deberán distinguirse de herramientas, plataformas o productos comerciales concretos.

### 10.5 Profundidad controlada

La profundidad principal será de reconocimiento y comprensión contextual. Las fichas no deberán transformarse en cursos, laboratorios o tutoriales extensos.

### 10.6 Separación fundamental entre contenido y diseño

El contenido educativo no deberá contener HTML de presentación, clases CSS, colores, tipografías, componentes visuales, posiciones de pantalla ni decisiones propias de un tema gráfico.

El modelo de contenido definirá tipos, campos, IDs, relaciones, estados y reglas. La presentación consumirá dicho contenido sin imponerle decisiones visuales. Deberá ser posible cambiar la apariencia, la navegación o los componentes sin reescribir la información educativa.

### 10.7 Evolución incremental

La cobertura se ampliará mediante lotes pequeños, acotados y verificables. No se intentará cubrir todo IT en una sola entrega.

### 10.8 Trazabilidad y fuente oficial

Las decisiones aprobadas deberán trasladarse al repositorio. Las conversaciones serán espacios de deliberación, pero no constituirán la fuente oficial del proyecto.

### 10.9 Consistencia y verificabilidad

Los tipos, IDs, relaciones y campos deberán obedecer contratos definidos y, cuando sea viable, validarse automáticamente.

### 10.10 Accesibilidad y mantenibilidad

La solución deberá poder utilizarse en diferentes dispositivos y capacidades, y su estructura deberá facilitar correcciones, ampliaciones y cambios de presentación.

## 11. Resultados esperados

Durante la fase de definición se espera obtener una base documental aprobada que establezca el alcance, la audiencia, la taxonomía inicial, el modelo de contenido, las reglas editoriales, las relaciones permitidas, los límites de diseño, el MVP, el proceso por lotes, los criterios de calidad y los contratos operativos de los agentes.

Como resultado del proyecto inicial se espera disponer de:

- un mapa general navegable de dominios de IT;
- un glosario con búsqueda directa por término o alias;
- fichas individuales con clasificación y contexto;
- navegación por dominios, clasificaciones y relaciones;
- comparaciones entre conceptos similares;
- escenarios que conecten varias disciplinas;
- rutas introductorias de exploración;
- contenido almacenado en archivos estructurados;
- mecanismos de validación para la consistencia editorial y técnica;
- una presentación web estática y responsiva que pueda evolucionar sin acoplarse al contenido.

## 12. Restricciones principales

1. La fase actual es de definición documental; no incluye la implementación de la aplicación web.
2. La primera versión del producto será una web estática y no tendrá backend propio.
3. El MVP no incluirá autenticación, cuentas de usuario, comunidad ni sistema de comentarios.
4. El producto no sustituirá cursos especializados, laboratorios completos ni preparación integral para certificaciones.
5. El contenido principal no deberá convertirse en tutoriales paso a paso.
6. La plataforma no tendrá como objetivo mantener un directorio exhaustivo de productos comerciales, publicar noticias ni comparar precios de proveedores.
7. La taxonomía de dominios, subdominios y clasificaciones continúa siendo candidata hasta que sea validada y aprobada.
8. Contenido, modelo, lógica, navegación y presentación deberán permanecer separados.
9. No se deberán incorporar decisiones visuales dentro de los archivos de contenido.
10. Los cambios estructurales o editoriales relevantes deberán quedar registrados y ser trazables.
11. La producción deberá organizarse en lotes acotados; no se producirá contenido fuera del lote autorizado.
12. GitHub será la fuente oficial del proyecto.
13. El contenido se redactará principalmente en español, conservando términos técnicos en inglés cuando sean la forma habitual en la industria.

## 13. Participantes y responsabilidades generales

### 13.1 Responsable del proyecto y chat coordinador

Responsable de orientar la visión, resolver ambigüedades, priorizar el trabajo, revisar propuestas, aprobar contratos y registrar decisiones relevantes. El chat coordinador facilita la deliberación, pero las decisiones aprobadas deberán incorporarse al repositorio.

### 13.2 ChatGPT Trabajo

Responsable de la investigación y producción editorial. Deberá investigar fuentes confiables, proponer inventarios, generar fichas estructuradas, detectar comparaciones, revisar cobertura y reportar vacíos o contradicciones.

No deberá diseñar la interfaz, implementar la aplicación, modificar silenciosamente la taxonomía ni mezclar contenido editorial con HTML o estilos.

### 13.3 Codex

Responsable de la implementación y mantenimiento técnico cuando la fase correspondiente sea autorizada. Sus responsabilidades previstas incluyen implementar esquemas, validadores, búsqueda, navegación, relaciones, pruebas y compilaciones, además de mantener la documentación técnica y la separación entre contenido y presentación.

No deberá alterar el significado editorial, inventar categorías para resolver errores ni modificar decisiones estructurales aprobadas sin registrarlas.

### 13.4 Repositorio GitHub

Actúa como fuente oficial y mecanismo de trazabilidad. Deberá conservar la documentación, taxonomía, modelos, reglas, inventarios, instrucciones operativas, contenido aprobado, decisiones, validadores y, en fases posteriores, el código de la aplicación.

## 14. Supuestos

- La primera versión será una web estática.
- No se necesitará backend, autenticación ni cuentas de usuario en el MVP.
- El contenido podrá almacenarse en formatos estructurados como Markdown, YAML o JSON; la elección exacta sigue pendiente.
- El contenido se redactará principalmente en español.
- Los términos técnicos en inglés se conservarán cuando sean los más utilizados profesionalmente.
- Un término podrá relacionarse con varios dominios y tendrá un dominio principal cuando sea razonable.
- Los fundamentos y las relaciones conceptuales deberán mantenerse más estables que la información sobre herramientas cambiantes.
- La cobertura crecerá mediante lotes pequeños.
- Los agentes y participantes dispondrán de documentación compartida y no mantendrán copias independientes de taxonomías o contratos comunes.
- Las validaciones automáticas complementarán, pero no sustituirán, la revisión conceptual y editorial.

## 15. Riesgos iniciales

| Riesgo | Consecuencia potencial | Orientación inicial de mitigación |
|---|---|---|
| Taxonomía excesivamente extensa, rígida o ambigua | Dificultad de navegación, mantenimiento y clasificación | Validar la taxonomía por etapas y registrar propuestas antes de aprobar cambios |
| Duplicación de conceptos o sinónimos no controlados | Contenido redundante y relaciones inconsistentes | Definir aliases, IDs estables y reglas de unicidad |
| Confusión entre roles, puestos, metodologías, frameworks, prácticas y herramientas | Clasificación incorrecta y pérdida de credibilidad | Establecer definiciones y criterios explícitos para cada clasificación |
| Definiciones demasiado superficiales | El usuario reconoce el término, pero no comprende su contexto | Aplicar una plantilla mínima de contexto, propósito, uso, relaciones y diferencias |
| Fichas convertidas en tutoriales extensos | Desviación del propósito de alfabetización general | Mantener límites editoriales de profundidad y derivar lo práctico a recursos externos o rutas futuras |
| Dependencia de productos comerciales | Pérdida de neutralidad y rápida obsolescencia | Explicar primero capacidades y conceptos generales |
| Relaciones excesivas o irrelevantes | Mapa de conocimiento difícil de utilizar | Definir tipos de relación y criterios de relevancia |
| Intento de cubrir todo IT desde el inicio | Lotes inmanejables y baja calidad de revisión | Priorizar un MVP y producir lotes pequeños |
| Uso de fuentes poco confiables o promocionales | Errores conceptuales y sesgo | Aprobar una política de fuentes y citas |
| Acoplamiento entre contenido y diseño | Reescritura costosa ante cambios visuales | Aplicar límites formales entre capas y revisar su cumplimiento |
| Pérdida de decisiones en conversaciones | Inconsistencias y retrabajo | Registrar decisiones relevantes en el repositorio |
| Información cambiante desactualizada | Contenido obsoleto | Definir una política de revisión y actualización |

## 16. Criterios generales de éxito

El proyecto se considerará encaminado correctamente cuando:

1. exista una documentación de definición coherente, aprobada y sin contradicciones materiales;
2. pueda explicarse con claridad qué se construirá, para quién, con qué propósito y qué queda fuera;
3. la taxonomía inicial y las clasificaciones hayan sido validadas sin presentar la lista candidata como definitiva;
4. cada tipo de contenido disponga de un modelo y de reglas editoriales verificables;
5. las relaciones entre términos estén definidas, sean relevantes y puedan validarse;
6. el contenido sea independiente de la presentación visual;
7. el usuario pueda localizar un término y comprender su clasificación, propósito, contexto, relaciones y diferencias principales;
8. la producción por lotes sea revisable, trazable y consistente;
9. las decisiones aprobadas y los cambios relevantes queden registrados en GitHub;
10. el MVP alcance cobertura transversal suficiente sin intentar abarcar exhaustivamente todo IT;
11. las validaciones detecten errores estructurales sin sustituir la revisión editorial;
12. el producto mantenga claridad, precisión técnica, accesibilidad y facilidad de evolución.

Los indicadores cuantitativos, umbrales de cobertura, tamaños de lote y métricas de calidad deberán establecerse en los documentos especializados correspondientes; permanecen pendientes.

## 17. Decisiones pendientes

Las siguientes decisiones no quedan resueltas por esta acta y deberán tratarse en los documentos correspondientes o en el registro de decisiones:

- taxonomía definitiva de dominios y subdominios;
- lista definitiva de clasificaciones;
- modelo exacto de cada tipo de contenido;
- relaciones permitidas y significado de cada relación;
- convención final de IDs;
- política de fuentes y citas;
- tamaño y composición exacta del MVP;
- inventario inicial de términos;
- número y alcance de los lotes de producción;
- formato o combinación definitiva para almacenar el contenido;
- tecnología exacta del generador de sitio estático;
- estrategia de búsqueda local;
- diseño visual, sistema de temas y representación de mapas;
- criterios editoriales de longitud y profundidad;
- flujo exacto de aprobación del contenido;
- política de actualización de información cambiante;
- licencia del contenido y del código;
- estrategia de publicación, dominio y despliegue;
- indicadores cuantitativos y umbrales de éxito.

## 18. Relación con los demás documentos pendientes

Esta acta establece la intención, el propósito, los límites y los principios generales del proyecto. Los documentos posteriores deberán desarrollar estos lineamientos sin contradecirlos y sin duplicar innecesariamente su contenido.

| Documento pendiente | Relación con esta acta |
|---|---|
| `docs/01-scope-and-audience.md` | Precisará el alcance, exclusiones, perfiles, necesidades y casos de uso de la audiencia definida aquí. |
| `docs/02-taxonomy.md` | Validará y formalizará la taxonomía inicial; la lista candidata del documento semilla no se considera definitiva. |
| `docs/03-content-model.md` | Definirá tipos, campos, IDs, estados, formatos y contratos estructurales del contenido. |
| `docs/04-editorial-guidelines.md` | Convertirá los principios de claridad, precisión y profundidad controlada en reglas editoriales concretas. |
| `docs/05-relationship-rules.md` | Formalizará los tipos de relación, su semántica, dirección, cardinalidad y criterios de relevancia. |
| `docs/06-design-boundaries.md` | Detallará la separación obligatoria entre contenido, modelo, lógica, navegación y presentación. |
| `docs/07-mvp-definition.md` | Determinará la composición, prioridades, exclusiones y criterios de terminación de la primera versión. |
| `docs/08-production-batches.md` | Definirá el proceso, tamaño, contrato, identificación y secuencia de los lotes. |
| `docs/09-quality-criteria.md` | Establecerá validaciones editoriales, estructurales, técnicas y criterios medibles de aceptación. |
| `docs/10-decision-log.md` | Registrará decisiones, cambios, responsables, alternativas y asuntos pendientes. |
| `work/` | Traducirá la documentación compartida en instrucciones operativas para investigación, producción, revisión y entrega editorial. |
| `examples/` | Proporcionará ejemplos aprobados que demuestren la aplicación del modelo y las reglas editoriales. |
| `inventories/` | Mantendrá los inventarios estructurados de dominios, clasificaciones y términos una vez validados. |
| `AGENTS.md` | Establecerá el contrato operativo técnico para Codex y referenciará la documentación compartida. |
| `README.md` | Presentará el proyecto, su estado y la forma de navegar por la documentación oficial. |

## 19. Relación de autoridad documental

`00-bootstrap-brief.md` es la fuente principal utilizada para elaborar esta acta. Esta acta formaliza y sintetiza su visión, propósito, restricciones y responsabilidades generales.

Cuando los documentos especializados sean aprobados, estos tendrán autoridad sobre el detalle de su materia específica, siempre que no contradigan los principios y restricciones fundamentales establecidos aquí. Cualquier cambio que altere la visión, el propósito, el alcance general o la separación entre contenido y diseño deberá registrarse expresamente en `docs/10-decision-log.md` y reflejarse en los documentos afectados.

## 20. Cierre del acta

IT Study se constituye como un proyecto de alfabetización tecnológica transversal, con una primera versión estática, contenido teórico y contextual, producción incremental y gobierno documental basado en GitHub.

La prioridad inmediata es completar y aprobar la documentación de definición. La implementación de la aplicación deberá comenzar únicamente cuando los contratos esenciales del producto, contenido, relaciones, calidad y MVP estén suficientemente definidos.
