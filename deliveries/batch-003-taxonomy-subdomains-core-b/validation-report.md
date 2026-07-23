# Reporte de validación

| Campo | Valor |
|---|---|
| `batchId` | `batch-003-taxonomy-subdomains-core-b` |
| Entrega | `v1` / `d2` / `r2` |
| Estado | Completo para validaciones automatizables |

| ID | Validación | Resultado |
|---|---|---|
| `validation-001` | Cantidad e inventario | 18 archivos, 18 IDs exactos, 0 extras |
| `validation-002` | Identidad | 18 IDs únicos; archivo=ID; 0 colisiones con contenido o entregas previas |
| `validation-003` | Campos obligatorios | 25 campos comunes/taxonómicos presentes en 18/18 |
| `validation-004` | Padres | 18 referencias; 12 destinos canónicos `domain`; 0 sin resolver |
| `validation-005` | Jerarquía y relaciones | 18 padres únicos; 0 tercer nivel; 0 relaciones ordinarias |
| `validation-006` | Cobertura | Aporte 18; acumulado previsto 36; exactamente 3 por dominio |
| `validation-007` | Fuentes | 84 referencias; 15 IDs canónicos; 0 sin resolver |
| `validation-008` | Estados y gobierno | 18 `approved`; `verificationStatus: verified`; lote `accepted` por decisión independiente |
| `validation-009` | Contenido prohibido | 0 placeholders; 0 HTML; 0 propiedades visuales; 0 contenido fuera de alcance |
| `validation-010` | Formato del diff | `git diff --check` conforme |
| `validation-011` | Vocabularios controlados | 18 prioridades, profundidades, estabilidades y estados dentro de `inventories/classifications.yaml`; defecto `fast-evolution` de `d1` corregido en `d2` |

Huella de la entrega aceptada `content/new/` para `d2`: los 18 pares `nombre:SHA-256`, ordenados por nombre y unidos con LF, producen `e34c04709564d9c81f90d7658972e6e45710a07d7e0d1ba581eb5e69a4bf3c76`.

Limitaciones: no existe schema o CI autorizado; las validaciones semánticas, editoriales, de suficiencia de fuentes y de relevancia final pertenecen a revisión independiente.

Postintegración: baseline y entrega aceptada `9d36271`; 18/18 archivos coinciden por SHA-256 con `content/taxonomy/subdomains/`; cobertura canónica total 36; 0 diferencias.
