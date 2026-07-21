---
id: entity-example-idempotencia
type: concept
title: "[Ejemplo] Idempotencia"
canonicalName: idempotencia
englishName: Idempotency
aliases:
  - value: idempotent
    kind: related-form
    language: en
summary: "Propiedad por la cual repetir una operación produce el mismo efecto observable previsto que ejecutarla una sola vez."
definition: "Propiedad cuyo significado preciso depende del contexto; en sistemas, permite razonar sobre repeticiones sin acumular efectos no deseados."
problemSolved: "Reduce la incertidumbre causada por reintentos, entregas repetidas o solicitudes duplicadas."
purpose: "Ayudar a diseñar interacciones repetibles cuyos efectos puedan controlarse y explicarse."
primaryDomain: domain-example-integracion-sistemas-empresariales
subdomains:
  - subdomain-example-apis-interoperabilidad
secondaryDomains:
  - domain-example-ingenieria-software
  - domain-example-datos-analitica
prerequisites:
  - entity-example-operacion
confusedWith:
  - entity-example-inmutabilidad
examples:
  - title: Reintento de una actualización
    explanation: "Si la operación está definida de forma idempotente, repetir la misma solicitud conserva el efecto final esperado en vez de aplicar el cambio acumulativamente."
    references:
      - entity-example-reintento
advantages:
  - "Facilita reintentos controlados cuando una respuesta se pierde o no confirma el resultado."
  - "Reduce algunos efectos duplicados en integraciones y procesamiento de mensajes."
limitations:
  - "No implica por sí sola atomicidad, consistencia global ni ausencia de fallos."
  - "La propiedad debe definirse respecto de un efecto observable y un contexto concreto."
contextNotes:
  - context: HTTP
    note: "La semántica idempotente se atribuye al efecto pretendido de repetir una solicitud; no exige que cada respuesta sea byte por byte idéntica."
  - context: procesamiento de mensajes
    note: "El consumidor puede necesitar una estrategia adicional para reconocer y controlar entregas repetidas."
sources:
  - source-example-rfc-9110
  - source-example-content-model
relations:
  - targetId: entity-example-reintento
    relationType: builds-on
    note: "El valor operativo del concepto aparece al razonar sobre la repetición de una acción tras incertidumbre o fallo."
    sourceIds:
      - source-example-rfc-9110
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: draft
owner: example-maintainers
createdAt: 2026-07-21
verificationStatus: verified
deprecated: false
contractVersion: "1.0"
---

# Ficha canónica de concepto — ejemplo no productivo

> Este archivo demuestra el contrato de una entidad `concept`. No incorpora la entrada al inventario, no la aprueba y no autoriza producción. Los IDs con `example` solo existen en este artefacto.

## Definición

La idempotencia describe una propiedad de una operación respecto de repeticiones. En un contexto de sistemas, el punto educativo no es que todo permanezca idéntico, sino que ejecutar nuevamente la misma intención no produzca efectos acumulativos inesperados dentro del alcance definido.

## Problema que resuelve

En sistemas distribuidos, una persona o componente puede no saber si una operación terminó correctamente. Reintentar ayuda a recuperarse de esa incertidumbre, pero puede duplicar cobros, registros o cambios. Una semántica idempotente permite controlar una parte de ese riesgo.

## Propósito y contexto profesional

El concepto aparece en APIs, protocolos, procesamiento de mensajes, automatización y diseño de operaciones. Permite conversar con precisión sobre qué puede repetirse, qué efecto debe conservarse y qué garantías adicionales siguen siendo necesarias.

## Prerrequisito

- `entity-example-operacion`: se necesita reconocer qué acción se ejecuta y cuál es su efecto observable.

## Ejemplo

Una solicitud establece el estado de un recurso en “activo”. Repetir esa misma intención conserva el estado final. En contraste, una solicitud que “incrementa en uno” puede acumular efectos si se repite sin una estrategia adicional.

## Ventajas

- Facilita políticas de reintento más seguras.
- Reduce ciertos efectos causados por duplicados.
- Hace explícita la frontera entre intención, ejecución y resultado observable.

## Limitaciones

- No garantiza una transacción atómica.
- No evita todo efecto secundario.
- No sustituye deduplicación, control de concurrencia o consistencia cuando esos problemas existen.
- Su interpretación debe quedar delimitada por operación y contexto.

## Confusiones frecuentes

### Idempotencia frente a inmutabilidad

`entity-example-inmutabilidad` describe que un valor no cambia después de crearse. La idempotencia describe el efecto de repetir una operación. Un sistema puede usar datos mutables y ofrecer operaciones idempotentes, o usar valores inmutables sin que todas sus operaciones sean idempotentes.

## Registro de referencias demostrativas

| ID | Tipo | Función en el ejemplo |
|---|---|---|
| `domain-example-integracion-sistemas-empresariales` | domain | Hogar principal declarado |
| `domain-example-ingenieria-software` | domain | Aplicación secundaria |
| `domain-example-datos-analitica` | domain | Aplicación secundaria |
| `subdomain-example-apis-interoperabilidad` | subdomain | Ubicación específica |
| `entity-example-operacion` | concept | Prerrequisito |
| `entity-example-inmutabilidad` | concept | Confusión explicada |
| `entity-example-reintento` | practice | Destino de relación contextual |
| `source-example-rfc-9110` | source | RFC 9110, HTTP Semantics, sección sobre métodos idempotentes |
| `source-example-content-model` | source | `docs/03-content-model.md` |

## Ausencias significativas

- No se incluyen `brand` ni `contextualTypes` porque la entrada representa un concepto, no una implementación comercial.
- No se incluyen fechas de vigencia ni revisión programada porque el ejemplo representa un fundamento estable y no contenido aprobado.
- No se usa `related-to`: `builds-on` expresa con mayor precisión el vínculo educativo demostrado.
