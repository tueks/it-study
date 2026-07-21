# IT Study

IT Study es un mapa de conocimiento y glosario contextual de Tecnologías de la Información. Su objetivo es ayudar a reconocer términos técnicos, comprender qué significan, ubicarlos en su dominio y entender cómo se relacionan, sin convertir cada ficha en un curso práctico.

La primera versión será una web estática, orientada a alfabetización transversal en IT y con separación estricta entre contenido, modelo, lógica, navegación y presentación.

## Estado del proyecto

La fase documental de definición está completa y aprobada. El repositorio dispone de contratos normativos, contratos operativos, ejemplos canónicos e inventarios iniciales.

| Elemento | Estado |
|---|---|
| Documentación normativa | Aprobada |
| Contratos operativos | Aprobados |
| Ejemplos e inventarios | Aprobados como referencias y planificación |
| Inventario inicial | 164 candidatos en estado preliminar |
| Producción editorial del MVP | En curso por lotes; B001 y B002 cerrados |
| Estado operativo verificable | [`PROJECT-STATUS.md`](PROJECT-STATUS.md) |
| Aplicación web | No implementada |
| Autoridad final | Responsable del proyecto, conforme a `decision-0016-operational-ownership` |

Los candidatos del inventario no son todavía contenido publicable. Cada entrada deberá completar investigación, producción, revisión independiente, aprobación e integración.

## Alcance educativo

IT Study está dirigido a personas que trabajan, estudian o colaboran en entornos tecnológicos y necesitan comprender conversaciones fuera de su especialidad. La profundidad principal es de reconocimiento y comprensión contextual.

El MVP contempla:

- consulta directa y búsqueda de términos;
- exploración por dominios y clasificaciones;
- fichas estructuradas;
- relaciones entre términos;
- comparaciones, escenarios y rutas introductorias;
- cobertura transversal de doce dominios;
- contenido reutilizable e independiente del diseño.

No pretende sustituir cursos especializados, enseñar programación paso a paso, ofrecer laboratorios completos, mantener cuentas de usuario ni utilizar un backend propio en la primera versión.

## Fuentes de autoridad

Este README orienta, pero no sustituye los contratos del proyecto. La autoridad aplicable se consulta en este orden:

1. [Documento semilla](00-bootstrap-brief.md)
2. [Acta y visión](docs/00-project-charter.md)
3. [Alcance y audiencia](docs/01-scope-and-audience.md)
4. [Taxonomía](docs/02-taxonomy.md)
5. [Modelo de contenido](docs/03-content-model.md)
6. [Lineamientos editoriales](docs/04-editorial-guidelines.md)
7. [Reglas de relaciones](docs/05-relationship-rules.md)
8. [Fronteras entre contenido y diseño](docs/06-design-boundaries.md)
9. [Definición del MVP](docs/07-mvp-definition.md)
10. [Producción por lotes](docs/08-production-batches.md)
11. [Criterios de calidad](docs/09-quality-criteria.md)
12. [Registro de decisiones](docs/10-decision-log.md)

Las decisiones `accepted` del registro son autoridad únicamente dentro de su materia. Las decisiones `proposed` no deben tratarse como reglas vigentes.

## Operación

Los contratos de ejecución están en [`work/`](work/):

- [Instrucciones maestras](work/WORK-INSTRUCTIONS.md)
- [Protocolo de investigación](work/RESEARCH-PROTOCOL.md)
- [Contrato de producción](work/CONTENT-PRODUCTION-CONTRACT.md)
- [Plantilla de lote](work/BATCH-TEMPLATE.md)
- [Política de fuentes](work/SOURCE-POLICY.md)
- [Checklist de revisión](work/REVIEW-CHECKLIST.md)
- [Handoff a Codex](work/HANDOFF-TO-CODEX.md)

El contrato técnico principal para Codex es [`AGENTS.md`](AGENTS.md).

## Estructura del repositorio

| Ruta | Propósito |
|---|---|
| `docs/` | Contratos normativos y registro de decisiones |
| `work/` | Procedimientos operativos de investigación, producción, revisión e integración |
| `examples/` | Ejemplos canónicos no productivos |
| `inventories/` | Dominios, clasificaciones y candidatos de planificación |
| `AGENTS.md` | Reglas operativas de Codex para todo el repositorio |

## Flujo de producción

1. El Responsable del proyecto autoriza un lote.
2. Coordinación delimita alcance, dependencias, entregables y revisión.
3. ChatGPT Trabajo investiga y produce contenido estructurado.
4. Un revisor independiente evalúa el contenido y registra hallazgos.
5. La autoridad aplicable acepta o devuelve la entrega.
6. Codex valida e integra técnicamente el contenido aceptado.
7. Se actualizan cobertura, decisiones y estado del lote.
8. El Responsable del proyecto autoriza el cierre o la publicación cuando corresponda.

Ningún agente puede autoaprobar su propio trabajo ni ampliar silenciosamente el alcance.

## Principios

- contexto antes que implementación;
- relaciones antes que listas aisladas;
- claridad sin perder precisión técnica;
- términos técnicos en inglés cuando sean la forma predominante en la industria;
- neutralidad frente a productos comerciales;
- profundidad controlada;
- contenido independiente del diseño;
- producción incremental y verificable;
- IDs, estados, fuentes y relaciones trazables.

## Decisiones pendientes

Permanecen abiertas las decisiones `decision-0012` a `decision-0015`, `decision-0017` y `decision-0018`. No bloquean el inicio de la producción editorial mientras el lote no dependa materialmente de ellas.

## Siguiente paso

Iniciar el preflight y la producción autorizada de `batch-003-taxonomy-subdomains-core-b`; su manifiesto e inventario exactos ya están preparados. El plan B003–B042 está autorizado con las dependencias y puertas registradas en [`work/BATCH-AUTHORIZATION-REGISTER.md`](work/BATCH-AUTHORIZATION-REGISTER.md). El estado de reanudación vigente se mantiene en [`PROJECT-STATUS.md`](PROJECT-STATUS.md).
