# Reporte de validación

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Validaciones ejecutadas |
| `reportVersion` | `r3` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Doce fichas, dieciocho fuentes, topología, reportes, IDs, aliases, referencias y separación contenido-diseño. |
| Contratos aplicados | `docs/03-content-model.md` 1.0; `docs/05-relationship-rules.md`; `docs/09-quality-criteria.md` 1.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete`; preintegración y postintegración de `d2` conformes. |
| Limitaciones | No existe schema/CI autorizado; la precisión conceptual, suficiencia editorial y aprobación requieren revisor independiente. |
| Evidencia/archivos | Salida consolidada de `d2`: `files=30 domains=12 sources=18 sourceRefs=59 ids=30 errors=0`; `git diff --check` sin salida. |

## Ejecuciones reales

| ID local | Validación | Tipo/versión | Responsable/fecha | Alcance/archivos | Regla | Resultado bruto | Interpretación | Errores | Advertencias | Limitaciones | Repetición/diff |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `validation-001` | Cantidad y alcance exacto | Script Python 3 con YAML | ChatGPT Trabajo, 2026-07-21 | `content/new/*.md`; inventario | Máximo y objetivo 12; solo IDs autorizados | `files=12 ids=12`, conjunto exacto, `errors=0` | Conforme | none | none | No decide calidad semántica. | Primera ejecución final. |
| `validation-002` | Frontmatter, IDs y campos obligatorios | Python 3 + PyYAML | ChatGPT Trabajo, 2026-07-21 | 12 fichas | ID regex, archivo=ID, 23 campos requeridos, controles de lote | `errors=0` | Conforme | none | none | Validador local, no schema oficial. | Primera ejecución final. |
| `validation-003` | Inventario y aliases | Python 3 + PyYAML | ChatGPT Trabajo, 2026-07-21 | Inventario contra 12 fichas | Nombre, inglés, prioridad, nivel, estabilidad y aliases exactos | `aliases=24`, `errors=0` | 24/24 reconciliados | none | none | Polisemia requiere juicio humano. | Repite comprobación inicial sobre entrega. |
| `validation-004` | Destinos de vecinos y solapamientos | Python 3 + PyYAML | ChatGPT Trabajo, 2026-07-21 | 70 vecinos y 31 solapamientos | Destino dentro de los 12 y sin autorreferencia | `neighbors=70 overlaps=31`, `errors=0` | Conforme | none | none | No evalúa relevancia editorial. | Primera ejecución final. |
| `validation-005` | Reciprocidad de `neighborDomains` | Python 3 + PyYAML | ChatGPT Trabajo, 2026-07-21 | 35 pares | Cada referencia de vecindad tiene contraparte | `errors=0` | 70 referencias forman 35 pares | none | none | No resuelve almacenamiento de relaciones simétricas ordinarias. | Se repitió tras añadir tres contrapartes faltantes. |
| `validation-006` | Placeholders obligatorios | `rg` | ChatGPT Trabajo, 2026-07-21 | Paquete completo | No conservar marcadores de plantilla activos | Sin coincidencias | Conforme | none | none | Las palabras `pending` legítimas del review report no son placeholders. | Primera ejecución final. |
| `validation-007` | Separación contenido-diseño | Python regex + inspección | ChatGPT Trabajo, 2026-07-21 | 12 fichas | Sin HTML de presentación, clases, scripts ni colores hex | `errors=0` | Conforme | none | none | No sustituye auditoría del producto futuro. | Primera ejecución final. |
| `validation-008` | Topología y formato Git | Python + `git diff --check` | ChatGPT Trabajo, 2026-07-21 | 12 reportes, `content/new`, `content/modified` | Topología completa y diff sin whitespace errors | `reports=12`; `git diff --check` sin salida | Conforme | none | none | `.gitkeep` preserva la carpeta vacía `modified`. | Primera ejecución final. |

## Validaciones no disponibles o no automatizables

| Validación esperada | Estado | Motivo | Elementos no verificables | Riesgo | Sustituto manual | Siguiente acción |
|---|---|---|---|---|---|---|
| Revisión taxonómica, conceptual y de fuentes independiente | `verified` | Responsable del proyecto aprobó `d2`. | 12 dominios, 18 fuentes y reportes. | Ninguno abierto. | `review-report.md` r2; `4d62f2e`. | Completa. |
| Aprobación editorial de entradas | `verified` | Decisión explícita del Responsable del proyecto. | Transición de 30 registros a `approved`. | Ninguno abierto. | `review-report.md` r2. | Completa. |
| Aceptación del lote | `verified` | Decisión explícita del Responsable del proyecto. | Estado `accepted`. | Ninguno abierto. | Manifiesto y `review-report.md` r2. | Handoff habilitado. |
| Schema/CI oficial | `not-available` | No existe implementación autorizada en la línea base. | Validación formal completa y reproducible en CI. | Medio; mitigado por script local. | Validaciones 001–008. | Codex podrá implementarlo en un alcance técnico autorizado. |
| Resolución de fuentes canónicas | `verified-structurally` | `v2` autoriza 18 registros `source` y `d2` los materializa. | Suficiencia, autoridad y fidelidad editorial. | Requiere revisión independiente. | `sources-report.md`; validaciones 010–013. | Revisar 18/18 y las referencias de 12/12 fichas. |

Estas validaciones no aprueban contenido ni aceptan el lote.

## Preflight de aprobación e integración del 2026-07-21

| ID local | Archivo/IDs | Regla | Evidencia | Severidad | Resultado | Alcance afectado | Disposición |
|---|---|---|---|---|---|---|---|
| `validation-009` | Las 12 fichas de `content/new/` | `docs/03-content-model.md`, campo común `sources`: obligatorio para `in-review` o superior y compuesto solo por IDs canónicos de fuentes existentes. | Búsqueda `^sources:` en las 12 fichas: 0 coincidencias. `sources-report.md` declara que no se crearon registros canónicos `source` y que su resolución no fue verificada. | bloqueante | `failed` | Aprobación de las 12 fichas, aceptación e integración de `batch-001-taxonomy-domains`; dependencia de `batch-002`. | No cambiar estados ni integrar. Materializar y revisar fuentes normalizadas mediante alcance autorizado, añadir referencias a una nueva versión de entrega y repetir revisión independiente. |

La copia provisional a `content/taxonomy/domains/` se revirtió íntegramente: 12 archivos retirados, sin fuentes canónicas residuales. El baseline de integración continúa siendo `83a5000b32bcd299725ed576b47591e9c7c7bb93`.

## Corrección y validaciones de `v2`/`d2`

| ID local | Validación | Alcance/regla | Resultado bruto | Interpretación | Limitación |
|---|---|---|---|---|---|
| `validation-010` | Cantidad, IDs y archivos | 12 `domain` + 18 `source`; ID global único; archivo=ID | `files=30 domains=12 sources=18 ids=30 errors=0` | Conforme | No decide identidad semántica. |
| `validation-011` | Campos normalizados de fuente | Campos de sección 14 de `docs/03-content-model.md`; `url` o `reference`; `accessedAt` para recursos web | `sources=18 missingRequired=0 invalidEnums=0 errors=0` | Conforme | No verifica contenido externo nuevamente. |
| `validation-012` | Duplicados y fuente descartada | IDs, títulos y referencias distintos; TOGAF no materializada | `duplicateSourceIds=0 duplicateReferences=0 togafFiles=0 errors=0` | Conforme | La equivalencia de obras requiere revisión humana. |
| `validation-013` | Resolución de `sources[]` | 12/12 fichas con referencias no vacías; cada destino existe y es `type: source` | `domainFiles=12 domainsWithSources=12 sourceRefs=59 unresolved=0 errors=0` | `validation-009` corregida | Suficiencia y selección final corresponden al revisor. |

Resultado de preintegración: paquete `v2`/`d2` aprobado y aceptado; handoff habilitado. El resultado postintegración se registra a continuación; `closed` y publicación permanecen pendientes.

Huella reproducible de `content/new/`: 30 pares `nombre:SHA-256`, ordenados por nombre y unidos con LF, producen `956264c176901e9470f074a9a59c105b51c8a21b8d12dc988d60f0bcf0239049`.

## Integración canónica

| ID local | Validación | Resultado | Disposición |
|---|---|---|---|
| `validation-014` | Aplicación por tipo y ruta | 12 `domain` en `content/taxonomy/domains/`; 18 `source` en `content/sources/`; 0 extras | Conforme |
| `validation-015` | Igualdad de entrega y fuente canónica | 30/30 archivos con bytes idénticos a `d2` aceptado | Conforme |
| `validation-016` | IDs, estados y referencias postintegración | 30 IDs únicos; 30 `approved`; 59 `sources[]` resueltas; `errors=0` | Conforme |

Resultado de integración: `integrated`. Baseline técnico anterior: `83a5000b32bcd299725ed576b47591e9c7c7bb93`; entrega revisada: `4d62f2e`; decisión aceptada: `3712f27`. Rollback: retirar únicamente los 30 archivos nuevos de `content/taxonomy/domains/` y `content/sources/` y restaurar el baseline anterior; las entregas permanecen preservadas. `closed` y publicación siguen pendientes.
