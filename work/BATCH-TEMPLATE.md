# IT Study — Plantilla operativa de lotes de producción

## 1. Identificación y propósito

| Campo | Valor |
|---|---|
| Proyecto | IT Study |
| Nombre oficial | IT Study — Plantilla operativa de lotes de producción |
| Ruta oficial | `work/BATCH-TEMPLATE.md` |
| Estado | **Aprobado** |
| Versión | `1.0.0` |
| Fecha | `2026-07-20` |
| Fecha de aprobación | `2026-07-20` |
| Autoridad de aprobación | Responsable del proyecto, mediante instrucción explícita registrada |
| Ámbito | Autorización, documentación, versionado, ejecución, revisión, reenvío, aceptación, integración, cancelación y cierre de lotes |

### 1.1 Estado de las autoridades consultadas

| Orden | Documento | Estado declarado y tratamiento |
|---:|---|---|
| 1 | `00-bootstrap-brief.md` | Aprobado como antecedente fundacional; sus asuntos pendientes conservan el gobierno especializado aplicable. |
| 2 | `docs/00-project-charter.md` | Aprobado; sus decisiones pendientes no se aceptan por la aprobación documental. |
| 3 | `docs/01-scope-and-audience.md` | Aprobado; sus decisiones pendientes permanecen remitidas a documentos especializados o al decision log. |
| 4 | `docs/02-taxonomy.md` | Aprobado para continuar la definición; decisiones ratificadas. |
| 5 | `docs/03-content-model.md` | Contrato lógico inicial aprobado. |
| 6 | `docs/04-editorial-guidelines.md` | Lineamientos iniciales aprobados. |
| 7 | `docs/05-relationship-rules.md` | Aprobado y vigente. |
| 8 | `docs/06-design-boundaries.md` | Aprobado y vigente. |
| 9 | `docs/07-mvp-definition.md` | Aprobado como definición normativa del MVP. |
| 10 | `docs/08-production-batches.md` | Aprobado como estrategia normativa de lotes. |
| 11 | `docs/09-quality-criteria.md` | Aprobado, contrato de calidad `1.0`. |
| 12 | `docs/10-decision-log.md` | `approved`, registro base vigente `1.0.0`. |
| 13 | `work/WORK-INSTRUCTIONS.md` | Aprobado `1.0.0`. |
| 14 | `work/RESEARCH-PROTOCOL.md` | Aprobado `1.0.0`. |
| 15 | `work/CONTENT-PRODUCTION-CONTRACT.md` | Aprobado `1.0.0`. |

### 1.2 Propósito, audiencia y alcance

Esta plantilla materializa el formato oficial, manual y reutilizable del manifiesto y de los reportes de un lote. Permite reconstruir autorización, investigación, producción, revisión, cambios, aceptación, integración y cierre sin depender de una conversación, herramienta o interfaz. Está dirigida al responsable del proyecto, coordinación, ChatGPT Trabajo, revisores independientes, Codex y responsables futuros de integración y cierre.

Puede copiarse para lotes ordinarios y para las variantes autorizadas de investigación, corrección, actualización, migración, deprecación, cierre y emergencia. No autoriza por sí misma ningún lote, no selecciona términos, no crea inventarios ni contenido, y no sustituye contratos superiores.

### 1.3 Naturaleza y asuntos reservados

Es una plantilla operativa normativa, un formato de trazabilidad y una guía de reconciliación. No es lote real, autorización automática, política de fuentes, checklist independiente, handoff técnico, schema, validador, CI, inventario, ejemplo educativo ni modificación del modelo.

Quedan reservados: jerarquía y suficiencia de fuentes; checks, muestreo y firmas de revisión; recepción técnica, rollback y derivados; schemas y automatización; inventarios e IDs concretos; ejemplos; decisiones materiales; arquitectura; navegación visual; componentes y UX/UI.

### 1.4 Resolución del estado documental

El responsable del proyecto aprobó expresamente `00-bootstrap-brief.md`, `docs/00-project-charter.md`, `docs/01-scope-and-audience.md` y esta plantilla el 2026-07-20. La transición resuelve el bloqueo de estado documental sin convertir en `accepted` decisiones que continúan registradas como pendientes ni modificar sus reglas de contención.

## 2. Precedencia y autoridad

Se aplica, de mayor a menor autoridad:

1. documentos normativos aprobados;
2. decisiones `accepted` vigentes;
3. documentos operativos aprobados;
4. manifiesto de lote autorizado y su versión vigente;
5. inventario aprobado;
6. investigación registrada;
7. reportes y evidencia del lote;
8. instrucciones compatibles de coordinación;
9. conversaciones y contenido previo no aprobado.

El manifiesto delimita un lote; no cambia contratos, taxonomía, modelo, estados, cantidades, relaciones ni autoridad. Una conversación no sustituye autorización o evidencia registrada. Una propuesta no es decisión vigente. Toda excepción requiere autoridad explícita y, si cambia contrato, máximos, estados, cobertura, porcentajes o autoridad, referencia a `docs/10-decision-log.md`.

ChatGPT Trabajo no puede aprobar sus entradas ni declarar el lote `accepted`, `integrated` o `closed`. Codex valida e integra dentro de su autoridad, pero no corrige semántica silenciosamente. Una contradicción bloquea solo el alcance afectado y se registra en `unresolved-questions.md` o `exceptions-report.md` según corresponda.

## 3. Instrucciones de uso

1. Copiar esta plantilla para preparar los doce archivos obligatorios bajo la topología de la sección 4, sin crear el directorio hasta contar con un `batchId` reservado o autorizado conforme al proceso vigente.
2. Asignar un ID autorizado con formato `batch-<NNN>-<descriptive-name>`; divisiones y correcciones siguen `docs/08-production-batches.md`. El placeholder no reserva el ID.
3. Completar `batch-manifest.md` en estado `proposed`, sin dejar marcadores obligatorios ambiguos.
4. Verificar dependencias obligatorias, recomendadas, de integración, de decisión y de vigencia.
5. Obtener autorización registrada; solo entonces fijar `manifestVersion`, fecha, autoridad y estado `authorized`.
6. Pasar a `in-production` al comenzar investigación o producción autorizada; actualizar investigación y mapa de afirmaciones.
7. Mantener reportes durante el trabajo; no reconstruirlos únicamente al final.
8. Preparar una entrega versionada, reconciliar los doce entregables y registrar autoevaluación y validaciones realmente disponibles.
9. Pasar a `in-review` solo con paquete completo; el revisor independiente completa `review-report.md`.
10. Responder cada hallazgo sin borrar la evidencia anterior.
11. Crear reenvío con nueva `deliveryVersion`, revisiones de reportes y diff; un cambio material exige además nueva versión autorizada del manifiesto.
12. Registrar `accepted` únicamente mediante decisión autorizada y revisión independiente satisfactoria.
13. Registrar `integrated` únicamente después de integración y validación técnica documentadas.
14. Registrar `closed` tras actualizar cobertura, decisiones, acciones e historial; registrar `cancelled` con motivo y tratamiento del trabajo parcial.

