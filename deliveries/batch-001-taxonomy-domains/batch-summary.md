# Resumen del lote

| Campo | Valor |
|---|---|
| `batchId` | `batch-001-taxonomy-domains` |
| `manifestVersion` | `v2` |
| `deliveryVersion` | `d2` |
| Nombre del reporte | Resumen de producción |
| `reportVersion` | `r2` |
| Fecha | `2026-07-21` |
| Rol responsable | ChatGPT Trabajo |
| Alcance cubierto | Doce fichas `domain`, dieciocho registros `source` y reportes obligatorios reconciliados. |
| Contratos aplicados | Documentos normativos 02–10; contratos `work/` 1.0.0; `inventories/domains.yaml` 1.0. |
| Estado del reporte | `complete`; revisión independiente de `d2` registrada. |
| Limitaciones | El cierre no implica publicación. |
| Evidencia/archivos | `content/new/`; reportes del lote; validaciones registradas. |

## Resumen ejecutivo

La entrega `d2` contiene exactamente los doce dominios y los dieciocho registros `source` autorizados. Cada ficha conserva el ID, nombre, aliases, prioridad, profundidad, estabilidad y semántica de `d1`; el único cambio en las fichas es la incorporación de `sources[]` respaldada por el mapa de afirmaciones. Los treinta registros están `approved` y el lote `accepted` por decisión explícita del Responsable del proyecto.

| Elemento | Registro |
|---|---|
| Objetivo autorizado | Materializar doce fichas `domain`, dieciocho registros `source` usados y referencias de evidencia resueltas. |
| Alcance final | 30 registros nuevos: 12 `domain` y 18 `source`; 0 unidades externas al manifiesto `v2`. |
| Previsto frente a producido | 30 previstos / 30 producidos / diferencia 0. |
| Entradas nuevas | Los 12 IDs `domain-*` y 18 IDs `source-*` reconciliados por `batch-manifest.md` y `sources-report.md`. |
| Entradas modificadas | `none`: no había contenido productivo autorizado para modificación. |
| No producido y motivo | `none` dentro del alcance. Subdominios y disciplinas se excluyeron expresamente. |
| Decisiones aplicadas | `decision-0003-taxonomy-structure`; `decision-0005-content-format-and-identifiers`; `decision-0016-operational-ownership`. |
| Cambios de alcance | `manifestVersion` `v2` autorizado: 18 registros `source` y referencias `sources[]`; sin cambios semánticos a la taxonomía. |
| Principales fuentes | Taxonomía, inventario y modelo internos; CC2020 y fuentes especializadas registradas en `sources-report.md`. |
| Relaciones | 0 objetos `relations[]`; 70 referencias `neighborDomains`; 31 fronteras `overlaps`; `relationship-report.md`. |
| Duplicados | 0 materiales; 24 aliases y 18 identidades de fuente reconciliados; `duplicate-report.md` r3. |
| Candidatos externos | `none`; `new-term-proposals.md`. |
| Preguntas | `none`; revisión independiente, aceptación, integración y cierre completados. |
| Excepciones | `none`; `exceptions-report.md`. |
| Hallazgos | 0 bloqueantes/mayores conocidos por autoría; la severidad final corresponde al revisor. |
| Validaciones | `validation-001`–`validation-013` en `validation-report.md`; `validation-009` corregida por `d2`. |
| Efecto sobre cobertura | 12 fichas y 18 fuentes `approved`, aceptadas e integradas en fuentes canónicas. |
| Riesgos residuales | Mantenimiento futuro sujeto a `decision-0017`; no existe autorización de publicación. |
| Estado reconciliado | `closed`; 30/30 archivos coinciden por hash con fuentes canónicas. |
| Siguiente acción | B002 también está cerrado; continuar con la preparación exacta de B003. |

## Matriz de dominios

| ID | Título | Prioridad | Profundidad | Estabilidad | Vecinos | Solapamientos | Estado editorial |
|---|---|---|---|---|---:|---:|---|
| `domain-fundamentos-computacion` | Fundamentos de computación | essential | contextual-understanding | stable-foundation | 4 | 1 | approved |
| `domain-sistemas-computo-ciberfisicos` | Sistemas de cómputo y sistemas ciberfísicos | essential | contextual-understanding | slow-evolution | 5 | 2 | approved |
| `domain-desarrollo-software` | Desarrollo de software | essential | contextual-understanding | slow-evolution | 6 | 2 | approved |
| `domain-ingenieria-software` | Ingeniería, arquitectura y calidad de software | essential | contextual-understanding | slow-evolution | 6 | 2 | approved |
| `domain-redes-telecomunicaciones` | Redes y telecomunicaciones | essential | contextual-understanding | slow-evolution | 4 | 3 | approved |
| `domain-infraestructura-operacion` | Infraestructura, cloud y operación de servicios | essential | contextual-understanding | slow-evolution | 6 | 3 | approved |
| `domain-ciberseguridad-riesgo` | Ciberseguridad, privacidad y riesgo tecnológico | essential | contextual-understanding | slow-evolution | 6 | 3 | approved |
| `domain-datos-analitica` | Datos y analítica | essential | contextual-understanding | slow-evolution | 6 | 3 | approved |
| `domain-inteligencia-artificial` | Inteligencia artificial | essential | contextual-understanding | slow-evolution | 7 | 3 | approved |
| `domain-integracion-sistemas-empresariales` | Integración y sistemas empresariales | essential | contextual-understanding | slow-evolution | 7 | 3 | approved |
| `domain-producto-experiencia` | Producto digital, análisis de negocio y experiencia humana | essential | contextual-understanding | slow-evolution | 6 | 3 | approved |
| `domain-estrategia-gobierno-liderazgo` | Estrategia, gobierno y liderazgo tecnológico | essential | contextual-understanding | slow-evolution | 7 | 3 | approved |
