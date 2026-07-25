---
id: entity-number-base
type: concept
title: Number Base
canonicalName: number base
englishName: Number Base
aliases:
- value: base numérica
  kind: translation
  language: es
- value: radix
  kind: alternate
  language: en
summary: Cantidad de símbolos distintos y regla posicional utilizada por un numeral system para representar valores.
definition: Una number base o radix determina cuántos dígitos básicos utiliza un positional numeral system y qué peso corresponde a cada posición. En base `b`, las posiciones representan potencias de `b`.
purpose: Explicar cómo una misma cantidad puede escribirse mediante representaciones diferentes y cómo interpretar cada posición de un numeral.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-informacion-representacion
prerequisites:
- entity-discrete-mathematics
related:
- entity-binary-number-system
- entity-hexadecimal-number-system
examples:
- title: Mismo valor en bases distintas
  explanation: El valor decimal 15 puede escribirse como `1111` en base 2 y como `F` en base 16.
limitations:
- La base define la representación, no modifica el valor matemático representado.
- La presencia de los mismos símbolos no basta para identificar una base; debe conocerse la convención o notación.
sources:
- source-mit-ocw-computation-structures-2017
- source-mit-ocw-mathematics-for-computer-science-2015
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-044-expansion-wave-01-02
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Number Base

## Qué es

Una **number base**, también llamada **radix**, define el conjunto de dígitos disponibles y el peso de cada posición en un numeral system. En base `b`, una posición representa una potencia de `b`.

## Cómo encaja

El sistema decimal utiliza base 10 y los dígitos `0` a `9`; binary utiliza base 2 y los dígitos `0` y `1`; hexadecimal utiliza base 16 y normalmente los símbolos `0` a `9` y `A` a `F`. La posición determina cuánto aporta cada dígito al valor total.

## Ejemplo

El numeral `101` en base 2 representa `1×2² + 0×2¹ + 1×2⁰`, equivalente al valor decimal 5. La misma cadena `101` interpretada en base 10 representa ciento uno, por lo que la base forma parte indispensable de la interpretación.

## Distinción clave

La number base no cambia la cantidad matemática; cambia su escritura. El valor decimal 15, el binary `1111` y el hexadecimal `F` representan la misma cantidad. Tampoco debe confundirse la base con el tamaño de almacenamiento: un número escrito en base 16 puede almacenarse como bits y ocupar diferentes cantidades de bytes según su tipo.
