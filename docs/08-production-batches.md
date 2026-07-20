# IT Study — Producción por lotes

## 1. Identificación y propósito

- **Proyecto:** IT Study.
- **Documento:** Producción por lotes.
- **Nombre oficial:** IT Study — Producción por lotes.
- **Ruta oficial:** `docs/08-production-batches.md`.
- **Estado:** propuesta normativa para revisión y aprobación; no constituye inventario, autorización de lotes concretos ni contrato ejecutable.
- **Fecha:** 2026-07-20.
- **Documentos de autoridad, en orden:**
  1. `00-bootstrap-brief.md`;
  2. `docs/00-project-charter.md`;
  3. `docs/01-scope-and-audience.md`;
  4. `docs/02-taxonomy.md`;
  5. `docs/03-content-model.md`;
  6. `docs/04-editorial-guidelines.md`;
  7. `docs/05-relationship-rules.md`;
  8. `docs/06-design-boundaries.md`;
  9. `docs/07-mvp-definition.md`.

### 1.1 Propósito

Este documento transforma la cobertura, cantidades, dependencias y condiciones de terminación del MVP en una estrategia operativa de producción mediante lotes pequeños, coherentes, trazables y revisables. Define cómo se autoriza, investiga, redacta, revisa, valida, acepta, integra y cierra cada unidad de trabajo sin producir todavía contenido educativo ni seleccionar el inventario definitivo.

La estrategia busca que cada entrega aporte cobertura real, pueda revisarse de forma independiente y permita detectar tempranamente errores de clasificación, duplicación, fuentes, relaciones, profundidad o alcance. El avance se mide por contenido aprobado y cobertura acumulada, no por borradores, archivos creados o cuotas rellenadas.

### 1.2 Alcance

Este documento define:

- concepto, propósito y límites de un lote;
- participantes y autoridades;
- tipos de lote y combinaciones permitidas;
- convención estable de IDs de lote;
- tamaños y complejidad de revisión;
- estrategia global, fases, ondas y secuencia de dominios;
- plan maestro para mínimo, objetivo y extensiones opcionales;
- criterios de entrada, salida, aceptación, integración y cierre;
- entregables, manifiesto y estados del lote;
- tratamiento de relaciones, fuentes, duplicados, cambios y candidatos;
- control de cobertura acumulada;
- dependencias, paralelización y lotes de corrección;
- handoff posterior a Codex;
- riesgos e indicadores del proceso.

### 1.3 Audiencia

Está dirigido al chat coordinador y responsable del proyecto, ChatGPT Trabajo, revisores humanos o conceptuales, Codex en una fase posterior y responsables futuros de contenido, inventarios, calidad e integración.

### 1.4 Decisiones que define

Este documento adopta una estrategia por fases y ondas; una convención de IDs de lote; rangos ordinarios de tamaño; una matriz conceptual de complejidad; un plan maestro de 26 lotes para el mínimo publicable y 32 para el objetivo recomendado; reglas de paralelización; entregables obligatorios; estados de lote; criterios de entrada, salida y cierre; y un tablero conceptual de cobertura.

### 1.5 Asuntos reservados

Quedan reservados:

- severidades operativas definitivas, tolerancias y umbrales de aceptación: `docs/09-quality-criteria.md`;
- excepciones materiales, cambios de contratos y decisiones de alcance: `docs/10-decision-log.md`;
- instrucciones ejecutables de investigación, producción, fuentes, revisión y handoff: documentos de `work/`;
- selección exacta de términos, IDs, dominios, prioridades y lotes: `inventories/`;
- ejemplos canónicos: `examples/`;
- esquemas, validadores, integración, índices y derivados: Codex y la fase técnica posterior;
- arquitectura, framework, build, búsqueda, despliegue, pantallas, componentes y sistema visual: fases posteriores.

## 2. Definición de lote

Un **lote de producción** es una unidad autorizada, acotada y trazable de investigación y producción editorial que persigue un objetivo concreto, opera bajo un manifiesto, respeta dependencias aprobadas y entrega un conjunto revisable de contenido y reportes.

Un lote debe ser:

- identificable mediante un ID estable y no reutilizable;
- coherente por propósito, fase, dependencias y familias de contenido;
- revisable de forma independiente sin exigir aceptar simultáneamente otros borradores;
- suficientemente pequeño para detectar errores antes de propagarlos;
- suficientemente completo para aportar cobertura educativa verificable;
- limitado por alcance, tamaño, prioridad, profundidad y tipos permitidos;
- dependiente de contenido previamente aprobado cuando la semántica lo requiera;
- trazable a documentos de autoridad, fuentes, decisiones y responsables;
- incapaz de modificar silenciosamente taxonomía, modelo, lineamientos, relaciones, fronteras de diseño o cantidades del MVP;
- cerrado mediante una decisión explícita, no por abandono o simple creación de archivos.

No constituye un lote:

- una lista abierta sin límite ni criterio de terminación;
- un dominio completo producido de una sola vez;
- una agrupación determinada por una página, menú, componente o layout;
- una colección de borradores sin manifiesto, revisión o decisión de cierre;
- una excusa para modificar taxonomía, tipos, IDs, relaciones o estados;
- una entrega que mezcle producción editorial con implementación, diseño visual o arquitectura técnica;
- un conjunto de archivos cuya única coherencia sea haber sido creados en la misma sesión;
- una agrupación utilizada para rellenar cantidades sin valor educativo propio.

El ID del lote aporta trazabilidad operativa. No concede clasificación, pertenencia, prioridad ni identidad a las entradas que produce.

## 3. Principios de producción

1. **Lotes pequeños antes que entregas masivas.** La revisión humana efectiva tiene prioridad sobre la velocidad aparente.
2. **Fundamentos antes que especializaciones.** Los conceptos que sostienen varias entradas se producen primero.
3. **Dependencias antes que contenido dependiente.** No se aprueba una entrada cuyo significado central depende de un destino inexistente.
4. **Cobertura transversal antes que concentración temática.** Las ondas deben evitar que desarrollo u operación absorban el MVP.
5. **Una entrada canónica.** Alias, traducciones, dominios secundarios y vistas no crean copias.
6. **Relaciones específicas y verificables.** Se utiliza la clave más precisa y solo cuando responde una pregunta educativa.
7. **Revisión antes de expansión.** Un lote siguiente no compensa defectos no resueltos del anterior.
8. **Contenido aprobado antes de integración.** Codex recibe para integración ordinaria únicamente contenido aceptado.
9. **Trazabilidad completa.** Alcance, fuentes, decisiones, hallazgos, cambios y cobertura deben reconstruirse.
10. **Ausencia de decisiones visuales.** Los lotes no incluyen colores, iconos, componentes, layouts, HTML de presentación ni instrucciones de interfaz.
11. **Equilibrio entre contenido estable y cambiante.** Fundamentos y capacidades duraderas preceden productos, versiones y tendencias.
12. **Detección temprana de duplicados.** La búsqueda por nombres, aliases, siglas, traducciones, acepciones e IDs ocurre antes y durante la redacción.
13. **Separación entre producción editorial e implementación.** Investigar y redactar no implica implementar esquemas, validadores o web.
14. **Cierre explícito.** Todo lote termina como `closed` o `cancelled`; no permanece indefinidamente ambiguo.
15. **Aprendizaje entre lotes sin cambio silencioso.** Los hallazgos pueden mejorar instrucciones futuras, pero cualquier cambio de contrato requiere autoridad y registro.
16. **Valor antes que conteo.** Ninguna entrada, relación, fuente o estructura se crea solo para alcanzar una cifra.
17. **Profundidad proporcional.** Un lote reduce volumen cuando aumenta variedad, volatilidad, ambigüedad o carga relacional.
18. **Cobertura acumulada verificable.** Cada cierre actualiza el estado global y muestra deudas, concentraciones y dependencias.
19. **Inglés técnico profesional cuando prevalezca.** La prosa permanece en español y conserva términos técnicos en inglés conforme a los lineamientos.
20. **No retroactividad informal.** Una mejora descubierta no modifica lotes cerrados sin lote de corrección o decisión autorizada.

## 4. Autoridades y participantes

### 4.1 Chat coordinador y responsable del proyecto

Le corresponde:

- seleccionar, priorizar y autorizar lotes;
- aprobar el manifiesto y cualquier cambio de alcance;
- resolver ambigüedades o remitirlas al documento competente;
- decidir excepciones y determinar si requieren `docs/10-decision-log.md`;
- asignar o confirmar responsables de producción y revisión;
- aceptar, devolver, cancelar o cerrar lotes;
- registrar decisiones y acciones futuras;
- controlar cobertura acumulada, balance y condiciones del MVP;
- impedir que un lote reabra decisiones aprobadas.

### 4.2 ChatGPT Trabajo

Le corresponde:

- investigar dentro del alcance autorizado;
- proponer candidatos sin producir automáticamente los que queden fuera de alcance;
- redactar contenido conforme al modelo y lineamientos;
- crear o reutilizar referencias normalizadas de fuentes;
- proponer relaciones específicas con dirección, autoridad y evidencia;
- detectar duplicados, aliases, vacíos, dependencias y riesgos;
- ejecutar autoevaluaciones estructural, taxonómica, editorial, técnica, relacional, de fuentes y de separación;
- entregar todos los reportes exigidos;
- registrar incertidumbre y preguntas no resueltas;
- no modificar contratos, cantidades, inventarios o alcance de manera silenciosa;
- no integrar, publicar ni aprobar su propio contenido como decisión final.

### 4.3 Revisor humano o conceptual

Le corresponde:

- revisar clasificación, precisión, claridad, profundidad y neutralidad;
- verificar fuentes, versiones, incertidumbre y vigencia;
- juzgar relevancia y semántica de relaciones;
- revisar duplicados, aliases, acepciones y excepciones;
- distinguir hallazgos bloqueantes, mayores, menores, recomendaciones, preguntas y propuestas de cambio;
- aprobar, aprobar condicionalmente cuando la política futura lo permita, o devolver contenido;
- confirmar que la cobertura reportada corresponde a contenido real y no a cuotas artificiales.

La revisión debe ser independiente de la autoevaluación de ChatGPT Trabajo. Una misma persona puede cubrir varias especialidades, pero cada perspectiva revisada debe quedar registrada.

### 4.4 Codex

En una fase posterior, Codex podrá:

- validar estructura, IDs, tipos, enums y campos condicionales;
- resolver referencias y detectar destinos inexistentes;
- validar relaciones, cardinalidad, compatibilidad, ciclos e inversas;
- detectar duplicados técnicos y colisiones de aliases;
- ejecutar esquemas, validadores y pruebas;
- integrar contenido aceptado;
- generar índices, inversas, reportes y otros derivados reproducibles.

Codex no deberá:

- corregir silenciosamente contenido editorial;
- cambiar tipo, dominio, prioridad, profundidad o estabilidad;
- inventar relaciones, fuentes, aliases o campos;
- fusionar duplicados semánticos por conveniencia técnica;
- aceptar excepciones editoriales;
- convertir datos generados en fuente canónica.

Un hallazgo que requiera interpretación se devuelve al responsable editorial.

### 4.5 Repositorio

El repositorio:

- conserva contratos y documentos de autoridad;
- almacena entregas, contenido aceptado, reportes y decisiones;
- registra estados e historial mediante control de versiones;
- mantiene IDs retirados reservados;
- permite reconstruir qué lote produjo o modificó cada entrada;
- actúa como fuente oficial por encima de conversaciones, copias locales o derivados.

## 5. Tipos de lote

### 5.1 Lote de taxonomía materializada

Produce registros de dominios, subdominios y disciplinas transversales ya aprobados conceptualmente. No redefine la taxonomía, no selecciona un tercer nivel y no crea entidades educativas para completar jerarquías.

Es necesario para el MVP y precede a la cobertura ordinaria.

### 5.2 Lote de fundamentos