### 3.1 Conceptos que no son equivalentes

| Concepto | Función | No equivale a |
|---|---|---|
| `manifestVersion` | Versión autorizada del alcance, límites y condiciones | `deliveryVersion`, estado o versión contractual |
| `deliveryVersion` | Instantánea entregada o reenviada del paquete | Cambio de alcance o aceptación |
| `reportVersion` | Revisión de un reporte concreto | Versión completa de entrega |
| `contractVersion` | Versión del contrato de contenido aplicada a fichas | Versión del manifiesto |
| Estado del lote | Flujo operativo del paquete | `editorialStatus` de una entrada |
| `editorialStatus` | Estado editorial de cada unidad | `accepted` del lote |
| Resultado de revisión | Hallazgos, severidad y recomendación independiente | Integración o cierre |
| Estado de integración | Resultado técnico de incorporar contenido aceptado | Aprobación editorial o cierre |

## 4. Topología obligatoria

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

Ningún lote altera esta topología. Todos los reportes existen aunque el resultado sea cero; en ese caso declaran `none` y el motivo. `content/new/` y `content/modified/` no se mezclan. No se crean carpetas visuales, código, componentes, builds ni artefactos UX/UI. Los derivados futuros no sustituyen fuentes canónicas.

## 5. Convenciones de plantilla

### 5.1 Placeholders

| Marcador | Uso |
|---|---|
| `<batch-id>` | ID reservado/autorizado; nunca es un ID de entrada. |
| `<manifest-version>` | Versión vigente del manifiesto. |
| `<delivery-version>` | Versión de la entrega o reenvío. |
| `<report-version>` | Revisión del reporte. |
| `<authorized-value>` | Valor que requiere autorización explícita. |
| `<required-value>` | Valor obligatorio antes de la puerta aplicable. |
| `<optional-value>` | Valor opcional que se elimina o sustituye justificadamente. |
| `<role>` | Rol funcional, nunca nombre inventado. |
| `<date-YYYY-MM-DD>` | Fecha ISO real. |
| `<decision-id>` | Decisión existente; no reserva una nueva. |
| `<source-id>` | Fuente normalizada existente o propuesta identificada como tal. |
| `<entry-id>` | Identidad canónica autorizada. |
| `<finding-id>` | ID local único del hallazgo. |
| `<question-id>` / `<exception-id>` / `<proposal-id>` | ID local, no global. |
| `<batch-state>` | Uno de los nueve estados de lote aprobados de la sección 23. |
| `<editorialStatus>` | Estado editorial aprobado de la unidad; nunca se infiere del lote. |
| `<quality-gate>` | Una de las diez puertas vigentes de la sección 18.5. |
| `<relative-file-path>` | Ruta relativa dentro del repositorio. |
| `<evidence-reference>` | Archivo, sección, commit o referencia estable. |
| `<count-integer>` / `<percentage>` | Conteo o porcentaje calculable, con base declarada. |
| `<not-applicable-with-reason>` | Ausencia justificada sin ocultar deuda. |

Un documento en `authorized` o posterior no conserva placeholders obligatorios. Los placeholders no son datos reales, IDs reservados ni evidencia. Los IDs locales usan `<scope>-<NNN>` dentro del reporte correspondiente: `finding-<NNN>`, `question-<NNN>`, `exception-<NNN>`, `proposal-<NNN>`, `duplicate-<NNN>`, `relationship-<NNN>` o `validation-<NNN>`. Son únicos dentro del lote, no canónicos y no se usan como IDs de contenido o decisiones.

### 5.2 Valores de control

| Valor | Cuándo usarlo | Requisito |
|---|---|---|
| `pending` | Falta una acción prevista no materialmente bloqueante aún | Responsable, siguiente acción y condición/fecha si está autorizada |
| `blocked` | No puede continuar el alcance afectado | Causa, impacto, autoridad y condición de reanudación |
| `not-applicable` | El campo o criterio no aplica | Razón concreta; no se usa en campos obligatorios activados |
| `none` | Un reporte o lista tiene cero elementos | Explicación de por qué cero es correcto y qué se comprobó |
| `unknown` | El dato todavía no puede determinarse | Evidencia buscada, riesgo y plan de resolución |
| `not-verified` | Existe dato o resultado, pero no fue verificado | Alcance, limitación y siguiente validación |
| `complete` | Marcador de completitud de un reporte, no estado del lote | Todos sus campos aplicables están resueltos y su evidencia está referenciada |

Estos valores no sustituyen contenido faltante. En fichas educativas rige la ausencia significativa del contrato: no se introducen listas vacías, `null` o textos de control como valores del modelo. Fechas usan `YYYY-MM-DD`; conteos declaran universo y no mezclan estados. IDs locales usan un prefijo descriptivo y secuencia dentro del reporte, por ejemplo `<finding-id>`, sin aparentar identidad canónica.

### 5.3 Versiones

- `manifestVersion`: `v<integer>` ascendente. Toda modificación material exige una nueva versión autorizada; se conserva la anterior.
- `deliveryVersion`: `d<integer>` ascendente por entrega o reenvío bajo una versión de manifiesto.
- `reportVersion`: `r<integer>` ascendente por modificación del reporte.
- `contractVersion`: valor exacto del contrato aprobado aplicado a las fichas.

Los formatos anteriores son convenciones operativas de esta plantilla, no IDs canónicos ni schemas. Cada historial registra versión anterior, nueva, fecha, rol, motivo, diff y autorización.

## 6. Plantilla de `batch-manifest.md`

### 6.1 Encabezado e identidad

