# Reporte de validación

| Campo | Valor |
|---|---|
| `batchId` | `batch-002-taxonomy-subdomains-core-a` |
| `manifestVersion` | `v1` |
| `deliveryVersion` | `d1` |
| `reportVersion` | `r1` |
| Estado | Completo para validaciones automatizables |

| ID | Validación | Resultado |
|---|---|---|
| `validation-001` | Cantidad e inventario | 18 archivos, 18 IDs exactos, 0 extras |
| `validation-002` | Identidad | ID único global y archivo=ID |
| `validation-003` | Padre | 18 destinos existentes, `type: domain`, `approved` e integrados |
| `validation-004` | Jerarquía | 0 padres múltiples; 0 tercer nivel |
| `validation-005` | Cobertura | 12/12 dominios; distribución 2×6 + 1×6 |
| `validation-006` | Fuentes | 81 referencias; 14 IDs canónicos; 0 sin resolver |
| `validation-007` | Estados | 18 `approved`; lote `accepted`; integración pendiente |
| `validation-008` | Topología | 12 archivos raíz; `content/new/`; `content/modified/.gitkeep` |
| `validation-009` | Formato y diseño | Frontmatter delimitado; sin HTML de presentación; `git diff --check` conforme |

Limitaciones: no existe schema/CI autorizado; la revisión independiente quedó registrada y la integración permanece pendiente.

Huella de `content/new/`: 18 pares `nombre:SHA-256`, ordenados por nombre y unidos con LF, producen `8a2fd9e1f4a8890e77513a8d68f513451b9b393271ff1e00e728bed8aaa0e20b`.