Produce prerrequisitos, conceptos base, vocabulario transversal y conceptos puente. Prioriza contenido estable, `essential` y `contextual-understanding`. Puede abarcar varios dominios cuando el propósito común sea la dependencia educativa.

Es necesario y debe aparecer al inicio.

### 5.3 Lote de dominio

Produce cobertura concentrada en uno o dos dominios relacionados y sus subdominios aprobados. Debe conservar relaciones transversales, variedad de familias y límites de concentración.

Es necesario. No exige terminar un dominio antes de iniciar otro.

### 5.4 Lote transversal

Produce disciplinas o conceptos aplicables a varios dominios, como seguridad, calidad, accesibilidad, arquitectura, observabilidad, confiabilidad, automatización, privacidad, riesgo o gobierno. Mantiene una entrada canónica y aplicaciones por campos o relaciones.

Es necesario para completar conexiones y evitar copias.

### 5.5 Lote de personas y capacidades

Produce roles, puestos excepcionales, competencias y responsabilidades estructuradas. Evita inventarios de vacantes, organigramas universales o equivalencia entre rol y puesto.

Es necesario para escenarios, colaboración y cobertura de tipos.

### 5.6 Lote de formas de trabajo

Produce metodologías, marcos de trabajo, procesos, prácticas y técnicas. Conserva las distinciones aprobadas y evita clasificar por uso coloquial o promoción comunitaria.

Es necesario.

### 5.7 Lote de especificaciones e implementaciones

Produce protocolos, estándares, tecnologías, herramientas, plataformas, servicios y productos. Debe explicar capacidad antes que marca, controlar vigencia, limitar concentración comercial y usar fuentes apropiadas.

Es necesario en volumen selectivo; las extensiones comerciales son opcionales.

### 5.8 Lote de artefactos y medición

Produce artefactos, métricas e indicadores. Debe conectar producción, consumo, medición e interpretación sin inferir causalidad automática.

Es necesario.

### 5.9 Lote de comparaciones

Produce estructuras `comparison` únicamente sobre entradas aprobadas. Se justifica por una confusión o decisión multidimensional y no por semejanza nominal.

Es necesario después de la cobertura de entidades.

### 5.10 Lote de escenarios

Produce estructuras `scenario` sobre roles, conceptos, dominios, artefactos y relaciones aprobados. Debe ser narrativo y educativo, no runbook ni política.

Es necesario después de contar con cobertura multidisciplinaria suficiente.

### 5.11 Lote de rutas de aprendizaje

Produce estructuras `learning-path` sobre entradas y prerrequisitos aprobados. El orden pertenece a la ruta y no crea automáticamente relaciones globales.

Es necesario después de estabilizar fundamentos y dependencias.

### 5.12 Lote de corrección o actualización

Modifica contenido existente para resolver hallazgos, actualizar fuentes o vigencia, migrar relaciones, corregir clasificación autorizada, tratar `needs-update` o aplicar decisiones registradas. Conserva trazabilidad y no reabre contratos sin autorización.

Es necesario como mecanismo; su activación depende de hallazgos.

### 5.13 Combinaciones permitidas y prohibidas

Se permite combinar:

- fundamentos con conceptos puente;
- dos dominios vecinos cuando compartan dependencias y el lote conserve una pregunta educativa común;
- personas con competencias;
- artefactos con métricas e indicadores;
- estándares con implementaciones que los realizan, siempre que las abstracciones estén aprobadas;
- correcciones relacionadas por una causa común.

Deben permanecer separados:

- taxonomía materializada y entidades ordinarias, salvo una corrección estrictamente necesaria y autorizada;
- comparaciones, escenarios y rutas entre sí, por su distinta estructura y carga de revisión;
- contenido estable y una concentración amplia de productos cambiantes;
- producción editorial e implementación;
- diseño visual y cualquier tipo de lote editorial;
- correcciones de contratos y correcciones de contenido;
- un lote de dominio y una ampliación transversal que pueda crear definiciones canónicas competidoras.

Una combinación deja de ser válida cuando aumenta la complejidad a `alta`, dificulta asignar autoridad o impide revisar una parte sin aceptar la otra.

## 6. Convención de IDs de lote

### 6.1 Formato adoptado

El ID base adopta:

```text
batch-<NNN>-<descriptive-name>
```

Reglas:

- `batch` es el prefijo obligatorio;
- `NNN` es una secuencia de tres dígitos, comenzando en `001`;
- el nombre es descriptivo, estable, breve y escrito en ASCII minúsculo `kebab-case`;
- el ID es único en todo el historial y no se reutiliza;
- el nombre describe el objetivo operativo, no una ruta visual ni una lista de términos;
- el ID permanece estable aunque cambie el título visible o el estado;
- el ID del lote nunca se usa como ID de las entradas producidas.

Para divisiones o complementos derivados se añade una letra a la secuencia original:

```text
batch-012a-domain-coverage
batch-012b-transversal-coverage
```

El lote padre conserva su ID y estado. Si no llegó a producirse puede quedar `cancelled`; si fue sustituido por sus partes, el manifiesto registra los IDs derivados.

Para correcciones se conserva el ID de origen y se añade un ordinal:

```text
batch-012a-correction-01
batch-012a-correction-02
```

Una corrección transversal no atribuible a un único lote recibe nueva secuencia ordinaria y nombre descriptivo, por ejemplo `batch-031-cross-batch-correction`.

### 6.2 Cancelación, división y complementos

- Un ID `cancelled` permanece reservado.
- Una división no renombra ni reutiliza el ID original.
- Los hijos `a`, `b`, `c` indican derivación operativa, no orden taxonómico.
- Un complemento planificado usa la siguiente letra disponible y registra la relación con el lote base.
- Una corrección no se incorpora al ID original como si siempre hubiera formado parte de él.
- Un lote reabierto excepcionalmente conserva ID solo si no fue cerrado y el alcance autorizado sigue siendo el mismo; después de `closed`, cualquier cambio usa corrección o nuevo lote.

### 6.3 Ejemplos

Válidos:

- `batch-001-taxonomy-domains`
- `batch-006-foundations-core`
- `batch-012-data-ai-core`
- `batch-012a-data-foundations`
- `batch-012b-ai-context`
- `batch-012a-correction-01`
- `batch-031-cross-batch-correction`

Inválidos:

- `Batch-001` — mayúsculas y falta nombre;
- `batch_001_foundations` — guiones bajos;
- `batch-1-foundations` — numeración no normalizada;
- `batch-001-Fundamentos` — mayúscula;
- `batch-001-fundamentos-área` — diacrítico;
- `batch-001/domain` — barra;
- `batch-001-card-grid` — nombre determinado por interfaz;
- `entity-batch-001` — confunde namespace de entidad y lote;
- reutilizar `batch-007-foundations` para otro propósito después de cancelarlo.

La validación sintáctica ejecutable se reservará al contrato y esquema posteriores. Esta sección define la semántica obligatoria.

## 7. Tamaño de lote

### 7.1 Unidad principal

La unidad principal de planificación es la **carga de revisión**, compuesta por:

- entradas nuevas;
- entradas modificadas;
- relaciones propuestas o modificadas;
- fuentes investigadas, reutilizadas o nuevas;
- variedad de tipos;
- profundidad editorial;
- estabilidad y vigencia;
- dominios implicados;
- dependencias;
- ambigüedad taxonómica o conceptual;
- estructuras editoriales producidas.

El número de archivos es un indicador secundario. Una comparación, escenario, ruta, estándar versionado o producto cambiante puede exigir más revisión que varias entradas conceptuales estables.

### 7.2 Rangos por tipo

| Tipo de lote | Mínimo útil | Recomendado | Máximo ordinario | Observación de revisión |
|---|---:|---:|---:|---|
| Taxonomía materializada | 8 registros | 12–16 | 20 | Reducir si hay fronteras o solapamientos pendientes. |
| Fundamentos | 5 entidades | 8–10 | 12 | Predominio estable; revisar dependencias y duplicados. |
| Dominio | 5 entidades | 7–10 | 12 | Uno o dos dominios; tres familias cuando aplique. |
| Transversal | 4 entidades | 6–8 | 10 | Varias aplicaciones aumentan relaciones y revisión. |
| Personas y capacidades | 5 entidades | 8–10 | 12 | Revisar variación organizacional y universalizaciones. |
| Formas de trabajo | 5 entidades | 8–10 | 12 | Alta atención a clasificación y terminología. |
| Especificaciones e implementaciones | 4 entidades | 6–8 | 10 | Reducir a 3–6 si es contenido cambiante o comercial. |
| Artefactos y medición | 4 entidades | 6–8 | 10 | Revisar producción, consumo, cálculo e interpretación. |
| Comparaciones | 2 | 3–4 | 4 | Una comparación extensa puede justificar un lote de 2. |
| Escenarios | 1 | 1–2 | 2 | Cada escenario implica revisión multidisciplinaria. |
| Rutas | 1 | 1–2 | 2 | Revisar prerrequisitos, orden y checkpoints. |
| Corrección estable | 3 entradas modificadas | 4–8 | 12 | Deben compartir causa y criterio de validación. |
| Actualización cambiante | 2 entradas modificadas | 3–6 | 8 | Requiere fuentes actuales, vigencia y revisión prevista. |

Orientación relacional para lotes de entidades:

- 8–16 relaciones propuestas en lotes pequeños;
- 12–24 en lotes ordinarios;
- más de 24 exige reducir entradas o justificar que gran parte deriva de campos de autoridad y sigue siendo revisable.

Orientación de fuentes:

- investigar o reutilizar aproximadamente 5–12 fuentes relevantes por lote ordinario;
- normalizar solo las nuevas necesarias;
- no imponer una fuente distinta por entrada;
- reducir el lote si versiones, disponibilidad o conflicto de fuentes elevan la carga.

Estas cifras son límites de planificación, no umbrales definitivos de calidad.

### 7.3 Cuándo dividir

Se divide un lote cuando:

- supera el máximo ordinario;
- alcanza complejidad `alta`;
- incluye más de dos dominios sin propósito transversal claro;
- mezcla tipos con contratos de revisión incompatibles;
- depende de entradas todavía no aprobadas;
- contiene más de una ambigüedad taxonómica material;
- concentra contenido cambiante o comercial;
- no puede revisarse una parte sin aceptar el resto;
- acumula preguntas que impiden una decisión coherente;
- incorpora comparaciones, escenarios o rutas junto con producción base.

### 7.4 Cuándo combinar

Se combinan candidatos cuando:

- por separado quedarían por debajo del mínimo útil;
- comparten objetivo, fuentes, dependencias y revisor;
- la combinación mantiene complejidad baja o media;
- no mezcla autoridad taxonómica con contenido ordinario;
- no oculta una dependencia;
- el resultado ofrece cobertura real y cierre independiente.

### 7.5 Excepciones

Una excepción al máximo requiere:

- justificación en manifiesto;
- estimación de complejidad;
- aprobación del coordinador antes de producción;
- estrategia explícita de revisión;
- ausencia de presión por cumplir cuotas;
- registro en `docs/10-decision-log.md` cuando el cambio sea recurrente, material o altere la estrategia.

## 8. Capacidad de revisión

### 8.1 Factores

La complejidad conceptual se estima mediante diez factores:

1. número de entradas o estructuras;
2. profundidad prevista;
3. cantidad y criticidad de relaciones;
4. proporción de información cambiante;
5. número de dominios;
6. variedad de tipos y contratos;
7. cantidad, diversidad y conflicto de fuentes;
8. complejidad de la estructura editorial;
9. ambigüedad taxonómica, terminológica o de duplicación;
10. dependencias todavía no aprobadas.

No se adopta todavía una fórmula ejecutable. El manifiesto registra una valoración razonada.

### 8.2 Clasificación