| Campo | Valor de plantilla | Condición |
|---|---|---|
| `batchId` | `<batch-id>` | Obligatorio, único, estable y no reutilizable |
| Título | `<required-value>` | Obligatorio; describe objetivo operativo |
| Objetivo | `<required-value>` | Obligatorio, concreto y verificable |
| Estado del lote | `proposed` | Cambia solo por transición autorizada |
| Fase | `<authorized-value>` | F0–F7 aplicable |
| Tipo o combinación autorizada | `<authorized-value>` | Solo tipos/combinaciones de `docs/08-production-batches.md` |
| Variante operativa | `<authorized-value-or-not-applicable-with-reason>` | No crea un tipo nuevo |
| Nivel de alcance | `<authorized-value>` | `mínimo`, `objetivo`, `opcional`, `corrección` o `cierre` |
| `manifestVersion` | `<manifest-version>` | Obligatoria desde autorización |
| `contractVersion` | `<authorized-value>` | Versión aprobada aplicada |
| Fecha de autorización | `<date-YYYY-MM-DD-or-pending>` | Obligatoria para `authorized` |
| Autoridad autorizadora | `<role-or-pending>` | Rol con autoridad registrada |
| Responsable de producción | `<role>` | Obligatorio antes de producción |
| Responsable de revisión | `<role>` | Obligatorio e independiente |

### 6.2 Alcance autorizado

| Campo | Valor de plantilla |
|---|---|
| Declaración de alcance | `<authorized-value>` |
| Unidades autorizadas | `<entry-id-or-authorized-candidate-reference>` |
| Archivos autorizados para modificar | `<relative-file-path-or-none-with-reason>` |
| Dominios | `<authorized-value>` |
| Subdominios | `<authorized-value-or-not-applicable-with-reason>` |
| Disciplinas | `<authorized-value-or-not-applicable-with-reason>` |
| Tipos de contenido permitidos | `<authorized-value>` |
| Prioridades permitidas | `<authorized-value>` |
| `knowledgeLevel` previsto | `<authorized-value>` |
| Estabilidad esperada | `<authorized-value>` |
| Cantidad objetivo | `<count-integer>` |
| Cantidad máxima | `<count-integer>` |
| Complejidad estimada | `<authorized-value>` |
| Justificación de complejidad | `<evidence-reference-and-reason>` |
| Relaciones esperadas | `<authorized-value-or-none-with-reason>` |
| Clases relacionales críticas | `<authorized-value-or-none-with-reason>` |

### 6.3 Investigación, dependencias y autoridad

| Campo | Valor de plantilla |
|---|---|
| Estrategia de fuentes | `<required-value>` |
| Fuentes previstas o reutilizables | `<source-id-or-pending-with-plan>` |
| Dependencias obligatorias | `<entry-id-or-decision-id-or-none-with-reason>` |
| Dependencias recomendadas | `<entry-id-or-none-with-reason>` |
| Dependencias de integración | `<batch-id-or-none-with-reason>` |
| Dependencias de decisión | `<decision-id-or-none-with-reason>` |
| Dependencias de vigencia | `<source-id-or-none-with-reason>` |
| Documentos de autoridad | `<relative-file-path>` |
| Decisiones aplicables | `<decision-id-or-none-with-reason>` |

### 6.4 Límites, entregables y aceptación

| Campo | Valor de plantilla |
|---|---|
| Criterios de inclusión | `<required-value>` |
| Criterios de exclusión | `<required-value>` |
| Exclusiones explícitas | `<required-value-or-none-with-reason>` |
| Entregables obligatorios | Los doce reportes y `content/new/`, `content/modified/` de la sección 4 |
| Perspectivas de revisión | `<authorized-value>` |
| Validaciones disponibles | `<required-value-or-none-with-reason>` |
| Criterios de aceptación | `<required-value>` |
| Efecto previsto sobre cobertura | `<count-and-evidence>` |
| Riesgos conocidos | `<required-value-or-none-with-reason>` |
| Preguntas abiertas no bloqueantes | `<question-id-or-none-with-reason>` |
| Bloqueos | `<question-id-or-none-with-reason>` |
| Condiciones de detención | `<required-value>` |
| Condiciones para solicitar cambio de alcance | `<required-value>` |

### 6.5 Reconciliación de magnitudes

| Magnitud | Previsto | Autorizado | Producido | Revisable | Aceptado | Integrado | Cerrado/cancelado | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Unidades nuevas | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Unidades modificadas | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Relaciones | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Fuentes | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |

### 6.6 Historial del manifiesto

| Versión | Fecha | Estado | Cambio | Motivo | Impacto | Rol autorizador | Evidencia |
|---|---|---|---|---|---|---|---|
| `<manifest-version>` | `<date-YYYY-MM-DD>` | `<batch-state>` | `<required-value>` | `<required-value>` | `<required-value>` | `<role>` | `<evidence-reference>` |

### 6.7 Historial de estados y decisiones terminales

| Estado anterior | Estado nuevo | Fecha | Rol | Autoridad/evidencia | Condiciones cumplidas | Hallazgos abiertos | Comentario |
|---|---|---|---|---|---|---|---|
| `<batch-state>` | `<batch-state>` | `<date-YYYY-MM-DD>` | `<role>` | `<evidence-reference>` | `<required-value>` | `<finding-id-or-none-with-reason>` | `<required-value>` |

| Decisión | Resultado | Fecha | Rol responsable | Evidencia | Impacto/acciones |
|---|---|---|---|---|---|
| Aceptación | `<pending-or-authorized-result>` | `<date-or-pending>` | `<role>` | `<evidence-reference-or-pending>` | `<required-value-or-pending>` |
| Integración | `<pending-or-authorized-result>` | `<date-or-pending>` | `<role>` | `<evidence-reference-or-pending>` | `<required-value-or-pending>` |
| Cierre o cancelación | `<pending-or-authorized-result>` | `<date-or-pending>` | `<role>` | `<evidence-reference-or-pending>` | `<required-value-or-pending>` |

**Declaración obligatoria:** modificar alcance, tamaño, tipos, profundidad, dependencias, entregables o criterios exige una nueva `manifestVersion` autorizada. Una nueva `deliveryVersion` no sustituye esa autorización.

## 7. Encabezado común de reportes

Cada reporte comienza con:

