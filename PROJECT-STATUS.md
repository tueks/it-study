# IT Study — Estado operativo del proyecto

## Identidad y autoridad

| Campo | Valor |
|---|---|
| Estado del documento | Vigente |
| Fecha de corte | `2026-07-24` |
| Rama verificada | `main` |
| Baseline técnico verificado | `63a0486b0e98003701e9867ac20a6b80495c7d3c` integra B043; los registros de cierre posteriores están en `main`. |
| Estado del registro | B001–B030 `closed`; B031 sin alcance correctivo; B032 pendiente solo de métricas Core Web Vitals; B033–B042 inactivos; B043 `closed`; B044–B112 `authorized`. |
| Autoridad | Responsable del proyecto |
| Decisión aplicable | `decision-0021-recommended-master-plan-v2-execution`; `decision-0024-thousand-entity-expansion`; `decision-0015`, `decision-0018` y `decision-0023` aceptadas. |
| Propósito | Punto de reanudación rápido; no sustituye contratos, inventarios ni reportes de lote. |

Este documento registra el estado operativo comprobado del repositorio. En caso de diferencia, prevalecen las autoridades indicadas en `AGENTS.md`. Cada sesión debe volver a comprobar rama, commit y árbol de trabajo; el commit de corte identifica la evidencia revisada, no congela avances posteriores.

## Estado comprobado

| Elemento | Estado |
|---|---|
| Documentación normativa y contratos `work/` | Aprobados y vigentes. |
| `batch-001-taxonomy-domains` | `closed`; 12 dominios y 18 fuentes `approved`, aceptados e integrados. |
| `batch-002-taxonomy-subdomains-core-a` | `closed`; 18 subdominios `approved`, aceptados e integrados. |
| `batch-003-taxonomy-subdomains-core-b` | `closed`; 18 subdominios `approved`, aceptados e integrados. |
| `batch-004-taxonomy-disciplines-core` | `closed`; 8 disciplinas `approved`, aceptadas e integradas. |
| `batch-005-taxonomy-target-extension` | `closed`; 12 subdominios y 4 disciplinas `approved`, incorporados 16/16 y reconciliados. |
| `batch-006-foundations-core` | `closed`; 10 entidades `approved`, integradas 10/10 en `content/entities/ideas-orientations/` y reconciliadas. |
| `batch-043-expansion-wave-01-01` | `closed`; 12 entidades y 4 fuentes `approved` / `verified`, revisión independiente registrada, pruebas y build conformes, PR #4 integrado. |
| Fuentes canónicas | 22 archivos bajo `content/sources/`. |
| Dominios canónicos | 12 archivos bajo `content/taxonomy/domains/`. |
| Subdominios canónicos | 48 archivos bajo `content/taxonomy/subdomains/`. |
| Disciplinas canónicas | 12 archivos bajo `content/taxonomy/disciplines/`. |
| Entidades canónicas | 176 archivos: 64 `ideas-orientations`, 26 `people-capabilities`, 24 `ways-of-working`, 36 `specifications-implementations`, 14 `results-measurement` y 12 `solutions-structures`. |
| Comparaciones canónicas | 12 archivos `approved` bajo `content/editorial/comparisons/`. |
| Escenarios canónicos | 4 archivos `approved` bajo `content/editorial/scenarios/`. |
| Rutas canónicas | 4 archivos `approved` bajo `content/editorial/learning-paths/`. |
| Integridad de B001–B005 | Lotes `closed`; fuentes y taxonomía integradas con evidencia de reconciliación en sus entregas. |
| Aplicación local | Implementada en `frontend/` con React, TypeScript y Vite. Para B043, `npm test` y `npm run build` fueron conformes en GitHub Actions run `30138342025`; el catálogo generado contenía 176 entidades, 12 dominios y 20 estructuras. El generador fue corregido para excluir archivos normativos `AGENTS.md`. |
| Expansión post-MVP | Meta de 1,000 entidades: 176 canónicas actuales, 12/836 nuevas integradas y 824 pendientes. B043 está cerrado; B044 es el siguiente lote ejecutable. |
| Publicación | No iniciada; ningún cierre de lote equivale a publicación. |