| Complejidad | Perfil conceptual | Tamaño esperado | Tratamiento |
|---|---|---|---|
| Baja | Contenido estable, un dominio o propósito transversal simple, hasta dos familias, pocas relaciones y fuentes reutilizadas. | 6–10 entidades o 12–16 registros taxonómicos. | Revisión ordinaria. |
| Media | Dos o tres dominios, tres o cuatro familias, relaciones cruzadas, alguna fuente nueva o contenido de evolución lenta. | 6–9 entidades, 2–4 comparaciones o 1–2 estructuras complejas. | Revisión especializada y muestreo relacional completo. |
| Alta | Alta volatilidad, cuatro o más dominios, ambigüedad material, dependencias abiertas, muchas relaciones o estructuras multidisciplinarias densas. | 3–6 entidades o 1–2 estructuras. | División obligatoria salvo excepción autorizada. |

Un solo factor puede elevar el lote a `alta` cuando compromete identidad, clasificación, vigencia, seguridad, gobierno, reemplazo o prerequisitos.

### 8.3 Matriz de decisión

- **Volumen alto + profundidad contextual:** dividir.
- **Volumen medio + alta volatilidad:** reducir a 3–6 entradas.
- **Pocas entradas + muchas relaciones críticas:** tratar como media o alta.
- **Muchos dominios + propósito transversal aprobado:** mantener solo si existe autoridad canónica y revisión de integración.
- **Dependencia no aprobada:** bloquear, retirar del lote o convertir en propuesta pendiente.
- **Estructura editorial + entradas base no aprobadas:** posponer la estructura.
- **Ambigüedad taxonómica material:** detener y resolver antes de redactar.

## 9. Estrategia global para el MVP

### 9.1 Cantidades heredadas

La estrategia debe poder alcanzar:

| Categoría | Mínimo publicable | Objetivo recomendado | Máximo inicial |
|---|---:|---:|---:|
| Dominios | 12 | 12 | 12 |
| Subdominios | 36 | 48 | 60 |
| Disciplinas | 8 | 12 | 16 |
| Entidades | 120 | 164 | 210 |
| Relaciones específicas o de campos de autoridad | 180 | 328 | 525 |
| Comparaciones | 8 | 12 | 16 |
| Escenarios | 3 | 4 | 6 |
| Rutas | 3 | 4 | 6 |
| Fuentes normalizadas | 50 | 80 | 120 |
| Conceptos puente, subconjunto | 12 | 18 | 24 |

Interpretación:

- los objetivos orientan la planificación;
- los mínimos determinan la puerta de publicabilidad;
- los máximos son límites de alcance, no metas;
- no se producen entradas, relaciones o fuentes para rellenar cantidades;
- el plan puede detenerse en el mínimo si la cobertura y calidad validan el valor;
- alcanzar el objetivo no sustituye aprobación editorial;
- una entidad cuenta una sola vez; subdominios, disciplinas, fuentes y estructuras no se suman al total de entidades;
- una relación cuenta desde su autoridad; inversas, taxonomía derivada y duplicados simétricos no incrementan el total.

### 9.2 Estrategia adoptada

Se adopta una estrategia de **fundamentos, ondas de cobertura, estructuras dependientes y cierre**:

1. preparar contratos y criterios operativos;
2. materializar la taxonomía aprobada;
3. producir fundamentos y conceptos puente;
4. cubrir todos los dominios mediante ondas equilibradas;
5. completar familias transversales, personas, formas de trabajo, especificaciones, artefactos y medición;
6. producir comparaciones, escenarios y rutas solo sobre entradas aprobadas;
7. ejecutar correcciones y cierre de cobertura;
8. integrar y preparar publicación.

La producción no busca terminar un dominio antes de tocar otro. Cada fase revisa cobertura acumulada y puede detener extensiones al alcanzarse el mínimo con calidad suficiente.

## 10. Fases de producción

| Fase | Propósito y actividades | Dependencias | Criterio de salida |
|---|---|---|---|
| **0 — Preparación operativa** | Aprobar contratos de `work/`, ejemplos canónicos, vocabularios, inventario inicial y validadores mínimos cuando corresponda. Este documento no los crea. | Documentos `00`–`10` según alcance. | Manifiesto y proceso pueden ejecutarse sin decisiones implícitas; responsables y criterios de revisión definidos. |
| **1 — Estructura taxonómica materializada** | Materializar 12 dominios, subdominios seleccionados y disciplinas prioritarias; reutilizar fuentes taxonómicas. | Fase 0 y taxonomía aprobada. | 12 dominios y al menos 36 subdominios/8 disciplinas listos para revisión; objetivo de 48/12 planificado. |
| **2 — Fundamentos y conceptos puente** | Producir prerrequisitos, vocabulario transversal, fundamentos y relaciones de aprendizaje. | Fase 1 suficiente para clasificar. | Núcleo de dependencias aprobado; sin ciclos; conceptos puente iniciales conectan ondas posteriores. |
| **3 — Cobertura esencial de dominios** | Producir contenido `essential`, representación mínima por dominio, variedad de familias y conexiones cruzadas. | Fundamentos aplicables aprobados. | Cada dominio alcanza preliminarmente dos subdominios, seis entidades esenciales/importantes, fundamento y conexión externa. |
| **4 — Cobertura contextual** | Añadir `important`, roles, competencias, formas de trabajo, estándares, implementaciones selectivas, artefactos y medición. | Fase 3 y balance revisado. | Se alcanza el mínimo de 120 entidades y 180 relaciones o se autoriza continuar hacia 164/328; proporciones válidas. |
| **5 — Estructuras editoriales** | Producir comparaciones, escenarios y rutas sobre entradas aprobadas. | Entradas, roles, artefactos y prerrequisitos aprobados. | 8/3/3 mínimos conformes; objetivo 12/4/4 si se ejecuta plan recomendado. |
| **6 — Cierre de cobertura** | Revisar vacíos, duplicados, balance, relaciones faltantes, fuentes, reconocimiento pendiente y concentración. | Fases 1–5. | Ningún dominio bajo mínimo; deudas registradas; correcciones bloqueantes resueltas. |
| **7 — Preparación de publicación** | Validación acumulada, estados, vigencia, sustituciones, integridad y documentación de cierre. | Contenido aceptado e integrado. | Todo lo que cuenta está `approved`, referencias resueltas, cobertura actualizada y lote de cierre `closed`. |

No se avanza de fase por calendario. El criterio de salida debe quedar evidenciado en reportes y aceptado por la autoridad correspondiente.

## 11. Secuencia de dominios

### 11.1 Estrategia por ondas

Se adopta la siguiente secuencia:

1. **Onda de fundamentos:** DOM-01 y conceptos puente aplicables a todos.
2. **Onda de sistemas y construcción:** DOM-02, DOM-03 y DOM-04.
3. **Onda de conectividad, operación y protección:** DOM-05, DOM-06 y DOM-07.
4. **Onda de datos, IA e integración:** DOM-08, DOM-09 y DOM-10.
5. **Onda de producto, experiencia y gobierno:** DOM-11 y DOM-12.
6. **Onda de conexiones y cierre:** disciplinas, roles, formas de trabajo, artefactos, medición, relaciones y vacíos de los doce dominios.

### 11.2 Justificación

- DOM-01 aporta vocabulario y modelos que reducen dependencias posteriores.
- DOM-02 conecta ejecución física, sistemas y redes con desarrollo e infraestructura.
- DOM-03 y DOM-04 se producen temprano por su dependencia de fundamentos, pero se separan y limitan para no dominar el inventario.
- DOM-05 precede o acompaña cloud, integración, seguridad y sistemas distribuidos.
- DOM-06 y DOM-07 requieren sistemas, redes y software, y aportan operación, confiabilidad y riesgo.
- DOM-08 precede muchas entradas de IA; DOM-10 conecta aplicaciones, datos y procesos.
- DOM-11 y DOM-12 impiden reducir IT a implementación y permiten construir escenarios sobre valor, experiencia, coordinación y gobierno.
- La onda final reconcilia transversalidad y evita que una definición canónica quede duplicada en lotes de dominio.

No es obligatorio completar una onda antes de investigar la siguiente. Sí es obligatorio que cualquier contenido dependiente use destinos aprobados o registre la dependencia como pendiente.

## 12. Plan maestro de lotes

### 12.1 Interpretación del plan

El plan siguiente es una **arquitectura de producción**, no un inventario ni una autorización automática. Los IDs identifican una secuencia propuesta; los términos, IDs de entradas y asignaciones exactas se decidirán posteriormente en inventarios y manifiestos autorizados.

Niveles:

- **M — obligatorio para el mínimo:** forma parte del plan de 26 lotes.
- **T — recomendado para el objetivo:** se añade para el plan de 32 lotes.
- **O — opcional:** solo se autoriza por hallazgos, capacidad y balance, sin superar máximos.
- **C — cierre o ajuste:** no implica nuevas entidades y puede modificar contenido aceptado bajo control.

Todos los lotes entregan la estructura de la sección 19. La columna “entregable diferencial” se añade al paquete común.

### 12.2 Plan base y objetivo