| Campo | Valor de plantilla |
|---|---|
| `batchId` | `<batch-id>` |
| `manifestVersion` | `<manifest-version>` |
| `deliveryVersion` | `<delivery-version>` |
| Nombre del reporte | `<required-value>` |
| `reportVersion` | `<report-version>` |
| Fecha | `<date-YYYY-MM-DD>` |
| Rol responsable | `<role>` |
| Alcance cubierto | `<required-value>` |
| Contratos aplicados | `<relative-file-path-and-version>` |
| Estado del reporte | `<pending-complete-blocked-not-verified>` |
| Limitaciones | `<required-value-or-none-with-reason>` |
| Evidencia/archivos | `<evidence-reference>` |

En las fichas educativas el campo aprobado es `batch`; `batchId` se usa en manifiestos y reportes y no se añade como campo nuevo a las fichas.

`complete` en este encabezado describe completitud documental; no es un estado de lote, un `editorialStatus` ni una decisión de revisión.

## 8. Plantilla de `batch-summary.md`

Después del encabezado común:

### Resumen ejecutivo

`<required-value>`

| Elemento | Registro |
|---|---|
| Objetivo autorizado | `<authorized-value>` |
| Alcance final | `<required-value>` |
| Previsto frente a producido | `<counts-and-explanation>` |
| Entradas nuevas | `<entry-id-or-none-with-reason>` |
| Entradas modificadas | `<entry-id-or-none-with-reason>` |
| No producido y motivo | `<entry-or-unit-reference-and-reason-or-none>` |
| Decisiones aplicadas | `<decision-id-or-none-with-reason>` |
| Cambios de alcance | `<manifest-version-and-change-or-none>` |
| Principales fuentes | `<source-id-or-none-with-reason>` |
| Relaciones | `<counts-status-and-reference>` |
| Duplicados | `<duplicate-reference-or-none>` |
| Candidatos externos | `<proposal-id-or-none>` |
| Preguntas | `<question-id-or-none>` |
| Excepciones | `<exception-id-or-none>` |
| Hallazgos | `<finding-counts-and-reference>` |
| Validaciones | `<validation-reference-or-none-with-reason>` |
| Efecto sobre cobertura | `<coverage-reference>` |
| Riesgos residuales | `<required-value-or-none-with-reason>` |
| Recomendación de estado | `<allowed-recommendation>` |
| Siguiente acción autorizada | `<required-value>` |

Trabajo puede recomendar continuar, revisar, solicitar cambios, bloquear parcialmente, cancelar una unidad o solicitar decisión. No declara `accepted`, `integrated`, `closed` ni publicado.

## 9. Plantilla de `coverage-report.md`

Después del encabezado común:

| Dimensión | Línea base anterior | Previsto | Producido | `in-review` | `approved` | Aceptado por lote | Integrado | Publicable | Deuda/pendiente | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Dominio | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Subdominio | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Disciplina | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Tipo de contenido | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Prioridad | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| `knowledgeLevel` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Estabilidad | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Conceptos puente | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Dependencias | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |
| Estructuras editoriales | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<evidence-reference>` |

### Perfil acumulado del MVP

| Indicador | Mínimo vigente | Objetivo recomendado | Máximo | Actual contable | Variación del lote | Balance/concentración | Disposición |
|---|---:|---:|---:|---:|---:|---|---|
| `<approved-indicator>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<count-integer>` | `<required-value>` | `<required-value>` |

No se cuentan borradores como aprobados, `needs-update`, deprecados, propuestas externas ni la misma entrada por dominio secundario. Inversas derivadas cuentan una sola vez. Toda base porcentual se declara.

## 10. Plantilla de `sources-report.md`

Después del encabezado común, registrar por fuente:

| `sourceId` | Categoría del reporte | Nueva/reutilizada/propuesta | Versión/vigencia | Secciones/páginas usadas | Consulta | Disponibilidad | Afirmaciones | Relaciones `sourceIds` | Organización/proveedor | Revisión especializada | Limitación/disposición |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `<source-id>` | `<used-new-proposed-discarded-uncertain-unavailable-partial-archived>` | `<required-value>` | `<required-value-or-not-applicable>` | `<required-value>` | `<date-YYYY-MM-DD>` | `<required-value>` | `<claim-id>` | `<relationship-reference-or-none>` | `<required-value>` | `<yes-no-and-reason>` | `<required-value>` |

### Mapa de afirmaciones

| `claimId` | Unidad/campo | Afirmación | Tipo | Criticidad | Estabilidad | Evidencia requerida | `sourceIds`/secciones | Estado | Conflicto | Limitación | Decisión editorial |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `<claim-id>` | `<entry-id-and-field>` | `<required-value>` | `<approved-claim-type>` | `<required-value>` | `<required-value>` | `<required-value>` | `<source-id-and-section>` | `<approved-claim-state>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |

### Resumen investigativo

Registrar fuentes descartadas y motivo; inciertas; no/ parcialmente disponibles; archivadas; versiones; afirmaciones sin respaldo; conflictos; concentración por proveedor/organización; fuentes que requieren revisión especializada; relaciones respaldadas; y limitaciones. Si una categoría tiene cero, usar `none` con comprobación y motivo.

Esta plantilla no fija jerarquía definitiva, cantidad mínima uniforme ni formato bibliográfico final; corresponden a `work/SOURCE-POLICY.md`.

## 11. Plantilla de `relationship-report.md`

Después del encabezado común:

