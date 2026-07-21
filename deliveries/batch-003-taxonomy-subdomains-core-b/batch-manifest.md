# IT Study — Manifiesto de `batch-003-taxonomy-subdomains-core-b`

## Identidad

| Campo | Valor |
|---|---|
| `batchId` | `batch-003-taxonomy-subdomains-core-b` |
| Título | Subdominios mínimos, parte B |
| Objetivo | Crear 18 subdominios para completar 36 acumulados y exactamente tres por dominio. |
| Estado del lote | `in-review` |
| Fase | `F1` — Taxonomía materializada |
| Tipo autorizado | Taxonomía materializada |
| Nivel | Mínimo obligatorio |
| `manifestVersion` | `v1` |
| `contractVersion` | `1.0` |
| Fecha de autorización | `2026-07-21` |
| Autoridad | Responsable del proyecto; `decision-0020-batch-plan-authorization` |
| Responsable de producción | Codex / chat de producción autorizado |
| Responsable de revisión | Revisor independiente de la autoría |

## Alcance autorizado

| Campo | Valor |
|---|---|
| Inventario exacto | `inventories/batch-003-taxonomy-subdomains-core-b.yaml` |
| Unidades | Los 18 IDs enumerados en el inventario exacto; ninguna unidad adicional. |
| Tipo permitido | `subdomain` |
| Padre | Un único `parentDomain` canónico por registro. |
| Cantidad objetivo/máxima | 18/18 |
| Cobertura resultante | 36 subdominios acumulados; 3 por cada uno de los 12 dominios. |
| Estado editorial durante autoría | `draft` |
| Relaciones ordinarias | 0; la pertenencia taxonómica se expresa solo mediante `parentDomain`. |
| Fuentes | Reutilizar registros canónicos integrados; cualquier fuente nueva exige trazabilidad y permanecer dentro de este alcance de evidencia. |
| Archivos modificables | Solo el paquete de B003 durante producción; fuentes canónicas se modifican únicamente tras aceptación y handoff. |

## Dependencias y límites

| Campo | Valor |
|---|---|
| Dependencia obligatoria | B002 `closed`; 12 dominios y 18 subdominios canónicos `approved`. |
| Autoridades | Docs 02–10; contratos `work/`; decisiones 0003, 0005, 0016, 0019 y 0020. |
| Inclusiones | Definición, propósito, alcance, exclusiones, pertenencia, fuentes y gobierno de las 18 unidades. |
| Exclusiones | Tercer nivel, disciplinas, entidades educativas ordinarias, relaciones ordinarias, nuevos dominios, candidatos extra, UI, arquitectura y derivados. |
| Criterio de entrada | Satisfecho: ID, inventario, alcance, dependencia, límites, entregables y revisión definidos. |
| Criterio de salida de producción | 18 borradores completos; IDs, padres, fuentes, duplicados y conteos reconciliados; reportes completos. |
| Criterio de aceptación | Revisión independiente 18/18; cero bloqueantes o mayores abiertos; decisión explícita del Responsable del proyecto. |
| Condición de detención | Cualquier necesidad de cambiar candidatos, padres, cantidad, taxonomía o una decisión pendiente. |
| Bloqueos iniciales | `none`; preflight repetido con 18 IDs únicos, 0 colisiones, 18 padres `approved`, 18 fuentes canónicas disponibles y topología 12/12. |

## Entregables

Se exigen los doce reportes y la topología de `work/BATCH-TEMPLATE.md`. Los archivos iniciales del paquete registran `pending` porque no existe contenido producido todavía; no representan resultados anticipados.

## Historial

| Estado anterior | Estado nuevo | Fecha | Rol | Evidencia | Comentario |
|---|---|---|---|---|---|
| `proposed` | `authorized` | `2026-07-21` | Responsable del proyecto | `decision-0020-batch-plan-authorization`; inventario exacto v1 | Habilita el inicio de producción tras repetir preflight; no aprueba contenido. |
| `authorized` | `in-production` | `2026-07-21` | Codex | Preflight B003: 18 IDs únicos, 0 colisiones, 18 padres válidos y paquete completo. | Comienza investigación y redacción; no cambia estados editoriales finales. |
| `in-production` | `in-review` | `2026-07-21` | Codex | Entrega `d1` preservada en `a667cf8`: 18 borradores, reportes 12/12 y validaciones 001–010 conformes. | Habilita revisión independiente; no aprueba ni acepta contenido. |
