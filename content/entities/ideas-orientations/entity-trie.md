---
id: entity-trie
type: concept
title: Trie
canonicalName: trie
englishName: Trie
aliases:
- value: prefix tree
  kind: alternate
  language: en
- value: árbol de prefijos
  kind: translation
  language: es
summary: Tree que organiza keys secuenciales por prefixes compartidos, normalmente un símbolo por edge o nivel.
definition: En un Trie, el camino desde el root representa un prefix y los descendants extienden esa secuencia. Los nodes pueden marcar keys completas y compartir estructura entre keys con prefixes comunes.
purpose: Facilitar búsqueda por prefix, autocompletado, dictionaries y matching de secuencias.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-tree
related:
- entity-search-algorithm
- entity-hash-table
examples:
- title: Autocompletado
  explanation: Las palabras `cat`, `car` y `care` comparten el camino correspondiente al prefix `ca`.
limitations:
- Puede consumir mucha memoria cuando el alphabet o la dispersión de branches es grande.
- La eficiencia depende de la longitud de la key y de la representación de children.
- No es equivalente a un BST ordenado por comparación completa de keys.
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

# Trie

## Qué es

Un **Trie** o **prefix tree** organiza keys como secuencias. Cada paso del root hacia abajo representa un símbolo y cada camino representa un prefix.

## Cómo encaja

Keys que comparten prefix reutilizan los mismos primeros nodes. Esto resulta útil para autocomplete, dictionaries, routing por prefixes y matching de texto.

## Ejemplo

Las palabras `cat`, `car` y `care` comparten los nodes de `c` y `a`. Después se separan según el siguiente carácter.

## Distinción clave

Trie no compara una key completa en cada node como un BST. Su recorrido depende de los símbolos de la key. Tampoco es un Hash Table: el Trie conserva explícitamente la estructura de prefixes y permite enumerar extensiones relacionadas.
