---
id: entity-queue
type: concept
title: Queue
canonicalName: queue
englishName: Queue
aliases:
- value: cola
  kind: translation
  language: es
- value: FIFO
  kind: acronym
  language: en
summary: Estructura o abstract data type donde el elemento agregado primero es el primero que puede retirarse.
definition: Una Queue agrega elementos en el tail mediante enqueue y los retira desde el head mediante dequeue. El orden resultante es first-in, first-out.
purpose: Organizar trabajo, solicitudes o mensajes que deben procesarse de acuerdo con su orden de llegada.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-stack
- entity-deque
- entity-array
- entity-linked-list
examples:
- title: Trabajos de impresión
  explanation: Los documentos pueden agregarse al final y procesarse desde el frente en el mismo orden en que fueron recibidos.
limitations:
- FIFO no garantiza por sí mismo equidad, tiempo máximo de espera ni prioridad.
- Una Queue puede ser bounded y rechazar nuevos elementos cuando alcanza su capacidad.
- Queue describe operaciones y orden, no una implementación obligatoria.
sources:
- source-nist-dads
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
batch: batch-045-expansion-wave-01-03
createdAt: '2026-07-27'
reviewedAt: '2026-07-27'
verificationStatus: verified
deprecated: false
contractVersion: '1.0'
---

# Queue

## Qué es

Una **Queue** (cola) aplica el orden **first-in, first-out** o **FIFO**. Los elementos se agregan en el tail con `enqueue` y se retiran desde el head con `dequeue`.

## Cómo encaja

Queues se utilizan para trabajos pendientes, buffers, mensajes y solicitudes. Pueden implementarse con Linked Lists, circular arrays u otras estructuras que mantengan el orden definido.

## Ejemplo

En una cola de impresión, el primer documento recibido normalmente se procesa antes que los documentos agregados después.

## Distinción clave

Queue no es sinónimo de cualquier lista de pendientes. Una priority queue selecciona por prioridad y puede alterar el orden de llegada. Tampoco debe confundirse con Stack, que retira primero el elemento más reciente, ni con Deque, que permite operar en ambos extremos.
