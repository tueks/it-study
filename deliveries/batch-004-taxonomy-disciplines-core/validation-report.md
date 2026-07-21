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

Huella de `content/new/`: `0803294dc4a09413ce30226e7eb80f8ac48d11fdcfc97c2a3294f93be1e29b65`.

Limitaciones: no existe schema o CI autorizado; semántica, suficiencia de fuentes, hogares y aplicaciones requieren revisión independiente.
