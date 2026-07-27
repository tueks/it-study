---
id: entity-linked-list
type: concept
title: Linked List
canonicalName: linked list
englishName: Linked List
aliases:
- value: lista enlazada
  kind: translation
  language: es
- value: singly linked list
  kind: alternate
  language: en
summary: Estructura secuencial compuesta por nodes que almacenan elementos y links hacia otros nodes.
definition: Una Linked List organiza datos como una cadena de nodes. Cada node contiene un elemento y al menos un link al siguiente; variantes doubly linked añaden un link al anterior.
purpose: Mantener una secuencia que pueda crecer o cambiar mediante actualización de links sin requerir un bloque contiguo ni desplazar todos los elementos posteriores.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-array
- entity-stack
- entity-queue
- entity-deque
examples:
- title: Lista de reproducción editable
  explanation: Insertar una canción entre dos nodes puede realizarse actualizando los links cercanos sin mover físicamente todos los elementos posteriores.
limitations:
- Acceder a una posición normalmente exige recorrer nodes desde un punto conocido.
- Cada node requiere espacio adicional para sus links.
- El costo real depende de si ya se dispone de una referencia al node que debe modificarse.
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

# Linked List

## Qué es

Una **Linked List** (lista enlazada) es una secuencia de **nodes** conectados mediante **links**. Cada node guarda un elemento y una referencia al siguiente; una doubly linked list también conserva la referencia al anterior.

## Cómo encaja

La estructura permite insertar o retirar nodes cambiando links cercanos, sin necesitar que todos los elementos estén contiguos. Por ello puede servir como implementación de Stack, Queue, Deque y otras colecciones.

## Ejemplo

Para insertar una canción entre dos elementos de una lista, un nuevo node puede apuntar al siguiente y el node anterior puede actualizar su link para apuntar al nuevo elemento.

## Distinción clave

Linked List no proporciona acceso directo por índice como un **Array**. Solicitar la posición cien normalmente requiere recorrer las anteriores. Además, decir que una eliminación es constante solo es correcto cuando ya se dispone de las referencias necesarias; encontrar el node puede requerir una búsqueda lineal.