| ID | Nivel, tipo y fase | Objetivo; dominios y tipos | Entradas / relaciones esperadas | Dependencias y criterio de entrada | Criterio de salida | Entregable diferencial y riesgos |
|---|---|---|---|---|---|---|
| `batch-001-taxonomy-domains` — **Materialización de dominios** | M; taxonomía; F1 | Materializar los 12 dominios aprobados; `domain`. | 12 registros; relaciones taxonómicas derivadas no cuentan. | F0; contratos y taxonomía aprobados. | 12 registros completos, sin cambios de alcance y con vecinos/solapamientos revisados. | Matriz de dominios. Riesgo: reabrir taxonomía. |
| `batch-002-taxonomy-subdomains-core-a` — **Subdominios mínimos, parte A** | M; taxonomía; F1 | Primera mitad del piso de subdominios; 12 dominios según amplitud. | 18 registros. | Dominios disponibles; criterios de pertenencia. | Registros con padre único, cobertura no concentrada y duplicados resueltos. | Primer mapa de subdominios. Riesgo: tercer nivel implícito. |
| `batch-003-taxonomy-subdomains-core-b` — **Subdominios mínimos, parte B** | M; taxonomía; F1 | Completar mínimo de 36 subdominios. | 18 registros. | `batch-002` aceptado o integración coordinada. | 36 acumulados, al menos dos por dominio y sin padres múltiples. | Informe de piso taxonómico. Riesgo: cuotas artificiales. |
| `batch-004-taxonomy-disciplines-core` — **Disciplinas transversales mínimas** | M; taxonomía; F1 | Materializar 8 disciplinas mínimas con hogar/aplicaciones. | 8 registros; aplicaciones derivadas. | Dominios aprobados. | 8 disciplinas canónicas, no duplicadas como subdominios. | Mapa transversal inicial. Riesgo: hogar múltiple. |
| `batch-005-taxonomy-target-extension` — **Extensión taxonómica al objetivo** | T; taxonomía; F1 | Alcanzar 48 subdominios y 12 disciplinas. | Hasta 12 subdominios y 4 disciplinas; dividir si alta complejidad. | Mínimo taxonómico revisado y vacíos identificados. | Objetivo alcanzado sin relleno ni concentración. | Informe de extensión. Riesgo: sobresegmentación. |
| `batch-006-foundations-core` — **Fundamentos centrales** | M; fundamentos; F2 | Núcleo estable de DOM-01 y prerrequisitos amplios; ideas/modelos. | 8–10 entidades; 12–20 relaciones. | Taxonomía mínima disponible. | Dependencias directas, sin ciclos y profundidad contextual. | Mapa de prerrequisitos. Riesgo: abstracción excesiva. |
| `batch-007-foundations-bridges` — **Fundamentos y conceptos puente** | M; fundamentos/transversal; F2 | Conceptos puente para sistemas, software, redes, datos y producto. | 8–10; 14–24 relaciones. | `batch-006` aceptado. | Puentes con aplicaciones sustantivas y destinos existentes. | Reporte de puentes. Riesgo: `related-to` genérico. |
| `batch-008-systems-networking-core` — **Sistemas y conectividad esenciales** | M; dominio; F3 | Cobertura esencial coordinada de DOM-02 y DOM-05. | 8–10; 12–20 relaciones. | Fundamentos aplicables. | Ambos dominios avanzan hacia representación y se conectan con infraestructura/software. | Matriz de fronteras. Riesgo: mezclar hardware, sistema y red. |
| `batch-009-software-construction-core` — **Construcción de software esencial** | M; dominio; F3 | Cobertura esencial de DOM-03 por superficies y prácticas de construcción. | 7–9; 10–18 relaciones. | Fundamentos aprobados. | DOM-03 cubierto sin absorber ingeniería ni herramientas comerciales. | Reporte de frontera DOM-03/04. Riesgo: concentración en desarrollo. |
| `batch-010-software-engineering-core` — **Ingeniería, arquitectura y calidad esenciales** | M; dominio; F3 | Cobertura esencial de DOM-04: ingeniería, arquitectura y calidad. | 7–9; 12–20 relaciones. | DOM-03 básico y fundamentos. | Distinciones de ciclo de vida, arquitectura y calidad preservadas. | Informe de calidad/arquitectura. Riesgo: duplicar desarrollo. |
| `batch-011-infrastructure-security-core` — **Operación y protección esenciales** | M; dominio/transversal; F3 | Cobertura esencial coordinada de DOM-06 y DOM-07. | 8–10; 14–24 relaciones. | Sistemas y redes aprobados. | Operación, confiabilidad, protección, privacidad y riesgo mantienen hogares y aplicaciones. | Mapa de aplicaciones transversales. Riesgo: lote denso; dividir si necesario. |
| `batch-012-data-ai-core` — **Datos e inteligencia artificial esenciales** | M; dominio; F3 | Cobertura esencial coordinada de DOM-08 y DOM-09. | 8–10; 12–22 relaciones. | Fundamentos y conceptos de sistemas/datos previos. | Datos e IA diferenciados, con dependencias explícitas. | Reporte de frontera datos/IA. Riesgo: atribuir todo análisis a IA. |
| `batch-013-integration-enterprise-core` — **Integración y sistemas empresariales esenciales** | M; dominio; F3 | Cobertura esencial de DOM-10. | 7–9; 12–20 relaciones. | Software, redes y datos básicos. | Las capacidades de integración e interoperabilidad quedan conectadas sin marcas dominantes. | Mapa de interoperabilidad. Riesgo: relaciones hacia futuros. |
| `batch-014-product-human-experience-core` — **Producto y experiencia humana esenciales** | M; dominio; F3 | Cobertura esencial de DOM-11. | 7–9; 10–18 relaciones. | Fundamentos y artefactos mínimos cuando apliquen. | Producto, BA, UX, UI y accesibilidad diferenciados. | Informe de colaboración humana. Riesgo: convertir diseño en propiedades de contenido. |
| `batch-015-strategy-governance-core` — **Estrategia y gobierno esenciales** | M; dominio/transversal; F3 | Cobertura esencial de DOM-12. | 7–9; 10–18 relaciones. | Cobertura inicial de dominios técnicos y de producto. | Estrategia, gobierno, proyectos, liderazgo y finanzas tecnológicas delimitados. | Reporte de gobierno. Riesgo: universalizar organizaciones. |
| `batch-016-people-capabilities-core` — **Personas y capacidades esenciales** | M; personas/capacidades; F4 | Roles, competencias y puestos excepcionales para colaboración transversal. | 8–10; 12–22 relaciones/campos. | Dominios y prácticas base. | Avance hacia 10 roles/6 competencias mínimos; responsabilidades estructuradas. | Matriz rol-capacidad. Riesgo: inventario laboral. |
| `batch-017-ways-of-working-core` — **Formas de trabajo esenciales** | M; formas de trabajo; F4 | Metodologías, frameworks, procesos, prácticas y técnicas. | 8–10; 12–22 relaciones. | Conceptos y roles aplicables. | Tipos correctamente diferenciados y conectados con resultados. | Matriz de distinciones. Riesgo: etiquetas comunitarias. |
| `batch-018-specifications-implementations-core` — **Especificaciones e implementaciones esenciales** | M; especificaciones/implementaciones; F4 | Protocolos, estándares e implementaciones selectivas. | 7–9; 12–20 relaciones. | Capacidades y abstracciones aprobadas. | Implementaciones apuntan a capacidades/estándares; vigencia registrada. | Reporte de neutralidad comercial. Riesgo: obsolescencia/proveedor. |
| `batch-019-artifacts-measurement-core` — **Artefactos y medición esenciales** | M; artefactos/medición; F4 | Artefactos, métricas e indicadores para varios dominios. | 6–8; 10–18 relaciones. | Procesos, roles y propiedades medibles disponibles. | Avance hacia 6 artefactos/4 mediciones mínimos; interpretación sin causalidad falsa. | Matriz de producción y medición. Riesgo: confundir métrica e indicador. |
| `batch-020-domain-balance-extension-a` — **Extensión equilibrada de dominios A** | T; dominio; F4 | Profundizar dominios por debajo del objetivo, priorizando no desarrollo. | 8–10; 14–22 relaciones. | Tablero tras lotes base. | Cobertura y familias mejoran sin exceder concentración. | Informe de balance A. Riesgo: relleno. |
| `batch-021-domain-balance-extension-b` — **Extensión equilibrada de dominios B** | T; dominio; F4 | Segunda extensión equilibrada para alcanzar 164. | 8–10; 14–22 relaciones. | Resultado de `batch-020`. | Objetivos por dominio/tipo se aproximan sin superar límites. | Informe de balance B. Riesgo: deuda de revisión. |
| `batch-022-transversal-depth-extension` — **Profundidad transversal** | T; transversal; F4 | Completar 18 conceptos puente y aplicaciones de disciplinas. | 6–8; 14–24 relaciones. | Disciplinas y dominios aceptados. | Puentes sustantivos, sin definiciones duplicadas. | Mapa transversal objetivo. Riesgo: demasiadas aplicaciones. |
| `batch-023-selective-implementation-extension` — **Implementaciones selectivas** | T; implementaciones; F4 | Completar cobertura profesional selectiva sin exceder 18 %. | 4–6; 8–16 relaciones. | Balance de capacidades y vigencia. | Objetivo de tipos alcanzable, fuentes y revisión futura registradas. | Reporte de volatilidad. Riesgo: concentración comercial. |
| `batch-024-comparisons-core-a` — **Comparaciones mínimas A** | M; comparaciones; F5 | Primer grupo de confusiones prioritarias. | 4 comparaciones; 0 relaciones globales nuevas ordinarias, salvo hallazgo validado por separado. | Entradas comparadas `approved`. | Cuatro comparaciones con razón, dimensiones y orientación contextual. | Matriz comparativa A. Riesgo: ganador universal. |
| `batch-025-comparisons-core-b` — **Comparaciones mínimas B** | M; comparaciones; F5 | Completar mínimo de 8 comparaciones. | 4 comparaciones; 0 relaciones globales nuevas ordinarias, salvo hallazgo validado. | `batch-024` revisado y nuevas entradas aprobadas. | 8 acumuladas sin comparar aliases o duplicados. | Matriz comparativa B. Riesgo: dimensiones incompatibles. |
| `batch-026-comparisons-target` — **Comparaciones al objetivo** | T; comparaciones; F5 | Alcanzar objetivo de 12. | 4 comparaciones; 0 relaciones globales nuevas ordinarias, salvo hallazgo validado. | Mínimo validado y confusiones pendientes de alto valor. | 12 acumuladas; ninguna creada por cuota. | Matriz comparativa objetivo. Riesgo: duplicar fichas. |
| `batch-027-scenarios-core-a` — **Escenarios mínimos A** | M; escenarios; F5 | Dos escenarios introductorios multidisciplinarios. | 2 escenarios; 0 relaciones globales nuevas ordinarias. | Roles, conceptos, artefactos y dominios aprobados. | Cada uno implica ≥3 dominios sustantivos y no es runbook. | Matriz de participación A. Riesgo: relaciones narrativas universalizadas. |
| `batch-028-scenarios-core-b` — **Escenarios mínimos B y objetivo** | M/T; escenarios; F5 | Tercer escenario mínimo y cuarto objetivo. | 1 para mínimo; 2 para objetivo; 0 relaciones globales nuevas ordinarias. | Cobertura conjunta del lote anterior. | Mínimo cubre ≥8 dominios; objetivo conjunto cubre 12. | Matriz de participación total. Riesgo: repetir mismos roles. |
| `batch-029-learning-paths-core-a` — **Rutas mínimas A** | M; rutas; F5 | Dos rutas introductorias para audiencias distintas. | 2 rutas; 0 relaciones globales nuevas ordinarias. | Entradas y prerrequisitos aprobados. | Orden justificado, checkpoints y finalización; sin saltos. | Mapa de dependencias de rutas. Riesgo: convertir orden en `requires`. |
| `batch-030-learning-paths-core-b` — **Rutas mínimas B y objetivo** | M/T; rutas; F5 | Tercera ruta mínima y cuarta objetivo. | 1 para mínimo; 2 para objetivo; 0 relaciones globales nuevas ordinarias. | Resultado de rutas previas y cobertura restante. | Audiencias/objetivos distintos y recorridos completos. | Matriz de rutas total. Riesgo: prometer especialización. |
| `batch-031-coverage-correction` — **Corrección de cobertura** | C/M; corrección; F6 | Resolver vacíos, duplicados, relaciones, fuentes y profundidad bloqueantes. | 4–8 modificaciones ordinarias; sin cuota nueva. | Tablero y revisiones de fases 1–5. | Hallazgos bloqueantes resueltos; deudas restantes explícitas. | Informe de corrección acumulada. Riesgo: ampliar alcance. |
| `batch-032-publication-readiness` — **Preparación de publicación** | C/M; cierre; F7 | Validar integración, estados, vigencia, sustituciones, cobertura y documentación. | 0 entidades previstas; solo correcciones autorizadas separadas. | Todo contenido que cuenta está aceptado e integrado. | Cobertura mínima/objetivo confirmada; decisiones registradas; cierre autorizado. | Dossier de cierre. Riesgo: cierre administrativo sin integración. |

### 12.3 Extensiones opcionales hasta el máximo

Estos lotes no se autorizan por defecto. Todos usan el paquete común de la sección 19 y producen el entregable diferencial indicado.

