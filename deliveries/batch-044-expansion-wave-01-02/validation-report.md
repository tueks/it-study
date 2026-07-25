# Validación previa a revisión — `batch-044-expansion-wave-01-02`

## Estado

`validation-pending-automation`

## Alcance previsto

La validación automática comprobará:

- 12 entidades y 4 fuentes nuevas con frontmatter YAML válido;
- campos comunes obligatorios;
- campos especializados de `model`, `technology` y `standard`;
- IDs y rutas únicos;
- coincidencia exacta con el inventario autorizado;
- dominio, subdominio, tipo, familia, prioridad y lote;
- resolución de fuentes y referencias;
- ausencia de autorreferencias y ciclos de prerequisites;
- aliases incompatibles dentro del lote;
- estados `in-review` / `pending` antes de revisión independiente;
- `npm test` y `npm run build` para detectar regresiones del repositorio.

## Estado editorial esperado

- Entidades: `in-review` / `pending`.
- Fuentes nuevas: `in-review` / `pending`.
- Integración canónica: no realizada.
- Catálogo público: las entradas no deben incorporarse mientras no estén `approved`.

## Puerta

Este reporte se actualizará con el run y los resultados comprobados. No autoriza integración ni publicación.
