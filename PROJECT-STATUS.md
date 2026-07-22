# IT Study — Estado operativo del proyecto

## Identidad y autoridad

| Campo | Valor |
|---|---|
| Estado del documento | Vigente |
| Fecha de corte | `2026-07-21` |
| Rama verificada | `codex/batches-production` |
| Baseline técnico verificado | `70800d7` — preparación versionada del plan maestro v2 aprobado |
| Estado del registro | B001–B004 `closed`; plan maestro v2, IDs, asignaciones, inventario B005 y sustitución relacional ETL/Data pipeline aprobados; B005 `integrated` y en reconciliación final; B006–B023 autorizados para ejecución por ondas; B033–B042 inactivos. |
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
| `batch-005-taxonomy-target-extension` | `integrated`; 12 subdominios y 4 disciplinas `approved`, incorporados 16/16 a fuentes canónicas. |
| Fuentes canónicas | 18 archivos bajo `content/sources/`. |
| Dominios canónicos | 12 archivos bajo `content/taxonomy/domains/`. |
| Subdominios canónicos | 48 archivos bajo `content/taxonomy/subdomains/`. |
| Disciplinas canónicas | 12 archivos bajo `content/taxonomy/disciplines/`. |
| Integridad de B001–B004 | Lotes `closed`; fuentes, dominios, subdominios y disciplinas integrados con evidencia de reconciliación en sus entregas. |
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

Revisión y aceptación editorial de la entrega `d1` de B005: 12 subdominios y 4 disciplinas en estado `draft`, con inventario exacto, fuentes y relaciones de clasificación validadas. Codex no promueve estas entradas a `approved` ni acepta el lote sin decisión expresa del Responsable.

Después de la aceptación, Codex promoverá, integrará, reconciliará y cerrará B005 automáticamente si todas las validaciones permanecen conformes; después iniciará la primera onda ejecutable de B006–B023 conforme al orden topológico aprobado. La salida mínima de F1 ya está satisfecha con 36 subdominios y 8 disciplinas cerrados; B005 completa el objetivo recomendado de 48 y 12.

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
