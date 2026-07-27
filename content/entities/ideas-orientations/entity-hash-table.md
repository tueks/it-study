---
id: entity-hash-table
type: concept
title: Hash Table
canonicalName: hash table
englishName: Hash Table
aliases:
- value: tabla hash
  kind: translation
  language: es
- value: hash map
  kind: alternate
  language: en
summary: Estructura que implementa asociaciones entre keys y values utilizando una hash function para seleccionar posiciones o buckets.
definition: Una Hash Table transforma cada key mediante una hash function y usa el resultado para localizar un bucket o slot. Como keys diferentes pueden producir la misma ubicación, necesita una estrategia de collision resolution.
purpose: Proporcionar inserción, búsqueda y eliminación eficientes en promedio para dictionaries y sets cuando existe una hash function adecuada.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
prerequisites:
- entity-array
related:
- entity-linked-list
examples:
- title: Índice de usuarios
  explanation: El identificador de usuario puede convertirse en un bucket y después compararse con las keys almacenadas para localizar el registro asociado.
limitations:
- El acceso constante es una expectativa promedio, no una garantía para todos los inputs o estados de carga.
- Collisions requieren chaining, open addressing u otra estrategia.
- Una hash function no reemplaza la comparación de igualdad de keys.
- El orden de iteración puede no estar definido o ser inestable.
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

# Hash Table

## Qué es

Una **Hash Table** implementa asociaciones entre **keys** y **values**. Una **hash function** convierte la key en un valor utilizado para elegir un bucket o una posición de almacenamiento.

## Cómo encaja

Como dos keys pueden producir la misma ubicación, la estructura necesita resolver **collisions**. Separate chaining conserva varios elementos en un bucket; open addressing busca otra posición dentro de la tabla. El load factor influye en el rendimiento y puede motivar un resize.

## Ejemplo

Para buscar un usuario por identificador, la aplicación calcula su hash, localiza el bucket correspondiente y compara la key con los elementos presentes hasta encontrar la asociación correcta.

## Distinción clave

Hash Table no es lo mismo que hash function. La función produce un valor; la tabla organiza elementos y resuelve collisions. Tampoco garantiza `O(1)` en todos los casos: ese comportamiento suele ser promedio y depende de la distribución, la carga y la estrategia. Una collision no significa que las keys sean iguales.
