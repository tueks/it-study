# Reporte de validación

| Campo | Valor |
|---|---|
| `batchId` | `batch-003-taxonomy-subdomains-core-b` |
| Entrega | `v1` / `d1` / `r1` |
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
| `validation-008` | Estados y gobierno | 18 `draft`; `verificationStatus: pending`; lote `in-review` |
| `validation-009` | Contenido prohibido | 0 placeholders; 0 HTML; 0 propiedades visuales; 0 contenido fuera de alcance |
| `validation-010` | Formato del diff | `git diff --check` conforme |

Huella de `content/new/`: los 18 pares `nombre:SHA-256`, ordenados por nombre y unidos con LF, producen `a3c9315b208a341ab4e8f3efb56625b71ff11b0a40de08a55683cff2c0e5d617`.

Limitaciones: no existe schema o CI autorizado; las validaciones semánticas, editoriales, de suficiencia de fuentes y de relevancia final pertenecen a revisión independiente.
