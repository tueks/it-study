---
id: entity-deque
type: concept
title: Deque
canonicalName: deque
englishName: Double-Ended Queue
aliases:
- value: double-ended queue
  kind: expansion
  language: en
- value: cola de doble extremo
  kind: translation
  language: es
summary: Estructura que permite agregar y retirar elementos tanto en el frente como en el final.
definition: Un Deque extiende el contrato de Queue con operaciones en ambos extremos. Puede comportarse como Queue, Stack o una combinación, según qué operaciones se utilicen.
purpose: Mantener secuencias donde el trabajo debe entrar o salir por cualquiera de los dos extremos sin permitir acceso arbitrario a todas las posiciones.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-queue
- entity-stack
- entity-array
- entity-linked-list
examples:
- title: Ventana de elementos recientes
  explanation: Un proceso puede agregar nuevos elementos al final y retirar los más antiguos del frente, pero también insertar al frente cuando una operación debe adelantarse.
limitations:
- No es una priority queue; operar en ambos extremos no implica ordenar por importancia.
- El acceso eficiente a posiciones intermedias no forma parte del contrato básico.
- Los nombres exactos de operaciones varían entre bibliotecas.
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

# Deque

## Qué es

Un **Deque**, abreviatura de **double-ended queue**, permite insertar y retirar elementos tanto en el frente como en el final. Su nombre suele pronunciarse como “deck”.

## Cómo encaja

Si se agrega por un extremo y se retira por el otro, puede funcionar como Queue. Si se agrega y retira por el mismo extremo, puede funcionar como Stack. Implementaciones comunes usan circular arrays o doubly linked lists.

## Ejemplo

Una ventana de eventos puede agregar nuevos elementos al final y eliminar los más antiguos del frente. Si un evento urgente debe procesarse antes, una política podría insertarlo al frente.

## Distinción clave

Deque no significa que cualquier elemento interno sea accesible eficientemente. Su contrato se concentra en dos extremos. Tampoco equivale a priority queue: una priority queue decide por prioridad; un Deque decide por el extremo utilizado.
