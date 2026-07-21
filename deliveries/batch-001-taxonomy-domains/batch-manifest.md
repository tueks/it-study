# IT Study — Manifiesto de `batch-001-taxonomy-domains`

## Identidad

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| Título | Materialización de los dominios aprobados |
| Objetivo | Materializar, sin redefinir, los doce dominios aprobados de IT Study como fichas canónicas `domain`. |
| Estado del lote | `closed` |
| Fase | `F1` — Taxonomía materializada |
| Tipo o combinación autorizada | `taxonomía` |
| Variante operativa | `taxonomía materializada` |
| Nivel de alcance | `mínimo` |
| `manifestVersion` | `v2` |
| `contractVersion` | `1.0` |
| Fecha de autorización | `2026-07-21` |
| Autoridad autorizadora | Responsable del proyecto |
| Responsable de producción | ChatGPT Trabajo |
| Responsable de revisión | Responsable del proyecto, independiente de la autoría |

La autorización inicial procede de la instrucción explícita del Responsable del proyecto del 2026-07-21. El mismo Responsable autorizó posteriormente el alcance correctivo `v2`: materializar los registros `source` usados, añadir `sources[]` a las doce fichas y generar la entrega `d2`, sin aprobar ni aceptar el resultado.

## Alcance autorizado

| Campo | Valor |
|---|---|
| Declaración de alcance | Mantener las doce fichas de dominio requeridas por `inventories/domains.yaml`, materializar los 18 registros `source` ya evaluados como `used` en `sources-report.md` y añadir a las fichas únicamente las referencias respaldadas por el mapa de afirmaciones. |
| Unidades autorizadas | `domain-fundamentos-computacion`; `domain-sistemas-computo-ciberfisicos`; `domain-desarrollo-software`; `domain-ingenieria-software`; `domain-redes-telecomunicaciones`; `domain-infraestructura-operacion`; `domain-ciberseguridad-riesgo`; `domain-datos-analitica`; `domain-inteligencia-artificial`; `domain-integracion-sistemas-empresariales`; `domain-producto-experiencia`; `domain-estrategia-gobierno-liderazgo` |
| Unidades de evidencia autorizadas | Los 18 IDs `source-*` marcados `used` en `sources-report.md`; se excluye `source-open-group-togaf`, marcado `unavailable` y sin afirmaciones. |
| Archivos autorizados para modificar | Ninguno. Solo se crean archivos bajo `deliveries/batch-001-taxonomy-domains/`. |
| Dominios | Los doce dominios aprobados. |
| Subdominios | No se materializan; las listas del inventario se conservan únicamente como planificación y no se referencian como IDs inexistentes. |
| Disciplinas | No se materializan. |
| Tipos de contenido permitidos | `domain`; `source` exclusivamente para las 18 fuentes ya evaluadas. |
| Prioridades permitidas | `essential` |
| `knowledgeLevel` previsto | `contextual-understanding` |
| Estabilidad esperada | `stable-foundation` para DOM-01; `slow-evolution` para DOM-02 a DOM-12. |
| Cantidad objetivo | 30 registros: 12 `domain` y 18 `source`. |
| Cantidad máxima | 30 registros: 12 `domain` y 18 `source`. |
| Complejidad estimada | Media |
| Justificación de complejidad | `docs/08-production-batches.md`, sección 12.2: lote de 12 registros con riesgo de reabrir taxonomía. |
| Relaciones esperadas | Campos taxonómicos de autoridad `neighborDomains` y `overlaps`; no se crean objetos `relations[]` ni inversas persistidas. |
| Clases relacionales críticas | Vecindad y fronteras de solapamiento entre dominios aprobados. |

## Investigación, dependencias y autoridad

