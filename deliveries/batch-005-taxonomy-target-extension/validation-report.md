# Reporte de validación

| ID | Validación | Resultado |
|---|---|---|
| `validation-001` | Inventario y archivos | 16 IDs esperados; 16 archivos exactos; 0 extras |
| `validation-002` | Unicidad global | 16 IDs únicos; 0 colisiones canónicas |
| `validation-003` | Tipos | 12 `subdomain`; 4 `discipline` |
| `validation-004` | Padres y hogares | 16 referencias a 12 dominios canónicos; 0 rotas |
| `validation-005` | Aplicaciones | 34 referencias a dominios canónicos; 0 rotas |
| `validation-006` | Cobertura | 48 subdominios y 12 disciplinas previstos |
| `validation-007` | Fuentes | 77 referencias; 17 IDs canónicos; 0 rotas |
| `validation-008` | Estados | 16 `draft`; lote `in-review` |
| `validation-009` | Límites | 0 tercer nivel, relaciones ordinarias, HTML o propiedades visuales |
| `validation-010` | Diff | `git diff --check` conforme |

Huella reproducible de `content/new/` para la entrega `d1`: `d106c1bd2e456bb9403ca735e553bea0238c3cecf88a632d7ffb49202ab90833`.

Limitación: no existe schema ejecutable autorizado. Las validaciones semánticas, pedagógicas y de suficiencia final pertenecen a revisión independiente.
