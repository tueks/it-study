# IT Study — Estado operativo del proyecto

## Identidad y autoridad

| Campo | Valor |
|---|---|
| Estado del documento | Vigente |
| Fecha de corte | `2026-07-21` |
| Rama verificada | `codex/batches-production` |
| Baseline técnico verificado | `a4351cc` — cierre reconciliado de `batch-005` |
| Estado del registro | B001–B016 y B022 `closed`; B017 `in-review`; B018–B021 y B023 autorizados según orden v2; B033–B042 inactivos. |
| Autoridad | Responsable del proyecto |
| Decisión aplicable | `decision-0021-recommended-master-plan-v2-execution` |
| Propósito | Punto de reanudación rápido; no sustituye contratos, manifiestos ni reportes de lote. |

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
| Fuentes canónicas | 18 archivos bajo `content/sources/`. |
| Dominios canónicos | 12 archivos bajo `content/taxonomy/domains/`. |
| Subdominios canónicos | 48 archivos bajo `content/taxonomy/subdomains/`. |
| Disciplinas canónicas | 12 archivos bajo `content/taxonomy/disciplines/`. |
| Entidades canónicas | 111 archivos: 51 `ideas-orientations`, 26 `people-capabilities`, 11 `ways-of-working`, 11 `solutions-structures`, 8 `specifications-implementations` y 4 `results-measurement`. |
| Integridad de B001–B005 | Lotes `closed`; fuentes y taxonomía integradas con evidencia de reconciliación en sus entregas. |
| Aplicación web | No implementada ni autorizada por implicación. |
| Publicación | No iniciada; ningún cierre de lote equivale a publicación. |

## Autorización maestra de lotes

El Responsable del proyecto autorizó el `2026-07-21` todos los IDs planificados `batch-003` a `batch-042`, conforme a `work/BATCH-AUTHORIZATION-REGISTER.md` y sin alterar su alcance normativo.

La autorización:

- reserva los IDs y permite preparar su manifiesto y comenzar producción cuando su puerta de entrada esté satisfecha;
- no satisface dependencias por adelantado;
- no selecciona silenciosamente términos, relaciones, fuentes o IDs de contenido;
- exige que el manifiesto o una instrucción equivalente enumere el alcance exacto antes de redactar;
- no convierte inventarios en contenido `approved`;
- no permite autoaceptación ni publicación; `decision-0021` permite a Codex integrar y cerrar automáticamente cada onda solo después de su aceptación expresa y de validaciones conformes;
- mantiene B033–B042 condicionados al cierre del objetivo recomendado, evidencia de necesidad y máximos vigentes.

## Próxima acción ejecutable

Obtener la aceptación editorial de B017 d1; después, promover, integrar, validar, reconciliar y cerrar sus diez fichas automáticamente.

La taxonomía alcanzó y cerró el objetivo recomendado de F1: 48 subdominios y 12 disciplinas. B006 inicia la producción de entidades ordinarias sin activar B033–B042 ni resolver decisiones pendientes.

## Puertas y bloqueos preservados

- `decision-0012`, `decision-0013`, `decision-0014`, `decision-0015`, `decision-0017` y `decision-0018` permanecen `proposed`.
- Un lote que dependa materialmente de cualquiera de ellas detiene solo ese alcance.
- Las relaciones ordinarias no se inventan ni se persisten mediante una representación física todavía no decidida.
- Arquitectura, framework, UI, build, despliegue y métricas técnicas finales siguen fuera del alcance actual.
- B024–B030 requieren entradas aprobadas suficientes; B032 requiere todas las puertas acumuladas; B033–B042 requieren además sus activadores opcionales.

## Protocolo de reanudación rápida

1. Leer `AGENTS.md` y este documento completos.
2. Ejecutar `git status --short --branch` y comprobar el commit actual.
3. Consultar `docs/10-decision-log.md`, en especial `decision-0020-batch-plan-authorization` y `decision-0021-recommended-master-plan-v2-execution`.
4. Abrir `work/BATCH-AUTHORIZATION-REGISTER.md` y localizar el lote siguiente cuya puerta esté satisfecha.
5. Leer completos el manifiesto vigente, inventario, contratos y decisiones aplicables.
6. No iniciar redacción si faltan el alcance exacto, las dependencias, los IDs reservados o la revisión independiente prevista.

## Mantenimiento

Actualizar este documento después de cada transición `integrated`, `closed`, `cancelled`, cambio de decisión o cambio material de próxima acción. Registrar hechos comprobados y referencias estables; no copiar aquí contenido editorial ni convertir este archivo en una autoridad paralela.