| Campo | Valor |
|---|---|
| Estrategia de fuentes | Reutilizar primero la taxonomía aprobada y su inventario; comprobar las fuentes externas ya consultadas por la taxonomía solo en las afirmaciones centrales que cada dominio materializa; registrar mapa de afirmaciones, disponibilidad, concentración y limitaciones. |
| Fuentes previstas o reutilizables | `source-it-study-taxonomy`; `source-it-study-domain-inventory`; `source-acm-ieee-cc2020`; fuentes especializadas S5–S19 de `docs/02-taxonomy.md` según dominio. |
| Dependencias obligatorias | F0 documental completo; `docs/02-taxonomy.md`; `docs/03-content-model.md`; `inventories/domains.yaml`. |
| Dependencias recomendadas | `examples/domain-example.md`. |
| Dependencias de integración | Satisfechas: revisión independiente de `d2`, 30 registros `approved`, aceptación e integración verificadas. |
| Dependencias de decisión | `decision-0003-taxonomy-structure`; `decision-0005-content-format-and-identifiers`; `decision-0016-operational-ownership`. |
| Dependencias de vigencia | Fuentes externas registradas en `sources-report.md`; no se fija calendario uniforme por permanecer pendiente `decision-0017-review-calendars`. |
| Documentos de autoridad | `docs/02-taxonomy.md`; `docs/03-content-model.md`; `docs/04-editorial-guidelines.md`; `docs/05-relationship-rules.md`; `docs/06-design-boundaries.md`; `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; `docs/10-decision-log.md`; contratos de `work/`. |
| Decisiones aplicables | `decision-0003-taxonomy-structure`; `decision-0005-content-format-and-identifiers`; `decision-0016-operational-ownership`. |

## Límites, entregables y aceptación

| Campo | Valor |
|---|---|
| Criterios de inclusión | Solo los doce IDs exactos del inventario; contenido de tipo `domain`; límites y relaciones de autoridad respaldados por la taxonomía aprobada. |
| Criterios de exclusión | No crear subdominios, disciplinas, entidades educativas, fuentes distintas de las 18 autorizadas, comparaciones, escenarios, rutas, código, diseño ni derivados. |
| Exclusiones explícitas | No cambiar taxonomía; no convertir `DOM-01`–`DOM-12` en IDs; no materializar candidatos descubiertos; no integrar contenido; no declarar aprobación, aceptación ni cierre. |
| Entregables obligatorios | Los doce reportes y `content/new/`, `content/modified/` de `work/BATCH-TEMPLATE.md`. |
| Perspectivas de revisión | Taxonómica, conceptual, editorial, fuentes, relaciones, duplicados/aliases, accesibilidad cognitiva, trazabilidad y separación contenido-diseño. |
| Validaciones disponibles | Comprobaciones locales de topología, cantidad, IDs, YAML, enlaces internos del lote, campos obligatorios y ausencia de placeholders; revisión semántica independiente no disponible durante autoría. |
| Criterios de aceptación | Doce registros completos; cero ampliaciones; IDs y campos conformes; vecinos y solapamientos revisados; fuentes suficientes; cero duplicados materiales abiertos; revisión independiente y decisión autorizada posteriores. |
| Efecto sobre cobertura | 12 fichas `domain` y 18 registros `source` `approved`, aceptados, integrados y reconciliados al cierre. |
| Riesgos conocidos | Reabrir taxonomía, tratar subdominios candidatos como entradas existentes, inventar relaciones, confundir autoevaluación con aprobación y crear fuentes fuera del alcance. |
| Preguntas abiertas no bloqueantes | `none`: el alcance está enumerado y las decisiones pendientes preservadas no bloquean la materialización. |
| Bloqueos | `none`; `validation-009` fue corregido en `d2` y las puertas posteriores quedaron satisfechas. |
| Condiciones de detención | Cualquier necesidad de cambiar uno de los doce dominios, añadir una unidad, crear un ID ajeno, usar una relación no autorizada o resolver una decisión pendiente. |
| Condiciones para solicitar cambio de alcance | Hallazgo material que impida representar fielmente un dominio con el contrato `1.0` o necesidad demostrada de modificar cantidad, tipo, dependencia o criterio. |

## Reconciliación de magnitudes

| Magnitud | Previsto | Autorizado | Producido | Revisable | Aceptado | Integrado | Cerrado/cancelado | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Unidades nuevas | 30 | 30 | 30 | 30 | 30 | 30 | 30 | 12 `domain` y 18 `source`; entrega y fuentes canónicas idénticas por hash. |
| Unidades modificadas | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Alcance autorizado |
| Relaciones | No se fija cuota | Campos de autoridad únicamente | 0 relaciones `relations[]`; 70 referencias de vecindad y 31 declaraciones de solapamiento | 0 | 0 | 0 | 0 | `relationship-report.md` |
| Fuentes | 18 usadas; 1 descartada | 18 registros usados | 18 registros `source` producidos; TOGAF permanece descartada | 0 | 0 | 0 | 0 | `sources-report.md`; `content/new/source-*.md` |

## Historial del manifiesto

| Versión | Fecha | Estado | Cambio | Motivo | Impacto | Rol autorizador | Evidencia |
|---|---|---|---|---|---|---|---|
| `v1` | `2026-07-21` | `authorized` | Instancia inicial del lote con 12 dominios y máximo 12. | Instrucción explícita de ejecución conforme al manifiesto autorizado `v1`. | Habilita la puerta inicial; no aprueba contenido. | Responsable del proyecto | Este manifiesto y `docs/08-production-batches.md`, sección 12.2. |
| `v2` | `2026-07-21` | `authorized` | Añade 18 registros `source` ya evaluados y `sources[]` a las 12 fichas; genera `d2`. | Autorización explícita de los puntos 1–3 tras `validation-009`. | Corrige el paquete para nueva revisión; no aprueba, acepta ni integra. | Responsable del proyecto | Instrucción explícita del 2026-07-21; `validation-report.md` r3. |

## Historial de estados

| Estado anterior | Estado nuevo | Fecha | Rol | Autoridad/evidencia | Condiciones cumplidas | Hallazgos abiertos | Comentario |
|---|---|---|---|---|---|---|---|
| `proposed` | `authorized` | `2026-07-21` | Responsable del proyecto | Instrucción explícita transcrita en este manifiesto. | ID, alcance, dependencias, límites, fuentes iniciales, duplicados/aliases y revisión definidos. | `none`: comprobación inicial sin colisiones materiales. | La producción todavía no ha comenzado. |
| `authorized` | `in-production` | `2026-07-21` | ChatGPT Trabajo | Commit de puerta inicial, `sources-report.md` r1 y `duplicate-report.md` r1. | Manifiesto autorizado; plan de fuentes y comprobación inicial de duplicados/aliases registrados. | `none` bloqueante. | Se inicia investigación y producción sin cambiar `manifestVersion`. |
| `in-production` | `in-review` | `2026-07-21` | Responsable del proyecto | Paquete `d2` preservado en `4d62f2e`; revisión completa confirmada. | 30 registros y reportes disponibles. | `none`. | Transición registrada a partir de la aprobación explícita de `d2`. |
| `in-review` | `accepted` | `2026-07-21` | Responsable del proyecto | `review-report.md` r2; aprobación explícita de `d2`. | 30 registros `approved`; cero hallazgos abiertos. | `none`. | Habilita integración; no implica cierre ni publicación. |
| `accepted` | `integrated` | `2026-07-21` | Codex / responsable de integración | Entrega `d2` en `3712f27`; validaciones de integración 014–016. | 12 dominios y 18 fuentes aplicados con hashes idénticos; referencias resueltas. | `none`. | No implica cierre ni publicación. |
| `integrated` | `closed` | `2026-07-21` | Responsable del proyecto | Instrucción explícita de reconciliación; `PROJECT-STATUS.md`. | 30/30 archivos idénticos, referencias resueltas, cobertura y siguientes acciones registradas. | `none`. | Cierre de lote; no implica publicación. |

## Decisiones terminales

| Decisión | Resultado | Fecha | Rol responsable | Evidencia | Impacto/acciones |
|---|---|---|---|---|---|
| Aceptación | `accepted` | `2026-07-21` | Responsable del proyecto | `review-report.md` r2; `4d62f2e` | Habilita handoff de `d2`. |
| Integración | `integrated` | `2026-07-21` | Codex / responsable de integración | `3712f27`; `validation-report.md` r3 | Fuentes canónicas reconciliadas; habilita dependencias posteriores. |
| Cierre o cancelación | `closed` | `2026-07-21` | Responsable del proyecto | Reconciliación registrada en `PROJECT-STATUS.md`; comprobación 30/30 por hash | B001 queda cerrado; cualquier cambio posterior requiere lote de corrección. |

Modificar alcance, tamaño, tipos, profundidad, dependencias, entregables o criterios exige una nueva `manifestVersion` autorizada. Una nueva `deliveryVersion` no sustituye esa autorización.