| ID / nombre | Nivel, tipo y fase | Objetivo; dominios y tipos | Entradas / relaciones esperadas | Dependencias y criterio de entrada | Criterio de salida | Entregable diferencial y riesgos |
|---|---|---|---|---|---|---|
| `batch-033-taxonomy-maximum-extension` — **Extensión taxonómica al máximo** | O; taxonomía; reentrada F1/F6 | Cubrir vacíos taxonómicos demostrados en cualquiera de los 12 dominios; `subdomain` y `discipline`. | Hasta 12 subdominios y 4 disciplinas; relaciones taxonómicas derivadas no cuentan. | Objetivo 48/12 cerrado, revisión de vacío y autorización expresa. | Vacío resuelto sin superar 60/16, sin tercer nivel ni duplicación. | Informe de necesidad taxonómica. Riesgo: sobresegmentación. |
| `batch-034-domain-maximum-extension-a` — **Extensión máxima de dominios A** | O; dominio; F4 | Primera ampliación de dominios por debajo de cobertura útil; tipos definidos por inventario autorizado. | 8–10 entidades; 12–22 relaciones. | Plan objetivo cerrado, fuentes y dependencias aprobadas. | Cobertura mejora sin concentración ni deuda de profundidad. | Informe de extensión A. Riesgo: producir por cuota. |
| `batch-035-domain-maximum-extension-b` — **Extensión máxima de dominios B** | O; dominio; F4 | Segunda ampliación equilibrada en dominios distintos o preguntas no cubiertas. | 8–10; 12–22 relaciones. | Resultado integrado de B034 y tablero actualizado. | Nuevas preguntas educativas respondidas y límites preservados. | Informe de extensión B. Riesgo: solapamiento. |
| `batch-036-domain-maximum-extension-c` — **Extensión máxima de dominios C** | O; dominio/transversal; F4 | Tercera ampliación para conexiones o familias aún insuficientes. | 8–10; 14–24 relaciones. | Autoridad transversal y destinos aprobados. | Conexiones sustantivas sin definiciones competidoras. | Informe de extensión C. Riesgo: densidad relacional. |
| `batch-037-domain-maximum-extension-d` — **Extensión máxima de dominios D** | O; dominio; F4 | Cuarta ampliación selectiva antes del límite de 210. | 8–10; 12–22 relaciones. | Revisión de capacidad, balance y valor marginal. | Se detiene al cubrir el vacío; total no supera 210. | Informe de valor marginal. Riesgo: inventario inmanejable. |
| `batch-038-specialized-emerging-extension` — **Extensión especializada y emergente** | O; transversal o implementación; F4 | Cubrir contexto especializado o emergente no reemplazable por contenido estable; dominios según hallazgo. | 4–6 entidades; 8–16 relaciones. | Fuentes suficientes, incertidumbre, revisión prevista y capacidad porcentual. | ≤10 % combinado, ≤4 % `emerging`, vigencia y revisión registradas. | Informe de incertidumbre. Riesgo: obsolescencia. |
| `batch-039-comparisons-maximum` — **Comparaciones al máximo** | O; comparaciones; F5 | Resolver confusiones adicionales entre entradas aprobadas de cualquier dominio. | Hasta 4 comparaciones; 0 relaciones globales nuevas ordinarias. | 12 comparaciones aceptadas y confusiones de alto valor pendientes. | Máximo 16; dimensiones válidas y sin ganadores universales. | Matriz comparativa máxima. Riesgo: duplicación de fichas. |
| `batch-040-scenarios-maximum` — **Escenarios al máximo** | O; escenarios; F5 | Añadir contextos multidisciplinarios realmente distintos. | Hasta 2 escenarios; 0 relaciones globales nuevas ordinarias. | 4 escenarios aceptados, entradas participantes aprobadas. | Máximo 6; participación nueva y no repetitiva. | Matriz de participación adicional. Riesgo: narrativa redundante. |
| `batch-041-learning-paths-maximum` — **Rutas al máximo** | O; rutas; F5 | Atender audiencias u objetivos introductorios no cubiertos. | Hasta 2 rutas; 0 relaciones globales nuevas ordinarias. | 4 rutas aceptadas y prerrequisitos estables. | Máximo 6; orden justificado y objetivo distinto. | Matriz de audiencias. Riesgo: catálogo formativo. |
| `batch-042-maximum-coverage-correction` — **Corrección de cobertura máxima** | C/O; corrección; F6 | Resolver hallazgos derivados de B033–B041 en dominios y tipos afectados. | 3–8 modificaciones; sin cuota de nuevas entidades. | Extensiones revisadas e integradas; hallazgos autorizados. | Hallazgos resueltos, cobertura recalculada y máximos preservados. | Informe final de corrección. Riesgo: usar corrección para ampliar alcance. |

Alcanzar el máximo requiere autorización expresa y, cuando corresponda, registro en `docs/10-decision-log.md`. La existencia de estos IDs en el plan no reserva automáticamente su ejecución.

## 13. Lotes mínimos, objetivo y máximos

### 13.1 Plan mínimo publicable

Incluye 26 lotes:

- `batch-001` a `batch-004`;
- `batch-006` a `batch-019`;
- `batch-024`, `batch-025`;
- `batch-027` a `batch-032`.

El alcance acumulado se calibra en los manifiestos para alcanzar:

- 12 dominios;
- 36 subdominios;
- 8 disciplinas;
- 120 entidades;
- 180 relaciones;
- 8 comparaciones;
- 3 escenarios;
- 3 rutas;
- 50 fuentes.

Los lotes base de entidades no deben ejecutarse todos en su máximo; el coordinador distribuye exactamente el piso aprobado entre ellos respetando representación, tipos, prioridad y profundidad. El plan puede detenerse aquí si calidad, cobertura y valor están validados.

### 13.2 Plan objetivo recomendado

Incluye los 26 lotes mínimos y añade 6:

- `batch-005`;
- `batch-020` a `batch-023`;
- `batch-026`.

Total: **32 lotes**.

Los manifiestos base y de extensión se calibran para:

- 48 subdominios;
- 12 disciplinas;
- 164 entidades;
- 328 relaciones;
- 12 comparaciones;
- 4 escenarios;
- 4 rutas;
- 80 fuentes.

El objetivo se alcanza mediante expansión equilibrada de lotes base y ejecución de extensiones, no únicamente añadiendo herramientas o entradas `recognition`.

### 13.3 Límite máximo inicial

Los lotes `batch-033` a `batch-042` son opcionales y permiten ampliar de manera controlada hasta:

- 60 subdominios;
- 16 disciplinas;
- 210 entidades;
- 525 relaciones;
- 16 comparaciones;
- 6 escenarios;
- 6 rutas;
- 120 fuentes.

No deben ejecutarse todos automáticamente. Se detienen o reducen en cuanto el vacío que los justificó queda cubierto. Superar cualquier máximo requiere decisión registrada.

### 13.4 Regla de detención

En cualquier perfil se detiene la expansión cuando:

- el mínimo u objetivo aplicable está cubierto;
- todos los dominios cumplen representación;
- añadir contenido solo mejora cantidad, no preguntas educativas;
- la revisión detecta concentración, duplicación o deuda;
- las fuentes o dependencias no permiten calidad suficiente;
- el siguiente lote desplazaría correcciones o publicación.

## 14. Distribución por dominio

La distribución siguiente es una guía de planificación por `primaryDomain`, no una selección de términos ni una cuota rígida:

| Dominio | Mínimo orientativo | Objetivo | Límite inicial orientativo | Razón de variación |
|---|---:|---:|---:|---|
| DOM-01 Fundamentos de computación | 11 | 15 | 19 | Prerrequisitos y conceptos puente amplios. |
| DOM-02 Sistemas de cómputo y sistemas ciberfísicos | 8 | 11 | 14 | Núcleo estable y especializaciones selectivas. |
| DOM-03 Desarrollo de software | 11 | 15 | 19 | Superficies frecuentes, con control de concentración. |
| DOM-04 Ingeniería, arquitectura y calidad de software | 11 | 15 | 19 | Ciclo de vida, calidad y decisiones transversales. |
| DOM-05 Redes y telecomunicaciones | 8 | 11 | 14 | Prerrequisito de operación, integración y seguridad. |
| DOM-06 Infraestructura, cloud y operación de servicios | 12 | 16 | 21 | Cuatro agrupaciones internas y alta transversalidad. |
| DOM-07 Ciberseguridad, privacidad y riesgo tecnológico | 11 | 15 | 19 | Dominio autónomo y aplicación en todos los demás. |
| DOM-08 Datos y analítica | 11 | 15 | 19 | Ciclo del dato, analítica, calidad y gobierno. |
| DOM-09 Inteligencia artificial | 8 | 11 | 14 | Cobertura selectiva, estable y no orientada a tendencias. |
| DOM-10 Integración y sistemas empresariales | 9 | 13 | 17 | APIs, mensajería, interoperabilidad y contexto empresarial. |
| DOM-11 Producto digital, análisis de negocio y experiencia humana | 9 | 13 | 17 | Valor, necesidades, accesibilidad y experiencia. |
| DOM-12 Estrategia, gobierno y liderazgo tecnológico | 11 | 14 | 18 | Decisiones organizacionales y conexiones con todos los dominios. |
| **Total** | **120** | **164** | **210** | Los totales son perfiles; no prueban cobertura por sí mismos. |

Reglas:

- cada dominio conserva al menos seis entidades `essential` o `important`;
- cada dominio tiene al menos dos subdominios, un fundamento/prerrequisito y una relación específica externa;
- se buscan tres familias de tipos cuando la naturaleza lo permita;
- DOM-03 y DOM-04 juntos no superan 30 % del total; esta guía los mantiene alrededor de 18 %;
- tecnologías, herramientas, plataformas, servicios y productos no superan 18 % del objetivo;
- cada dominio incorpora, por hogar o aplicación, colaboración, medición, calidad, seguridad o gobierno;
- la variación se decide por amplitud y dependencias, no por importancia visual o popularidad.

## 15. Distribución por prioridad

### 15.1 Límites

| Perfil | `essential` mínimo | `essential` + `important` mínimo | `specialized` + `emerging` máximo | `emerging` máximo |
|---|---:|---:|---:|---:|
| 120 entidades | 72 | 108 | 12 | 4 |
| 164 entidades | 99 | 148 | 16 | 6 |
| 210 entidades | 126 | 189 | 21 | 8 |

Los enteros aplican redondeo conservador: mínimos hacia arriba y máximos hacia abajo.

### 15.2 Momentos de revisión

- **Al autorizar:** el manifiesto declara distribución prevista y efecto acumulado.
- **Al cerrar:** `coverage-report.md` compara previsto, producido, aceptado e integrado.
- **Al finalizar una fase:** se revisan concentraciones y capacidad reservada.
- **Antes de publicar:** solo entidades `approved` que cuentan para cobertura entran en el cálculo.

Un lote que exceda capacidad de `specialized` o `emerging` se reduce, pospone o sustituye. No se reclasifica contenido para hacer pasar el porcentaje.

## 16. Distribución por profundidad

### 16.1 Límites

| Perfil | `contextual-understanding` mínimo | `recognition` máximo |
|---|---:|---:|
| 120 entidades | 96 | 24 |
| 164 entidades | 132 | 32 |
| 210 entidades | 168 | 42 |

Reglas:

- todas las entradas centrales de comparaciones, escenarios y rutas usan `contextual-understanding`;
- fundamentos y conceptos puente se producen ordinariamente en `contextual-understanding`;
- `recognition` se reserva para apoyo periférico y no oculta campos aplicables;
- no se produce ordinariamente `future-expanded-reference`;
- una ficha corta no se presume `recognition` ni una larga se presume contextual: se revisan preguntas respondidas.

### 16.2 Prevención de deuda

Cada lote base debe:

- declarar la profundidad antes de redactar;
- limitar `recognition` a candidatos justificados;
- completar relaciones y contexto junto con la entrada, no dejarlos como deuda general;
- impedir que una entrada periférica se convierta después en prerrequisito central sin ampliación autorizada;
- reservar capacidad de corrección antes de iniciar estructuras editoriales.

Si al cierre de una fase el porcentaje contextual cae por debajo de la trayectoria necesaria, se detienen lotes de expansión y se autoriza una corrección de profundidad.

## 17. Relaciones dentro de los lotes

Cada lote distingue:

1. **Relaciones internas:** ambos extremos se producen en el mismo lote; solo se consideran válidas cuando ambos alcanzan revisión.
2. **Relaciones con contenido aprobado:** pueden proponerse y validarse ordinariamente.
3. **Relaciones hacia candidatos futuros:** no se incluyen como válidas en contenido publicable; se registran en `relationship-report.md`.
4. **Relaciones pendientes:** falta evidencia, clasificación o destino; no cuentan para cobertura.
5. **Inversas derivadas:** se reportan para validación, pero no se persisten ni cuentan de nuevo.
6. **Campos de autoridad:** `primaryDomain`, `subdomains`, `prerequisites`, `competencies`, `replacedBy` y otros campos aprobados conservan autoridad; no se duplican en `relations[]`.
7. **Relaciones con fuentes obligatorias:** temporalidad, versión, gobierno, producto, reemplazo y otras clases exigidas incluyen `sourceIds`.

Conviene producir la relación en el mismo lote cuando:

- ambos extremos son internos y su conexión forma parte del objetivo;
- el destino ya está `approved`;
- la relación es necesaria para comprender la entrada;
- la evidencia está disponible;
- la dirección y autoridad son inequívocas.

Conviene posponerla cuando:

