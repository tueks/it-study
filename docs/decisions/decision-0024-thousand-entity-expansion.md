# decision-0024-thousand-entity-expansion — Expansión autónoma a 1,000 entidades

| Campo | Valor |
|---|---|
| `id` | `decision-0024-thousand-entity-expansion` |
| `title` | Expansión autónoma a 1,000 entidades |
| `status` | `accepted` |
| `decisionType` | `change` |
| `decisionAreas` | `product`, `operational`, `editorial`, `taxonomy`, `quality` |
| `dateProposed` | `2026-07-24` |
| `dateDecided` | `2026-07-24` |
| `effectiveFrom` | `2026-07-24` |
| `decisionMaker` | Responsable del proyecto |
| `owners` | Responsable del proyecto; coordinación; producción; revisión independiente; Codex |
| `implementationStatus` | `in-progress` |
| `authorityRefs` | `docs/00-project-charter.md`; `docs/01-scope-and-audience.md`; `docs/02-taxonomy.md`; `docs/03-content-model.md`; `docs/04-editorial-guidelines.md`; `docs/07-mvp-definition.md`; `docs/08-production-batches.md`; `docs/09-quality-criteria.md`; `docs/11-thousand-entity-expansion-plan.md` |
| `evidenceRefs` | Instrucción explícita del Responsable del proyecto del `2026-07-24`; auditoría de cobertura sobre el corpus de 164 entidades |
| `relatedDecisions` | `decision-0001-project-purpose`; `decision-0002-audience-depth`; `decision-0016-operational-ownership`; `decision-0021-recommended-master-plan-v2-execution`; `decision-0023-local-static-application-architecture` |
| `supersedes` | Parcialmente `decision-0021-recommended-master-plan-v2-execution` en cantidad, aceptación por onda y producción posterior al corpus de 164 entidades. Parcialmente `decision-0016-operational-ownership` solo en la delegación operativa definida aquí; no sustituye la autoridad final de producto ni publicación. |

## Contexto

El corpus recomendado del MVP fue completado con 164 entidades y una aplicación local funcional. La auditoría posterior confirmó que esa cantidad valida el producto, pero no cubre con suficiente amplitud el vocabulario transversal de IT.

El proceso del MVP exigía inventarios y autorizaciones repetidas, aceptación humana por onda y validaciones técnicas detalladas por parte del Responsable del proyecto. Esa participación no corresponde con el objetivo del responsable, quien desea aprobar el sistema de trabajo y delegar la selección, clasificación y calidad ordinaria del contenido.

## Problema

¿Cómo ampliar IT Study a una referencia transversal sólida sin obligar al Responsable del proyecto a revisar cientos de entidades, clasificaciones, aliases, fuentes o lotes?

## Decisión

1. La meta post-MVP es de **1,000 entidades canónicas totales**, incluyendo las 164 existentes.
2. Se autoriza un inventario maestro único de **836 entidades nuevas**, más un inventario de reserva que no aumenta la meta.
3. El inventario maestro se define completo antes de la producción y se divide en diez ondas y lotes técnicos.
4. El Responsable del proyecto aprueba esta política y no aprueba individualmente entidades, fuentes, clasificaciones, lotes u ondas.
5. Producción puede seleccionar fuentes, redactar, clasificar, asignar aliases y prerrequisitos, detectar duplicados y corregir hallazgos.
6. Revisión independiente puede aprobar operativamente contenido conforme y devolver contenido defectuoso. Productor y revisor deben ser roles distintos para la misma unidad.
7. Codex puede validar, integrar y cerrar automáticamente lotes técnicos conformes dentro de este inventario.
8. Los lotes técnicos no requieren manifiesto individual completo ni autorización humana; el registro de ondas y la fila del inventario constituyen el alcance exacto.
9. Un candidato duplicado o inadecuado puede sustituirse por otro del inventario de reserva del mismo dominio, dejando trazabilidad.
10. Las 164 entidades existentes no se reabren salvo colisión directa, referencia rota o defecto que impida la integración.
11. Solo cambios materiales de producto, taxonomía, modelo, audiencia, idioma, meta o publicación regresan al Responsable del proyecto.
12. La producción de comparaciones, escenarios y rutas adicionales queda fuera de esta decisión y puede planificarse después.

## Justificación

La meta de 1,000 ofrece una cobertura transversal sólida sin convertir IT Study en una enciclopedia difícil de mantener. Un inventario único evita el ciclo de agregar y aprobar candidatos lote por lote. La revisión independiente y las validaciones conservan control de calidad, mientras la delegación elimina aprobaciones que no aportan valor al responsable.

## Alternativas consideradas

- **Mantener el proceso del MVP:** descartado por su carga operativa y porque obliga a revisar decisiones técnicas masivas.
- **Aprobar cada onda:** descartado; reduce lotes, pero conserva pausas innecesarias.
- **Generar sin inventario:** descartado por riesgo de duplicación, desequilibrio y alcance abierto.
- **Meta de 1,500 inmediata:** descartada como primera expansión; 1,000 permite validar cobertura amplia antes de una nueva auditoría.
- **Revisar primero las 164 entidades:** descartado por decisión expresa del Responsable del proyecto.

## Consecuencias positivas

- Existe una única meta y un único universo planificado.
- La producción puede avanzar sin pausas por aprobaciones ordinarias.
- El Responsable del proyecto interviene solo en decisiones materiales.
- Se conservan trazabilidad, revisión independiente y validación.
- La aplicación puede crecer sin cambiar su arquitectura editorial.

## Consecuencias negativas

- El volumen exige automatización y disciplina de inventario.
- Errores sistemáticos del productor podrían propagarse si la revisión independiente es débil.
- El inventario puede requerir sustituciones al investigar términos específicos.
- La cantidad de fuentes y el tiempo de mantenimiento aumentarán.

## Riesgos y mitigaciones

- **Producción por cuota:** se mitiga con candidatos de reserva, valor educativo y revisión por cobertura.
- **Duplicados semánticos:** se mitiga mediante comprobación previa de nombres, aliases y definiciones.
- **Sesgo hacia herramientas:** se mitiga priorizando conceptos, prácticas y estándares.
- **Autoaprobación:** se mitiga separando productor y revisor por rol.
- **Bloqueos recurrentes:** se mitiga limitando las excepciones a cambios materiales explícitos.

## Artefactos afectados

- `docs/11-thousand-entity-expansion-plan.md`;
- `work/EXPANSION-PRODUCTION-CONTRACT.md`;
- `work/EXPANSION-WAVE-REGISTER.md`;
- `inventories/entity-expansion-master-v2.yaml`;
- `inventories/expansion-v2/`;
- `inventories/entity-expansion-reserve-v2.csv`;
- entregas de `batch-043` a `batch-112`;
- índices y derivados del frontend después de cada integración.

## Implementación

La decisión queda aplicada inicialmente al registrar el plan, el contrato, el inventario maestro y las ondas. La producción de fichas comienza en una ejecución posterior sobre `batch-043-expansion-wave-01-01`.

## Rollback

Detener lotes no iniciados, conservar inventarios, reportes y entidades ya integradas, y registrar una decisión sustituta. No se eliminan decisiones históricas ni se reutilizan IDs o números de lote.