| ID local | Categoría | Origen | Destino | Clave | Dirección/inversa | Justificación | Evidencia/`sourceIds` | Compatibilidad | Cardinalidad | Riesgo de ciclo | Autoridad | Estado | Decisión requerida |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<relationship-local-id>` | `<proposed-internal-approved-target-pending-future-derived-authority-rejected-corrected-removed>` | `<entry-id>` | `<entry-id-or-pending>` | `<approved-relation-key-or-authority-field>` | `<required-value>` | `<required-value>` | `<evidence-reference-or-source-id>` | `<verified-not-verified>` | `<required-value>` | `<required-value>` | `<field-or-relations>` | `<required-value>` | `<decision-id-or-none>` |

Se separan relaciones propuestas, internas, hacia destinos aprobados, pendientes, futuras, derivadas, de autoridad, rechazadas, corregidas y eliminadas. No se inventan claves, no se usa `related-to` para completar conteos, no se persisten inversas derivadas ni se cuentan pendientes.

## 12. Plantilla de `duplicate-report.md`

Después del encabezado común:

### Búsquedas ejecutadas

| Unidad | IDs | Nombres canónicos | Aliases | Siglas | Traducciones | Variantes | Productos/capacidades | Versiones | Lotes concurrentes | Evidencia |
|---|---|---|---|---|---|---|---|---|---|---|
| `<entry-or-candidate-reference>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<query/result>` | `<evidence-reference>` |

### Resultados y disposición

| ID local | Caso | Posible duplicado/colisión | Polisemia | Coincidencias descartadas | Consolidación propuesta | Decisión existente | Bloqueo | Autoridad requerida | Disposición final/evidencia |
|---|---|---|---|---|---|---|---|---|---|
| `<duplicate-local-id>` | `<alias-confirmed-possible-polysemy-separate-version-not-duplicate>` | `<entry-id-or-required-value>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<decision-id-or-none>` | `<blocked-none>` | `<role>` | `<required-value-or-pending>` |

Un posible duplicado material abierto bloquea solo la unidad afectada. No se fusiona, divide, consolida ni migra silenciosamente.

## 13. Plantilla de `new-term-proposals.md`

Después del encabezado común:

| ID local | Término | Descubrimiento | Problema educativo | Clasificación provisional | Dominio provisional | Prioridad provisional | Profundidad sugerida | Estabilidad | Dependencias | Relación con lote | Evidencia inicial | Posible duplicado | Riesgo | Lote/fase sugerida | Decisión requerida | Estado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<proposal-id>` | `<placeholder-term>` | `<required-value>` | `<required-value>` | `<provisional-value>` | `<provisional-value>` | `<provisional-value>` | `<provisional-knowledgeLevel>` | `<provisional-value>` | `<required-value-or-unknown>` | `<required-value>` | `<evidence-reference>` | `<required-value>` | `<required-value>` | `<authorized-planning-reference-or-pending>` | `<role-or-decision-id>` | `<pending-inventory-rejected-alias-requires-decision>` |

Registrar una propuesta no autoriza producirla, asignarle ID definitivo ni contarla como cobertura.

## 14. Plantilla de `unresolved-questions.md`

Después del encabezado común:

| ID local | Clase | Pregunta | Unidad | Dimensión | Contexto/evidencia | Opciones | Impacto | Alcance bloqueado | Trabajo que continúa | Autoridad | Responsable | Apertura | Estado | Respuesta/decisión | Resolución |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<question-id>` | `<non-blocking-partial-blocking-material-decision>` | `<required-value>` | `<entry-id-or-batch>` | `<quality-dimension>` | `<evidence-reference>` | `<required-value>` | `<required-value>` | `<required-value-or-none>` | `<required-value>` | `<role>` | `<role>` | `<date-YYYY-MM-DD>` | `<open-answered-requires-decision-resolved>` | `<required-value-or-pending>` | `<date-or-pending>` |

Una pregunta no bloqueante no oculta un requisito. Una pregunta material permanece bloqueante hasta respuesta o decisión registrada.

## 15. Plantilla de `exceptions-report.md`

Después del encabezado común se declara uno de estos resultados: `none`, `proposed`, `authorized`, `rejected`, `expired` o `withdrawn`.

| ID | Estado | Regla | Alcance/unidades | Motivo | Riesgo | Evidencia | Autoridad | Decisión | Fecha efectiva | Vigencia | Salida/retiro | Mitigaciones | Cobertura | Revisión | Tratamiento al cierre |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `<exception-id>` | `<exception-state>` | `<authority-and-rule>` | `<required-value>` | `<required-value>` | `<required-value>` | `<evidence-reference>` | `<role>` | `<decision-id-or-pending>` | `<date-or-pending>` | `<required-value>` | `<required-value>` | `<required-value>` | `<required-value>` | `<required-value>` | `<required-value>` |

Una excepción propuesta no se aplica ni se presenta como autorizada. Las reglas no exceptuables y decisiones materiales se rigen por `docs/09-quality-criteria.md` y `docs/10-decision-log.md`.

## 16. Plantilla de `self-review-report.md`

Después del encabezado común:

| Dimensión | Criterio | Resultado | Evidencia/archivo | Hallazgo | Corrección realizada | Limitación | Siguiente acción |
|---|---|---|---|---|---|---|---|
| Integridad estructural | `<required-value>` | `<conforme-corregido-pendiente-bloqueado-not-applicable>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Conformidad taxonómica | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Calidad editorial | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Precisión conceptual | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Fuentes | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Relaciones | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Duplicados | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Vigencia | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Cobertura | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Accesibilidad cognitiva | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Seguridad | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Separación contenido-diseño | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Trazabilidad | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Alcance | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |
| Coherencia de reportes | `<required-value>` | `<allowed-result>` | `<evidence-reference>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<required-value-or-none>` | `<required-value>` |

La autoevaluación puede recomendar `in-review`; nunca declara `approved`, `accepted`, `integrated` o `closed`.

## 17. Plantilla de `validation-report.md`

Después del encabezado común, solo se registran ejecuciones reales:

| ID local | Validación | Tipo/versión | Responsable/fecha | Alcance/archivos | Regla | Resultado bruto | Interpretación | Errores | Advertencias | Limitaciones | Repetición/diff |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `<validation-local-id>` | `<actual-validation-name>` | `<actual-type-and-version>` | `<role-and-date>` | `<relative-file-path>` | `<authority-and-rule>` | `<verbatim-result-reference>` | `<required-value>` | `<finding-id-or-none>` | `<finding-id-or-none>` | `<required-value-or-none>` | `<previous-validation-id-and-diff-or-none>` |

### Validaciones no disponibles o no automatizables

| Validación esperada | Estado | Motivo | Elementos no verificables | Riesgo | Sustituto manual | Siguiente acción |
|---|---|---|---|---|---|---|
| `<required-value>` | `<not-available-not-verified>` | `<required-value>` | `<required-value>` | `<required-value>` | `<evidence-reference-or-none>` | `<required-value>` |

No se inventan validadores, CI, versiones, pruebas ni resultados.

## 18. Plantilla de `review-report.md`

Esta plantilla se reserva al revisor independiente. ChatGPT Trabajo puede preparar el encabezado y dejar el resto `pending`; no simula independencia.

### 18.1 Identificación de revisión

