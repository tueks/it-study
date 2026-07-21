---
id: entity-example-role-code-reviewer
type: role
title: "[Ejemplo] Revisor de código"
canonicalName: revisor de código
englishName: Code Reviewer
aliases:
  - value: reviewer
    kind: contextual
    language: en
summary: "Rol contextual que evalúa cambios de software antes de su integración y comunica hallazgos accionables."
definition: "Función asumida temporal o recurrentemente por una persona o un grupo para revisar un cambio de código desde criterios técnicos y acuerdos del equipo."
purpose: "Aportar una verificación independiente, compartir conocimiento y reducir riesgos antes de integrar un cambio."
primaryDomain: domain-example-ingenieria-software
secondaryDomains:
  - domain-example-desarrollo-software
disciplines:
  - discipline-example-calidad
scope: "Cambios de software sometidos a revisión dentro del flujo de colaboración de un equipo."
responsibilities:
  - statement: "Evaluar el cambio contra requisitos, riesgos conocidos y acuerdos técnicos aplicables."
    references:
      - entity-example-artifact-code-change
  - statement: "Comunicar observaciones con contexto suficiente para que puedan comprenderse y resolverse."
    references:
      - entity-example-practice-code-review
  - statement: "Distinguir defectos bloqueantes de preferencias o recomendaciones no obligatorias."
competencies:
  - entity-example-competency-code-review
  - entity-example-competency-technical-communication
collaboratesWith:
  - entity-example-role-change-author
  - entity-example-role-quality-specialist
contextNotes:
  - context: equipos pequeños
    note: "La misma persona puede alternar entre autor y revisor, pero no debe revisar su propio cambio como si aportara independencia."
  - context: cambios de alto riesgo
    note: "La organización puede requerir revisores adicionales o competencias especializadas."
  - context: open source
    note: "El rol puede ser asumido por mantenedores con facultades definidas por el proyecto."
sources:
  - source-example-content-model
  - source-example-google-code-review
relations:
  - targetId: entity-example-artifact-code-change
    relationType: uses
    note: "El cambio y su contexto constituyen el artefacto principal que el rol examina."
    sourceIds:
      - source-example-google-code-review
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

# Ficha canónica de rol — ejemplo no productivo

> Este archivo valida la estructura de una entidad `role`. No crea una vacante, un puesto ni una entrada aprobada. Los IDs con `example` solo existen dentro del ejemplo.

## Diferencia entre rol y puesto

“Revisor de código” describe una función asumida en un contexto de trabajo. No presupone contrato laboral, seniority, nivel jerárquico ni un título oficial. Un Backend Developer, QA Engineer, Staff Engineer o mantenedor puede asumir este rol según el cambio y las reglas del equipo.

Un puesto agrupa varios roles y responsabilidades organizacionales. Por ello, este ejemplo no usa `type: position` ni universaliza una descripción de empleo.

## Propósito

El rol aporta otra perspectiva antes de integrar un cambio. Su contribución puede incluir corrección, mantenibilidad, seguridad, claridad, coherencia arquitectónica y aprendizaje del equipo, siempre dentro del alcance y las competencias disponibles.

## Responsabilidades ilustrativas

- Comprender la intención y el contexto del cambio.
- Evaluar evidencia, riesgos y acuerdos aplicables.
- Formular hallazgos claros y proporcionales.
- Confirmar que los asuntos bloqueantes se atendieron o escalaron.
- Evitar convertir preferencias personales en reglas inexistentes.

Estas responsabilidades describen el rol; no constituyen una política universal ni una lista laboral exhaustiva.

## Competencias relacionadas

- `entity-example-competency-code-review`: analizar cambios y evidencia dentro de un alcance.
- `entity-example-competency-technical-communication`: explicar hallazgos, impacto y acciones posibles.

Las competencias se referencian como entidades reutilizables; no se duplican como definiciones dentro de esta ficha.

## Colaboración

- Con `entity-example-role-change-author` para aclarar intención, restricciones y decisiones.
- Con `entity-example-role-quality-specialist` cuando el riesgo exige conocimiento especializado.
- Con otros revisores cuando la cobertura no puede sostenerse por una sola persona.

`collaboratesWith` expresa colaboración habitual, no subordinación, aprobación automática ni estructura jerárquica.

## Contexto y variación organizacional

La amplitud del rol cambia según el tamaño del equipo, criticidad, regulación, propiedad del código y automatización disponible. Algunas organizaciones separan revisión funcional, de seguridad o arquitectura; otras combinan estas perspectivas. La ficha conserva el propósito común y registra la variación sin declarar un modelo universal.

## Límites

- No sustituye pruebas, análisis automatizado ni validación del usuario.
- No convierte al revisor en responsable único de la calidad.
- No autoriza cambios de alcance o arquitectura por sí solo.
- No implica que toda observación sea bloqueante.
- No se define por una interfaz, plataforma o herramienta concreta.

## Registro de referencias demostrativas

| ID | Tipo | Función en el ejemplo |
|---|---|---|
| `domain-example-ingenieria-software` | domain | Hogar principal |
| `domain-example-desarrollo-software` | domain | Aplicación secundaria |
| `discipline-example-calidad` | discipline | Disciplina relacionada |
| `entity-example-artifact-code-change` | artifact | Artefacto utilizado |
| `entity-example-practice-code-review` | practice | Práctica en la que aparece el rol |
| `entity-example-competency-code-review` | competency | Competencia requerida |
| `entity-example-competency-technical-communication` | competency | Competencia requerida |
| `entity-example-role-change-author` | role | Colaborador |
| `entity-example-role-quality-specialist` | role | Colaborador |
| `source-example-content-model` | source | `docs/03-content-model.md` |
| `source-example-google-code-review` | source | Google Engineering Practices, Code Review Developer Guide |

## Notas estructurales

1. `responsibilities` contiene declaraciones; no crea fichas de responsabilidad sin valor autónomo.
2. `competencies` y `collaboratesWith` son campos de autoridad y no se duplican en `relations[]`.
3. La relación `uses` parte del rol hacia un artefacto resoluble y expresa uso activo.
4. Se omiten `seniorityContext` y `organizationNotes`, propios de `position`.
