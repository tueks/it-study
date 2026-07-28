---
id: entity-graph
type: concept
title: Graph
canonicalName: graph
englishName: Graph
aliases:
- value: grafo
  kind: translation
  language: es
summary: Estructura formada por vertices y edges que representan entidades y relaciones entre ellas.
definition: Un Graph contiene un conjunto de vertices y un conjunto de edges que conectan pares o grupos de vertices. Puede ser directed o undirected, weighted o unweighted, simple o con variantes adicionales.
purpose: Modelar redes, rutas, dependencias, conexiones y estados donde las relaciones no siguen necesariamente una jerarquía.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-graph-theory
- entity-tree
- entity-search-algorithm
examples:
- title: Red de transporte
  explanation: Las estaciones pueden ser vertices y las rutas edges con distancia o tiempo como weight.
limitations:
- Graph no define por sí mismo una representación con adjacency list o matrix.
- Directed, weighted y multigraph cambian las operaciones y supuestos.
- La complejidad depende de la representación y del algoritmo utilizado.
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

# Graph

## Qué es

Un **Graph** representa elementos como **vertices** y relaciones como **edges**. Los edges pueden tener dirección, peso u otras propiedades según el problema.

## Cómo encaja

Graphs modelan redes sociales, carreteras, dependencias, enlaces web, estados y topologías. Se almacenan comúnmente mediante adjacency lists, adjacency matrices u otras representaciones.

## Ejemplo

En una red de transporte, cada estación es un vertex y cada conexión es un edge. Un weight puede indicar distancia, costo o tiempo.

## Distinción clave

Graph es la estructura concreta o abstracta de vertices y edges; **Graph Theory** es el campo matemático que estudia sus propiedades. Un Tree es un tipo restringido de Graph conectado y sin ciclos, pero un Graph general puede contener ciclos y múltiples rutas.