## Autorizaciones maestras de lotes

El Responsable del proyecto autorizó el `2026-07-21` los IDs planificados `batch-003` a `batch-042`, conforme a `work/BATCH-AUTHORIZATION-REGISTER.md` y sin alterar su alcance normativo.

La autorización del MVP:

- reserva los IDs y permite preparar su manifiesto y comenzar producción cuando su puerta de entrada esté satisfecha;
- no satisface dependencias por adelantado;
- no convierte inventarios en contenido `approved`;
- no permite publicación automática.

El Responsable del proyecto autorizó el `2026-07-24` la expansión post-MVP mediante `decision-0024-thousand-entity-expansion` y `docs/11-thousand-entity-expansion-plan.md`.

La autorización de expansión:

- reserva `batch-043` a `batch-112`;
- fija un universo completo de 836 candidatos antes de producir;
- sustituye la aprobación humana por entidad, lote u onda por revisión independiente y validaciones operativas;
- permite clasificación, fuentes, aliases, prerrequisitos, sustituciones e integración ordinarias sin escalar al Responsable del proyecto;
- conserva su intervención para cambios materiales de producto, taxonomía, modelo, audiencia, idioma, meta o publicación;
- no reabre las 164 entidades existentes salvo colisión, referencia rota o defecto que impida integración.

## Próximas acciones ejecutables

B032 conserva su alcance técnico independiente: completar las métricas Core Web Vitals previstas para la aplicación local.

La próxima acción de contenido es iniciar `batch-044-expansion-wave-01-02` conforme a:

- `docs/11-thousand-entity-expansion-plan.md`;
- `work/EXPANSION-PRODUCTION-CONTRACT.md`;
- `work/EXPANSION-WAVE-REGISTER.md`;
- `inventories/entity-expansion-master-v2.yaml`;
- `inventories/expansion-v2/domain-fundamentos-computacion.csv`.

No se requiere una nueva aprobación humana para iniciar o cerrar B044 cuando sus validaciones y revisión independiente sean conformes.

## Puertas y bloqueos preservados

- `decision-0012`, `decision-0013`, `decision-0014` y `decision-0017` permanecen pendientes en su alcance original.
- Un lote que dependa materialmente de cualquiera de ellas detiene solo ese alcance.
- Las relaciones ordinarias no se inventan ni se persisten mediante una representación física todavía no decidida.
- La expansión no modifica arquitectura, framework, UI ni despliegue; la corrección de B043 se limitó al descubrimiento de archivos de contenido del generador.
- B031 no tiene hallazgos correctivos tras preflight: las 164 entidades del baseline, 12 comparaciones, 4 escenarios y 4 rutas permanecen sin estados `draft` ni `pending`.
- Las nuevas entidades cuentan como canónicas únicamente después de producción, revisión independiente, integración y cierre técnico; B043 ya completó estas puertas.
- La advertencia de bundle superior a 500 kB observada durante el build de B043 es no bloqueante para contenido y queda disponible para optimización técnica separada.

## Protocolo de reanudación rápida

1. Leer `AGENTS.md` y este documento completos.
2. Ejecutar `git status --short --branch` y comprobar el commit actual.
3. Para el MVP y la aplicación, consultar las decisiones y contratos originales aplicables.
4. Para la expansión, leer `docs/11-thousand-entity-expansion-plan.md` y `docs/decisions/decision-0024-thousand-entity-expansion.md`.
5. Abrir `work/EXPANSION-WAVE-REGISTER.md` y localizar el primer lote no cerrado; actualmente B044.
6. Cargar únicamente los candidatos de ese lote desde los shards declarados por `inventories/entity-expansion-master-v2.yaml`.
7. Aplicar `work/EXPANSION-PRODUCTION-CONTRACT.md`; no solicitar aprobación humana salvo una excepción material.
8. Mantener producción, revisión e integración como roles distintos y registrar evidencia del cierre.

## Mantenimiento

Actualizar este documento después de cada onda completada, cambio de decisión, transición material de la expansión o cambio de próxima acción. Registrar hechos comprobados y referencias estables; no copiar aquí contenido editorial ni convertir este archivo en una autoridad paralela.