- el destino no existe o no está aprobado;
- la relación depende de una decisión futura;
- solo aporta navegación secundaria;
- requiere una comparación o estructura especializada;
- su evidencia es insuficiente.

Se crea un lote transversal cuando varias entradas de dominio intentan definir la misma disciplina o concepto puente. Se devuelve una relación cuando usa tipo incompatible, dirección incorrecta, destino inexistente, evidencia insuficiente, duplicación de campo o `related-to` como relleno.

Una relación aprobada se corrige mediante lote de corrección cuando cambia evidencia, destino, vigencia, clasificación o contrato autorizado. No se edita silenciosamente durante otro lote.

## 18. Producción de fuentes

Cada lote debe:

- reutilizar fuentes normalizadas cuando respaldan realmente las nuevas afirmaciones;
- registrar nuevas fuentes solo cuando aportan evidencia necesaria;
- identificar fuentes compartidas entre entradas;
- distinguir fuentes de proveedor de fuentes institucionales, estándares y otras clases;
- registrar secciones, páginas o apartados utilizados;
- registrar fecha de consulta para recursos web;
- registrar versión, emisor, vigencia y reemplazo cuando corresponda;
- verificar disponibilidad;
- vincular `sourceIds` a relaciones que requieren respaldo;
- declarar incertidumbre o conflicto de fuentes.

El `sources-report.md` informa:

- fuentes reutilizadas;
- fuentes nuevas propuestas;
- fuentes descartadas y motivo;
- afirmaciones sin respaldo suficiente;
- fuentes con disponibilidad parcial, archivada, no disponible o no verificada;
- fuentes que requieren revisión especializada;
- concentración por proveedor u organización;
- relaciones respaldadas específicamente.

Este documento no define jerarquía, suficiencia o número mínimo por ficha. Esas reglas corresponden a `work/SOURCE-POLICY.md`.

## 19. Entregables de un lote

### 19.1 Estructura adoptada

```text
deliveries/<batch-id>/
├── batch-manifest.md
├── batch-summary.md
├── coverage-report.md
├── sources-report.md
├── relationship-report.md
├── duplicate-report.md
├── new-term-proposals.md
├── unresolved-questions.md
├── exceptions-report.md
├── self-review-report.md
├── validation-report.md
├── review-report.md
└── content/
    ├── new/
    └── modified/
```

Esta estructura es lógica y no se crea mediante este documento.

### 19.2 Propósito mínimo

| Entregable | Contenido mínimo |
|---|---|
| `batch-manifest.md` | Identidad, autorización, alcance, dependencias, tamaño, responsables, criterios y decisión de cierre. |
| `batch-summary.md` | Resultado ejecutivo, producido frente a previsto, decisiones, hallazgos y recomendación de estado. |
| `coverage-report.md` | Efecto acumulado por dominio, tipo, prioridad, profundidad, estabilidad, subdominio, disciplina, puente y estructura. |
| `sources-report.md` | Reutilizadas, nuevas, descartadas, inciertas, versiones, disponibilidad y afirmaciones sin respaldo. |
| `relationship-report.md` | Internas, aprobadas, pendientes, futuras, derivadas, de autoridad, rechazadas y correcciones. |
| `duplicate-report.md` | Búsquedas, colisiones, aliases, posibles duplicados, consolidaciones y decisiones. |
| `new-term-proposals.md` | Candidatos fuera de alcance con clasificación provisional y decisión pendiente. |
| `unresolved-questions.md` | Preguntas, impacto, responsable de decisión y bloqueo. |
| `exceptions-report.md` | Desviaciones autorizadas, alcance, motivo, vigencia y referencia de decisión. |
| `self-review-report.md` | Autoevaluación de ChatGPT Trabajo por dimensión y correcciones realizadas. |
| `validation-report.md` | Resultado de validadores disponibles, errores, advertencias y limitaciones de la validación. |
| `review-report.md` | Revisión independiente, hallazgos, severidad conceptual, decisión y acciones. |
| `content/new/` | Entradas o estructuras nuevas dentro del alcance. |
| `content/modified/` | Entradas modificadas con motivo y trazabilidad; vacío si no aplica. |

Los entregables no incluyen archivos visuales, código, componentes, esquemas ejecutables, dependencias, build ni decisiones de UX/UI.

## 20. Manifiesto del lote

El manifiesto debe incluir:

- `batchId`;
- título;
- objetivo;
- estado del lote;
- fase;
- tipo o combinación autorizada;
- nivel de alcance: mínimo, objetivo, opcional, corrección o cierre;
- alcance autorizado;
- dominios;
- subdominios o disciplinas implicados cuando ya estén aprobados;
- tipos permitidos;
- prioridades permitidas;
- profundidad prevista;
- estabilidad esperada;
- entradas objetivo y máximo;
- relaciones esperadas y clases críticas;
- fuentes previstas o estrategia de reutilización;
- dependencias obligatorias y recomendadas;
- documentos de autoridad;
- responsable de producción;
- responsable de revisión;
- fecha de autorización;
- versión del manifiesto;
- criterios de inclusión;
- criterios de exclusión;
- criterios de aceptación;
- exclusiones explícitas;
- entregables previstos;
- complejidad estimada y justificación;
- decisión de cierre, fecha y responsable cuando termine.

El formato ejecutable se reserva a `work/BATCH-TEMPLATE.md`. Una modificación de alcance actualiza versión, motivo, autorización y efecto sobre cobertura.

## 21. Estados del lote

Los estados de lote son distintos de `editorialStatus`.

| Estado | Significado | Entrada y salida | Responsable | Entregables mínimos | ¿Puede cambiar alcance? |
|---|---|---|---|---|---|
| `proposed` | Candidato aún no autorizado. | Entra por planificación; sale a `authorized` o `cancelled`. | Coordinador. | Borrador de manifiesto. | Sí, libremente antes de autorizar. |
| `authorized` | Alcance, ID, dependencias y revisión aprobados. | Sale a `in-production` o `cancelled`. | Coordinador. | Manifiesto vigente. | Solo con nueva autorización/versionado. |
| `in-production` | Investigación y redacción activas. | Sale a `in-review`, `changes-requested` o `cancelled`. | ChatGPT Trabajo/responsable. | Entregables en construcción. | No silenciosamente; cambio formal. |
| `in-review` | Paquete completo sometido a revisión independiente. | Sale a `changes-requested` o `accepted`. | Revisor. | Todos los entregables y contenido. | No; un cambio material devuelve a autorización. |
| `changes-requested` | Existen hallazgos que requieren corrección. | Regresa a `in-production` o, si cambia alcance, a `authorized`; puede cancelarse. | Revisor/coordinador. | `review-report.md` y plan de corrección. | Solo autorizado y trazado. |
| `accepted` | La entrega satisface revisión editorial/conceptual. | Sale a `integrated`; puede generar corrección posterior. | Coordinador/revisor autorizado. | Reporte de revisión final y decisión. | No. |
| `integrated` | Contenido aceptado incorporado a las fuentes canónicas y validado. | Sale a `closed` o a corrección si falla integración. | Codex/responsable técnico futuro. | Resultado de integración y validación. | No. |
| `closed` | Integración, cobertura y decisiones actualizadas; no quedan ambigüedades operativas. | Terminal; cambios posteriores usan nuevo lote. | Coordinador. | Dossier final y decisión de cierre. | No. |
| `cancelled` | Lote detenido sin reutilizar ID. | Terminal; puede originar nuevos lotes con IDs distintos. | Coordinador. | Motivo, impacto y tratamiento de trabajo parcial. | No. |

Reglas:

- `accepted` es un estado del lote y no sustituye `editorialStatus`; no obstante, todo contenido destinado a integración ordinaria debe tener el estado editorial aplicable, ordinariamente `approved`, registrado de forma independiente.
- `integrated` no equivale a `closed`.
- un lote puede estar `closed` aunque algunas propuestas externas hayan sido rechazadas, siempre que estén resueltas y no formen parte del alcance aceptado;
- una entrada `draft` no se vuelve publicable porque su lote esté `accepted`.

## 22. Criterios de entrada

Un lote ordinario no comienza sin:

- objetivo, alcance e ID;
- fase y tipo;
- dependencias disponibles;
- tipos, prioridades y profundidad permitidos;
- criterios de inclusión y exclusión;
- documentos de autoridad;
- tamaño máximo y complejidad estimada;
- entregables y criterios de aceptación;
- responsable de producción y revisión;
- estrategia de fuentes;
- comprobación inicial de duplicados;
- efecto previsto sobre cobertura;
- manifiesto `authorized`.

Excepciones:

- un lote de investigación puede iniciar sin entradas objetivo definitivas, pero debe limitar preguntas, fuentes, plazo lógico, entregable y prohibición de producir contenido publicable;
- un lote de corrección puede iniciar con alcance definido por hallazgos, aunque no produzca entradas nuevas;
- una emergencia de vigencia puede autorizarse con manifiesto abreviado, pero debe registrar impacto, fuentes, responsables y restaurar la documentación completa antes de aceptación.

## 23. Criterios de salida

### 23.1 Listo para revisión

Un lote está listo para `in-review` cuando:

- entrega todos los archivos requeridos;
- no excede alcance ni tamaño;
- los IDs son válidos y no colisionan;
- fuentes y secciones utilizadas están registradas;
- entradas y estructuras cumplen campos aplicables;
- relaciones están justificadas, dirigidas y resolubles;
- no existen duplicados sin registrar;
- preguntas y excepciones están explícitas;
- autoevaluación y validación disponibles están completas;
- no contiene propiedades visuales, código ni componentes;
- el reporte de cobertura distingue producido, revisable y pendiente.

### 23.2 Aceptado

Un lote puede pasar a `accepted` cuando:

- revisión editorial satisfactoria;
- revisión taxonómica satisfactoria;
- revisión técnica conceptual satisfactoria;
- revisión de fuentes y relaciones satisfactoria;
- hallazgos bloqueantes resueltos;
- hallazgos mayores resueltos o tratados según criterios futuros;
- excepciones aprobadas;
- cobertura coherente y sin conteo duplicado;
- alcance final coincide con manifiesto vigente.

### 23.3 Cerrado

Un lote pasa a `closed` únicamente cuando:

- el contenido aceptado está integrado;
- validación posterior a integración no introduce bloqueantes;
- cobertura acumulada está actualizada;
- decisiones y excepciones están registradas;
- acciones futuras y propuestas están asignadas o descartadas;
- no quedan entregables ambiguos;
- el commit o historial permite reconstruir la integración;
- la autoridad de cierre registra fecha y decisión.

## 24. Revisión por lote

| Revisión | Autoevaluación de Trabajo | Revisión independiente | Automatizable por Codex | Decisión humana |
|---|---|---|---|---|
| Estructural | Sí | Muestreo/confirmación | IDs, tipos, campos, fechas, referencias | Excepciones estructurales. |
| Taxonómica | Sí | Obligatoria | Compatibilidad formal dominio-subdominio | Clasificación y fronteras ambiguas. |
| Editorial | Sí | Obligatoria | Longitudes y campos detectables | Claridad, voz, profundidad y utilidad. |
| Técnica conceptual | Sí | Obligatoria según tema | Consistencia formal limitada | Precisión, límites y contexto. |
| Fuentes | Sí | Obligatoria | Existencia, formato, fechas y referencias | Autoridad, suficiencia y conflicto. |
| Relaciones | Sí | Obligatoria | Claves, dirección, compatibilidad, ciclos, duplicados | Relevancia y evidencia contextual. |
| Cobertura | Sí | Obligatoria | Conteos y distribuciones | Vacíos y valor educativo. |
| Separación contenido-diseño | Sí | Obligatoria | Campos prohibidos, rutas/HTML | Excepciones y significado autónomo. |
| Vigencia | Sí | Obligatoria para contenido cambiante | Fechas, estados y versiones | Veracidad actual y riesgo. |
| Integración | No como decisión final | Revisión de resultado | Esquemas, referencias, índices y build | Aceptar correcciones editoriales derivadas. |

