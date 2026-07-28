---
id: entity-binary-search-tree
type: concept
title: Binary Search Tree
canonicalName: binary search tree
englishName: Binary Search Tree
aliases:
- value: BST
  kind: acronym
  language: en
- value: árbol binario de búsqueda
  kind: translation
  language: es
summary: Binary Tree que mantiene una regla de orden para facilitar búsquedas, inserciones y eliminaciones por key.
definition: En un Binary Search Tree, las keys del left subtree se comparan como menores y las del right subtree como mayores, según la política de orden y manejo de duplicados definida.
purpose: Mantener un conjunto ordenado o dictionary con operaciones que aprovechan la estructura jerárquica de comparación.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-binary-tree
related:
- entity-search-algorithm
- entity-sorting-algorithm
examples:
- title: Buscar una key
  explanation: Cada comparación permite continuar por el left o right subtree y descartar la otra rama.
limitations:
- Sin balance, la altura puede crecer linealmente y degradar las operaciones.
- La política para duplicate keys debe definirse explícitamente.
- La complejidad depende de la altura, no solo del número de nodes.
sources:
- source-nist-dads
- source-mit-ocw-introduction-to-algorithms-2011
- source-acm-ieee-cc2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
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

# Binary Search Tree

## Qué es

Un **Binary Search Tree** o **BST** es un Binary Tree que organiza keys mediante una regla de comparación. Los valores menores se buscan hacia un lado y los mayores hacia el otro.

## Cómo encaja

La regla permite buscar, insertar y eliminar siguiendo una sola rama en cada comparación. Cuando la altura se mantiene pequeña, las operaciones requieren menos pasos que un recorrido lineal.

## Ejemplo

Para buscar `42`, se compara con el root. Si es menor, se continúa por el left subtree; si es mayor, por el right subtree, hasta encontrar la key o una posición vacía.

## Distinción clave

BST no significa automáticamente balanced. Un orden de inserción desfavorable puede producir una cadena con comportamiento lineal. Tampoco es un Heap: el BST organiza todo el árbol para búsqueda por key; el Heap solo garantiza una relación de prioridad entre parent y children.
