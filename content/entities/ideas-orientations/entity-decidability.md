---
id: entity-decidability
type: concept
title: Decidability
canonicalName: decidability
englishName: Decidability
aliases:
- value: decidibilidad
  kind: translation
  language: es
summary: Propiedad de un problema de decisión para el que existe un algoritmo que termina y responde correctamente sí o no para toda entrada válida.
definition: Decidability es la propiedad de un lenguaje o problema de decisión cuando alguna máquina o procedimiento efectivo acepta las entradas que cumplen la condición, rechaza las que no la cumplen y termina en todos los casos.
purpose: Permitir clasificar preguntas formales según exista o no un procedimiento general que siempre produzca una respuesta definitiva.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-computability
- entity-formal-language
confusedWith:
- entity-computability
examples:
- title: Pertenencia decidible
  explanation: Determinar si una cadena contiene una cantidad par de `1` puede decidirse mediante un finite automaton que siempre termina.
limitations:
- Solo aplica directamente a preguntas con respuesta sí/no; otros problemas deben formularse como problemas de decisión.
- Un problema decidible puede seguir siendo computacionalmente costoso.
sources:
- source-mit-ocw-theory-of-computation-2020
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-043-expansion-wave-01-01
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Decidability

## Qué es

**Decidability** (decidibilidad) describe problemas cuya respuesta puede obtenerse siempre mediante un procedimiento que termina. El problema se formula normalmente como una pregunta de sí o no, o como la pertenencia de una cadena a un formal language.

## Cómo encaja

Un *decider* debe aceptar las entradas positivas, rechazar las negativas y detenerse en ambas situaciones. Esta exigencia distingue un procedimiento que decide de otro que puede reconocer los casos positivos pero quedarse ejecutando indefinidamente ante ciertos casos negativos.

## Ejemplo

La pregunta “¿esta cadena tiene una cantidad par de `1`?” es decidible: un finite automaton puede mantener dos estados —par e impar— y terminar después de leer la cadena completa.

## Distinción clave

Decidability es una forma específica de computability aplicada a problemas de decisión. No afirma que la solución sea rápida. Un problema puede ser decidible y, sin embargo, necesitar recursos que lo vuelvan poco práctico para entradas grandes.
