---
id: entity-regular-expression-theory
type: model
title: Regular Expression Theory
canonicalName: regular expression theory
englishName: Regular Expression Theory
aliases:
- value: teoría de expresiones regulares
  kind: translation
  language: es
- value: regular expressions
  kind: common
  language: en
- value: regex theory
  kind: common
  language: en
summary: Modelo algebraico para describir regular languages mediante símbolos y operaciones como unión, concatenación y repetición.
definition: Regular expression theory estudia expresiones formales construidas a partir de símbolos, lenguaje vacío y operaciones regulares. Cada expresión denota un regular language y posee el mismo poder descriptivo que un finite automaton.
purpose: Ofrecer una notación composicional para describir patrones regulares y conectar especificaciones algebraicas con modelos de reconocimiento.
primaryDomain: domain-fundamentos-computacion
subdomains:
- subdomain-teoria-modelos-computacion
prerequisites:
- entity-formal-language
- entity-logica-booleana
represents: Una descripción algebraica de un regular language.
scope: Regular expressions formales, operaciones regulares y equivalencia expresiva con finite automata.
elements:
- símbolos básicos
- unión
- concatenación
- estrella de Kleene
- agrupación
relations:
- targetId: entity-finite-automaton
  relationType: complementary-to
  note: Regular expressions describen los mismos regular languages que finite automata reconocen.
examples:
- title: Cadenas terminadas en `ab`
  explanation: Una expresión formal puede combinar cualquier prefijo sobre `{a,b}` con el sufijo obligatorio `ab`.
limitations:
- Las bibliotecas de regex suelen incluir extensiones que superan la teoría clásica de regular languages.
- La notación describe patrones; no sustituye validación semántica ni parsing contextual completo.
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

# Regular Expression Theory

## Qué es

**Regular Expression Theory** estudia una notación formal para describir **regular languages**. Sus operaciones básicas combinan lenguajes mediante unión, concatenación y repetición, normalmente expresada con la estrella de Kleene.

## Cómo encaja

Las regular expressions formales y los finite automata tienen el mismo poder expresivo: cualquier lenguaje descrito por una expresión regular puede ser reconocido por un finite automaton, y viceversa. Una representación puede resultar más compacta o más adecuada para un tipo de razonamiento.

## Ejemplo

Sobre el alfabeto `{a, b}`, una expresión puede describir todas las cadenas que terminan en `ab`, permitiendo cualquier secuencia previa de `a` y `b`.

## Distinción clave

La teoría clásica no es idéntica a todas las implementaciones llamadas “regex”. Muchas bibliotecas agregan referencias hacia atrás, condiciones u otras extensiones que pueden reconocer patrones fuera de los regular languages. La ficha explica el modelo formal, no la sintaxis de una biblioteca concreta.