ChatGPT Trabajo puede detectar y corregir sus propios errores antes de entrega, pero no sustituye la revisión independiente. Codex valida contratos; no resuelve ambigüedad semántica.

## 25. Hallazgos y severidad conceptual

Sin fijar umbrales definitivos:

| Categoría | Significado | Efecto ordinario |
|---|---|---|
| **Bloqueante** | Viola identidad, contrato, referencia, clasificación, seguridad conceptual, fuente obligatoria o alcance de forma que impide confiar en la entrega. | Devuelve el lote; impide aceptación, integración y cierre. |
| **Mayor** | Afecta precisión, profundidad, relación, cobertura o vigencia de manera material, pero es corregible sin rehacer todo el lote. | Requiere corrección antes de aceptación, salvo política futura explícita. |
| **Menor** | Defecto localizado de claridad, consistencia o documentación sin alterar el significado central. | Puede agruparse para corrección; no se ignora. |
| **Recomendación** | Mejora no necesaria para cumplir el alcance actual. | No bloquea; puede alimentar lote futuro. |
| **Pregunta** | Falta una decisión o evidencia. | Bloquea solo el elemento afectado si impide afirmación segura. |
| **Propuesta de cambio** | Sugiere modificar contrato, alcance, taxonomía o política. | Se separa del lote y requiere autoridad/decision log; no se aplica silenciosamente. |

La aprobación condicional, tolerancias y cantidades permitidas por categoría corresponden a `docs/09-quality-criteria.md`.

La propagación entre lotes se controla así: un hallazgo bloqueante detiene todo lote dependiente; uno mayor impide usar la parte afectada como dependencia; uno menor se registra para corrección sin ocultarlo; una recomendación alimenta planificación futura; una pregunta mantiene bloqueado solo el alcance que dependa de su respuesta; y una propuesta de cambio se separa del flujo ordinario hasta contar con decisión autorizada.

## 26. Cambios de alcance

### 26.1 Regla general

ChatGPT Trabajo no puede ampliar el lote silenciosamente. Toda variación se clasifica como:

- ajuste dentro de tolerancia;
- cambio material del manifiesto;
- nuevo lote;
- propuesta de cambio de contrato.

### 26.2 Tratamiento

| Situación | Tratamiento |
|---|---|
| Término adicional necesario | Registrar propuesta; incluir solo si cabe en objetivo, máximo y complejidad sin desplazar otro elemento, con autorización. |
| Término que debe retirarse | Retirar con motivo; actualizar cobertura y dependencias. |
| Lote demasiado grande | Dividir con IDs derivados o nuevos. |
| Dependencia faltante | Bloquear elemento, moverlo o autorizar lote de fundamento previo. |
| Duplicado | Consolidar como alias o devolver decisión; no producir dos fichas. |
| Nueva ambigüedad | Registrar pregunta y detener la parte afectada. |
| Relación no prevista | Proponerla si usa catálogo; si exige clave nueva, separar como cambio de contrato. |
| Fuente insuficiente | No aprobar afirmación; reducir, posponer o buscar evidencia conforme al protocolo. |
| Tecnología emergente | Limitar volumen, declarar incertidumbre y revisión; no reorganizar taxonomía. |
| Contenido que requiere división | Crear IDs de entrada según modelo solo tras decisión; ajustar lote. |
| Propuesta de cambio de contrato | No aplicar; remitir al coordinador y `docs/10-decision-log.md`. |

### 26.3 Tolerancia ordinaria

Como orientación de planificación, puede ajustarse hasta una entrada dentro del rango autorizado cuando:

- no cambia tipos, dominios, prioridad ni complejidad;
- no supera máximo;
- no introduce dependencia nueva;
- no altera el objetivo;
- queda registrado en manifiesto y resumen.

Cualquier variación mayor requiere autorización previa. Esta tolerancia no es un umbral definitivo de calidad.

## 27. Propuestas de nuevos términos

Un lote puede descubrir candidatos fuera de alcance, pero no producirlos automáticamente. Cada propuesta registra:

- nombre;
- posible tipo;
- posible dominio principal y secundarios;
- razón educativa;
- dependencia;
- prioridad sugerida;
- profundidad sugerida;
- riesgo de duplicado o alias;
- fuente inicial;
- lote recomendado;
- impacto de cobertura;
- decisión pendiente y responsable.

Estados conceptuales de una propuesta: pendiente, aceptada para inventario futuro, rechazada, consolidada como alias o requiere decisión. Estos estados no son `editorialStatus` ni estados de lote.

## 28. Control de duplicados

### 28.1 Comprobaciones

Antes y durante cada lote se revisan:

- IDs;
- títulos y nombres canónicos;
- `englishName`;
- aliases, siglas, abreviaturas y traducciones;
- grafías y diacríticos;
- polisemia y acepciones;
- nombres históricos y `legacyIds`;
- términos de lotes abiertos, aceptados y cerrados;
- herramientas o productos que representan una capacidad general;
- entradas similares en dominios distintos;
- versiones y variantes menores.

### 28.2 Resultados registrables

- **Duplicado confirmado:** mismo significado; se conserva una entrada canónica.
- **Posible duplicado:** requiere revisión antes de producir.
- **Alias:** variante equivalente, sin nueva ficha.
- **Consolidación:** migración autorizada hacia una entrada canónica.
- **Entradas separadas por contexto:** significados incompatibles, con calificador estable.
- **Decisión pendiente:** no se produce hasta resolver.
- **No duplicado:** similitud explicada y, si aporta valor, relación o comparación válida.

Una relación `confused-with` no corrige un duplicado. Un nombre distinto tampoco prueba independencia semántica.

## 29. Control de cobertura acumulada

Después de cada lote se actualiza un tablero conceptual con:

- dominios, subdominios y disciplinas producidos, aceptados e integrados;
- entidades por dominio y tipo;
- prioridad y profundidad;
- estabilidad y `needs-update`;
- conceptos puente;
- relaciones por familia, autoridad y estado;
- comparaciones, escenarios y rutas;
- fuentes reutilizadas, nuevas y disponibles;
- representación de cada dominio;
- dominios por debajo de mínimo;
- concentración DOM-03/04;
- proporción de implementaciones comerciales;
- cobertura de producto, experiencia, gobierno, riesgo y liderazgo;
- deudas de profundidad, fuentes, relaciones y revisión;
- duplicados, candidatos y preguntas;
- lotes por estado.

Cada cifra distingue:

1. planificado;
2. producido;
3. `in-review`;
4. aceptado;
5. integrado;
6. `approved` y contable para publicación.

Solo la última categoría cuenta para terminación pública. El tablero no se implementa aquí como hoja o dashboard.

## 30. Dependencias entre lotes

### 30.1 Clases

- **Obligatoria:** sin ella el lote no puede producir significado válido.
- **Recomendada:** reduce riesgo o mejora coherencia, pero puede omitirse con justificación.
- **De integración:** dos lotes pueden producirse por separado, pero deben reconciliar relaciones y cobertura antes de cierre.
- **De decisión:** requiere resolver ambigüedad, excepción o cambio.
- **De vigencia:** depende de una fuente, versión o reemplazo confirmado.

### 30.2 Reglas

- un lote bloqueado no inicia producción ordinaria;
- IDs de lotes y entradas se reservan antes de trabajo paralelo;
- una entrada compartida tiene un solo lote de autoridad;
- relaciones cruzadas se asignan a un origen y se reconcilian en integración;
- cambios en lotes anteriores usan corrección;
- escenarios y rutas dependen de entradas `approved`;
- comparaciones dependen de entradas aprobadas y confusión real;
- una dependencia recomendada omitida se documenta;
- conflictos de IDs bloquean ambos lotes hasta resolución;
- ninguna dependencia se satisface con un título, ruta o borrador no aprobado.

## 31. Lotes paralelos

La producción paralela se permite cuando:

- alcances no se solapan;
- dependencias obligatorias están aprobadas;
- IDs están reservados;
- existe autoridad única para contenido transversal;
- no se producen definiciones competidoras;
- relaciones cruzadas pueden registrarse como pendientes y reconciliarse;
- revisores y capacidad de integración están disponibles;
- existe un checkpoint posterior común.

Ejemplos de paralelización posible:

- dos lotes de dominio de una misma onda con fundamentos ya aprobados;
- personas/capacidades y artefactos/medición si no comparten entradas;
- investigación de fuentes de un lote futuro sin producir contenido;
- comparaciones distintas sobre conjuntos de entradas aprobadas.

Se prohíbe cuando:

- ambos lotes pueden crear la misma entrada;
- comparten una decisión taxonómica o ambigüedad abierta;
- uno necesita contenido todavía no aprobado del otro;
- producen escenarios o rutas antes de estabilizar dependencias;
- no existe autoridad para una disciplina transversal;
- el equipo de revisión no puede cerrar ambos sin acumular borradores;
- la integración requeriría elegir silenciosamente entre versiones.

## 32. Lotes de corrección

Se crea un lote de corrección para:

- errores estructurales compartidos;
- problemas editoriales repetidos;
- cambio o pérdida de fuentes;
- relaciones inválidas o migraciones;
- colisiones de IDs o aliases;
- contenido `needs-update`;
- deprecaciones, sustituciones o versiones;
- inconsistencias entre lotes;
- reclasificación autorizada;
- aplicación de una decisión registrada.

Debe:

- referenciar lotes y entradas afectados;
- conservar historial y motivo;
- limitarse a la causa autorizada;
- actualizar fuentes, relaciones, cobertura y decisiones;
- ejecutar revisión proporcional;
- no reabrir contratos ni ampliar inventario salvo autorización;
- usar ID de corrección conforme a la sección 6.

Una corrección urgente puede retirar temporalmente contenido riesgoso antes de completar una mejora, pero la acción y su restauración deben quedar registradas.

## 33. Integración posterior con Codex

### 33.1 Paquete de entrada

Codex recibirá:

- manifiesto vigente;
- contenido aceptado;
- fuentes normalizadas;
- reportes de cobertura, relaciones, duplicados y validación;
- decisión de revisión;
- decisiones y excepciones;
- lista de entradas nuevas/modificadas;
- dependencias y acciones posteriores.

### 33.2 Facultades

Codex podrá:

- validar esquema, campos, IDs, enums, fechas y referencias;
- resolver inversas y campos de autoridad;
- detectar referencias rotas, duplicación técnica y ciclos;
- integrar fuentes canónicas;
- generar índices, reportes y derivados;
- ejecutar pruebas y build;
- informar diferencias entre paquete aceptado e integración.

### 33.3 Prohibiciones

Codex no podrá:

- redactar contenido faltante;
- cambiar tipo, dominio, prioridad, profundidad o estabilidad;
- inventar o eliminar relaciones por conveniencia;
- reemplazar fuentes;
- fusionar duplicados semánticos;
- aprobar excepciones;
- convertir una advertencia editorial en corrección automática;
- alterar el manifiesto;
- integrar contenido no aceptado como publicable.

Si la integración descubre un defecto editorial, el lote vuelve a `changes-requested` o genera lote de corrección; no se parchea silenciosamente.

## 34. Riesgos del plan

