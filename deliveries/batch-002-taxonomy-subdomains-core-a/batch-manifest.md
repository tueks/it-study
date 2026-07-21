# IT Study — Manifiesto de `batch-002-taxonomy-subdomains-core-a`

## Identidad

| Campo | Valor |
|---|---|
| `batchId` | `batch-002-taxonomy-subdomains-core-a` |
| Título | Subdominios mínimos, parte A |
| Estado del lote | `closed` |
| Fase | `F1` — Taxonomía materializada |
| Nivel | mínimo obligatorio |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| Fecha de autorización | `2026-07-21` |
| Autoridad | Responsable del proyecto |
| Responsable de producción | Codex |
| Revisión | Independiente completa; decisión `accepted` registrada |

## Alcance autorizado

Crear exactamente los 18 subdominios enumerados en `inventories/batch-002-taxonomy-subdomains-core-a.yaml`, todos con `type: subdomain`, un único `parentDomain` canónico y sin tercer nivel. El inventario representa los 12 dominios; seis reciben dos unidades por carga fundacional y seis reciben una. Ninguna asignación cambia los 48 candidatos aprobados de `inventories/domains.yaml`.

| Magnitud | Autorizado | Máximo | Producido | Aprobado | Integrado |
|---|---:|---:|---:|---:|---:|
| Subdominios nuevos | 18 | 18 | 18 | 18 | 18 |
| Padres únicos | 18 | 18 | 18 | 0 | 0 |
| Relaciones ordinarias | 0 | 0 | 0 | 0 | 0 |

## Dependencias y límites

| Campo | Valor |
|---|---|
| Dependencias obligatorias | `batch-001-taxonomy-domains` integrado en `733d9ae`; 12 dominios canónicos `approved`; contratos vigentes. |
| Fuentes | Autoridades internas y fuentes canónicas ya integradas aplicables. |
| Inclusiones | Definición, propósito, alcance, exclusiones, pertenencia, promoción, fuentes y gobierno de 18 subdominios. |
| Exclusiones | No crear tercer nivel, disciplinas, entidades educativas, relaciones ordinarias, aliases no autorizados, nuevos dominios ni derivados. |
| Criterio de salida de producción | 18 borradores completos; IDs, padres, fuentes y conteos resueltos; reportes obligatorios completos. |
| Condición de revisión | Los 18 registros permanecen `draft` y el lote `in-production` hasta revisión independiente. |
| Bloqueos | `none` al iniciar. |

## Historial

| Estado anterior | Estado nuevo | Fecha | Rol | Evidencia |
|---|---|---|---|---|
| `proposed` | `authorized` | `2026-07-21` | Responsable del proyecto | Autorización general de batches y coincidencia exacta con autoridades. |
| `authorized` | `in-production` | `2026-07-21` | Codex | Inventario exacto, IDs, dependencias y duplicados comprobados. |
| `in-production` | `in-review` | `2026-07-21` | Responsable del proyecto | Entrega `d1` preservada en `e09d446`; revisión completa 18/18. |
| `in-review` | `accepted` | `2026-07-21` | Responsable del proyecto | Aprobación explícita; `review-report.md` r1; cero hallazgos abiertos. |
| `accepted` | `integrated` | `2026-07-21` | Codex / responsable de integración | Entrega aceptada `15b2dbc`; 18 archivos canónicos con bytes idénticos y referencias resueltas. |
| `integrated` | `closed` | `2026-07-21` | Responsable del proyecto | Instrucción explícita de reconciliación; 18/18 archivos idénticos; `PROJECT-STATUS.md`. |

Lote cerrado tras reconciliación de integración, cobertura y siguientes acciones. La publicación permanece `pending` y requiere puertas independientes.
