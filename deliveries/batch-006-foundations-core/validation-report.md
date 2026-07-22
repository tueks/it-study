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
| `validation-008` | Estados | 10 `approved`; 10 `verified`; lote `accepted` |
| `validation-009` | Límites | 0 HTML, propiedades visuales, identidades extra o relaciones no autorizadas |
| `validation-010` | Diff | `git diff --check` conforme |

Huella reproducible de la entrega revisada original `content/new/`: `73b31b6e5199b0ef53e11dc90a2e98d92105880dac3b08a502f6d2970322fa28`. Huella de la promoción aceptada: `6e01412c67f1261e0cff38af0922900df0b213c94158eae8481def0e62044766`.

Preflight de integración: contenido, referencias y estados conformes; detenido antes de escribir porque `docs/03-content-model.md` presenta `content/entities/<family>/` como estructura general propuesta y `work/CONTENT-PRODUCTION-CONTRACT.md` reserva la estructura canónica posterior. Se requiere autoridad explícita para crear el destino.

Limitación: no existe schema ejecutable autorizado. Las validaciones semánticas, pedagógicas y de suficiencia final pertenecen a revisión independiente.