| Riesgo | Señal | Impacto | Mitigación | Criterio de escalamiento |
|---|---|---|---|---|
| Lotes demasiado grandes | Superan rangos, revisión superficial. | Errores propagados y baja trazabilidad. | Reducir y dividir por objetivo. | Complejidad alta o revisión no independiente. |
| Demasiados lotes pequeños | Entregas sin cobertura real, sobrecarga administrativa. | Fragmentación y relaciones pendientes. | Combinar candidatos coherentes. | Dos o más lotes consecutivos bajo mínimo sin causa. |
| Dependencias circulares | Ciclos `requires` o lotes mutuamente bloqueados. | Imposibilidad de ordenar y aprobar. | Extraer fundamento común o corregir relación. | Cualquier ciclo obligatorio no resoluble. |
| Estructuras prematuras | Comparaciones/escenarios/rutas sobre borradores. | Referencias inestables y reescritura. | Bloquear F5 hasta entradas aprobadas. | Destino no aprobado o definición cambiante. |
| Concentración en desarrollo | DOM-03/04 dominan entidades, relaciones o palabras. | MVP transversal falso. | Reservar capacidad y ondas no técnicas. | >30 % sin excepción. |
| Exceso de herramientas | Marcas sin capacidad general. | Obsolescencia y tono comercial. | Límite 18 %, fuentes y capacidad antes que marca. | Límite excedido o proveedor domina fuentes. |
| Relaciones hacia futuro | Destinos inexistentes contados como válidos. | Referencias rotas y cobertura inflada. | Registrar como pendiente, no publicar. | Cualquier relación publicable sin destino. |
| Duplicados entre lotes | Nombres/aliases similares, definiciones competidoras. | Identidad fragmentada. | Búsqueda previa y autoridad única. | Duplicado llega a revisión. |
| Revisión insuficiente | Aprobación sin evidencia o mismos errores. | Pérdida de confianza. | Capacidad de revisión y checklist. | Bloqueante llega a `accepted`. |
| Acumulación de borradores | Muchos `in-production`/`in-review`, pocos cierres. | Deuda y cobertura aparente. | Limitar trabajo en curso. | Nueva onda sin cerrar la anterior. |
| Deuda de profundidad | `recognition` en fundamentos o estructuras. | Comprensión superficial. | Control por lote y corrección temprana. | Trayectoria amenaza mínimo de 80 %. |
| Fuentes comerciales concentradas | Proveedor único por tema. | Sesgo y fragilidad. | Diversidad y fuentes institucionales. | Afirmación general depende solo de marketing. |
| Cambio silencioso de alcance | Entradas extra o contratos reinterpretados. | Pérdida de gobierno. | Versionar manifiesto y decisión. | Cualquier cambio material no autorizado. |
| Cierre sin integración | Lote aceptado pero no incorporado. | Conteos falsos y referencias divergentes. | Separar `accepted`, `integrated`, `closed`. | Cobertura cuenta contenido no integrado. |
| Producción para cuotas | Variantes, relaciones o fuentes débiles. | Volumen sin valor. | Revisar preguntas educativas y permitir detenerse. | Revisor no identifica valor autónomo. |
| Paralelización conflictiva | Dos lotes crean misma entrada o relación. | Fusiones y retrasos. | Reservas de ID y autoridad transversal. | Conflicto semántico entre ramas/entregas. |
| Actualización tardía | Contenido cambiante sin revisión. | Información obsoleta. | Metadatos y lotes de actualización. | Afirmación material conocida como incorrecta. |

Escalar implica detener el lote afectado, registrar el hallazgo y decidir corrección, reducción, cancelación o excepción. No autoriza modificar contratos.

## 35. Indicadores del proceso

Se proponen, sin implementar fórmulas ni umbrales:

- lotes propuestos, autorizados, aceptados, integrados, cerrados y cancelados;
- entradas producidas, aceptadas, integradas y `approved` por lote;
- tasa de devolución y número de iteraciones;
- hallazgos por categoría y dimensión;
- duplicados confirmados y posibles;
- relaciones propuestas, aceptadas, rechazadas y pendientes;
- proporción de relaciones específicas frente a `related-to`;
- fuentes reutilizadas, nuevas, descartadas y no disponibles;
- preguntas pendientes y antigüedad cualitativa;
- variación entre alcance autorizado y entregado;
- tiempo cualitativo y esfuerzo de revisión;
- cobertura acumulada frente a mínimo, objetivo y máximo;
- distribución por dominio, tipo, prioridad, profundidad y estabilidad;
- deuda de profundidad y de fuentes;
- porcentaje de lotes `closed` respecto de `accepted`;
- contenido actualizado después de integración;
- lotes paralelos con conflictos de integración;
- propuestas fuera de alcance aceptadas, rechazadas o aplazadas.

Las definiciones operativas, muestras y umbrales corresponden a `docs/09-quality-criteria.md` y documentos de `work/`.

## 36. Relación con documentos posteriores

| Documento o artefacto | Condicionamiento |
|---|---|
| `docs/09-quality-criteria.md` | Convertirá complejidad, hallazgos, aceptación, cobertura y cierre en severidades, tolerancias y umbrales. |
| `docs/10-decision-log.md` | Registrará excepciones, cambios materiales, migraciones, cancelaciones y desviaciones de alcance. |
| `work/WORK-INSTRUCTIONS.md` | Traducirá fases, autoridades y prohibiciones en instrucciones diarias para ChatGPT Trabajo. |
| `work/RESEARCH-PROTOCOL.md` | Definirá preguntas, búsquedas, evidencia, incertidumbre y cierre de investigación. |
| `work/CONTENT-PRODUCTION-CONTRACT.md` | Hará exigibles campos, estados editoriales, entregables, reenvíos y responsabilidad por lote. |
| `work/BATCH-TEMPLATE.md` | Materializará el manifiesto y reportes sin cambiar esta semántica. |
| `work/SOURCE-POLICY.md` | Definirá autoridad, suficiencia, diversidad, versiones, proveedores y disponibilidad. |
| `work/REVIEW-CHECKLIST.md` | Convertirá revisiones y criterios de salida en verificaciones registrables. |
| `work/HANDOFF-TO-CODEX.md` | Definirá paquete, validaciones, errores devueltos e integración sin reinterpretación. |
| `examples/` | Demostrará lotes, entradas, fuentes, relaciones y estructuras conformes. |
| `inventories/` | Seleccionará términos e IDs concretos, asignación a lotes, prioridad y dependencias. |
| `AGENTS.md` | Instruirá a Codex sobre autoridad, prohibiciones, estados y handoff. |
| Futura implementación | Consumirá únicamente contenido integrado y contratos aprobados; no redefinirá lotes por componentes. |

Los documentos posteriores pueden precisar ejecución, pero no reducir las decisiones de este plan sin registro autorizado.

## 37. Decisiones y pendientes

### 37.1 Estrategia de lotes adoptada

- producción por fundamentos, ondas de cobertura, estructuras dependientes y cierre;
- revisión antes de expansión;
- mínimo de 26 lotes y objetivo de 32;
- extensiones opcionales condicionadas hasta los máximos;
- contenido aprobado antes de integración;
- cobertura acumulada separada por estado.

### 37.2 Convención de IDs adoptada

- `batch-NNN-descriptive-name`;
- sufijos alfabéticos para divisiones/complementos;
- `correction-NN` para correcciones derivadas;
- IDs estables, únicos, no reutilizables y distintos de IDs de entradas.

### 37.3 Tamaños adoptados

- 7–10 entidades como rango ordinario de lote base;
- 3–6 para alta complejidad o contenido cambiante;
- 3–4 comparaciones;
- 1–2 escenarios o rutas;
- 12–16 registros taxonómicos;
- reducción obligatoria cuando la revisión sea alta.

### 37.4 Fases y secuencia adoptadas

Se adoptan F0 a F7 y seis ondas: fundamentos; sistemas/construcción; conectividad/operación/protección; datos/IA/integración; producto/experiencia/gobierno; conexiones/cierre.

### 37.5 Plan maestro adoptado

- B001–B032 conforman el plan base y objetivo;
- B033–B042 son opcionales y no autorizados por defecto;
- los manifiestos calibran cantidades exactas;
- ninguna fila selecciona términos concretos.

### 37.6 Paralelización adoptada

Solo procede sin solapamientos, con dependencias aprobadas, IDs reservados, autoridad transversal y reconciliación posterior. Se prohíbe ante definiciones competidoras, dependencias abiertas o revisión insuficiente.

### 37.7 Entregables y estados adoptados

Se adopta el paquete de la sección 19 y los estados `proposed`, `authorized`, `in-production`, `in-review`, `changes-requested`, `accepted`, `integrated`, `closed` y `cancelled`, separados de `editorialStatus`.

### 37.8 Criterios de entrada y salida adoptados

Ningún lote inicia sin manifiesto autorizado, objetivo, dependencias, tipos, límites, revisión y criterios. Ningún lote cierra sin aceptación, integración, cobertura actualizada y decisiones registradas.

### 37.9 Revisión y cobertura adoptadas

Se separan revisiones estructural, taxonómica, editorial, técnica, de fuentes, relaciones, cobertura, separación, vigencia e integración. El tablero distingue planificado, producido, revisable, aceptado, integrado y publicable.

### 37.10 Decisiones heredadas del MVP

Se preservan:

- 12 dominios;
- 36/48/60 subdominios;
- 8/12/16 disciplinas;
- 120/164/210 entidades;
- 180/328/525 relaciones;
- 8/12/16 comparaciones;
- 3/4/6 escenarios;
- 3/4/6 rutas;
- 50/80/120 fuentes;
- proporciones de prioridad y profundidad;
- límites de concentración y representación por dominio.

### 37.11 Reservado para calidad

- umbrales definitivos de complejidad, relación, fuentes y hallazgos;
- tolerancias de aceptación y aprobación condicional;
- política medible de `needs-update`;
- evidencia exigible por puerta de terminación;
- fórmulas e indicadores.

### 37.12 Reservado para contratos de Trabajo

- formato ejecutable de manifiesto y reportes;
- pasos de investigación y redacción;
- consultas de duplicados;
- evidencia por revisión;
- reglas de reenvío y firma;
- límites de trabajo en curso.

### 37.13 Reservado para inventarios

- términos e IDs concretos;
- subdominios y disciplinas seleccionados;
- asignación exacta a lotes;
- distribución exacta por tipo, dominio, prioridad y profundidad;
- comparaciones, escenarios, rutas y fuentes concretas.

### 37.14 Reservado para Codex

- esquemas y validadores ejecutables;
- estructura física de integración;
- normalización de relaciones simétricas;
- generación de índices, inversas y reportes;
- build y pruebas técnicas;
- formato de resultados de integración.

### 37.15 Excepciones que requieren `docs/10-decision-log.md`

Requieren registro:

- cambiar cantidades, máximos o distribución adoptada;
- excluir un dominio o reducir su representación;
- superar tamaños de forma recurrente;
- cambiar la convención de IDs;
- modificar estados o autoridad;
- permitir producción sin dependencias;
- aceptar contenido visual o implementación en un lote editorial;
- cambiar un contrato aprobado;
- publicar por debajo del mínimo;
- superar límites de prioridad, profundidad, concentración o contenido comercial;
- convertir una propuesta pendiente en decisión sin autoridad;
- reabrir un lote cerrado sin lote nuevo.

### 37.16 Contradicciones encontradas

No se encontraron contradicciones materiales entre los nueve documentos de autoridad.

Se conservan como tensiones o pendientes ya documentados:

- `related` continúa como campo transitorio mientras `relations[]` es el contenedor relacional final; este plan registra su eventual migración como lote de corrección autorizado, no la ejecuta;
- la representación física de relaciones simétricas corresponde a esquema e integración posterior;
- `certification.issuer` no habilita `certified-by` ni un tipo `organization`;
- la política publicable y los plazos de `needs-update` corresponden a calidad;
- los IDs `DOM-01` a `DOM-12` son referencias de trazabilidad documental, no IDs canónicos de contenido;
- la presencia de un plan numerado no constituye inventario ni autorización de producción.

## 38. Cierre

La producción del MVP de IT Study se organizará mediante lotes con alcance, dependencias, revisión y cierre explícitos. El plan permite detenerse en el mínimo publicable, avanzar al objetivo recomendado o autorizar extensiones selectivas sin convertir los máximos en metas.

La estrategia prioriza fundamentos, cobertura transversal, relaciones verificables, revisión humana y contenido aprobado. Mantiene separadas la producción editorial, la integración técnica y la presentación visual, y proporciona la trazabilidad necesaria para que ChatGPT Trabajo, revisores y Codex colaboren sin reinterpretar contratos ni ampliar el alcance silenciosamente.
