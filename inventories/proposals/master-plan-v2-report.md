# Plan maestro v2 — reporte para revisión

Estado: **propuesto para revisión**. No autoriza todavía producción editorial.

## Resultado

- 164/164 candidatos asignados exactamente una vez.
- 18 batches B006–B023 dentro de sus rangos autorizados.
- 79 candidatos rebalanceados con origen y destino trazables.
- B005 propuesto con 12 subdominios y 4 disciplinas derivados de vacíos verificables.
- 18 conceptos puente preservados en el objetivo.
- 0 dependencias activas hacia una onda posterior.
- 0 ciclos de `requires`.
- Se propone reemplazar `entity-data-pipeline requires entity-extract-transform-load` por `entity-extract-transform-load applies-to entity-data-pipeline`; requiere aprobación explícita en esta revisión.
- 478 vínculos lógicos: 164 de dominio, 164 de subdominio, 50 aplicaciones secundarias, 8 clasificaciones disciplinares, 91 prerrequisitos candidatos y 1 aplicación correctiva propuesta.

## Orden de ejecución y distribución

| Onda | Batch | Entidades |
|---:|---|---:|
| 1 | `batch-006-foundations-core` | 10 |
| 2 | `batch-007-foundations-bridges` | 8 |
| 3 | `batch-008-systems-networking-core` | 10 |
| 4 | `batch-009-software-construction-core` | 9 |
| 5 | `batch-010-software-engineering-core` | 9 |
| 6 | `batch-011-infrastructure-security-core` | 10 |
| 7 | `batch-012-data-ai-core` | 10 |
| 8 | `batch-013-integration-enterprise-core` | 9 |
| 9 | `batch-014-product-human-experience-core` | 9 |
| 10 | `batch-015-strategy-governance-core` | 9 |
| 11 | `batch-022-transversal-depth-extension` | 8 |
| 12 | `batch-016-people-capabilities-core` | 10 |
| 13 | `batch-017-ways-of-working-core` | 10 |
| 14 | `batch-018-specifications-implementations-core` | 9 |
| 15 | `batch-019-artifacts-measurement-core` | 8 |
| 16 | `batch-020-domain-balance-extension-a` | 10 |
| 17 | `batch-021-domain-balance-extension-b` | 10 |
| 18 | `batch-023-selective-implementation-extension` | 6 |

## Puerta de revisión

La aprobación del Responsable del proyecto autorizará los 164 IDs y asignaciones v2, el inventario B005 y la sustitución relacional puntual indicada. Las relaciones editoriales siguen requiriendo fuentes y revisión durante su batch; el mapa lógico no aprueba contenido futuro.
