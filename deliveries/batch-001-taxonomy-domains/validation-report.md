# Reporte de validación

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| Nombre del reporte | Validaciones ejecutadas |
| `reportVersion` | `r1` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Doce fichas, topología, reportes, IDs, aliases, referencias y separación contenido-diseño. |
| Contratos aplicados | `docs/03-content-model.md` 1.0; `docs/05-relationship-rules.md`; `docs/09-quality-criteria.md` 1.0; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para las validaciones disponibles. |
| Limitaciones | No existe schema/CI autorizado; la precisión conceptual, suficiencia editorial y aprobación requieren revisor independiente. |
| Evidencia/archivos | Salida consolidada de validación: `files=12 ids=12 aliases=24 neighbors=70 overlaps=31 reports=12`, `errors=0`; `git diff --check` sin salida. |

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
| Revisión taxonómica y conceptual independiente | `not-verified` | Requiere revisor distinto de la autoría. | Exactitud, suficiencia y severidad final. | Mayor si se omitiera. | `review-report.md` reservado. | Asignar revisor y revisar 12/12. |
| Aprobación editorial de entradas | `not-available` | La autoría no tiene autoridad. | Transición `draft` → `approved`. | Bloqueante para integración. | Ninguno. | Decisión posterior a revisión. |
| Aceptación del lote | `not-available` | Requiere coordinación/revisor y puerta 4. | Estado `accepted`. | Bloqueante para integración. | Ninguno. | Mantener `in-production`. |
| Schema/CI oficial | `not-available` | No existe implementación autorizada en la línea base. | Validación formal completa y reproducible en CI. | Medio; mitigado por script local. | Validaciones 001–008. | Codex podrá implementarlo en un alcance técnico autorizado. |
| Resolución de fuentes canónicas | `not-verified` | El lote autoriza solo `domain`; no autoriza registros `source`. | Referencias `sources` necesarias para `in-review` o superior. | Bloquea recomendar aprobación si coordinación exige refs canónicas ya materializadas. | Mapa completo en `sources-report.md`. | Coordinar materialización/reutilización antes de elevar fichas. |

Estas validaciones no aprueban contenido ni aceptan el lote.
