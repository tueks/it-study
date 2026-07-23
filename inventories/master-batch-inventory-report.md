# Validación del inventario maestro de lotes

| Campo | Resultado |
|---|---|
| Fecha | `2026-07-21` |
| Autoridad | Responsable del proyecto: asignar de una vez el inventario recomendado |
| Fuente de candidatos | `inventories/initial-terms.csv` |
| Universo | 164 candidatos |
| Asignados | 164 |
| Sin asignar | 0 |
| Duplicados | 0 |
| IDs canónicos previstos | 164 `entity-*`, únicos y sin colisión con contenido canónico |
| Dependencias declaradas | 92 |
| Dependencias sin destino en el universo | 0 |
| Batches registrados | B001–B042, 42/42 |

## Resultado por capacidad

- Dentro del rango de entidades: B006, B010, B011 y B012.
- Bajo el mínimo: B007, B008, B009, B013, B014 y B015.
- Sobre el máximo: B016, B017, B018 y B019.
- Derivados de balance o cobertura: B005 y B020–B023.
- Derivados de entradas aprobadas: B024–B030 y B039–B041.
- Activados por hallazgos: B031 y B042.
- Dossier sin producción ordinaria: B032.
- Extensiones opcionales activadas por vacíos: B033–B038.

## Disposición

La asignación `recommended_batch` se preservó sin mover candidatos silenciosamente. Un batch fuera de rango no inicia autoría hasta que un inventario versionado autorice división o rebalanceo. Las reglas derivadas no reservan entradas ficticias: registran la evidencia exacta que debe activar su inventario.
