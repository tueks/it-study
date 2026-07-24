---
id: entity-pushdown-automaton
type: model
title: Pushdown Automaton
canonicalName: pushdown automaton
englishName: Pushdown Automaton
aliases:
- value: autómata de pila
  kind: translation
  language: es
- value: PDA
  kind: acronym
  language: en
summary: Automaton que combina control finito con una pila y reconoce la clase de context-free languages.
definition: Un pushdown automaton es un modelo que extiende un finite control con una pila cuyos elementos pueden agregarse o retirarse durante el procesamiento. Esa memoria permite representar dependencias anidadas que un finite automaton no puede conservar.
purpose: Modelar el reconocimiento de context-free languages y conectar descripciones gramaticales con mecanismos abstractos de procesamiento.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-automaton
- entity-formal-language
- entity-finite-automaton
represents: Un reconocedor con control finito y memoria de pila.
scope: Pushdown automata, comportamiento de pila y reconocimiento de context-free languages.
elements:
- estados finitos
- alfabeto de entrada
- alfabeto de pila
- transiciones
- símbolo inicial de pila
- criterio de aceptación
relations:
- targetId: entity-automaton
  relationType: builds-on
  note: Añade una pila al control finito para ampliar la memoria disponible.
- targetId: entity-context-free-grammar
  relationType: complementary-to
  note: Pushdown automata reconocen la misma clase de lenguajes que context-free grammars generan.
examples:
- title: Paréntesis balanceados
  explanation: El modelo puede apilar una marca por cada apertura y retirarla al encontrar el cierre correspondiente.
limitations:
- Una pila ofrece memoria estructurada, pero no equivale a la memoria general de una máquina de Turing.
- La equivalencia con context-free grammars es de poder expresivo sobre lenguajes, no de representación idéntica.
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

# Pushdown Automaton

## Qué es

Un **pushdown automaton** (autómata de pila, PDA) combina un control finito con una pila. Puede consultar y modificar el elemento superior de esa pila mientras procesa la entrada.

## Cómo encaja

La pila permite recordar una cantidad no acotada de información con disciplina *last in, first out*. Gracias a ella, el modelo reconoce **context-free languages**, la misma clase que generan las context-free grammars.

## Ejemplo

Para reconocer paréntesis balanceados, el automaton puede apilar una marca por cada paréntesis de apertura y retirarla al encontrar el cierre correspondiente. La cadena se acepta cuando el orden es válido y la pila termina en la condición esperada.

## Distinción clave

Un PDA es más expresivo que un finite automaton, pero menos general que una máquina de Turing. La pila permite manejar anidamiento, aunque no proporciona acceso arbitrario a toda la memoria almacenada.
