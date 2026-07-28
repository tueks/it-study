---
id: entity-sorting-algorithm
type: concept
title: Sorting Algorithm
canonicalName: sorting algorithm
englishName: Sorting Algorithm
aliases:
- value: algoritmo de ordenamiento
  kind: translation
  language: es
- value: sorting
  kind: common
  language: en
summary: Algoritmo que reorganiza elementos según una ordering relation definida sobre keys o valores.
definition: Un Sorting Algorithm produce una secuencia ordenada de acuerdo con un comparator o key. Sus propiedades relevantes incluyen complejidad, estabilidad, uso de memoria y comportamiento sobre distintos inputs.
purpose: Preparar datos para búsqueda, presentación, agrupación, deduplicación y otros procesos que dependen de un orden consistente.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-search-algorithm
- entity-big-o-notation
- entity-array
- entity-heap
examples:
- title: Ordenar registros por fecha
  explanation: El algoritmo compara la key de fecha y reorganiza los registros de menor a mayor.
limitations:
- No existe un algoritmo universalmente mejor para todos los inputs y restricciones.
- Estabilidad, memory usage y worst-case behavior pueden ser tan importantes como el tiempo promedio.
- El orden requiere una relación de comparación o key suficientemente definida.
sources:
- source-nist-dads
- source-mit-ocw-introduction-to-algorithms-2011
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

# Sorting Algorithm

## Qué es

Un **Sorting Algorithm** reorganiza elementos conforme a una regla de orden, por ejemplo una key numérica, una fecha o un comparator definido por la aplicación.

## Cómo encaja

Ordenar puede facilitar búsqueda, visualización, combinación y procesamiento posterior. Algoritmos como insertion sort, merge sort, quicksort y heapsort ofrecen distintos intercambios entre tiempo, memoria y estabilidad.

## Ejemplo

Una lista de pedidos puede ordenarse por fecha y, cuando dos fechas son iguales, conservar su orden anterior si el algoritmo es stable.

## Distinción clave

Sorting Algorithm no es una única técnica ni garantiza siempre `O(n log n)`. La complejidad depende del algoritmo, el input y el modelo de comparación. Tampoco debe confundirse con Search Algorithm: ordenar reorganiza; buscar intenta localizar o decidir la presencia de un objetivo.
