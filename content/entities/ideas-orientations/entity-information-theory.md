---
id: entity-information-theory
type: model
title: Information Theory
canonicalName: information theory
englishName: Information Theory
aliases:
- value: teoría de la información
  kind: translation
  language: es
summary: Marco matemático para medir información, incertidumbre y límites de representación o comunicación mediante modelos probabilísticos.
definition: Information Theory estudia fuentes, mensajes, channels y codes a partir de distribuciones de probabilidad. Introduce medidas como entropy y establece límites para compression y comunicación confiable bajo supuestos definidos.
purpose: Razonar cuantitativamente sobre cuánta información produce una fuente y qué recursos mínimos o capacidades máximas condicionan su codificación y transmisión.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-discrete-mathematics
- entity-propositional-logic
represents: Fuentes, mensajes, channels y codes mediante variables aleatorias, probabilidades y medidas de información.
scope: Entropy, source coding, channel capacity, ruido, información mutua y rate-distortion en nivel contextual.
elements:
- fuente de información
- conjunto de mensajes
- distribución de probabilidad
- entropy
- encoder y decoder
- channel
- ruido y distorsión
relations:
- targetId: entity-entropy
  relationType: has-part
  note: Entropy es una medida central para describir la incertidumbre media de una fuente.
- targetId: entity-data-compression
  relationType: related-to
  note: Information Theory aporta límites y modelos para comprender compression exacta y aproximada.
examples:
- title: Símbolos con probabilidades distintas
  explanation: Una fuente que produce algunos símbolos con mucha más frecuencia permite asignar representaciones cortas a eventos comunes y largas a eventos raros.
limitations:
- El modelo clásico mide selección e incertidumbre; no determina por sí mismo el significado semántico o utilidad humana de un mensaje.
- Los límites dependen de supuestos sobre la fuente, el channel, el error permitido y la longitud del código.
sources:
- source-shannon-mathematical-theory-communication-1948
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: important
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: approved
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Information Theory

## Qué es

**Information Theory** (teoría de la información) es un marco matemático para estudiar fuentes de mensajes, incertidumbre, codificación y comunicación. Describe eventos mediante probabilidades y permite establecer límites sobre compression y transmisión.

## Cómo encaja

Una fuente produce símbolos o mensajes; un encoder los representa; un channel puede introducir restricciones o ruido; y un decoder intenta reconstruirlos. Medidas como **entropy** ayudan a estimar cuánta información media contiene la selección de la fuente.

## Ejemplo

Si un símbolo aparece con mucha frecuencia, un código puede asignarle una representación corta y reservar representaciones más largas para eventos raros. Así se reduce la longitud media sin cambiar los mensajes posibles.

## Distinción clave

Information Theory no evalúa automáticamente si un mensaje es verdadero, útil o comprensible. Su concepto de información se relaciona con alternativas y probabilidades, no directamente con significado humano. Tampoco es un algoritmo de compression específico; proporciona modelos y límites que distintos algoritmos intentan aprovechar.
