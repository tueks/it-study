# Reporte de validación

| ID | Validación | Resultado |
|---|---|---|
| `validation-001` | Cantidad e inventario | 8 archivos, 8 IDs exactos, 0 extras |
| `validation-002` | Identidad | 8 únicos; archivo=ID; 0 colisiones |
| `validation-003` | Campos | 23 campos obligatorios presentes en 8/8 |
| `validation-004` | Hogares | 8 referencias, 8 destinos `approved`, 0 rotas |
| `validation-005` | Aplicaciones | 64 referencias a los 12 dominios, 0 rotas |
| `validation-006` | Fuentes | 28 referencias, 11 IDs canónicos, 0 rotas |
| `validation-007` | Vocabularios | Prioridad, profundidad, estabilidad y estados dentro del inventario controlado |
| `validation-008` | No duplicación | 8 reglas presentes; 0 subdominios o tercer nivel |
| `validation-009` | Relaciones/diseño | 0 `relations[]`, inversas, HTML o propiedades visuales |
| `validation-010` | Diff | `git diff --check` conforme |
| `validation-011` | Estados tras revisión | 8 `approved`; `verificationStatus: verified`; lote `accepted` |

Huella de la entrega aceptada `content/new/`: `2cfda7da2391436c6097cd29175cc3db298f1e6676c7869060e4885bc015c946`.

Limitaciones: no existe schema o CI autorizado; semántica, suficiencia de fuentes, hogares y aplicaciones requieren revisión independiente.

Postintegración: baseline y entrega aceptada `9d36271`; 8/8 archivos coinciden por SHA-256 con `content/taxonomy/disciplines/`; 0 diferencias.
