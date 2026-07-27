---
id: entity-stack
type: concept
title: Stack
canonicalName: stack
englishName: Stack
aliases:
- value: pila
  kind: translation
  language: es
- value: LIFO
  kind: acronym
  language: en
summary: Estructura o abstract data type donde el último elemento agregado es el primero que puede retirarse.
definition: Un Stack restringe el acceso a un extremo llamado top. Sus operaciones principales son push para agregar, pop para retirar y peek o top para consultar sin eliminar.
purpose: Representar trabajo anidado, historial reversible y procesamiento donde el orden requerido es last-in, first-out.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-array
- entity-linked-list
- entity-queue
- entity-deque
examples:
- title: Evaluación de llamadas
  explanation: Cada llamada activa puede agregarse al Stack y la llamada más reciente debe terminar antes de continuar con la anterior.
limitations:
- No ofrece acceso general a elementos intermedios sin retirar los superiores o usar operaciones fuera del contrato.
- Stack describe comportamiento; no obliga a utilizar una implementación concreta con Array o Linked List.
sources:
- source-nist-dads
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
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Stack

## Qué es

Un **Stack** (pila) aplica el orden **last-in, first-out** o **LIFO**: el último elemento agregado es el primero disponible para retirarse. Las operaciones habituales son `push`, `pop` y `peek`.

## Cómo encaja

Stacks aparecen en call stacks, undo, parsing, navegación y algoritmos de recorrido. Pueden implementarse mediante un Array, dynamic array o Linked List, siempre que conserven el mismo contrato de acceso.

## Ejemplo

Cuando una función llama a otra, el contexto más reciente se coloca encima. Al terminar, se retira primero ese contexto y se reanuda el anterior.

## Distinción clave

Stack es una abstracción de orden, no una región de memoria específica ni una implementación obligatoria. Tampoco debe confundirse con Queue: Stack retira el elemento más reciente; Queue retira el más antiguo.
