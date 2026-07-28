---
id: entity-big-o-notation
type: concept
title: Big O Notation
canonicalName: big o notation
englishName: Big O Notation
aliases:
- value: notación O grande
  kind: translation
  language: es
- value: Big-O notation
  kind: alternate
  language: en
- value: O(g(n))
  kind: notation
  language: und
summary: Notación asintótica que expresa un límite superior sobre la tasa de crecimiento de una función, ignorando factores constantes y términos menores.
definition: Big O describe que una función no crece asintóticamente más rápido que otra multiplicada por una constante, a partir de un tamaño suficientemente grande.
purpose: Comparar escalabilidad y comunicar límites de tiempo, espacio u otros recursos sin depender de detalles constantes de una implementación.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-discrete-mathematics
related:
- entity-sorting-algorithm
- entity-search-algorithm
examples:
- title: Recorrido lineal
  explanation: Un algoritmo que inspecciona como máximo una cantidad proporcional a n elementos puede describirse con un upper bound O(n).
limitations:
- Big O no indica por sí sola el tiempo exacto ni los factores constantes.
- No significa automáticamente average case ni worst case; el caso analizado debe declararse.
- Un bound correcto puede ser poco ajustado y ocultar diferencias importantes.
sources:
- source-mit-ocw-introduction-to-algorithms-2011
- source-nist-dads
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
batch: batch-046-expansion-wave-01-04
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Big O Notation

## Qué es

**Big O Notation** expresa un límite superior asintótico. Indica cómo puede crecer una función de costo cuando aumenta el tamaño del input, ignorando factores constantes y términos que dejan de dominar.

## Cómo encaja

Se utiliza para comparar algoritmos y estructuras en términos de time complexity, space complexity u otros recursos. Expresiones comunes incluyen `O(1)`, `O(log n)`, `O(n)` y `O(n log n)`.

## Ejemplo

Si un recorrido examina como máximo cada elemento una vez, su número de pasos crece proporcionalmente con `n` y puede describirse mediante `O(n)`.

## Distinción clave

Big O no es una medición en segundos ni una promesa de rendimiento real. Tampoco significa necesariamente worst case: puede describir cualquier función o caso que se haya definido. Además, `O(n²)` también es un bound válido pero poco preciso para una función lineal; por eso importa distinguir bound correcto de bound ajustado.
