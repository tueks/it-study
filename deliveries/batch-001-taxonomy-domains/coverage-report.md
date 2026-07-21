# Reporte de cobertura

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Cobertura del lote |
| `reportVersion` | `r2` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Cobertura producida por doce fichas de dominio y trazabilidad aportada por dieciocho registros de fuente. |
| Contratos aplicados | `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; `work/BATCH-TEMPLATE.md` 1.0.0. |
| Estado del reporte | `complete` para autoría. |
| Limitaciones | Los borradores no cuentan como aprobados ni publicables. |
| Evidencia/archivos | `content/new/*.md`; matriz de dominios de `batch-summary.md`. |

| Dimensión | Línea base anterior | Previsto | Producido | `in-review` | `approved` | Aceptado por lote | Integrado | Publicable | Deuda/pendiente | Evidencia |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Dominio | 0 | 12 | 12 | 0 | 0 | 0 | 0 | 0 | 12 | `content/new/` |
| Fuente | 0 | 18 | 18 | 0 | 0 | 0 | 0 | 0 | 18 pendientes de revisión | `content/new/source-*.md`; `sources-report.md` |
| Subdominio | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 dentro del lote | Exclusión del manifiesto |
| Disciplina | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 dentro del lote | Exclusión del manifiesto |
| Tipo de contenido distinto | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 2 pendientes de revisión | `type: domain`; `type: source` |
| Prioridad distinta | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 pendiente de revisión | `priority: essential` |
| `knowledgeLevel` distinto | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 pendiente de revisión | `contextual-understanding` |
| Estabilidad distinta | 0 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 2 pendientes de revisión | `stable-foundation`; `slow-evolution` |
| Conceptos puente | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 dentro del lote | No autorizado |
| Dependencias materializadas | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 dentro del lote | Los dominios vecinos no son dependencias `requires`. |
| Estructuras editoriales | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 dentro del lote | No autorizado |

## Perfil acumulado del MVP

| Indicador | Mínimo vigente | Objetivo recomendado | Máximo | Actual contable | Variación del lote | Balance/concentración | Disposición |
|---|---:|---:|---:|---:|---:|---|---|
| Dominios aprobados representados | 12 | 12 | 12 | 0 | 0 contable; 12 borradores producidos | Un borrador por cada dominio; sin concentración. | Revisión y aprobación pendientes; no declarar mínimo cumplido. |
| Fichas `domain` producidas | 12 | 12 | 12 | 12 | +12 | Cobertura exacta de los doce IDs. | Producción completa dentro de `v2`; revisión de `d2` pendiente. |
| Registros `source` producidos | No es cuota educativa | 18 usados | 18 | 18 | +18 | Tres autoridades internas y quince externas; una fuente evaluada se mantiene descartada. | Revisar junto con las fichas; no cuentan como entidades educativas del MVP. |

Base de porcentaje: 12 dominios autorizados. Producción: 12/12 = 100 %. Aprobación, aceptación, integración y publicabilidad: 0/12 = 0 %.
