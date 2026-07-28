---
id: entity-tree
type: concept
title: Tree
canonicalName: tree
englishName: Tree
aliases:
- value: árbol
  kind: translation
  language: es
summary: Estructura jerárquica compuesta por nodes conectados mediante relaciones parent-child y sin ciclos cuando se considera como árbol enraizado.
definition: Un Tree organiza elementos en niveles. En un rooted tree existe un root, cada node distinto del root tiene un único parent y puede tener cero o más children.
purpose: Representar jerarquías, dependencias, índices, expresiones y decisiones donde los elementos se organizan por niveles o descendencia.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-binary-tree
- entity-graph
- entity-trie
examples:
- title: Sistema de archivos
  explanation: Un directorio puede ser parent de archivos y subdirectorios, formando una jerarquía que comienza en un root.
limitations:
- Tree no implica orden entre siblings ni número fijo de children.
- Un árbol abstracto no obliga a una representación concreta con pointers o arrays.
- La definición cambia ligeramente entre árboles rooted, unrooted, ordered y unordered.
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

# Tree

## Qué es

Un **Tree** es una estructura jerárquica formada por **nodes**. En un rooted tree, un node inicial actúa como **root**; los demás tienen un parent y pueden tener children.

## Cómo encaja

Trees aparecen en sistemas de archivos, índices, syntax trees, interfaces, organizaciones y algoritmos. Permiten describir descendencia y recorrer una jerarquía por niveles o ramas.

## Ejemplo

En un sistema de archivos, el directorio raíz contiene carpetas; cada carpeta puede contener otras carpetas o archivos. Cada elemento ocupa una posición dentro de la jerarquía.

## Distinción clave

Tree es un caso estructurado de **Graph**, pero no todo Graph es Tree. Un Tree conectado no contiene ciclos y establece una relación jerárquica. Tampoco es sinónimo de Binary Tree: un Tree general puede tener cualquier número de children por node.
