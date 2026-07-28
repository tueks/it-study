---
id: entity-search-algorithm
type: concept
title: Search Algorithm
canonicalName: search algorithm
englishName: Search Algorithm
aliases:
- value: algoritmo de búsqueda
  kind: translation
  language: es
- value: searching
  kind: common
  language: en
summary: Algoritmo que localiza un objetivo, determina su presencia o encuentra un estado que satisface una condición.
definition: Un Search Algorithm explora una colección, estructura o espacio de estados utilizando información disponible para seleccionar qué elementos examinar y cuándo detenerse.
purpose: Encontrar keys, paths, soluciones o coincidencias con el menor costo compatible con la estructura y los requisitos.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-sorting-algorithm
- entity-binary-search-tree
- entity-hash-table
- entity-trie
- entity-graph
- entity-big-o-notation
examples:
- title: Buscar una key ordenada
  explanation: Binary search compara con el elemento medio y descarta una mitad cuando la colección y el comparator cumplen sus supuestos.
limitations:
- La estrategia adecuada depende de si los datos están ordenados, indexados o representados como Graph o Tree.
- Un resultado no encontrado puede requerir explorar todo el espacio relevante.
- Heuristics pueden acelerar la búsqueda sin garantizar siempre el camino óptimo.
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

# Search Algorithm

## Qué es

Un **Search Algorithm** intenta localizar un objetivo o comprobar si existe dentro de una colección, una estructura o un espacio de estados.

## Cómo encaja

La búsqueda puede ser linear sobre una secuencia, binary sobre datos ordenados, dirigida por keys en un BST o Trie, basada en hashing, o recorrer vertices y edges en un Graph.

## Ejemplo

Binary search compara el objetivo con el elemento central de un Array ordenado. Según el resultado, continúa únicamente en la mitad que todavía puede contenerlo.

## Distinción clave

Search Algorithm no significa solamente buscar texto ni presupone datos ordenados. Cada estrategia depende de invariants y representaciones concretas. Tampoco toda búsqueda devuelve un elemento: algunas deciden existencia, encuentran un path o producen una solución que satisface restricciones.
