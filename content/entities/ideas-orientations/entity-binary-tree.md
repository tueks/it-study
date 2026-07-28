---
id: entity-binary-tree
type: concept
title: Binary Tree
canonicalName: binary tree
englishName: Binary Tree
aliases:
- value: árbol binario
  kind: translation
  language: es
summary: Tree donde cada node tiene como máximo dos children diferenciados normalmente como left y right.
definition: Un Binary Tree restringe cada node a cero, uno o dos children. La posición left o right forma parte de la estructura, incluso cuando solo existe un child.
purpose: Representar jerarquías binarias y servir como base para search trees, heaps, expression trees y algoritmos recursivos.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-tree
related:
- entity-binary-search-tree
- entity-heap
examples:
- title: Árbol de expresión
  explanation: Un operador binario puede tener el operando izquierdo y el derecho como sus dos children.
limitations:
- Binary no significa balanced, complete ni ordered.
- Tener dos posiciones posibles no obliga a que ambas estén ocupadas.
- La forma del árbol puede degradar el rendimiento de estructuras derivadas.
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

# Binary Tree

## Qué es

Un **Binary Tree** es un Tree donde cada node puede tener como máximo dos children, normalmente llamados **left child** y **right child**.

## Cómo encaja

La distinción entre izquierda y derecha permite representar expresiones, decisiones binarias y estructuras especializadas. Binary Search Trees y binary heaps añaden reglas adicionales sobre esa forma básica.

## Ejemplo

En un expression tree, un node `+` puede tener una expresión a la izquierda y otra a la derecha. El orden de ambos children afecta el significado.

## Distinción clave

Binary Tree describe la cantidad y posición de children, no el orden de los valores. Un Binary Search Tree añade una regla de búsqueda; un Heap añade una relación de prioridad y normalmente una restricción de forma.