| Campo | Valor |
|---|---|
| Revisor por rol | `<role>` |
| Independencia respecto de autoría | `<confirmed-or-conflict-with-disposition>` |
| Perspectivas aplicadas | `<authorized-value>` |
| Alcance revisado | `<required-value>` |
| Muestreo autorizado | `<population-criterion-size-risk-or-not-applicable>` |
| Criterios/autoridades | `<relative-file-path-and-section>` |
| Fecha | `<date-YYYY-MM-DD>` |

### 18.2 Hallazgos y respuesta

| `findingId` | Unidad/archivo | Dimensión/criterio | Severidad final | Evidencia | Puerta | Disposición | Respuesta del autor | Verificación de corrección | Estado |
|---|---|---|---|---|---|---|---|---|---|
| `<finding-id>` | `<entry-id-or-file>` | `<required-value>` | `<bloqueante-mayor-menor-recomendacion-pregunta-propuesta-de-cambio>` | `<evidence-reference>` | `<quality-gate>` | `<required-value>` | `<required-value-or-pending>` | `<evidence-reference-or-pending>` | `<open-resolved-deferred-requires-decision>` |

### 18.3 Decisión

| Campo | Valor |
|---|---|
| Hallazgos abiertos | `<finding-id-or-none-with-reason>` |
| Excepciones | `<exception-id-or-none>` |
| Decisión recomendada | `<changes-requested-accepted-or-other-authorized-recommendation>` |
| Decisión final autorizada | `<pending-or-authorized-value>` |
| Autoridad | `<role>` |
| Fecha/evidencia | `<date-and-evidence-reference>` |

No se define aquí el checklist completo, firma final ni nueva política de severidad; corresponden a `work/REVIEW-CHECKLIST.md` y `docs/09-quality-criteria.md`.

### 18.4 Severidades vigentes

| Categoría | Efecto que debe conservar el reporte |
|---|---|
| `bloqueante` | Impide aprobación, integración y cierre del alcance afectado; no puede aplazarse dentro de ese alcance. |
| `mayor` | Impide ordinariamente aprobar o integrar el contenido afectado; exige corrección y nueva verificación, salvo decisión excepcional autorizada. |
| `menor` | Debe corregirse o aceptarse explícitamente dentro de tolerancia limitada y sin efecto acumulado. |
| `recomendación` | Mejora no obligatoria para la decisión actual; queda registrada. |
| `pregunta` | Su efecto depende del impacto; bloquea cuando afecta identidad, precisión, alcance, referencia o seguridad. |
| `propuesta de cambio` | Se separa del contenido ordinario y requiere autoridad; no se aplica silenciosamente. |

La severidad final se determina por impacto y por el revisor independiente, no por el origen automático o humano.

### 18.5 Puertas de calidad que el lote debe evidenciar

| Puerta vigente | Condición resumida | Evidencia principal | Autoridad/resultado |
|---|---|---|---|
| 1. Entrada a producción | Manifiesto `authorized`, alcance, dependencias, roles, límites, fuentes y duplicados iniciales | `batch-manifest.md` | Coordinación autoriza, divide, pospone o cancela |
| 2. Entrega para revisión | Paquete completo, autoevaluación, validación, IDs/fuentes y separación contenido-diseño | Todos los entregables | Producción recomienda `in-review` o recibe devolución |
| 3. Aprobación de entrada | Cero bloqueantes/mayores, revisión independiente, fuentes, vigencia y profundidad válidas | Ficha y reportes | Revisor autorizado decide estado editorial |
| 4. Aceptación de lote | Alcance vigente, paquete completo, duplicados/preguntas resueltos y excepciones autorizadas | `review-report.md` y paquete | Revisor/coordinación: `accepted` o `changes-requested` |
| 5. Integración de lote | Lote `accepted`, contenido ordinariamente `approved`, referencias y validación postintegración | Diff y resultado de integración | Codex/responsable técnico: `integrated` o corrección |
| 6. Cierre de lote | Integración, cobertura, decisiones y acciones actualizadas | Dossier final | Coordinación: `closed`, corrección o cancelación documentada |
| 7. Salida de fase | Criterios F0–F7 y evidencia acumulada | Reportes acumulados | Coordinación avanza, continúa o retrocede |
| 8. Contenido mínimo | Mínimos aprobados, doce dominios, balance y estructuras | Tablero/dossier MVP | Autoridad declara mínimo o corrección |
| 9. Build candidato | Build reproducible, referencias, flujos, accesibilidad y documentación | Reporte técnico | QA/Codex/arquitectura; fuera de producción editorial |
| 10. Publicación | Puertas previas, autorización humana, rollback y cero riesgo material conocido | Dossier de publicación | Publicación/coordinación; fuera de esta plantilla operativa de autoría |

La plantilla registra evidencia de puertas; no sustituye los criterios completos ni autoriza build o publicación.

## 19. Contenido nuevo y modificado

`content/new/` contiene únicamente identidades nuevas autorizadas. `content/modified/` contiene copias de trabajo de identidades existentes cuya modificación está autorizada. Creación usa `new`; modificación, actualización, migración, deprecación y sustitución usan `modified`; una corrección usa el directorio que corresponda al ciclo de vida real de la unidad.

Toda modificación registra:

| Campo | Valor |
|---|---|
| ID estable | `<entry-id>` |
| Modalidad y motivo | `<required-value>` |
| Estado anterior | `<editorialStatus>` |
| Diff/resumen preciso | `<evidence-reference>` |
| Fuentes añadidas/retiradas | `<source-id-or-none>` |
| Relaciones afectadas | `<relationship-local-id-or-none>` |
| Estructuras consumidoras | `<entry-id-or-none>` |
| Impacto en cobertura | `<coverage-reference>` |
| Origen | `<decision-id-finding-id-or-authorized-reason>` |
| Nueva revisión | `<required-perspective-and-state>` |

No se modifica contenido `approved` fuera del alcance del lote. La migración requiere decisión aceptada y plan; la deprecación/sustitución conserva identidad, historia y referencias.

## 20. Versionado y reenvíos

Cada entrega conserva su versión anterior. No se sobrescriben manifiestos, reportes, mapas, hallazgos ni evidencia; el repositorio y diff deben permitir reconstrucción.

### Registro de reenvío

