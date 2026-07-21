---
id: scenario-example-incident-api-production
type: scenario
title: "[Ejemplo] Incidente en una API de producción"
objective: "Comprender cómo colaboran desarrollo, operación, seguridad y producto para reducir impacto, investigar y aprender durante un incidente."
context: "Una API utilizada para confirmar pedidos aumenta su tasa de error después de un despliegue. El caso es ilustrativo: no representa un runbook ni una política obligatoria."
participants:
  - entity-example-role-incident-coordinator
  - entity-example-role-backend-developer
  - entity-example-role-site-reliability-engineer
  - entity-example-role-security-specialist
  - entity-example-role-product-manager
domains:
  - domain-example-desarrollo-software
  - domain-example-infraestructura-operacion
  - domain-example-ciberseguridad-riesgo
  - domain-example-producto-experiencia
  - domain-example-integracion-sistemas-empresariales
initialSituation: "La tasa de error supera el nivel esperado, algunos usuarios no reciben confirmación y el equipo todavía no conoce la causa ni el alcance completo."
events:
  - order: 1
    description: "Una alerta basada en la tasa de error inicia la evaluación y se abre un registro del incidente."
    references:
      - entity-example-alert
      - entity-example-artifact-incident-record
  - order: 2
    description: "El equipo correlaciona el inicio de los síntomas con un cambio reciente y revisa logs, métricas y trazas."
    references:
      - entity-example-deployment
      - entity-example-log
      - entity-example-metric-error-rate
      - discipline-example-observabilidad
  - order: 3
    description: "Se comprueba si existen efectos de seguridad, exposición de datos o duplicación de pedidos antes de elegir una mitigación."
    references:
      - entity-example-risk-data-exposure
      - entity-example-idempotencia
  - order: 4
    description: "Se revierte el cambio para reducir impacto mientras la investigación continúa con el sistema estabilizado."
    references:
      - entity-example-rollback
  - order: 5
    description: "Producto comunica el efecto conocido y el equipo conserva evidencia para el análisis posterior."
    references:
      - entity-example-artifact-status-update
      - entity-example-artifact-incident-record
  - order: 6
    description: "Después de la recuperación se documentan causas, aprendizajes y acciones verificables."
    references:
      - entity-example-practice-post-incident-review
      - entity-example-artifact-postmortem
decisions:
  - question: "¿Mitigar de inmediato o prolongar el diagnóstico con la versión actual?"
    illustrativeOptions:
      - "revertir el cambio"
      - "desactivar una función"
      - "mantener la versión mientras se recopila más evidencia"
    narrativeDecision: "Se revierte el cambio porque el impacto continúa y existe una reversión conocida."
    consequences:
      - "Disminuye la exposición al fallo."
      - "Puede perderse evidencia efímera si no se preserva antes."
      - "La reversión no demuestra por sí sola la causa raíz."
  - question: "¿Cómo comunicar cuando el alcance todavía es incierto?"
    illustrativeOptions:
      - "esperar hasta conocer la causa"
      - "comunicar hechos confirmados, impacto conocido e incertidumbre"
    narrativeDecision: "Se comunica lo confirmado y se programa una actualización, sin especular sobre la causa."
    consequences:
      - "Los interesados reciben contexto oportuno."
      - "El equipo debe actualizar el mensaje cuando cambie la evidencia."
concepts:
  - entity-example-incident
  - entity-example-idempotencia
  - entity-example-service-level-objective
  - entity-example-blameless-learning
artifactsProduced:
  - entity-example-artifact-incident-record
  - entity-example-artifact-status-update
  - entity-example-artifact-postmortem
risks:
  - id: risk-example-data-loss
    statement: "Pérdida o inconsistencia de datos durante solicitudes fallidas o repetidas."
    references:
      - entity-example-idempotencia
  - id: risk-example-data-exposure
    statement: "Exposición de información sensible a través de errores, logs o respuestas."
    references:
      - entity-example-risk-data-exposure
  - id: risk-example-recurrence
    statement: "Recurrencia si las acciones solo restauran el servicio y no atienden causas o controles."
    references:
      - entity-example-practice-post-incident-review
