---
id: entity-computability
type: concept
title: Computability
canonicalName: computability
englishName: Computability
aliases:
- value: computabilidad
  kind: translation
  language: es
summary: Concepto que delimita qué problemas o funciones pueden resolverse mediante un procedimiento efectivo dentro de un modelo formal de cómputo.
definition: Computability estudia la existencia de un procedimiento efectivo capaz de producir una respuesta para cada entrada válida de un problema. La propiedad se formula respecto de un modelo de cómputo, pero los modelos clásicos equivalentes permiten razonar sobre un límite general de lo computable.
purpose: Distinguir entre problemas que admiten un procedimiento sistemático y problemas para los que ningún algoritmo puede existir bajo el modelo considerado.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-algoritmo
- entity-maquina-de-turing
confusedWith:
- entity-complejidad-computacional
- entity-decidability
examples:
- title: Problema computable
  explanation: Sumar dos enteros es computable porque existe un procedimiento finito y preciso que produce el resultado para cualquier par de entradas válidas.
limitations:
- No indica que el procedimiento sea eficiente; esa pregunta corresponde a computational complexity.
- La propiedad depende de una formulación precisa del problema y de sus entradas.
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

# Computability

## Qué es

**Computability** (computabilidad) pregunta si existe un método efectivo que pueda resolver un problema para todas las entradas admitidas. No describe cuánto tarda el método ni cuántos recursos necesita; establece primero si una solución algorítmica es posible.

## Cómo encaja

En teoría de la computación, modelos como la máquina de Turing permiten expresar procedimientos de forma suficientemente precisa para demostrar que ciertos problemas son computables y que otros no lo son. Esta frontera ayuda a evitar la suposición de que todo problema bien formulado puede resolverse escribiendo más código o usando hardware más potente.

## Ejemplo

Calcular la suma de dos enteros es computable: existe una secuencia definida de pasos que termina y produce el resultado. En contraste, algunos problemas sobre el comportamiento de programas no admiten un algoritmo general que siempre termine con la respuesta correcta.

## Distinción clave

Computability no es **computational complexity**. Un problema puede ser computable y, aun así, requerir una cantidad impráctica de tiempo o memoria. Tampoco equivale a decidability: esta última se aplica específicamente a problemas de respuesta sí/no.
