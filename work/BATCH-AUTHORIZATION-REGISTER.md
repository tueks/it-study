# IT Study — Registro maestro de autorización de lotes

## Autoridad y alcance

| Campo | Valor |
|---|---|
| Estado | Aprobado y vigente |
| Versión | `1.0.0` |
| Fecha | `2026-07-21` |
| Autoridad | Responsable del proyecto |
| Decisión | `decision-0020-batch-plan-authorization` |
| Plan autorizado | B001–B032 base/objetivo y B033–B042 opcionales de `docs/08-production-batches.md` |

Este registro materializa la autorización expresa del Responsable del proyecto. No reemplaza el manifiesto exacto de cada lote. Autoriza preparar el paquete y pasar a producción únicamente cuando la puerta de entrada del lote esté satisfecha y el manifiesto o instrucción equivalente contenga alcance, candidatos o criterio autorizado, límites, dependencias, entregables y revisión.

## Reglas comunes no exceptuables

- Se conserva literalmente el objetivo, nivel, tipo, fase, cantidades, dependencias, criterios de salida y riesgos de la fila correspondiente de `docs/08-production-batches.md`.
- Los candidatos concretos se seleccionan solo desde inventarios aprobados o mediante una propuesta revisada y autorizada; se registran antes de redactar.
- Los IDs de contenido se reservan y validan antes de trabajo paralelo.
- La producción comienza en secuencia de dependencias; autorización no significa puerta satisfecha.
- La revisión es independiente de la autoría. Aceptación, integración, cierre y publicación requieren decisiones separadas.
- No se resuelven por implicación las decisiones 0012–0015, 0017 o 0018.
- Los lotes de corrección o máximo solo se activan si existe su hallazgo o necesidad demostrada.
- Si el alcance exacto no puede determinarse desde autoridades e inventarios, el lote permanece autorizado pero bloqueado en preflight; no se inventan unidades.

## Registro acumulado

| Lotes | Autorización | Puerta actual | Condición para iniciar producción |
|---|---|---|---|
| B001–B002 | Ejecutados y reconciliados | `closed` | No reabrir; cualquier cambio usa lote de corrección. |
| B003 | Cerrado | Completado | 18 subdominios aceptados, integrados en `f079376` y cierre autorizado por el Responsable del proyecto. |
| B004 | Cerrado | Completado | 8 disciplinas aceptadas, integradas en `f079376` y cierre autorizado por el Responsable del proyecto. |
| B005 | Autorizado | Diferido dentro del plan recomendado | No existe inventario recomendado concreto en las fuentes de planificación; no producir relleno taxonómico. |
| B006 | Inventario autorizado | Preflight bloqueado parcialmente | 10 candidatos recomendados materializados en `inventories/batch-006-foundations-core.yaml`; faltan inventario exacto de 12–20 relaciones y reconciliación de tres dependencias hacia Algoritmo en B007. |
| B007–B023 | Autorizados | Dependientes | Cumplir en orden las dependencias F2–F4 y materializar el manifiesto exacto desde inventarios aprobados. |
| B024–B030 | Autorizados | Dependientes de estructuras aprobadas | Comparaciones, escenarios y rutas solo sobre entradas `approved` y destinos existentes. |
| B031 | Autorizado por activador | Bloqueado hasta hallazgos | Hallazgos acumulados concretos, alcance de corrección y rollback. |
| B032 | Autorizado | Dependiente de cierre | Cobertura mínima/objetivo aplicable integrada, decisiones y deuda reconciliadas; no autoriza publicar. |
| B033–B038 | Autorizados opcionales | Bloqueados por objetivo y necesidad | Objetivo B001–B032 cerrado, vacío demostrado, manifiesto exacto y respeto de máximos. |
| B039–B041 | Autorizados opcionales | Bloqueados por objetivo y necesidad | Estructuras objetivo aceptadas y necesidad adicional demostrada sin superar máximos. |
| B042 | Autorizado por activador | Bloqueado hasta hallazgos | Hallazgos producidos por B033–B041 y alcance correctivo exacto. |

## IDs reservados y autorizados

`batch-003-taxonomy-subdomains-core-b`, `batch-004-taxonomy-disciplines-core`, `batch-005-taxonomy-target-extension`, `batch-006-foundations-core`, `batch-007-foundations-bridges`, `batch-008-systems-networking-core`, `batch-009-software-construction-core`, `batch-010-software-engineering-core`, `batch-011-infrastructure-security-core`, `batch-012-data-ai-core`, `batch-013-integration-enterprise-core`, `batch-014-product-human-experience-core`, `batch-015-strategy-governance-core`, `batch-016-people-capabilities-core`, `batch-017-ways-of-working-core`, `batch-018-specifications-implementations-core`, `batch-019-artifacts-measurement-core`, `batch-020-domain-balance-extension-a`, `batch-021-domain-balance-extension-b`, `batch-022-transversal-depth-extension`, `batch-023-selective-implementation-extension`, `batch-024-comparisons-core-a`, `batch-025-comparisons-core-b`, `batch-026-comparisons-target`, `batch-027-scenarios-core-a`, `batch-028-scenarios-core-b`, `batch-029-learning-paths-core-a`, `batch-030-learning-paths-core-b`, `batch-031-coverage-correction`, `batch-032-publication-readiness`, `batch-033-taxonomy-maximum-extension`, `batch-034-domain-maximum-extension-a`, `batch-035-domain-maximum-extension-b`, `batch-036-domain-maximum-extension-c`, `batch-037-domain-maximum-extension-d`, `batch-038-specialized-emerging-extension`, `batch-039-comparisons-maximum`, `batch-040-scenarios-maximum`, `batch-041-learning-paths-maximum` y `batch-042-maximum-coverage-correction`.

Los nombres anteriores son IDs de lote, no IDs de contenido. Las divisiones y correcciones derivadas solo se crean conforme a la convención aprobada y con alcance registrado.

## Delegación operativa

Se autoriza a Codex y a los chats de producción a preparar manifiestos, investigar, producir borradores y mantener reportes dentro de cada lote habilitado. Esta delegación no incluye aprobación editorial, aceptación, integración no validada, cierre, publicación, cambio de taxonomía, ampliación de cantidades ni resolución de decisiones pendientes. El Responsable del proyecto conserva la autoridad final.