| Campo | Valor |
|---|---|
| `manifestVersion` | `<manifest-version>` |
| Entrega anterior/nueva | `<delivery-version>` → `<delivery-version>` |
| Hallazgos recibidos | `<finding-id>` |
| Respuesta individual | `<finding-id-and-disposition>` |
| Archivos modificados | `<relative-file-path>` |
| Diff | `<evidence-reference>` |
| Fuentes/relaciones/clasificación afectadas | `<required-value-or-none>` |
| Validaciones repetidas | `<validation-local-id-or-none-with-reason>` |
| Conteos reconciliados | `<reconciliation-reference>` |
| Autoevaluación actualizada | `<report-version>` |
| Recomendación | `<allowed-recommendation>` |

`changes-requested` vuelve a `in-production` para corrección dentro del manifiesto; vuelve a `authorized` solo si se necesita nueva autorización de alcance. Permanece `changes-requested` mientras existan correcciones obligatorias no entregadas. Puede recomendarse otra vez `in-review` cuando se respondan hallazgos, se repitan validaciones aplicables, se reconcilien reportes y no haya bloqueantes propios conocidos.

## 21. Variantes de lote

Las variantes siguientes no crean nuevos tipos. El manifiesto debe usar un tipo o combinación respaldada por `docs/08-production-batches.md` y declarar la variante operativa.

| Variante | Base autorizada | Obligatorio siempre | Puede ser `not-applicable` | Restricción especial | Salida particular |
|---|---|---|---|---|---|
| Ordinario | Uno o combinación permitida de los tipos aprobados | Manifiesto completo, doce reportes, topología, revisión y cobertura | Solo campos realmente ajenos al tipo | Tamaño, complejidad y dependencias vigentes | Revisión, aceptación, integración y cierre ordinarios |
| Investigación | Excepción de entrada autorizada para un tipo futuro o lote preparatorio | Preguntas, fuentes, límite lógico, entregables, prohibición de contenido publicable | Entradas objetivo definitivas y contenido | No produce fichas publicables ni autoriza candidatos | Investigación cerrada y decisión de producción/bloqueo |
| Taxonomía materializada | Tipo aprobado homónimo | Registros aprobados, padres, IDs, cobertura y revisión taxonómica | Campos de entidades ordinarias | No redefine taxonomía ni crea tercer nivel | Registros listos para revisión/aceptación |
| Fundamentos | Tipo aprobado homónimo | Dependencias, prioridad/profundidad, puentes y revisión completa | Concentración de un dominio | Fundamentos antes de dependientes | Núcleo revisable sin ciclos materiales |
| Dominio | Tipo aprobado homónimo | Uno/dos dominios, balance, tipos y relaciones transversales | Estructuras editoriales | No “termina” un dominio ni duplica transversales | Cobertura autorizada reconciliada |
| Transversal | Tipo aprobado homónimo | Identidad canónica, autoridad única, aplicaciones y reconciliación | Pertenencia jerárquica múltiple | No crea definiciones competidoras | Aplicaciones coherentes entre dominios |
| Estructuras editoriales | Comparación, escenario o ruta, siempre separadas entre sí | Entradas `approved`, contrato especializado y revisión total | Fichas nuevas si no están autorizadas | No mezclar tipos de estructura ni copiar definiciones | Estructuras completas y dependencias aprobadas |
| Actualización | Tipo aprobado de corrección o actualización | Señal de vigencia, versiones, fuentes, diff y revisión | Entradas nuevas | No decide `needs-update` o retorno a `approved` por autoría | Contenido actualizado sometido a revisión |
| Corrección | Tipo aprobado de corrección o actualización | Hallazgos/causa, IDs afectados, diff, reportes e impacto | Entradas nuevas, salvo autorización separada | Limitada a causa autorizada | Hallazgos verificados y reenvío |
| Migración | Corrección/actualización con decisión y plan | Decisión `accepted`, mapa, compatibilidad, consumidores, rollback y atomicidad | Producción educativa nueva | No ejecuta `pending-resolution` | Migración validada y referencias reconciliadas |
| Deprecación | Corrección/actualización autorizada | Motivo, fecha, historia, sustitución, cobertura y referencias | Sustituto si no existe, con justificación | Trabajo no autoriza retiro final | Disposición revisada y referencias actualizadas |
| Cierre | Nivel de alcance `cierre`, no tipo nuevo | Cobertura acumulada, decisiones, acciones, integración e historial | Producción nueva | No corrige incidentalmente ni cierra por abandono | `closed` autorizado o `cancelled` documentado |
| Emergencia autorizada | Corrección/actualización con entrada abreviada permitida | Impacto, fuente, responsables, retiro/mitigación y restauración documental | Campos no disponibles al inicio, solo temporalmente | Completar documentación antes de aceptación; retirar riesgo primero si procede | Paquete completo, revisión y decisión ordinaria |

Los doce reportes y la topología permanecen obligatorios en toda variante; un reporte sin elementos usa `none` con razón.

## 22. Solicitud de cambio de alcance

| Campo | Valor |
|---|---|
| ID local | `<scope-change-id>` |
| Clase | `<compatible-clarification-internal-correction-expansion-new-candidate-exception-migration-contract-change>` |
| Cambio solicitado | `<required-value>` |
| Razón/origen | `<finding-id-question-id-or-evidence>` |
| Unidades afectadas | `<entry-id-or-none>` |
| Impacto en tamaño/complejidad | `<counts-and-analysis>` |
| Impacto en dependencias | `<required-value>` |
| Impacto en fuentes/relaciones | `<required-value>` |
| Impacto en cobertura | `<coverage-reference>` |
| Riesgos/alternativas | `<required-value>` |
| Autoridad requerida | `<role-and-decision-id-if-applicable>` |
| Decisión | `<pending-authorized-rejected>` |
| Nueva `manifestVersion` | `<manifest-version-or-not-applicable-with-reason>` |
| Fecha efectiva | `<date-or-pending>` |

Una aclaración compatible precisa sin cambiar contrato; una corrección interna repara defecto propio; una ampliación añade alcance; un candidato se separa; una excepción se autoriza; una migración requiere plan; un cambio contractual se remite al decision log. Un cambio material nunca se aplica solo mediante reenvío.

## 23. Estados y transiciones

| Estado | Significado | Salidas ordinarias |
|---|---|---|
| `proposed` | Candidato no autorizado | `authorized`, `cancelled` |
| `authorized` | Alcance, ID, dependencias y revisión autorizados | `in-production`, `cancelled` |
| `in-production` | Investigación/redacción activas | `in-review`, `changes-requested`, `cancelled` |
| `in-review` | Paquete completo bajo revisión independiente | `changes-requested`, `accepted` |
| `changes-requested` | Correcciones obligatorias registradas | `in-production`; `authorized` si cambia alcance; `cancelled` |
| `accepted` | Entrega aceptada editorial/conceptualmente | `integrated` |
| `integrated` | Contenido aceptado incorporado y validado | `closed` o corrección documentada |
| `closed` | Integración, cobertura y gobierno actualizados | Terminal |
| `cancelled` | Lote detenido con ID reservado | Terminal |