outcome: "El servicio recupera su comportamiento esperado, el impacto queda delimitado y se registran acciones de seguimiento con responsables y evidencia. El resultado no implica que la misma mitigación sea correcta para todos los incidentes."
relatedContent:
  - comparison-example-monitoring-observability
complexity: introductory
sources:
  - source-example-google-sre
  - source-example-nist-incident-response
priority: important
knowledgeLevel: contextual-understanding
stability: slow-evolution
editorialStatus: draft
owner: example-maintainers
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Escenario educativo canónico — ejemplo no productivo

> Este escenario conecta entradas demostrativas para explicar colaboración. No prescribe una secuencia operativa, no sustituye un plan de respuesta y no convierte coincidencias narrativas en relaciones globales.

## Objetivo educativo

Reconocer cómo varias disciplinas participan en un incidente y por qué mitigación, investigación, seguridad, comunicación y aprendizaje son preocupaciones relacionadas pero distintas.

## Contexto

Una organización opera una API que confirma pedidos. Después de un despliegue, aumenta la tasa de error. Algunas solicitudes podrían haber terminado aunque el cliente no recibiera confirmación, por lo que repetirlas sin contexto puede introducir efectos duplicados.

## Participantes y contribución ilustrativa

| ID | Contribución dentro del caso |
|---|---|
| `entity-example-role-incident-coordinator` | Mantiene coordinación, decisiones y registro compartido. |
| `entity-example-role-backend-developer` | Analiza el cambio y el comportamiento de la API. |
| `entity-example-role-site-reliability-engineer` | Aporta evidencia operativa y opciones de mitigación. |
| `entity-example-role-security-specialist` | Evalúa exposición, datos y controles afectados. |
| `entity-example-role-product-manager` | Ayuda a priorizar impacto y comunicación hacia usuarios e interesados. |

Los nombres describen roles en el escenario, no puestos obligatorios ni una estructura universal.

## Dominios implicados

Participan de forma sustantiva desarrollo de software, operación de servicios, ciberseguridad, producto e integración. Ninguno se incluye solo para satisfacer una cuota: cada uno aporta una pregunta diferente sobre construcción, comportamiento, riesgo, impacto o interacción entre sistemas.

## Secuencia narrativa

1. Detectar y registrar.
2. Reunir evidencia y delimitar impacto.
3. Evaluar riesgos de datos y seguridad.
4. Elegir una mitigación reversible.
5. Comunicar hechos e incertidumbre.
6. Aprender y seguir acciones.

El orden ayuda a entender el caso, pero no se declara universal. Algunas actividades pueden ejecutarse en paralelo o en otro orden.

## Registro de referencias demostrativas

Todos los IDs referenciados en el frontmatter existen como declaraciones demostrativas en este archivo. Se agrupan por tipo para evitar confundirlos con contenido aprobado:

- **Dominios:** `domain-example-desarrollo-software`, `domain-example-infraestructura-operacion`, `domain-example-ciberseguridad-riesgo`, `domain-example-producto-experiencia`, `domain-example-integracion-sistemas-empresariales`.
- **Roles:** `entity-example-role-incident-coordinator`, `entity-example-role-backend-developer`, `entity-example-role-site-reliability-engineer`, `entity-example-role-security-specialist`, `entity-example-role-product-manager`.
- **Conceptos y prácticas:** `entity-example-incident`, `entity-example-idempotencia`, `entity-example-service-level-objective`, `entity-example-blameless-learning`, `entity-example-rollback`, `entity-example-practice-post-incident-review`, `entity-example-deployment`, `entity-example-alert`, `entity-example-log`, `entity-example-metric-error-rate`, `entity-example-risk-data-exposure`, `discipline-example-observabilidad`.
- **Artefactos:** `entity-example-artifact-incident-record`, `entity-example-artifact-status-update`, `entity-example-artifact-postmortem`.
- **Estructura relacionada:** `comparison-example-monitoring-observability`.
- **Fuentes:** `source-example-google-sre` y `source-example-nist-incident-response`.

## Riesgos de interpretación

- La cercanía de dos entradas dentro del escenario no crea `related-to`.
- La secuencia no crea `requires` ni `recommended-before`.
- La participación de un rol no crea responsabilidad universal.
- Los artefactos narrativos no se convierten en entregables obligatorios para toda organización.
- La mitigación elegida no se presenta como ganadora fuera del contexto descrito.
