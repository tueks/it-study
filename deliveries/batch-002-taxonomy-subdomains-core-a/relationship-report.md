# Reporte de relaciones

| Campo | Valor |
|---|---|
| `batchId` | `batch-002-taxonomy-subdomains-core-a` |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| `reportVersion` | `r1` |
| Estado | Completo para autoría |

| Clase | Cantidad | Persistencia | Evidencia |
|---|---:|---|---|
| `parentDomain` | 18 | Campo de autoridad en cada subdominio | Inventario del lote y dominios canónicos |
| `contains-subdomain` | 18 derivables | No persistida | Inversa derivable de `parentDomain` |
| Relaciones ordinarias | 0 | No aplica | Excluidas por manifiesto |

Todos los destinos existen, están `approved` e integrados. No se usa `related-to`, no se persisten inversas y no se resuelven `decision-0012` ni `decision-0013`.
