---
id: entity-finite-automaton
type: model
title: Finite Automaton
canonicalName: finite automaton
englishName: Finite Automaton
aliases:
- value: autómata finito
  kind: translation
  language: es
- value: FA
  kind: acronym
  language: en
summary: Automaton con un número finito de estados que reconoce regular languages al procesar una entrada símbolo por símbolo.
definition: Un finite automaton es un modelo de reconocimiento compuesto por un conjunto finito de estados, un alfabeto, transiciones, un estado inicial y estados de aceptación. Su estado actual resume toda la memoria disponible durante el procesamiento.
purpose: Modelar reconocimiento de patrones regulares y razonar sobre sistemas con memoria finita de forma verificable.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-automaton
- entity-formal-language
represents: Un reconocedor con memoria finita expresada únicamente por su estado actual.
scope: Deterministic finite automata, nondeterministic finite automata y lenguajes regulares.
elements:
- estados finitos
- alfabeto
- transiciones
- estado inicial
- estados de aceptación
relations:
- targetId: entity-automaton
  relationType: builds-on
  note: Especializa la familia de automata restringiendo la memoria a un conjunto finito de estados.
- targetId: entity-regular-expression-theory
  relationType: complementary-to
  note: Finite automata y regular expressions describen la misma clase de regular languages desde perspectivas de reconocimiento y descripción.
examples:
- title: Validación de sufijo
  explanation: Puede reconocer cadenas binarias que terminan en `01` conservando solo el estado necesario para recordar el sufijo relevante.
limitations:
- No puede contar de forma no acotada ni reconocer dependencias anidadas generales.
- Su equivalencia con regular expressions se refiere a poder expresivo, no a que ambas representaciones sean idénticas.
sources:
- source-mit-ocw-theory-of-computation-2020
- source-it-study-taxonomy
- source-it-study-content-model
priority: essential
knowledgeLevel: contextual-understanding
stability: stable-foundation
editorialStatus: in-review
owner: IT Study production agent
decisionRefs:
- decision-0024-thousand-entity-expansion
batch: batch-043-expansion-wave-01-01
createdAt: '2026-07-24'
verificationStatus: pending
deprecated: false
contractVersion: '1.0'
---

# Finite Automaton

## Qué es

Un **finite automaton** (autómata finito, FA) es un automaton con un conjunto limitado de estados. Lee una entrada símbolo por símbolo y utiliza el estado actual como toda su memoria.

## Cómo encaja

Los deterministic finite automata (DFA) y nondeterministic finite automata (NFA) difieren en cómo expresan las transiciones, pero reconocen la misma clase de **regular languages**. Las regular expressions ofrecen otra forma equivalente de describir esa clase.

## Ejemplo

Para reconocer cadenas binarias que terminan en `01`, el modelo solo necesita recordar el sufijo relevante observado hasta el momento. No necesita almacenar la cadena completa.

## Distinción clave

“Finite” se refiere al número de estados, no al tamaño de la entrada. El modelo puede procesar cadenas de cualquier longitud, pero no puede mantener una cantidad de memoria que crezca con ellas. Por eso no reconoce dependencias anidadas generales.