Toda transición usa la tabla de la sección 6.7. Se prohíben saltos no autorizados; confundir `accepted` con `approved`; confundir `integrated` con `closed`; cerrar por abandono; reabrir `closed`; reutilizar ID cancelado; o inferir estado de lote desde `editorialStatus` y viceversa.

## 24. Reconciliación entre reportes

| Elemento | Manifiesto | Resumen | Cobertura | Fuentes | Relaciones | Duplicados | Propuestas | Preguntas | Excepciones | Autoevaluación | Validación | Revisión | Resultado |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `batchId` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<exact-batch-id>` | `<match-mismatch>` |
| `manifestVersion` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<exact-manifest-version>` | `<match-mismatch>` |
| `deliveryVersion` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<exact-delivery-version>` | `<match-mismatch>` |
| Alcance/archivos/IDs | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Cantidades/estados | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Nuevas/modificadas | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Fuentes/relaciones | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Duplicados/candidatos | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Preguntas/excepciones | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Hallazgos/validaciones | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |
| Cobertura | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<report-section-reference>` | `<match-mismatch>` |

Cada `mismatch` registra hallazgo, responsable, causa y corrección. Una contradicción no resuelta impide recomendar aceptación.

`<exact-batch-id>`, `<exact-manifest-version>` y `<exact-delivery-version>` se sustituyen por el valor literal del encabezado correspondiente; `<report-section-reference>` se sustituye por archivo, sección y, cuando aplique, conteo exacto. No se acepta “véase reporte” sin ubicación resoluble.

## 25. Criterios de completitud de la plantilla

Antes de autorizar un lote se comprueba:

- existen todos los campos obligatorios y cada ausencia tiene razón;
- no quedan placeholders obligatorios ambiguos;
- estados, versiones y decisiones no se confunden;
- el manifiesto autoriza sin depender de conversación;
- los doce reportes pueden completarse y reconciliarse;
- cambios de alcance están versionados;
- decisiones, excepciones, fuentes y hallazgos son trazables;
- revisión independiente no puede ser simulada;
- contenido nuevo/modificado permanece separado;
- no hay reglas visuales ni materias reservadas invadidas;
- la plantilla puede usarse manualmente sin schemas;
- una automatización futura puede validar sin cambiar significado.

Una instancia incompleta permanece `proposed` o `blocked`; no pasa a `authorized` por intención.

## 26. Responsabilidades

| Rol | Completa/controla |
|---|---|
| Responsable del proyecto | Decisiones materiales, excepciones, cambios contractuales, publicación y autoridad final dentro de roles vigentes |
| Coordinación | ID y manifiesto, autorización, alcance, dependencias, cambios, recepción, aceptación/cancelación y cierre |
| ChatGPT Trabajo | Investigación, contenido autorizado, reportes operativos, fuentes, relaciones, duplicados, autoevaluación, respuestas y reenvíos; nunca autoaprobación |
| Revisor independiente | `review-report.md`, perspectivas, severidad final, disposición y verificación de correcciones |
| Codex | Validaciones disponibles, hallazgos técnicos, integración y derivados reproducibles, sin corrección semántica silenciosa |
| Responsable de integración | Resultado de integración, diff, referencias, validaciones posteriores y estado `integrated` dentro de autoridad |
| Responsable de cierre | Cobertura, decisiones, acciones, dossier y transición autorizada a `closed`/`cancelled` |

Se usan roles; no se inventan nombres, permisos, calendarios ni delegaciones. Una persona puede cubrir varias perspectivas si queda registrado, pero la revisión independiente debe ser real.

## 27. Asuntos reservados

- `work/SOURCE-POLICY.md`: jerarquía, suficiencia, selección, concentración y bibliografía detalladas.
- `work/REVIEW-CHECKLIST.md`: checks ejecutables, muestreo, firmas y disposición independiente.
- `work/HANDOFF-TO-CODEX.md`: recepción técnica, integración, rollback y derivados.
- Codex: schemas, validadores, CI, automatización, resultados técnicos y representación física.
- `inventories/`: términos, IDs, clasificación y lotes concretos.
- `examples/`: ejemplos concretos/canónicos.
- `docs/10-decision-log.md`: cambios materiales, excepciones y migraciones que requieran decisión.
- Fases posteriores: arquitectura, framework, navegación visual, componentes y UX/UI.

## 28. Decisiones, contradicciones y dependencias pendientes

### 28.1 Decisiones materializadas sin cambio semántico

Se materializan la topología, manifiesto, estados, entregables, puertas, severidades, evidencia, investigación, producción, cambios, versionado, reconciliación y responsabilidades ya aprobados. No se autoriza lote concreto ni se produce contenido.

### 28.2 Pendientes preservados

Permanecen `decision-0012-related-relations-migration`, `decision-0013-symmetric-relations-storage`, `decision-0014-certification-issuer-model`, `decision-0015-dark-mode-delivery`, `decision-0016-operational-ownership`, `decision-0017-review-calendars` y `decision-0018-final-technical-metrics`. Esta plantilla no los resuelve. En particular, no fija responsables nominales, calendarios, métricas técnicas ni representación física relacional.

### 28.3 Contradicciones o tensiones detectadas

No se detectó contradicción semántica material entre los contratos operativos aprobados. La inconsistencia de estado documental de los tres antecedentes iniciales quedó resuelta mediante aprobación explícita el 2026-07-20.

Se preservan como tensiones no bloqueantes para el formato: coexistencia de `related`/`relations[]`, almacenamiento físico de relaciones simétricas, emisor de certificaciones, responsables nominales, calendarios y métricas técnicas. Sus reglas de contención vigentes son suficientes para usar la plantilla sin resolverlas.

### 28.4 Intervención requerida

No queda intervención pendiente para la aprobación documental de esta plantilla. Las decisiones `pending-resolution` de la sección 28.2 conservan sus autoridades y condiciones de resolución; aprobar la plantilla no autoriza un lote concreto.
