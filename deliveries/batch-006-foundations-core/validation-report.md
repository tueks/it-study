# Reporte de validación

| ID | Validación | Resultado |
|---|---|---|
| `validation-001` | Inventario y archivos | 10 IDs esperados; 10 archivos exactos; 0 extras |
| `validation-002` | Unicidad global | 10 IDs únicos; 0 colisiones canónicas |
| `validation-003` | Tipos | 8 `concept`; 1 `model`; 1 `paradigm` |
| `validation-004` | Campos | Campos comunes y contenido contextual presentes en 10/10 |
| `validation-005` | Taxonomía | 23 referencias de autoridad; 0 rotas |
| `validation-006` | Dependencias | 4 destinos internos; 0 rotos; 0 ciclos |
| `validation-007` | Fuentes | 30 referencias; 5 IDs canónicos; 0 rotas |
| `validation-008` | Estados | 10 `draft`; 10 `pending`; lote `in-review` |
| `validation-009` | Límites | 0 HTML, propiedades visuales, identidades extra o relaciones no autorizadas |
| `validation-010` | Diff | `git diff --check` conforme |

Huella reproducible de `content/new/` para la entrega `d1`: `73b31b6e5199b0ef53e11dc90a2e98d92105880dac3b08a502f6d2970322fa28`.

Limitación: no existe schema ejecutable autorizado. Las validaciones semánticas, pedagógicas y de suficiencia final pertenecen a revisión independiente.
