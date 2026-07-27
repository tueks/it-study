---
id: entity-array
type: concept
title: Array
canonicalName: array
englishName: Array
aliases:
- value: arreglo
  kind: translation
  language: es
- value: matriz unidimensional
  kind: contextual
  language: es
summary: Estructura indexada que almacena una secuencia de elementos y permite acceder a una posición mediante un índice entero.
definition: Un Array organiza elementos en posiciones numeradas. En implementaciones comunes ocupa una región contigua y tiene tamaño fijo, aunque lenguajes y bibliotecas pueden exponer dynamic arrays que administran capacidad y redimensionamiento.
purpose: Proporcionar acceso directo por índice y una organización compacta adecuada para recorridos, tablas y colecciones de tamaño conocido.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-algoritmos-estructuras-datos
related:
- entity-linked-list
- entity-stack
- entity-queue
- entity-deque
examples:
- title: Temperaturas por día
  explanation: Un Array puede almacenar siete valores y acceder al tercer día mediante su índice sin recorrer las posiciones anteriores.
limitations:
- Insertar o eliminar en posiciones intermedias puede requerir desplazar elementos.
- El tamaño fijo de un array básico no debe confundirse con el comportamiento de un dynamic array.
- Los límites y el índice inicial dependen del lenguaje o contrato utilizado.
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

# Array

## Qué es

Un **Array** es una secuencia de posiciones identificadas mediante índices enteros. Cada posición almacena un elemento y puede consultarse o modificarse utilizando su índice.

## Cómo encaja

En implementaciones comunes, los elementos se guardan de manera contigua, lo que favorece acceso directo y recorridos eficientes. Algunos lenguajes presentan dynamic arrays que parecen crecer, pero internamente administran capacidad y pueden copiar los elementos a una región mayor.

## Ejemplo

Un Array con temperaturas de siete días permite consultar la posición correspondiente al miércoles sin recorrer lunes y martes, siempre que se conozca el índice.

## Distinción clave

Array no es sinónimo de **Linked List**. El Array se organiza por posiciones indexadas; la linked list conecta nodes mediante links. Tampoco todo objeto llamado array tiene tamaño fijo visible para el usuario: una biblioteca puede ofrecer redimensionamiento, aunque la representación subyacente mantenga bloques de capacidad.
