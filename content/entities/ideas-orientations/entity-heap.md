---
id: entity-heap
type: concept
title: Heap
canonicalName: heap
englishName: Heap
aliases:
- value: montículo
  kind: translation
  language: es
- value: binary heap
  kind: alternate
  language: en
summary: Estructura de prioridad que mantiene una relación de orden entre cada parent y sus children, frecuentemente sobre un complete binary tree.
definition: En un min-heap cada parent no es mayor que sus children; en un max-heap no es menor. Un binary heap suele conservar además una forma complete y representarse en un Array.
purpose: Obtener y actualizar eficientemente el elemento de mayor o menor prioridad y servir como base para priority queues y heapsort.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-binary-tree
related:
- entity-array
- entity-sorting-algorithm
- entity-binary-search-tree
examples:
- title: Siguiente trabajo prioritario
  explanation: Un min-heap mantiene en el root el elemento con la key mínima para retirarlo antes que los demás.
limitations:
- La propiedad heap no ordena completamente todos los elementos.
- Buscar una key arbitraria puede seguir siendo lineal.
- Heap también nombra una región de memoria en otros contextos; esa acepción es distinta.
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

# Heap

## Qué es

Un **Heap** es una estructura orientada a prioridad. En un **min-heap**, la key de cada parent es menor o igual que la de sus children; en un **max-heap**, ocurre lo contrario.

## Cómo encaja

Los binary heaps suelen usar un complete binary tree almacenado en un Array. Así pueden acceder al elemento prioritario en el root y restaurar la propiedad heap después de insertar o retirar.

## Ejemplo

Una scheduler queue puede conservar el trabajo con menor valor de prioridad en el root. Al retirarlo, mueve otro elemento y aplica operaciones de ajuste para restaurar la propiedad.

## Distinción clave

Heap no mantiene un orden total como un sorted array ni la regla de búsqueda de un BST. Solo garantiza la relación local parent-child necesaria para localizar rápidamente el extremo prioritario. Tampoco debe confundirse con el heap de memoria administrada por un runtime.
