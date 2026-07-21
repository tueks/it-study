# IT Study — Estado operativo del proyecto

## Identidad y autoridad

| Campo | Valor |
|---|---|
| Estado del documento | Vigente |
| Fecha de corte | `2026-07-21` |
| Rama verificada | `codex/batches-production` |
| Baseline técnico verificado | `2169eda` — integración de `batch-002` |
| Estado del registro | Reconciliación y entrega B003 preservadas en `a667cf8`. |
| Autoridad | Responsable del proyecto |
| Decisión aplicable | `decision-0020-batch-plan-authorization` |
| Propósito | Punto de reanudación rápido; no sustituye contratos, manifiestos ni reportes de lote. |

Este documento registra el estado operativo comprobado del repositorio. En caso de diferencia, prevalecen las autoridades indicadas en `AGENTS.md`. Cada sesión debe volver a comprobar rama, commit y árbol de trabajo; el commit de corte identifica la evidencia revisada, no congela avances posteriores.

## Estado comprobado

| Elemento | Estado |
|---|---|
| Documentación normativa y contratos `work/` | Aprobados y vigentes. |
| `batch-001-taxonomy-domains` | `closed`; 12 dominios y 18 fuentes `approved`, aceptados e integrados. |
| `batch-002-taxonomy-subdomains-core-a` | `closed`; 18 subdominios `approved`, aceptados e integrados. |
| Fuentes canónicas | 18 archivos bajo `content/sources/`. |
| Dominios canónicos | 12 archivos bajo `content/taxonomy/domains/`. |
| Subdominios canónicos | 18 archivos bajo `content/taxonomy/subdomains/`. |
| Integridad de B001/B002 | 48/48 archivos de entrega coinciden por hash con sus fuentes canónicas; 0 referencias de fuente o padre rotas. |
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
- no permite autoaceptación, integración, cierre o publicación;
- mantiene B033–B042 condicionados al cierre del objetivo recomendado, evidencia de necesidad y máximos vigentes.

## Próxima acción ejecutable

Realizar la revisión independiente completa de `batch-003-taxonomy-subdomains-core-b`, actualmente `in-review` con entrega `d1` preservada en `a667cf8`. Contiene 18 fichas `draft`, reportes 12/12 y validaciones automatizables conformes. El resultado previsto tras una eventual aprobación e integración es 36 subdominios acumulados y exactamente tres por dominio; los borradores todavía no cuentan como cobertura publicable.

Después de B003 sigue `batch-004-taxonomy-disciplines-core`. La salida mínima de F1 requiere 36 subdominios y 8 disciplinas; el objetivo recomendado de F1 es 48 subdominios y 12 disciplinas mediante B005.

## Puertas y bloqueos preservados

- `decision-0012`, `decision-0013`, `decision-0014`, `decision-0015`, `decision-0017` y `decision-0018` permanecen `proposed`.
- Un lote que dependa materialmente de cualquiera de ellas detiene solo ese alcance.
- Las relaciones ordinarias no se inventan ni se persisten mediante una representación física todavía no decidida.
- Arquitectura, framework, UI, build, despliegue y métricas técnicas finales siguen fuera del alcance actual.
- B024–B030 requieren entradas aprobadas suficientes; B032 requiere todas las puertas acumuladas; B033–B042 requieren además sus activadores opcionales.

## Protocolo de reanudación rápida

1. Leer `AGENTS.md` y este documento completos.
2. Ejecutar `git status --short --branch` y comprobar el commit actual.
3. Consultar `docs/10-decision-log.md`, en especial `decision-0020-batch-plan-authorization`.
4. Abrir `work/BATCH-AUTHORIZATION-REGISTER.md` y localizar el lote siguiente cuya puerta esté satisfecha.
5. Leer completos el manifiesto vigente, inventario, contratos y decisiones aplicables.
6. No iniciar redacción si faltan el alcance exacto, las dependencias, los IDs reservados o la revisión independiente prevista.

## Mantenimiento

Actualizar este documento después de cada transición `integrated`, `closed`, `cancelled`, cambio de decisión o cambio material de próxima acción. Registrar hechos comprobados y referencias estables; no copiar aquí contenido editorial ni convertir este archivo en una autoridad paralela.
